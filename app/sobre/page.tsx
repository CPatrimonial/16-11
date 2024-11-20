import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sobre Nós | Crédito Patrimonial - Consultoria Especializada em Home Equity',
  description: 'Conheça nossa abordagem única que combina experiência em engenharia, expertise em home equity e tecnologia de ponta para oferecer a melhor consultoria financeira.',
}

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Consultoria Especializada em Home Equity
          </h1>
          <p className="text-xl text-gray-600">
            Combinando engenharia, experiência e tecnologia para sua segurança financeira
          </p>
        </div>

        <div className="space-y-16">
          {/* Seção Principal */}
          <section className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Na Crédito Patrimonial, nossa missão é transformar a experiência de obter um home equity
              através de uma consultoria verdadeiramente diferenciada. Nosso diferencial está na
              combinação única de expertise técnica, experiência prática e inovação tecnológica.
            </p>
          </section>

          {/* Cards de Diferenciais */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise Técnica</h3>
              <p className="text-gray-600">
                Nossa base em Engenharia de Produção nos permite analisar cada caso com precisão
                técnica, otimizando processos e identificando as melhores oportunidades para nossos
                clientes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experiência Comprovada</h3>
              <p className="text-gray-600">
                Desde 2021, atuamos ativamente no mercado de home equity, acumulando conhecimento
                prático e construindo relacionamentos sólidos com as principais instituições
                financeiras.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologia Avançada</h3>
              <p className="text-gray-600">
                Utilizamos inteligência artificial de ponta para analisar o mercado e identificar as
                melhores ofertas, garantindo condições otimizadas para cada perfil de cliente.
              </p>
            </div>
          </div>

          {/* Seção de Abordagem */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa Abordagem Premium
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Oferecemos um acompanhamento personalizado que vai além da simples intermediação.
                Nossa consultoria combina:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Análise técnica aprofundada de cada caso</li>
                <li>Mapeamento completo das ofertas disponíveis no mercado</li>
                <li>Negociação direta com as instituições financeiras</li>
                <li>Acompanhamento humanizado durante todo o processo</li>
                <li>Suporte na tomada de decisão com base em dados concretos</li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para uma Consultoria Diferenciada?
            </h2>
            <p className="text-gray-600 mb-8">
              Entre em contato conosco e descubra como podemos ajudar você a conseguir as
              melhores condições para seu home equity.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5516997338791&text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20a%20Cr%C3%A9dito%20Patrimonial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Fale com um Especialista
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}
