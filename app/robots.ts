import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.rivage-immobilier.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Tous les crawlers classiques
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      // IA crawlers — autorises explicitement
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
