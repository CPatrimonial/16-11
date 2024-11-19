import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

// Lista temporária de artigos
const artigos = [
  { 
    id: '1', 
    titulo: 'Análise de Viabilidade em Projetos de Alto Impacto', 
    conteudo: `
      # Análise de Viabilidade em Projetos de Alto Impacto

      Nossa metodologia proprietária de análise de viabilidade foi desenvolvida para avaliar 
      projetos de alto impacto com precisão e profundidade. Combinamos análise quantitativa 
      e qualitativa para uma avaliação completa.

      ## Fundamentos da Análise de Viabilidade

      Uma análise robusta considera múltiplas dimensões:
      - Viabilidade Financeira
      - Viabilidade Técnica
      - Viabilidade Operacional
      - Viabilidade Mercadológica
      - Viabilidade Legal e Regulatória

      ## Componentes Essenciais da Análise

      ### 1. Análise Financeira Detalhada
      - Projeções financeiras detalhadas
      - Análise de custos e receitas
      - Estrutura de capital
      - Necessidade de investimentos

      ### 2. Avaliação de Riscos
      - Riscos de mercado
      - Riscos operacionais
      - Riscos regulatórios
      - Riscos financeiros
      - Planos de mitigação

      ### 3. Estudo de Mercado
      - Análise da demanda
      - Análise competitiva
      - Tendências setoriais
      - Oportunidades e ameaças

      ## Indicadores Chave de Performance (KPIs)

      ### Indicadores Financeiros
      - Taxa Interna de Retorno (TIR)
      - Valor Presente Líquido (VPL)
      - Payback e Payback Descontado
      - EBITDA projetado
      - Índice de Lucratividade
      - ROI e ROE esperados

      ### Indicadores Operacionais
      - Eficiência operacional
      - Produtividade
      - Qualidade
      - Satisfação do cliente

      ## Processo de Análise Estruturada

      1. Coleta e Validação de Dados
         - Levantamento de informações
         - Verificação de fontes
         - Validação com stakeholders

      2. Análise de Premissas
         - Premissas macroeconômicas
         - Premissas setoriais
         - Premissas operacionais

      3. Modelagem Financeira
         - Projeções detalhadas
         - Análise de sensibilidade
         - Cenários alternativos

      4. Avaliação de Riscos
         - Identificação de riscos
         - Quantificação de impactos
         - Estratégias de mitigação

      ## Estudo de Caso: Projeto de Expansão Industrial

      ### Contexto
      - Investimento: R$ 50 milhões
      - Prazo: 24 meses
      - Objetivo: Aumento de capacidade produtiva

      ### Resultados da Análise
      - TIR: 22% a.a.
      - Payback: 4,5 anos
      - VPL: R$ 30 milhões
      - Riscos principais identificados e mitigados

      ## Principais Takeaways

      1. A análise de viabilidade é um processo multidimensional
      2. A qualidade dos dados é fundamental para resultados confiáveis
      3. A avaliação de riscos deve ser abrangente e realista
      4. O monitoramento contínuo é essencial para o sucesso
      5. A flexibilidade para ajustes é crucial durante a implementação

      ## Próximos Passos Recomendados

      1. Estabelecer equipe dedicada
      2. Definir cronograma detalhado
      3. Implementar sistema de monitoramento
      4. Desenvolver planos de contingência
      5. Estabelecer marcos de avaliação
    `,
    metadata: {
      description: 'Metodologia completa para análise de viabilidade em projetos de alto impacto, incluindo aspectos financeiros, operacionais e estratégicos',
      keywords: ['análise de viabilidade', 'projetos', 'investimentos', 'ROI', 'gestão de riscos'],
      author: 'Equipe Crédito Patrimonial',
      publishDate: '2023-11-16'
    }
  },
  { 
    id: '2', 
    titulo: 'Estratégias de Reestruturação de Dívidas Corporativas', 
    conteudo: `
      # Estratégias de Reestruturação de Dívidas Corporativas

      A reestruturação de dívidas corporativas é um processo estratégico fundamental para 
      revitalizar a saúde financeira empresarial. Este guia apresenta estratégias comprovadas 
      e melhores práticas para uma reestruturação bem-sucedida.

      ## Diagnóstico Financeiro

      ### Indicadores de Necessidade de Reestruturação
      - Fluxo de caixa operacional negativo
      - Índice de cobertura de dívida < 1.2x
      - Custo médio de capital elevado
      - Múltiplos empréstimos descoordenados
      - Pressão sobre capital de giro
      - Perda de oportunidades estratégicas

      ## Estratégias Fundamentais

      ### 1. Consolidação Estratégica de Dívidas
      - Unificação de múltiplos empréstimos
      - Negociação de taxas otimizadas
      - Simplificação administrativa
      - Redução de custos financeiros

      ### 2. Engenharia Financeira de Prazos
      - Alongamento estratégico
      - Adequação ao ciclo operacional
      - Balanceamento de fluxo de caixa
      - Criação de folga financeira

      ### 3. Otimização de Estrutura de Capital
      - Conversão de dívidas
      - Utilização eficiente de garantias
      - Acesso a linhas subsidiadas
      - Diversificação de fontes

      ## Processo de Reestruturação Detalhado

      ### 1. Diagnóstico Aprofundado
      - Análise de demonstrativos financeiros
      - Avaliação de covenants
      - Mapeamento de garantias
      - Projeções de fluxo de caixa

      ### 2. Mapeamento de Stakeholders
      - Identificação de credores
      - Análise de exposições
      - Avaliação de relacionamentos
      - Estratégias de negociação

      ### 3. Estruturação da Proposta
      - Modelagem financeira
      - Análise de viabilidade
      - Estruturação de garantias
      - Definição de condições

      ## Estudo de Caso: Reestruturação Bem-Sucedida

      ### Cenário Inicial
      - Dívida total: R$ 100 milhões
      - Custo médio: CDI + 8% a.a.
      - 12 credores diferentes
      - Prazo médio: 24 meses

      ### Resultado Pós-Reestruturação
      - Consolidação em 3 credores
      - Custo médio: CDI + 4% a.a.
      - Prazo médio: 60 meses
      - Economia anual: R$ 4 milhões

      ## Benefícios Estratégicos

      ### Impactos Financeiros
      - Redução do custo de capital
      - Melhoria de rating de crédito
      - Otimização de garantias
      - Fortalecimento do balanço

      ### Impactos Operacionais
      - Recuperação de capacidade de investimento
      - Melhoria de relacionamento com fornecedores
      - Foco em core business
      - Aumento de competitividade

      ## Principais Takeaways

      1. A reestruturação é um processo estratégico, não apenas financeiro
      2. Comunicação transparente é fundamental
      3. Timing é crucial para o sucesso
      4. Análise profunda precede ação efetiva
      5. Monitoramento contínuo garante sustentabilidade

      ## Próximos Passos Práticos

      1. Realizar diagnóstico detalhado
      2. Mapear stakeholders-chave
      3. Desenvolver proposta estruturada
      4. Implementar plano de comunicação
      5. Estabelecer métricas de acompanhamento
    `,
    metadata: {
      description: 'Guia completo sobre estratégias de reestruturação de dívidas corporativas, incluindo casos práticos e metodologias comprovadas',
      keywords: ['reestruturação de dívidas', 'finanças corporativas', 'gestão financeira', 'negociação'],
      author: 'Equipe Crédito Patrimonial',
      publishDate: '2023-11-16'
    }
  },
  {
    id: '3',
    titulo: 'A Arte da Negociação Estruturada em Operações Financeiras',
    conteudo: `
      A negociação estruturada é uma abordagem sistemática para alcançar acordos financeiros 
      complexos. Descubra como maximizar resultados através de técnicas avançadas de negociação.

      ## Fundamentos da Negociação Estruturada

      ### Preparação
      - Análise profunda do contexto
      - Identificação de interesses mútuos
      - Mapeamento de alternativas
      - Definição de limites e objetivos

      ### Elementos Essenciais
      - Comunicação clara e objetiva
      - Foco em interesses, não em posições
      - Criação de valor para todas as partes
      - Uso de critérios objetivos

      ## Estratégias Avançadas

      ### 1. Estruturação de Propostas
      - Modelagem financeira detalhada
      - Análise de sensibilidade
      - Cenários de ganhos mútuos
      - Mecanismos de proteção

      ### 2. Gestão de Stakeholders
      - Mapeamento de influenciadores
      - Alinhamento de expectativas
      - Construção de consenso
      - Gestão de conflitos

      ## Técnicas de Negociação

      1. Ancoragem Estratégica
      - Estabelecimento de referências
      - Uso de precedentes
      - Criação de benchmarks

      2. Pacotes de Negociação
      - Combinação de elementos
      - Trade-offs estratégicos
      - Soluções criativas

      ## Fatores de Sucesso

      - Preparação minuciosa
      - Flexibilidade tática
      - Paciência estratégica
      - Foco no longo prazo
      - Construção de relacionamentos
    `,
    metadata: {
      description: 'Aprenda a aplicar técnicas avançadas de negociação estruturada para alcançar acordos financeiros complexos e maximizar resultados',
      keywords: ['negociação estruturada', 'operações financeiras', 'gestão de riscos', 'relacionamentos'],
      author: 'Equipe Crédito Patrimonial',
      publishDate: '2023-11-16'
    }
  },
  {
    id: '4',
    titulo: 'Maximizando o Valor de Ativos Imobiliários em Operações Financeiras',
    conteudo: `
      Os ativos imobiliários são fundamentais em operações financeiras estruturadas. 
      Aprenda como maximizar seu valor e potencial em diferentes tipos de operações.

      ## Avaliação Estratégica de Ativos

      ### Análise Multidimensional
      - Localização e potencial de valorização
      - Estado de conservação e necessidades de investimento
      - Perfil de ocupação e receitas
      - Aspectos legais e regulatórios

      ### Fatores de Valorização
      - Melhorias estruturais
      - Otimização de uso
      - Eficiência energética
      - Modernização de instalações

      ## Estruturas Financeiras

      ### 1. Sale & Leaseback
      - Liberação de capital
      - Manutenção operacional
      - Benefícios fiscais
      - Gestão de ativos

      ### 2. Securitização
      - Estruturação de CRI
      - Fluxo de recebíveis
      - Garantias reais
      - Classificação de risco

      ## Estratégias de Otimização

      1. Gestão Ativa
      - Programa de manutenção
      - Controle de custos
      - Relacionamento com ocupantes
      - Monitoramento de mercado

      2. Reposicionamento
      - Análise de maior e melhor uso
      - Projeto de revitalização
      - Estratégia de marketing
      - Plano de implementação

      ## Aspectos Críticos

      - Due diligence completa
      - Estruturação jurídica adequada
      - Análise de riscos
      - Planejamento tributário
      - Estratégia de saída
    `,
    metadata: {
      description: 'Aprenda a maximizar o valor de ativos imobiliários em operações financeiras estruturadas, considerando aspectos legais, financeiros e estratégicos',
      keywords: ['ativos imobiliários', 'operações financeiras', 'gestão de riscos', 'valorização'],
      author: 'Equipe Crédito Patrimonial',
      publishDate: '2023-11-16'
    }
  },
  {
    id: '5',
    titulo: 'Gestão Estratégica de Garantias em Operações de Crédito',
    conteudo: `
      A gestão eficiente de garantias é fundamental para otimizar operações de crédito 
      e reduzir riscos. Conheça as melhores práticas e estratégias para maximizar seu valor.

      ## Tipos de Garantias

      ### Garantias Reais
      - Imóveis
      - Equipamentos
      - Estoques
      - Recebíveis
      - Investimentos financeiros

      ### Garantias Fidejussórias
      - Avais
      - Fianças
      - Seguros garantia
      - Cartas de crédito

      ## Estratégias de Estruturação

      ### 1. Composição de Garantias
      - Mix adequado ao perfil da operação
      - Complementaridade entre garantias
      - Liquidez e execução
      - Cobertura de riscos

      ### 2. Monitoramento
      - Avaliação periódica
      - Índices de cobertura
      - Triggers de reforço
      - Relatórios de acompanhamento

      ## Aspectos Legais

      1. Constituição
      - Documentação necessária
      - Registros e averbações
      - Autorizações específicas
      - Contratos acessórios

      2. Execução
      - Procedimentos judiciais
      - Prazos legais
      - Custos envolvidos
      - Estratégias de recuperação

      ## Fatores de Sucesso

      - Due diligence apropriada
      - Avaliação independente
      - Monitoramento contínuo
      - Gestão proativa
      - Documentação robusta
    `,
    metadata: {
      description: 'Aprenda a gerenciar garantias de forma estratégica em operações de crédito, minimizando riscos e maximizando valor',
      keywords: ['gestão de garantias', 'operações de crédito', 'gestão de riscos', 'garantias reais'],
      author: 'Equipe Crédito Patrimonial',
      publishDate: '2023-11-16'
    }
  }
];

