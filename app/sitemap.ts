import { MetadataRoute } from 'next'
import { getBiensSlugs } from '@/lib/sanity'

const BASE_URL = 'https://www.rivage-immobilier.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getBiensSlugs().catch(() => [])

  const bienUrls: MetadataRoute.Sitemap = slugs.map((s: any) => ({
    url: `${BASE_URL}/bien/${s.slug}`,
    lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
  }))

  const communeUrls: MetadataRoute.Sitemap = ['hyeres', 'carqueiranne', 'la-londe', 'bormes'].map(
    (commune) => ({
      url: `${BASE_URL}/biens/${commune}`,
      lastModified: new Date(),
    })
  )

  const STATIC_DATE = new Date('2026-04-17')

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/biens`, lastModified: new Date() },
    ...communeUrls,
    ...bienUrls,
    { url: `${BASE_URL}/estimation-immobiliere-hyeres`, lastModified: STATIC_DATE },
    { url: `${BASE_URL}/agence`, lastModified: STATIC_DATE },
    { url: `${BASE_URL}/contact`, lastModified: STATIC_DATE },
    { url: `${BASE_URL}/faq`, lastModified: STATIC_DATE },
    { url: `${BASE_URL}/honoraires`, lastModified: STATIC_DATE },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: STATIC_DATE },
  ]
}
