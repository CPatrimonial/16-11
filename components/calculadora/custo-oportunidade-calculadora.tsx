"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { ProjectInfo } from './components/project-info';
import { CreditInfo } from './components/credit-info';

interface ProjetoInfoType {
  descricao: string;
  ganhosQualidadeVida: number;
  ganhoValorizacao: number;
  ganhoAluguel: number;
  economiaGerada: number;
  investimentoViabilizacao: number;
}

interface CreditoInfoType {
  taxaJurosMensal: number;
  quantidadeParcelas: number;
}

interface CustoCreditoInfoType {
  parcelaMensal: number;
  custoTotal: number;
  jurosTotal: number;
}

export default function CustoOportunidadeCalculadora() {
  // Formatador de moeda
  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Estados para armazenar as informações do projeto e do crédito
  const [projetoInfo, setProjetoInfo] = useState<ProjetoInfoType>({
    descricao: '',
    ganhosQualidadeVida: 0,
    ganhoValorizacao: 0,
    ganhoAluguel: 0,
    economiaGerada: 0,
    investimentoViabilizacao: 0,
  });

  const [creditoInfo, setCreditoInfo] = useState<CreditoInfoType>({
    taxaJurosMensal: 1,
    quantidadeParcelas: 120,
  });

  const [custoCreditoInfo, setCustoCreditoInfo] = useState<CustoCreditoInfoType | null>(null);
  const [graficoVisivel, setGraficoVisivel] = useState<boolean>(false);
  const [dadosGraficoPagamento, setDadosGraficoPagamento] = useState<any[]>([]);
  const [dadosGrafico, setDadosGrafico] = useState<any[]>([]);
  const [custoOportunidade, setCustoOportunidade] = useState<any>(undefined);

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
    
    if (name === 'descricao') {
      setProjetoInfo((prev) => ({ ...prev, [name]: value }));
      return;
    }
    
    // Remove formatação para obter apenas o número
    const valorNumerico = value.replace(/\D/g, '');
    const numero = valorNumerico ? parseInt(valorNumerico) : 0;
    
    setProjetoInfo((prev) => ({ ...prev, [name]: numero }));
  };

  // Handlers para atualizar as informações do crédito
  const handleCreditoChange = (field: keyof CreditoInfoType, value: string) => {
    const numeroValue = parseFloat(value);
    setCreditoInfo((prev) => ({ 
      ...prev, 
      [field]: isNaN(numeroValue) ? 0 : numeroValue 
    }));
  };

  const handleParcelasChange = (value: string) => {
    const parcelas = parseInt(value);
    setCreditoInfo((prev) => ({ 
      ...prev, 
      quantidadeParcelas: isNaN(parcelas) ? 0 : parcelas 
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
    // PMT = P * r * (1 + r)^n / ((1 + r)^n - 1)
    // onde P = principal, r = taxa de juros, n = número de parcelas
    
    let parcelaMensal: number;
    
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

  // Calcula automaticamente ao iniciar
  useEffect(() => {
    if (projetoInfo.investimentoViabilizacao > 0) {
      calcularCustoCredito();
    }
  }, [projetoInfo.investimentoViabilizacao, calcularCustoCredito]);

  return (
    <div className="container mx-auto p-4 space-y-6 max-w-5xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-slate-800">
        Calculadora de Custo de Oportunidade
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectInfo 
          projetoInfo={projetoInfo}
          handleProjetoChange={handleProjetoChange}
          ganhoPotencial={ganhoPotencial}
          expectativaLucro={expectativaLucro}
          formatoMoeda={formatoMoeda}
        />
        
        <CreditInfo 
          creditoInfo={creditoInfo}
          handleCreditoChange={handleCreditoChange}
          handleParcelasChange={handleParcelasChange}
          calcularCustoCredito={calcularCustoCredito}
          custoCreditoInfo={custoCreditoInfo}
          dadosGraficoPagamento={dadosGraficoPagamento}
          dadosGrafico={dadosGrafico}
          custoOportunidade={custoOportunidade}
          formatoMoeda={formatoMoeda}
          graficoVisivel={graficoVisivel}
        />
      </div>
      
      {graficoVisivel && custoOportunidade && (
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Análise de Viabilidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-medium">Investimento</p>
              <p className="text-2xl font-bold">{formatoMoeda.format(projetoInfo.investimentoViabilizacao)}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-medium">Ganho Total em {custoOportunidade.ano} anos</p>
              <p className="text-2xl font-bold">{formatoMoeda.format(custoOportunidade.ganhoPotencial)}</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-800 font-medium">Custo Total do Financiamento</p>
              <p className="text-2xl font-bold">{formatoMoeda.format(custoCreditoInfo?.custoTotal || 0)}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">Recomendação</h3>
            <p className="text-slate-700">
              Com base na análise, este projeto se paga no {custoOportunidade.ano}º ano, 
              quando os ganhos acumulados de {formatoMoeda.format(custoOportunidade.ganhoPotencial)} superam 
              o custo total do financiamento de {formatoMoeda.format(custoOportunidade.custoEmprestimo)}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}