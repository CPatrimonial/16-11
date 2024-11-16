import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.creditopatrimonial.com.br';

  const routes = [
    '',
    '/custo-oportunidade',
    '/consultoria',
    '/seu-patrimonio',
    '/arte-negociacao',
    '/reestruturacao-patrimonial',
    '/analise-viabilidade',
    '/estruturacao-garantias',
    '/gestao-estrategica',
    '/projetos-estrategicos',
    '/analise-avancada',
    '/modelagem-cenarios',
    '/estrategias-preservacao',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}