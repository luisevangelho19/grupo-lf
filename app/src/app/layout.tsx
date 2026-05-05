import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppLinkTracker from '../components/WhatsAppLinkTracker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grupo LF - Serviços de Manutenção Profissional',
  description:
    'Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais.',
  // Open Graph (social previews)
  openGraph: {
    title: 'Grupo LF - Serviços de Manutenção Profissional',
    description:
      'Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais.',
    url: 'https://servicoslf.com.br',
    type: 'website',
    images: [
      {
        url: 'https://servicoslf.com.br/og-sobre-nos-1200x630.svg',
        width: 1200,
        height: 630,
        alt: 'Grupo LF - Serviços de Manutenção',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo LF - Serviços de Manutenção Profissional',
    description:
      'Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais.',
    images: ['https://servicoslf.com.br/og-sobre-nos-1200x630.svg'],
  },
  alternates: {
    canonical: 'https://servicoslf.com.br',
  },
  keywords: [
    'eletricista',
    'pintor',
    'encanador',
    'manutenção',
    'reparos',
    'Goiânia',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <head>
        {/* Google Consent Mode default - must run before GTM/gtag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default', { 'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied' });`,
          }}
        />

        {/* Google Tag Manager */}
        <script
          // GTM snippet (async) placed as high as possible in the head
          dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5TQKDR7W');` }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Explicit favicon tag so the site uses the supplied public/favicon.png */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true} className="bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TQKDR7W" height="0" width="0" style={{display: 'none', visibility: 'hidden'}} />
        </noscript>
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            {/* Mount the global WhatsApp link tracker (client) */}
            <WhatsAppLinkTracker />

            <main className="pt-14">{children}</main>

            <Footer />
            {/* Global LocalBusiness JSON-LD for SEO */}
            <script
              key="localbusiness-jsonld"
              type="application/ld+json"
              // layout is a server component — injecting structured data here ensures it's on every page
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'LocalBusiness',
                  name: 'Grupo LF',
                  url: 'https://servicoslf.com.br',
                  logo: 'https://servicoslf.com.br/logo.png',
                  image: 'https://servicoslf.com.br/logo.png',
                  description:
                    'Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais.',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'R. Ri 12, 2 - Qd 31 Lt 24 - Residencial Itaipú',
                    addressLocality: 'Goiânia',
                    addressRegion: 'GO',
                    postalCode: '74000-000',
                    addressCountry: 'BR',
                  },
                  telephone: '(62) 99115-7746',
                  email: 'contato@servicoslf.com.br',
                }),
              }}
            />
            {/* Additional Organization schema (helps rich results and listings) */}
            <script
              key="organization-jsonld"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Organization',
                  name: 'Grupo LF',
                  url: 'https://servicoslf.com.br',
                  logo: 'https://servicoslf.com.br/logo.png',
                  image: 'https://servicoslf.com.br/logo.png',
                  description:
                    'Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais.',
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      telephone: '(62) 99115-7746',
                      contactType: 'customer service',
                      areaServed: 'BR',
                      availableLanguage: ['pt-BR'],
                    },
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'R. Ri 12, 2 - Qd 31 Lt 24 - Residencial Itaipú',
                    addressLocality: 'Goiânia',
                    addressRegion: 'GO',
                    postalCode: '74000-000',
                    addressCountry: 'BR',
                  },
                }),
              }}
            />
            {/* Vercel Analytics (lightweight) */}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  )
}

