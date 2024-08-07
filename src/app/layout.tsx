import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FooterComponent from '@/components/common/FooterComponent'
import NavbarComponent from '@/components/common/NavbarComponent'
import { Providers } from './providers'
import { DataContextProvider } from '@/context/catalog-context/CatalogContext'
import { CartProvider } from '@/context/cart-context/cart-context'
import BackToTop from '@/components/common/BackToTop'
import WhatsappComponent from '@/components/common/whatsappComponent'
import Head from 'next/head'
require('dotenv').config();

export const metadata: Metadata = {
  metadataBase: new URL("https://felixmenendez.com.ar/"),
  title: {
    default: 'Felix Menendez S.R.L - Soluciones Agropecuarias',
    template: '%s | Felix Menendez S.R.L '
  },
  description: 'Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico en insumos agropecuarios químicos.',
  keywords: ['Felix Menendez', 'insumos agropecuarios', 'Concordia', 'químicos para el campo', 'campo', 'Entre Ríos', 'químicos', 'agroquímicos', 'Fertilizantes', 'Semillas', 'Protección de cultivos', 'insumos agrícolas'],
  openGraph: {
    title: 'Felix Menendez S.R.L - Soluciones Agropecuarias',
    description: 'Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico en insumos agropecuarios químicos.',
    type: 'website',
    url: 'https://felixmenendez.com.ar/',
    images: 'https://felixmenendez.com.ar/assets/images/carrousel-banner/02.png',
    siteName: 'Felix Menendez S.R.L'
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://felixmenendez.com.ar" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Felix Menendez S.R.L",
          "url": "https://felixmenendez.com.ar",
          "logo": "https://felixmenendez.com.ar/assets/images/logo.png",
          "sameAs": [
            "https://www.facebook.com/solucionesagropecuariasintegrales",
            "https://www.instagram.com/felixmenendezsrl",
          ]
        })}} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={`bg-body`}> 
      <DataContextProvider>
        <Providers>
          <CartProvider>
            <NavbarComponent/>
              {children}
                <WhatsappComponent/>
                <BackToTop/>
            <FooterComponent/>
          </CartProvider>
        </Providers>
      </DataContextProvider>
      </body>
    </html>
  )
}
