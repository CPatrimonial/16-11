export default function GestaoEstrategicaPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Gestão Estratégica</h1>
      <p className="text-xl text-gray-600 mb-8">
        Estratégias avançadas para otimização e estruturação patrimonial
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">A Arte da Negociação Estruturada</h2>
          <p className="text-gray-600 mb-4">
            Técnicas avançadas de negociação utilizando seu patrimônio como garantia estratégica
          </p>
          <p className="text-sm text-gray-500">15 min de leitura</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Reestruturação Patrimonial</h2>
          <p className="text-gray-600 mb-4">
            Análise profunda dos processos de reestruturação para maximização de resultados
          </p>
          <p className="text-sm text-gray-500">12 min de leitura</p>
        </div>
      </div>
    </div>
  );
} 