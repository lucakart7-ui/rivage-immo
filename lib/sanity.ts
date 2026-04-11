import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4j9rbuy3'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getBiens(commune?: string) {
  const filter = commune
    ? `*[_type == "bien" && status == "disponible" && commune == $commune]`
    : `*[_type == "bien" && status == "disponible"]`

  const params = commune ? { commune } : {}

  return client.fetch(
    `${filter} | order(featured desc, ordre_affichage asc) {
      _id, title, slug, status, type, commune, prix, surface, pieces, chambres,
      exclusivite, featured, ordre_affichage,
      photos[0..2]{ asset, alt }
    }`,
    params,
    { next: { revalidate: 3600 } }
  )
}

export async function getBienBySlug(slug: string) {
  return client.fetch(
    `*[_type == "bien" && slug.current == $slug][0] {
      _id, title, slug, status, type, commune, prix, surface, pieces, chambres,
      description_fr, description_en, featured,
      photos[]{ asset, alt },
      meta_title, meta_description
    }`,
    { slug },
    { next: { revalidate: 3600 } }
  )
}

export async function getBiensSlugs() {
  return client.fetch(
    `*[_type == "bien" && status == "disponible"]{ "slug": slug.current }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getFeaturedBiens() {
  return client.fetch(
    `*[_type == "bien" && status == "disponible" && featured == true] | order(ordre_affichage asc) [0..5] {
      _id, title, slug, status, type, commune, prix, surface, pieces, chambres,
      exclusivite, photos[0..0]{ asset, alt }
    }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getEquipe() {
  return client.fetch(
    `*[_type == "equipe"] | order(ordre asc) {
      _id, nom, role, bio_fr,
      photo{ asset, alt }
    }`,
    {},
    { next: { revalidate: 86400 } }
  )
}
