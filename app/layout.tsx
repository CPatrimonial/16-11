import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crédito com Garantia de Imóvel | Sua Empresa',
  description: 'Especialistas em viabilizar projetos importantes através do crédito com garantia de imóvel. Taxas a partir de 0,99% ao mês.',
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div suppressHydrationWarning>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}