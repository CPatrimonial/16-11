"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/conteudo-patrimonial"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Conteúdo Patrimonial
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="text-blue-600 font-semibold">Gestão Estratégica</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">12 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Reestruturação Patrimonial
          </h1>
          <p className="text-xl text-slate-600">
            Análise profunda dos processos de reestruturação para maximização de resultados
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
            alt="Reestruturação Patrimonial"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h2>O Que é Reestruturação Patrimonial?</h2>
          <p>
            A reestruturação patrimonial é um processo estratégico que visa otimizar a composição e gestão 
            dos ativos, buscando maior eficiência financeira e proteção patrimonial. Este processo envolve 
            uma análise profunda da situação atual e o desenvolvimento de estratégias personalizadas.
          </p>

          <h2>Pilares da Reestruturação</h2>
          <p>
            Uma reestruturação patrimonial efetiva se baseia em quatro pilares fundamentais:
          </p>
          <ul>
            <li>Análise da composição atual do patrimônio</li>
            <li>Identificação de oportunidades de otimização</li>
            <li>Desenvolvimento de estratégias de proteção</li>
            <li>Implementação de estruturas mais eficientes</li>
          </ul>

          <h2>Benefícios da Reestruturação</h2>
          <p>
            A reestruturação patrimonial pode trazer diversos benefícios:
          </p>
          <ul>
            <li>Maior eficiência tributária</li>
            <li>Melhor proteção contra riscos</li>
            <li>Otimização de rendimentos</li>
            <li>Facilitação do planejamento sucessório</li>
            <li>Maior controle e governança</li>
          </ul>

          <h2>Processo de Implementação</h2>
          <p>
            O processo de reestruturação patrimonial segue algumas etapas cruciais:
          </p>
          <ol>
            <li>Diagnóstico completo da situação atual</li>
            <li>Definição de objetivos claros</li>
            <li>Desenvolvimento de estratégias</li>
            <li>Análise de impactos fiscais e legais</li>
            <li>Implementação gradual e monitorada</li>
            <li>Avaliação contínua de resultados</li>
          </ol>

          <h2>Aspectos Legais e Tributários</h2>
          <p>
            É fundamental considerar os aspectos legais e tributários em qualquer reestruturação:
          </p>
          <ul>
            <li>Conformidade com a legislação vigente</li>
            <li>Otimização da carga tributária</li>
            <li>Proteção jurídica adequada</li>
            <li>Documentação apropriada</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            A reestruturação patrimonial é um processo complexo mas fundamental para a otimização e 
            proteção do patrimônio. Quando bem executada, pode trazer benefícios significativos em 
            termos de eficiência, proteção e rentabilidade.
          </p>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Precisa de ajuda com sua reestruturação patrimonial?
          </h3>
          <p className="text-blue-700 mb-6">
            Nossos especialistas podem ajudar você a desenvolver e implementar a melhor estratégia para seu patrimônio.
          </p>
          <Link 
            href="/consultoria"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Agendar Consultoria
          </Link>
        </div>
      </div>
    </div>
  );
}
