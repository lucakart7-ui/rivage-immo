import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rivage-immobilier.com'),
  title: {
    default: 'Agence Immobilière Hyères | Rivage Immobilier',
    template: '%s | Rivage Immobilier',
  },
  description:
    'Rivage Immobilier, votre expert en immobilier résidentiel à Hyères, Carqueiranne, La Londe et Bormes depuis 30 ans. Estimation gratuite, sans engagement.',
  keywords: [
    'agence immobilière Hyères',
    'agence immobilière Carqueiranne',
    'agence immobilière La Londe les Maures',
    'agence immobilière Bormes les Mimosas',
    'vente maison Hyères',
    'estimation immobilière Hyères',
    'immobilier Côte Varoise',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rivage-immobilier.com',
    siteName: 'Rivage Immobilier',
    title: 'Agence Immobilière Hyères | Rivage Immobilier',
    description:
      'Votre expert en immobilier résidentiel sur la Côte Varoise depuis 30 ans.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://rivage-immobilier.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const agencyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Rivage Immobilier',
  description: 'Agence immobilière résidentielle sur la Côte Varoise depuis 30 ans',
  url: 'https://rivage-immobilier.com',
  telephone: '+33616363487',
  email: 'luca.benattar@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyères',
    addressRegion: 'Var',
    postalCode: '83400',
    addressCountry: 'FR',
  },
  areaServed: ['Hyères', 'Carqueiranne', 'La Londe-les-Maures', 'Bormes-les-Mimosas'],
  foundingDate: '1995',
  knowsLanguage: ['fr', 'en'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyJsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
