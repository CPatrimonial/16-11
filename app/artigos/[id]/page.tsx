import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Lista temporária de artigos
const artigos = [
  { id: '1', titulo: 'Artigo 1', conteudo: 'Conteúdo em breve' },
  { id: '2', titulo: 'Artigo 2', conteudo: 'Conteúdo em breve' },
];

// Tipos corretos para Next.js 13+
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = artigos.find(a => a.id === params.id);
  
  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${artigo.titulo} | Crédito Patrimonial`,
    description: 'Artigo sobre crédito com garantia de imóvel',
  };
}

export async function generateStaticParams() {
  return artigos.map(artigo => ({
    id: artigo.id,
  }));
}

export default function ArtigoPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="container mx-auto py-8 px-4">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Artigo {params.id}</h1>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600">Conteúdo em desenvolvimento</p>
          <p className="text-sm text-gray-500 mt-4">
            Em breve, mais conteúdo estará disponível.
          </p>
        </div>
      </article>
    </div>
  );
}