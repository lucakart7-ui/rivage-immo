import { MetadataRoute } from 'next'
import { getBiensSlugs } from '@/lib/sanity'

const BASE_URL = 'https://www.rivage-immobilier.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getBiensSlugs().catch(() => [])

  const bienUrls: MetadataRoute.Sitemap = slugs.map((s: any) => ({
    url: `${BASE_URL}/bien/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }))

  const communeUrls: MetadataRoute.Sitemap = ['hyeres', 'carqueiranne', 'la-londe', 'bormes'].map(
    (commune) => ({
      url: `${BASE_URL}/biens/${commune}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  )

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/biens`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...communeUrls,
    ...bienUrls,
    {
      url: `${BASE_URL}/estimation-immobiliere-hyeres`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
