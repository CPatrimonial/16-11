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
            <span className="text-gray-500">8 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Arte da Negociação Estruturada
          </h1>
          <p className="text-xl text-slate-600">
            Técnicas avançadas de negociação utilizando seu patrimônio como garantia estratégica
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3"
            alt="A Arte da Negociação Estruturada"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h2>Introdução à Negociação Estruturada</h2>
          <p>
            A negociação estruturada é uma abordagem sofisticada que combina estratégia financeira com 
            técnicas avançadas de negociação. Quando seu patrimônio é utilizado como garantia, é essencial 
            entender como maximizar seu potencial enquanto minimiza riscos.
          </p>

          <h2>Fundamentos da Negociação Patrimonial</h2>
          <p>
            Para uma negociação efetiva utilizando garantias patrimoniais, é necessário compreender:
          </p>
          <ul>
            <li>Avaliação precisa do patrimônio</li>
            <li>Estruturação adequada das garantias</li>
            <li>Análise de riscos e contrapartidas</li>
            <li>Estratégias de proteção patrimonial</li>
          </ul>

          <h2>Estratégias Avançadas</h2>
          <p>
            A negociação estruturada vai além das técnicas convencionais, incorporando:
          </p>
          <ul>
            <li>Modelagem financeira complexa</li>
            <li>Análise de cenários múltiplos</li>
            <li>Estruturação de garantias cruzadas</li>
            <li>Otimização fiscal e tributária</li>
          </ul>

          <h2>Implementação Prática</h2>
          <p>
            A implementação bem-sucedida de uma negociação estruturada requer:
          </p>
          <ol>
            <li>Análise detalhada do contexto</li>
            <li>Definição clara dos objetivos</li>
            <li>Estruturação adequada das garantias</li>
            <li>Documentação precisa e completa</li>
            <li>Monitoramento contínuo</li>
          </ol>

          <h2>Conclusão</h2>
          <p>
            A arte da negociação estruturada é um diferencial competitivo fundamental no cenário atual. 
            Dominar suas técnicas e princípios permite maximizar o potencial do seu patrimônio enquanto 
            mantém a segurança necessária em operações complexas.
          </p>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Quer aprofundar seus conhecimentos?
          </h3>
          <p className="text-blue-700 mb-6">
            Agende uma consultoria personalizada e descubra como aplicar estas estratégias ao seu patrimônio.
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
