"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  ComposedChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  ReferenceLine,
  Area
} from 'recharts';

// Interface para a estrutura do projeto
interface ProjetoInfoType {
  descricao: string;
  tipoDeInvestimento: string;
  motivacao: string;
  ganhosQualidadeVida: number;
  ganhoValorizacao: number;
  ganhoAluguel: number;
  economiaGerada: number;
  investimentoViabilizacao: number;
  impactoFamiliar: string;
  satisfacaoPessoal: string;
}

// Interface para o crédito
interface CreditoInfoType {
  taxaJurosMensal: number;
  quantidadeParcelas: number;
}

// Interface para o resultado do custo de crédito
interface CustoCreditoInfoType {
  parcelaMensal: number;
  custoTotal: number;
  jurosTotal: number;
}

// Interface para o custo de oportunidade
interface CustoOportunidadeType {
  ano: number;
  ganhoPotencial: number;
  custoEmprestimo: number;
}

export default function AnalisePatrimonialPage() {
  // Estado para controlar a etapa atual do formulário
  const [step, setStep] = useState(1);
  
  // Estados para armazenar as informações do projeto e do crédito
  const [projetoInfo, setProjetoInfo] = useState<ProjetoInfoType>({
    descricao: '',
    tipoDeInvestimento: 'Reforma Residencial',
    motivacao: '',
    ganhosQualidadeVida: 0,
    ganhoValorizacao: 0,
    ganhoAluguel: 0,
    economiaGerada: 0,
    investimentoViabilizacao: 0,
    impactoFamiliar: '',
    satisfacaoPessoal: '',
  });

  const [creditoInfo, setCreditoInfo] = useState<CreditoInfoType>({
    taxaJurosMensal: 1,
    quantidadeParcelas: 120,
  });

  // Estados para armazenar resultados dos cálculos
  const [custoCreditoInfo, setCustoCreditoInfo] = useState<CustoCreditoInfoType | null>(null);
  const [graficoVisivel, setGraficoVisivel] = useState(false);
  const [dadosGraficoPagamento, setDadosGraficoPagamento] = useState([]);
  const [dadosGrafico, setDadosGrafico] = useState([]);
  const [custoOportunidade, setCustoOportunidade] = useState<CustoOportunidadeType | undefined>(undefined);

  // Formatador de moeda
  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Tipos de projetos disponíveis
  const tiposProjeto = [
    'Reforma Residencial', 
    'Expansão Comercial', 
    'Investimento Imobiliário', 
    'Desenvolvimento Pessoal', 
    'Outro'
  ];

  // Cálculo do ganho potencial e expectativa de lucro
  const ganhoPotencial = projetoInfo.ganhosQualidadeVida + 
                         projetoInfo.ganhoValorizacao + 
                         projetoInfo.ganhoAluguel + 
                         projetoInfo.economiaGerada;

  const expectativaLucro = projetoInfo.investimentoViabilizacao > 0 
    ? ganhoPotencial / projetoInfo.investimentoViabilizacao 
    : 0;

  // Handler para atualizar as informações do projeto
  const handleProjetoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'descricao' || name === 'motivacao' || name === 'impactoFamiliar' || name === 'satisfacaoPessoal') {
      setProjetoInfo((prev) => ({ ...prev, [name]: value }));
      return;
    }
    
    // Remove formatação para obter apenas o número
    const valorNumerico = parseFloat(value.replace(/[^\d,-]/g, '').replace(',', '.'));
    const numero = isNaN(valorNumerico) ? 0 : valorNumerico;
    
    setProjetoInfo((prev) => ({ ...prev, [name]: numero }));
  };

  // Handler para atualizar o tipo de projeto
  const handleTipoProjetoChange = (valor: string) => {
    setProjetoInfo((prev) => ({ ...prev, tipoDeInvestimento: valor }));
  };

  // Handlers para atualizar as informações do crédito
  const handleCreditoChange = (field: string, value: string) => {
    const numeroValue = parseFloat(value);
    setCreditoInfo((prev) => ({ 
      ...prev, 
      [field]: isNaN(numeroValue) ? 0 : numeroValue 
    }));
  };

  const handleParcelasChange = (value: number) => {
    setCreditoInfo((prev) => ({ 
      ...prev, 
      quantidadeParcelas: value 
    }));
  };

  // Função para calcular o custo do crédito
  const calcularCustoCredito = useCallback(() => {
    // Taxa de juros mensal (convertida de percentual para decimal)
    const taxaJuros = creditoInfo.taxaJurosMensal / 100;
    
    // Valor do empréstimo
    const valorEmprestimo = projetoInfo.investimentoViabilizacao;
    
    // Número de parcelas
    const numParcelas = creditoInfo.quantidadeParcelas;
    
    // Cálculo da parcela mensal usando a fórmula de prestação constante
    let parcelaMensal;
    
    if (taxaJuros === 0) {
      parcelaMensal = valorEmprestimo / numParcelas;
    } else {
      parcelaMensal = valorEmprestimo * taxaJuros * Math.pow(1 + taxaJuros, numParcelas) / 
                     (Math.pow(1 + taxaJuros, numParcelas) - 1);
    }
    
    // Custo total do empréstimo
    const custoTotal = parcelaMensal * numParcelas;
    
    // Total pago em juros
    const jurosTotal = custoTotal - valorEmprestimo;
    
    setCustoCreditoInfo({
      parcelaMensal,
      custoTotal,
      jurosTotal
    });
    
    // Cálculo da amortização mês a mês
    const dadosPagamento = [];
    let saldoDevedor = valorEmprestimo;
    
    for (let mes = 1; mes <= numParcelas; mes++) {
      const jurosMes = saldoDevedor * taxaJuros;
      const amortizacao = parcelaMensal - jurosMes;
      saldoDevedor -= amortizacao;
      
      dadosPagamento.push({
        mes,
        saldoDevedor: Math.max(0, saldoDevedor),
        parcela: parcelaMensal,
        juros: jurosMes,
        amortizacao
      });
    }
    
    setDadosGraficoPagamento(dadosPagamento);
    
    // Preparação de dados para o gráfico de ganho potencial vs custo do empréstimo
    const dados = [];
    const anosPagamento = Math.ceil(numParcelas / 12);
    let custoOportunidadeEncontrado = undefined;
    
    for (let ano = 1; ano <= anosPagamento + 5; ano++) {
      const ganhoPotencialAno = ganhoPotencial * ano;
      const custoEmprestimoAno = ano <= anosPagamento ? 
                               custoTotal * (ano / anosPagamento) : 
                               custoTotal;
                               
      // Verifica o custo de oportunidade (quando ganho potencial supera o custo)
      if (!custoOportunidadeEncontrado && ganhoPotencialAno > custoEmprestimoAno) {
        custoOportunidadeEncontrado = { 
          ano, 
          ganhoPotencial: ganhoPotencialAno, 
          custoEmprestimo: custoEmprestimoAno 
        };
      }
      
      dados.push({
        ano,
        ganhoPotencial: ganhoPotencialAno,
        custoEmprestimo: custoEmprestimoAno
      });
    }
    
    setDadosGrafico(dados);
    setCustoOportunidade(custoOportunidadeEncontrado);
    setGraficoVisivel(true);
    
  }, [projetoInfo, creditoInfo, ganhoPotencial]);

  // Calcula automaticamente ao mudar para a etapa de resultados
  useEffect(() => {
    if (step === 4 && projetoInfo.investimentoViabilizacao > 0) {
      calcularCustoCredito();
    }
  }, [step, projetoInfo.investimentoViabilizacao, calcularCustoCredito]);

  // Renderiza a seção de detalhes do projeto (Etapa 1)
  const renderizarSecaoProjeto = () => (
    <Card>
      <CardHeader>
        <CardTitle>📍 Detalhes do Projeto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Tipo de Projeto</Label>
          <Select 
            value={projetoInfo.tipoDeInvestimento}
            onValueChange={handleTipoProjetoChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo de projeto" />
            </SelectTrigger>
            <SelectContent>
              {tiposProjeto.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Descrição Detalhada do Projeto</Label>
          <Textarea 
            name="descricao"
            placeholder="Conte-nos sobre seu projeto e suas características..."
            value={projetoInfo.descricao}
            onChange={handleProjetoChange}
          />
        </div>

        <div>
          <Label>Motivação Principal</Label>
          <Textarea 
            name="motivacao"
            placeholder="O que te motivou a pensar neste projeto?"
            value={projetoInfo.motivacao}
            onChange={handleProjetoChange}
          />
        </div>

        <div>
          <Label>Investimento para Viabilização (R$)</Label>
          <Input 
            name="investimentoViabilizacao"
            type="text"
            placeholder="Valor total necessário para o projeto"
            value={projetoInfo.investimentoViabilizacao ? formatoMoeda.format(projetoInfo.investimentoViabilizacao) : ''}
            onChange={handleProjetoChange}
          />
        </div>

        <CardFooter className="px-0 pt-4">
          <Button onClick={() => setStep(2)} className="w-full">
            Próximo: Explorar Ganhos
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );

  // Renderiza a seção de ganhos potenciais (Etapa 2)
  const renderizarSecaoGanhos = () => (
    <Card>
      <CardHeader>
        <CardTitle>💰 Ganhos Potenciais</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Valorização do Ativo (R$)</Label>
            <Input 
              name="ganhoValorizacao"
              type="text"
              placeholder="Estimativa de valorização anual"
              value={projetoInfo.ganhoValorizacao ? formatoMoeda.format(projetoInfo.ganhoValorizacao) : ''}
              onChange={handleProjetoChange}
            />
          </div>
          <div>
            <Label>Renda de Aluguel (R$)</Label>
            <Input 
              name="ganhoAluguel"
              type="text"
              placeholder="Renda anual estimada"
              value={projetoInfo.ganhoAluguel ? formatoMoeda.format(projetoInfo.ganhoAluguel) : ''}
              onChange={handleProjetoChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Ganhos em Qualidade de Vida (R$)</Label>
            <Input 
              name="ganhosQualidadeVida"
              type="text"
              placeholder="Valor estimado dos benefícios"
              value={projetoInfo.ganhosQualidadeVida ? formatoMoeda.format(projetoInfo.ganhosQualidadeVida) : ''}
              onChange={handleProjetoChange}
            />
          </div>
          <div>
            <Label>Economia Gerada (R$)</Label>
            <Input 
              name="economiaGerada"
              type="text"
              placeholder="Economia anual gerada"
              value={projetoInfo.economiaGerada ? formatoMoeda.format(projetoInfo.economiaGerada) : ''}
              onChange={handleProjetoChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Satisfação Pessoal</Label>
            <Textarea 
              name="satisfacaoPessoal"
              placeholder="O que este projeto representa para você?"
              value={projetoInfo.satisfacaoPessoal}
              onChange={handleProjetoChange}
            />
          </div>
          <div>
            <Label>Impacto Familiar</Label>
            <Textarea 
              name="impactoFamiliar"
              placeholder="Como afeta você e sua família?"
              value={projetoInfo.impactoFamiliar}
              onChange={handleProjetoChange}
            />
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-blue-700">Ganho Potencial Total Anual:</p>
          <p className="text-xl font-bold text-blue-900">{formatoMoeda.format(ganhoPotencial)}</p>
        </div>

        <CardFooter className="flex justify-between px-0 pt-4">
          <Button variant="outline" onClick={() => setStep(1)}>
            Voltar
          </Button>
          <Button onClick={() => setStep(3)}>
            Próximo: Simulação de Financiamento
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );

  // Renderiza a seção de financiamento (Etapa 3)
  const renderizarSecaoFinanciamento = () => (
    <Card>
      <CardHeader>
        <CardTitle>💸 Simulação de Financiamento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Taxa de Juros Mensal (%)</Label>
          <Input 
            type="number"
            placeholder="Taxa de juros mensal"
            value={creditoInfo.taxaJurosMensal}
            onChange={(e) => handleCreditoChange('taxaJurosMensal', e.target.value)}
            step="0.01"
          />
        </div>

        <div>
          <Label>Prazo de Financiamento: {creditoInfo.quantidadeParcelas} meses</Label>
          <Slider 
            value={[creditoInfo.quantidadeParcelas]}
            min={36} 
            max={240} 
            step={12}
            onValueChange={(value) => handleParcelasChange(value[0])}
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>3 anos</span>
            <span>20 anos</span>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-blue-700">Valor a Financiar:</p>
          <p className="text-xl font-bold text-blue-900">{formatoMoeda.format(projetoInfo.investimentoViabilizacao)}</p>
        </div>

        <CardFooter className="flex justify-between px-0 pt-4">
          <Button variant="outline" onClick={() => setStep(2)}>
            Voltar
          </Button>
          <Button onClick={() => setStep(4)}>
            Analisar Viabilidade
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );

  // Renderiza a seção de resultados (Etapa 4)
  const renderizarResultados = () => {
    if (!custoCreditoInfo) {
      return (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4">Calculando resultados...</p>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>📊 Análise de Viabilidade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-sm font-medium text-blue-700">Investimento</p>
                <p className="text-xl font-bold text-blue-900">{formatoMoeda.format(projetoInfo.investimentoViabilizacao)}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-sm font-medium text-green-700">Ganho Anual</p>
                <p className="text-xl font-bold text-green-900">{formatoMoeda.format(ganhoPotencial)}</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg text-center">
                <p className="text-sm font-medium text-amber-700">Retorno (ROI)</p>
                <p className="text-xl font-bold text-amber-900">{(expectativaLucro).toFixed(2)}x</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-sm font-medium text-blue-700">Parcela Mensal</p>
                <p className="text-xl font-bold text-blue-900">{formatoMoeda.format(custoCreditoInfo.parcelaMensal)}</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <p className="text-sm font-medium text-red-700">Custo Total</p>
                <p className="text-xl font-bold text-red-900">{formatoMoeda.format(custoCreditoInfo.custoTotal)}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <p className="text-sm font-medium text-purple-700">Renda Necessária</p>
                <p className="text-xl font-bold text-purple-900">{formatoMoeda.format(custoCreditoInfo.parcelaMensal * 3.33)}</p>
              </div>
            </div>
            
            {graficoVisivel && dadosGrafico.length > 0 && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Análise de Longo Prazo</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={dadosGrafico}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="ano" 
                        label={{ value: 'Anos', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        label={{ 
                          value: 'Valor (R$)', 
                          angle: -90, 
                          position: 'insideLeft',
                          offset: 10
                        }}
                      />
                      <Tooltip 
                        formatter={(value) => formatoMoeda.format(value)}
                        labelFormatter={(label) => `Ano ${label}`}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="ganhoPotencial"
                        name="Ganho Acumulado"
                        fill="#4ade80"
                        stroke="#22c55e"
                        fillOpacity={0.3}
                      />
                      <Line
                        type="monotone"
                        dataKey="custoEmprestimo"
                        name="Custo do Financiamento"
                        stroke="#ef4444"
                        strokeWidth={2}
                      />
                      {custoOportunidade && (
                        <ReferenceLine
                          x={custoOportunidade.ano}
                          stroke="#22c55e"
                          label={{
                            value: `Ponto de Equilíbrio: Ano ${custoOportunidade.ano}`,
                            fill: '#22c55e',
                            fontSize: 12
                          }}
                        />
                      )}
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {custoOportunidade && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Conclusão da Análise</h3>
                    <p className="text-green-700">
                      Seu projeto se paga no {custoOportunidade.ano}º ano, quando os ganhos acumulados de {formatoMoeda.format(custoOportunidade.ganhoPotencial)} superam o custo total do financiamento de {formatoMoeda.format(custoOportunidade.custoEmprestimo)}.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium text-green-800">Recomendação</h4>
                      <p className="text-green-700">
                        {custoOportunidade.ano <= 5 
                          ? "Este projeto apresenta excelente viabilidade, com retorno rápido sobre o investimento." 
                          : custoOportunidade.ano <= 10 
                            ? "O projeto é viável, com retorno de médio prazo sobre o investimento."
                            : "O projeto é viável, mas com retorno de longo prazo. Considere outras alternativas ou negociar melhores condições de financiamento."}
                      </p>
                    </div>
                  </div>
                )}

                {!custoOportunidade && (
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Conclusão da Análise</h3>
                    <p className="text-red-700">
                      No período analisado, os ganhos acumulados não superam o custo total do financiamento. Recomendamos reavaliar o projeto ou buscar melhores condições de financiamento.
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(3)}>
              Voltar
            </Button>
            <Button onClick={() => window.print()} variant="secondary">
              Imprimir Análise
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Análise Patrimonial de Projetos
      </h1>
      
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`flex items-center ${s <= step ? 'text-blue-600' : 'text-gray-400'}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s < step ? 'bg-blue-600 text-white' : 
                  s === step ? 'border-2 border-blue-600 text-blue-600' :
                  'border-2 border-gray-300 text-gray-400'
                }`}
              >
                {s}
              </div>
              <span className="text-sm font-medium ml-2 hidden sm:inline">
                {s === 1 ? 'Projeto' : 
                 s === 2 ? 'Ganhos' : 
                 s === 3 ? 'Financiamento' : 
                 'Resultados'}
              </span>
              {s < 4 && <div className={`flex-1 h-0.5 mx-2 ${s < step ? 'bg-blue-600' : 'bg-gray-300'}`} style={{width: '30px'}}></div>}
            </div>
          ))}
        </div>
      </div>
      
      {step === 1 && renderizarSecaoProjeto()}
      {step === 2 && renderizarSecaoGanhos()}
      {step === 3 && renderizarSecaoFinanciamento()}
      {step === 4 && renderizarResultados()}
    </div>
  );
} 