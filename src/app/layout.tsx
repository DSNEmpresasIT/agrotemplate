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
require('dotenv').config();

export const metadata: Metadata = {
  title: 'Felix Menendez S.R.L - Soluciones Agropecuarias',
  description: 'Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico en insumos agropecuarios químicos.',
  keywords: ['Felix Menendez', 'insumos agropecuarios', 'Concordia', 'químicos para el campo', 'campo', 'Entre Ríos', 'químicos', 'agroquímicos', 'Fertilizantes', 'Semillas', 'Protección de cultivos', 'insumos agrícolas'],
  openGraph: {
    title: 'Felix Menendez S.R.L - Soluciones Agropecuarias',
    description: 'Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico en insumos agropecuarios químicos.',
    type: 'website',
    url: 'https://felixmenendez.com.ar',
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
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Insumos Agropecuarios",
          "description": "Explora nuestras categorías de insumos agropecuarios para maximizar la productividad de tus cultivos.",
          "url": "https://felixmenendez.com.ar/productos-felix-menendez",
          "image": "https://felixmenendez.com.ar/assets/images/insumos-agricolas.jpg",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Semillas",
                "url": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Semillas",
                "description": "Explora nuestra selección de semillas de alta calidad para diferentes cultivos.",
                "image": "https://felixmenendez.com.ar/assets/images/semillas.jpg"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Fertilizantes",
                "url": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Fertilizantes",
                "description": "Descubre nuestra amplia gama de fertilizantes para mejorar la productividad de tus cultivos.",
                "image": "https://felixmenendez.com.ar/assets/images/fertilizantes.jpg"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Protección de cultivo",
                "url": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Protección+de+cultivo",
                "description": "Encuentra productos para la protección de cultivos y maximiza tu rendimiento.",
                "image": "https://felixmenendez.com.ar/assets/images/proteccion-cultivo.jpg"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Más insumos agrícolas",
                "url": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Mas+insumos+agr%C3%ADcolas",
                "description": "Descubre otros insumos agrícolas que pueden ayudarte a mejorar tu producción.",
                "image": "https://felixmenendez.com.ar/assets/images/insumos-agricolas.jpg"
              }
            ]
          }
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
