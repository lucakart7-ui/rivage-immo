import { MetadataRoute } from 'next'
import { getBiensSlugs } from '@/lib/sanity'

const BASE_URL = 'https://www.rivage-immobilier.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getBiensSlugs().catch(() => [])

  const bienUrls: MetadataRoute.Sitemap = slugs.map((s: any) => ({
    url: `${BASE_URL}/bien/${s.slug}`,
    lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const STATIC_DATE = new Date('2026-04-26')

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/estimation-immobiliere-hyeres`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/biens`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/biens/hyeres`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/biens/carqueiranne`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/biens/bormes`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/biens/la-londe`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...bienUrls,
    {
      url: `${BASE_URL}/honoraires`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agence`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: STATIC_DATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
