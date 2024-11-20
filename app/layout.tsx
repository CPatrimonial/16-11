import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crédito Patrimonial | Especialista em Crédito com Garantia de Imóvel',
  description: 'Crédito Patrimonial - Líder em crédito com garantia de imóvel em Ribeirão Preto - SP. Taxas a partir de 0,99% ao mês, aprovação em 24h e atendimento personalizado.',
  keywords: 'crédito com garantia, empréstimo com garantia de imóvel, financiamento imobiliário, crédito patrimonial, home equity, refinanciamento, ribeirão preto',
  authors: [{ name: 'Crédito Patrimonial' }],
  creator: 'Crédito Patrimonial',
  publisher: 'Crédito Patrimonial',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://www.creditopatrimonial.com.br" />
        <meta name="author" content="Crédito Patrimonial" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div suppressHydrationWarning className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow pt-16 md:pt-20">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}