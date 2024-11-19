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
  title: 'Crédito com Garantia de Imóvel | Crédito Patrimonial',
  description: 'Crédito Patrimonial - Especialista em crédito com garantia de imóvel em Ribeirão Preto - SP. Oferecemos as melhores taxas e condições para você.',
  keywords: 'crédito, imóvel, financiamento, garantia',
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