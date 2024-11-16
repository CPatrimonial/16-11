import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Tipos
interface Params {
  id: string;
}

interface Props {
  params: Params;
}

// Metadata dinâmica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Artigo ${params.id} | Crédito Patrimonial`,
    description: 'Artigo sobre crédito com garantia de imóvel',
  };
}

// Função para gerar parâmetros estáticos (se necessário)
export async function generateStaticParams() {
  // Retorne um array com os IDs dos artigos que devem ser gerados estaticamente
  return [
    { id: '1' },
    { id: '2' },
    // ... outros IDs
  ];
}

// Componente principal
export default async function ArtigoPage({ params }: Props) {
  // Verificar se o artigo existe
  if (!params.id) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Artigo {params.id}</h1>
      {/* Conteúdo do artigo */}
    </div>
  );
}