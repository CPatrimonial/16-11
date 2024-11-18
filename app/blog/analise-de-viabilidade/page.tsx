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
            <span className="text-blue-600 font-semibold">Projetos Estratégicos</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">10 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Análise de Viabilidade
          </h1>
          <p className="text-xl text-slate-600">
            Metodologia proprietária para avaliação precisa da viabilidade de projetos de alto impacto
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3"
            alt="Análise de Viabilidade"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h2>Metodologia de Análise de Viabilidade</h2>
          <p>
            Nossa metodologia proprietária de análise de viabilidade foi desenvolvida para avaliar 
            projetos de alto impacto com precisão e profundidade. Combinamos análise quantitativa 
            e qualitativa para uma avaliação completa.
          </p>

          <h2>Componentes da Análise</h2>
          <p>
            Uma análise de viabilidade completa inclui os seguintes componentes:
          </p>
          <ul>
            <li>Análise financeira detalhada</li>
            <li>Avaliação de riscos</li>
            <li>Estudo de mercado</li>
            <li>Análise de cenários</li>
            <li>Projeções de fluxo de caixa</li>
          </ul>

          <h2>Indicadores Chave</h2>
          <p>
            Os principais indicadores que avaliamos incluem:
          </p>
          <ul>
            <li>Taxa Interna de Retorno (TIR)</li>
            <li>Valor Presente Líquido (VPL)</li>
            <li>Payback e Payback Descontado</li>
            <li>Índice de Lucratividade</li>
            <li>Análise de Sensibilidade</li>
          </ul>

          <h2>Processo de Análise</h2>
          <p>
            Nosso processo de análise segue uma estrutura rigorosa:
          </p>
          <ol>
            <li>Coleta e validação de dados</li>
            <li>Análise de premissas</li>
            <li>Modelagem financeira</li>
            <li>Análise de cenários</li>
            <li>Avaliação de riscos</li>
            <li>Elaboração de recomendações</li>
          </ol>

          <h2>Fatores Críticos de Sucesso</h2>
          <p>
            Identificamos e avaliamos os seguintes fatores críticos:
          </p>
          <ul>
            <li>Viabilidade técnica</li>
            <li>Viabilidade econômica</li>
            <li>Viabilidade operacional</li>
            <li>Viabilidade mercadológica</li>
            <li>Aspectos legais e regulatórios</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Uma análise de viabilidade bem executada é fundamental para o sucesso de qualquer projeto 
            de alto impacto. Nossa metodologia proprietária permite uma avaliação completa e precisa, 
            fornecendo base sólida para tomada de decisões estratégicas.
          </p>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Precisa de uma análise de viabilidade para seu projeto?
          </h3>
          <p className="text-blue-700 mb-6">
            Nossa equipe de especialistas está pronta para aplicar esta metodologia ao seu projeto.
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
