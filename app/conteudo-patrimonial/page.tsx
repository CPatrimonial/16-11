"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CategorySection } from "@/components/content/category-section";
import { ContentCategory } from "@/components/content/types";
import Head from 'next/head';

export default function ConteudoPatrimonialPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories: ContentCategory[] = [
    {
      id: "gestao-estrategica",
      title: "Gestão Estratégica",
      description: "Estratégias avançadas para otimização e estruturação patrimonial",
      articles: [
        {
          id: 1,
          title: "A Arte da Negociação Estruturada",
          description: "Técnicas avançadas de negociação utilizando seu patrimônio como garantia estratégica",
          readTime: "8 min",
          category: "Gestão Estratégica",
          imageUrl: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3",
          author: "Equipe Crédito Patrimonial",
          datePublished: "2023-11-16",
        },
        {
          id: 2,
          title: "Reestruturação Patrimonial",
          description: "Análise profunda dos processos de reestruturação para maximização de resultados",
          readTime: "12 min",
          category: "Gestão Estratégica",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
          author: "Equipe Crédito Patrimonial",
          datePublished: "2023-11-16",
        },
      ],
    },
    {
      id: "projetos-estrategicos",
      title: "Projetos Estratégicos",
      description: "Metodologias exclusivas para transformar visões em realidade através de estruturação inteligente",
      articles: [
        {
          id: 3,
          title: "Análise de Viabilidade",
          description: "Metodologia proprietária para avaliação precisa da viabilidade de projetos de alto impacto",
          readTime: "10 min",
          category: "Projetos",
          imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3",
          author: "Equipe Crédito Patrimonial",
          datePublished: "2023-11-16",
        },
        {
          id: 4,
          title: "Estruturação de Garantias",
          description: "Guia especializado sobre estruturação de garantias para projetos sofisticados",
          readTime: "15 min",
          category: "Projetos",
          imageUrl: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3",
          author: "Equipe Crédito Patrimonial",
          datePublished: "2023-11-16",
        },
      ],
    },
    {
      id: "analise-avancada",
      title: "Análise Avançada",
      description: "Insights estratégicos e ferramentas sofisticadas para otimização patrimonial",
      articles: [
        {
          id: 5,
          title: "Modelagem de Cenários",
          description: "Técnicas avançadas de análise e projeção para tomada de decisão estratégica",
          readTime: "20 min",
          category: "Análise",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
          author: "Equipe Crédito Patrimonial",
          datePublished: "2023-11-16",
        },
        {
          id: 6,
          title: "Estratégias de Preservação",
          description: "Abordagens sofisticadas para proteção e crescimento sustentável do patrimônio",
          readTime: "18 min",
          category: "Análise",
          imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
          author: "Equipe Crédito Patrimonial",
          datePublished: "2023-11-16",
        },
      ],
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Centro de Conteúdo Patrimonial",
    "description": "Artigos e guias especializados sobre gestão patrimonial e estratégias financeiras",
    "publisher": {
      "@type": "Organization",
      "name": "Crédito Patrimonial",
      "url": "https://www.creditopatrimonial.com.br"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": categories.flatMap((category, categoryIndex) =>
        category.articles.map((article, articleIndex) => ({
          "@type": "ListItem",
          "position": categoryIndex * 100 + articleIndex + 1,
          "item": {
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "author": {
              "@type": "Organization",
              "name": article.author
            },
            "datePublished": article.datePublished,
            "image": article.imageUrl
          }
        }))
      )
    }
  };

  const filteredCategories = categories.map(category => ({

    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.articles.length > 0);

  return (
    <>
      <Head>
        <title>Centro de Conteúdo Patrimonial</title>
        <meta name="description" content="Artigos e guias especializados sobre gestão patrimonial e estratégias financeiras" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <main className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Centro de Conteúdo Patrimonial</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore nossos artigos e guias especializados sobre gestão patrimonial e estratégias financeiras
          </p>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar conteúdo..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <nav aria-label="Categorias de conteúdo">
          {filteredCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              searchQuery={searchQuery}
            />
          ))}
        </nav>
      </main>
    </>
  );
}