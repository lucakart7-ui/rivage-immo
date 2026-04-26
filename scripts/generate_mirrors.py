#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_mirrors.py - Genere des markdown mirrors pour chaque page de Rivage Immobilier.

Usage:
    pip install requests beautifulsoup4 markdownify
    python scripts/generate_mirrors.py

Resultat : public/mirrors/{slug}.md pour chaque URL du site.
"""

import os
import re
import sys
import time
import datetime
import xml.etree.ElementTree as ET

try:
    import requests
    from bs4 import BeautifulSoup
    import markdownify
except ImportError:
    print("Dependances manquantes. Lance d'abord :")
    print("  pip install requests beautifulsoup4 markdownify")
    sys.exit(1)

BASE_URL = "https://www.rivage-immobilier.com"
SITEMAP_URL = f"{BASE_URL}/sitemap.xml"
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "mirrors")

# Pages a exclure (pas de contenu utile pour les IA)
EXCLUDED_PATHS = {"studio", "api", "mentions-legales", "politique-confidentialite"}

# Delai entre requetes
REQUEST_DELAY = 1.2


def slug_from_url(url):
    path = url.replace(BASE_URL, "").strip("/")
    if not path:
        return "home"
    return path.replace("/", "-")


def fetch_urls_from_sitemap():
    print(f">> Lecture du sitemap : {SITEMAP_URL}")
    try:
        r = requests.get(SITEMAP_URL, timeout=15)
        r.raise_for_status()
    except Exception as e:
        print(f"   ERREUR lecture sitemap : {e}")
        return []

    tree = ET.fromstring(r.text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text.strip() for loc in tree.findall(".//sm:loc", ns)]
    print(f"   {len(urls)} URLs trouvees dans le sitemap")
    return urls


def fetch_html(url):
    try:
        r = requests.get(url, timeout=20, headers={
            "User-Agent": "Mozilla/5.0 (Markdown Mirror Generator; rivage-immobilier.com)",
            "Accept-Language": "fr-FR,fr;q=0.9",
        })
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"   ERREUR fetch {url} : {e}")
        return None


def extract_meta(soup, field):
    if field == "title":
        tag = soup.find("title")
        return tag.get_text(strip=True) if tag else ""
    if field == "description":
        tag = soup.find("meta", attrs={"name": "description"})
        if tag:
            return tag.get("content", "")
        tag = soup.find("meta", attrs={"property": "og:description"})
        if tag:
            return tag.get("content", "")
    return ""


def strip_junk(soup):
    for tag in soup.find_all(["nav", "footer", "script", "style", "noscript", "header"]):
        tag.decompose()

    for tag in soup.find_all("iframe"):
        tag.decompose()

    for img in soup.find_all("img"):
        alt = img.get("alt", "").strip()
        if alt:
            img.replace_with(f"[Image : {alt}]")
        else:
            img.decompose()

    # Supprime les attributs visuels
    for tag in soup.find_all(True):
        attrs_to_remove = [a for a in tag.attrs if a in ("style", "class", "id") or a.startswith("data-")]
        for a in attrs_to_remove:
            del tag.attrs[a]

    return soup


def html_to_markdown(html_body):
    md = markdownify.markdownify(
        html_body,
        heading_style=markdownify.ATX,
        bullets="-",
        strip=["a"],
        convert_links=False,
    )
    md = re.sub(r"\n{3,}", "\n\n", md)
    md = "\n".join(line if line.strip() else "" for line in md.splitlines())
    return md.strip()


def build_frontmatter(title, description, url):
    now = datetime.datetime.utcnow().strftime("%Y-%m-%d")
    # Echappe les guillemets dans title/description
    title = title.replace('"', "'")
    description = description.replace('"', "'")
    lines = [
        "---",
        f'title: "{title}"',
        f'description: "{description}"',
        f'url: "{url}"',
        f'last_updated: "{now}"',
        f'source: "Rivage Immobilier"',
        "---",
        "",
    ]
    return "\n".join(lines)


def process_page(url):
    path = url.replace(BASE_URL, "").strip("/") or ""

    # Exclusions
    for excl in EXCLUDED_PATHS:
        if path.startswith(excl):
            print(f"   SKIP (exclu) : {url}")
            return False

    print(f"   GET {url}")
    html = fetch_html(url)
    if not html:
        return False

    soup = BeautifulSoup(html, "html.parser")

    title = extract_meta(soup, "title")
    description = extract_meta(soup, "description")

    main = soup.find("main") or soup.find("body") or soup
    main = strip_junk(main)
    md_body = html_to_markdown(str(main))

    if not md_body.strip():
        print(f"      WARN : contenu vide apres nettoyage, ignore.")
        return False

    frontmatter = build_frontmatter(title, description, url)
    final_content = frontmatter + "\n" + md_body + "\n"

    filename = slug_from_url(url) + ".md"
    filepath = os.path.join(OUTPUT_DIR, filename)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(final_content)

    size_kb = len(final_content.encode("utf-8")) / 1024
    print(f"      OK : {filename} ({size_kb:.1f} KB)")
    return True


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"\n>> Generation des markdown mirrors -- {BASE_URL}")
    print(f"   Dossier de sortie : {os.path.abspath(OUTPUT_DIR)}\n")

    urls = fetch_urls_from_sitemap()

    if not urls:
        print("Aucune URL trouvee. Verifiez que le site est accessible.")
        sys.exit(1)

    generated = []
    failed = []

    for i, url in enumerate(urls):
        success = process_page(url)
        if success:
            generated.append(url)
        else:
            failed.append(url)
        if i < len(urls) - 1:
            time.sleep(REQUEST_DELAY)

    print(f"\n{'-' * 50}")
    print(f"OK : {len(generated)} fichiers generes")
    if failed:
        print(f"!! : {len(failed)} pages ignorees ou en erreur :")
        for u in failed:
            print(f"     - {u}")

    # Index des mirrors
    index_path = os.path.join(OUTPUT_DIR, "index.md")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write("# Rivage Immobilier - Markdown Mirrors\n\n")
        f.write(f"Generated: {datetime.datetime.utcnow().strftime('%Y-%m-%d')}\n\n")
        f.write("## Pages disponibles\n\n")
        for url in generated:
            slug = slug_from_url(url)
            mirror_url = f"{BASE_URL}/mirrors/{slug}.md"
            f.write(f"- [{url}]({mirror_url})\n")

    print(f"OK : index.md genere")
    print(f"\nURLs des mirrors (pour llms.txt) :")
    for url in generated:
        slug = slug_from_url(url)
        print(f"   {BASE_URL}/mirrors/{slug}.md")

    return generated


if __name__ == "__main__":
    main()
