import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">
          Última atualização: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-gray-600">
            Ao acessar e usar o site da Crédito Patrimonial, você concorda com estes termos de uso. Se você não concordar com qualquer parte destes termos, por favor, não use nosso site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Serviços Oferecidos</h2>
          <p className="text-gray-600">
            A Crédito Patrimonial oferece serviços de:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>Crédito com garantia de imóvel</li>
            <li>Consultoria financeira</li>
            <li>Análise de crédito</li>
            <li>Simulações financeiras</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Uso do Site</h2>
          <p className="text-gray-600">
            Ao usar nosso site, você concorda em:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>Fornecer informações verdadeiras e precisas</li>
            <li>Não usar o site para fins ilegais</li>
            <li>Não tentar acessar áreas restritas do site</li>
            <li>Não interferir com a segurança do site</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propriedade Intelectual</h2>
          <p className="text-gray-600">
            Todo o conteúdo do site, incluindo textos, imagens, logos e marcas registradas, são de propriedade da Crédito Patrimonial ou de seus parceiros e são protegidos por lei.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitação de Responsabilidade</h2>
          <p className="text-gray-600">
            A Crédito Patrimonial não se responsabiliza por:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>Interrupções no funcionamento do site</li>
            <li>Danos causados por vírus ou malware</li>
            <li>Decisões tomadas com base nas informações do site</li>
            <li>Conteúdo de sites de terceiros linkados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Alterações nos Termos</h2>
          <p className="text-gray-600">
            A Crédito Patrimonial se reserva o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas aos usuários.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Lei Aplicável</h2>
          <p className="text-gray-600">
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais de Ribeirão Preto - SP.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contato</h2>
          <p className="text-gray-600">
            Para questões sobre estes termos, entre em contato:
          </p>
          <ul className="list-none text-gray-600 space-y-2 mt-4">
            <li>Email: consultoria@creditopatrimonial.com.br</li>
            <li>Telefone: (16) 99999-9999</li>
            <li>Endereço: Ribeirão Preto - SP</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
