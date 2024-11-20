import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">
          Última atualização: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introdução</h2>
          <p className="text-gray-600">
            A Crédito Patrimonial está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Informações que Coletamos</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Informações pessoais (nome, email, telefone)</li>
            <li>Informações financeiras para análise de crédito</li>
            <li>Dados do imóvel para garantia</li>
            <li>Informações de navegação no site</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Como Usamos suas Informações</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Análise de propostas de crédito</li>
            <li>Comunicação sobre seu processo</li>
            <li>Melhorias em nossos serviços</li>
            <li>Cumprimento de obrigações legais</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Proteção de Dados</h2>
          <p className="text-gray-600">
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>Criptografia de dados sensíveis</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Treinamento regular da equipe em proteção de dados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Seus Direitos</h2>
          <p className="text-gray-600">
            Você tem direito a:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incorretos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar consentimento para uso dos dados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contato</h2>
          <p className="text-gray-600">
            Para questões sobre privacidade, entre em contato:
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