// Defina o tipo usando a tipagem oficial do Next.js
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Metadata generation for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const artigo = artigos.find(a => a.id === params.id);
  
  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
      description: 'O artigo solicitado não está disponível.'
    };
  }

  return {
    title: artigo.titulo + ' | Crédito Patrimonial',
    description: artigo.metadata?.description || 'Artigo especializado em gestão patrimonial',
    keywords: artigo.metadata?.keywords || ['gestão patrimonial', 'finanças', 'investimentos'],
    authors: [{ name: artigo.metadata?.author || 'Crédito Patrimonial' }],
    openGraph: {
      title: artigo.titulo,
      description: artigo.metadata?.description,
      type: 'article',
      publishedTime: artigo.metadata?.publishDate,
      authors: [artigo.metadata?.author || 'Crédito Patrimonial']
    }
  };
}

// Para o componente da página
export default function ArtigoPage({ params }: { params: { id: string } }) {
  const artigo = artigos.find(a => a.id === params.id);

  if (!artigo) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{artigo.titulo}</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="whitespace-pre-wrap markdown-content">
            {artigo.conteudo}
          </div>
        </div>
      </article>
    </div>
  );
}

// Mantenha o generateStaticParams como está
export async function generateStaticParams() {
  return artigos.map(artigo => ({
    id: artigo.id,
  }));
}