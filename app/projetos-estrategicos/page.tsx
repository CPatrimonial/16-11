export default function ProjetosEstrategicosPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Projetos Estratégicos</h1>
      <p className="text-xl text-gray-600 mb-8">
        Metodologias exclusivas para transformar visões em realidade através de estruturação inteligente
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Análise de Viabilidade</h2>
          <p className="text-gray-600 mb-4">
            Metodologia proprietária para avaliação precisa da viabilidade de projetos de alto impacto
          </p>
          <p className="text-sm text-gray-500">10 min de leitura</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Estruturação de Garantias</h2>
          <p className="text-gray-600 mb-4">
            Guia especializado sobre estruturação de garantias para projetos sofisticados
          </p>
          <p className="text-sm text-gray-500">15 min de leitura</p>
        </div>
      </div>
    </div>
  );
} 