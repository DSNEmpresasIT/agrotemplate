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
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soluciones Agropecuarias',
  description: 'Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico en insumos agropecuarios químicos.',
  keywords: [ 'insumos agropecuarios', 'químicos para el campo', 'campo', 'químicos', 'agroquímicos', 'Fertilizantes', 'Semillas', 'Protección de cultivos', 'insumos agrícolas'],
  openGraph: {
    title: ' Soluciones Agropecuarias',
    description: 'Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico en insumos agropecuarios químicos.',
    type: 'website',
    url: 'https://solucionesagropecuarias.com.ar',
    images: '/assets/images/carrousel-banner/02.png',
    siteName: 'Berardo S.R.L'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body className={`${inter.className} bg-body`}> 
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
