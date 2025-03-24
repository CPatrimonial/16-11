import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centro de Conteúdo Patrimonial | Artigos e Guias Especializados',
  description: 'Explore nosso centro de conteúdo especializado em gestão patrimonial, estratégias financeiras e otimização de investimentos. Artigos, guias e análises exclusivas.',
  keywords: 'gestão patrimonial, conteúdo financeiro, estratégias financeiras, investimentos, patrimônio, artigos financeiros, guia patrimonial',
  openGraph: {
    title: 'Centro de Conteúdo Patrimonial | Crédito Patrimonial',
    description: 'Explore nosso centro de conteúdo especializado em gestão patrimonial, estratégias financeiras e otimização de investimentos.',
    type: 'website',
    url: 'https://www.creditopatrimonial.com.br/conteudo-patrimonial',
    images: [
      {
        url: 'https://www.creditopatrimonial.com.br/og-content.jpg',
        width: 1200,
        height: 630,
        alt: 'Centro de Conteúdo Patrimonial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Conteúdo Patrimonial | Crédito Patrimonial',
    description: 'Explore nosso centro de conteúdo especializado em gestão patrimonial e estratégias financeiras.',
    images: ['https://www.creditopatrimonial.com.br/og-content.jpg'],
  },
}
