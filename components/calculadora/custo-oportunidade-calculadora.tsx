"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { ProjectInfo } from './components/project-info';
import { CreditInfo } from './components/credit-info';
import { OpportunityAnalysis } from './components/opportunity-analysis';

// Definir interfaces para os tipos
interface ProjetoInfo {
  descricao: string;
  ganhosQualidadeVida: number;
  ganhoValorizacao: number;
  ganhoAluguel: number;
  economiaGerada: number;
  investimentoViabilizacao: number;
}

interface CreditoInfo {
  taxaJurosMensal: number;
  quantidadeParcelas: number;
}

interface CustoCreditoInfo {
  parcelaMensal: number;
  custoTotal: number;
  jurosTotal: number;
}

interface DadosPagamento {
  mes: number;
  saldoDevedor: number;
  parcela: number;
}

interface DadosGrafico {
  ano: number;
  ganhoPotencial: number;
  custoEmprestimo: number;
}

interface CustoOportunidade {
  ano: number;
  valor: number;
}

const CustoOportunidadeCalculadora = () => {
  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const [projetoInfo, setProjetoInfo] = useState<ProjetoInfo>({
    descricao: '',
    ganhosQualidadeVida: 0,
    ganhoValorizacao: 0,
    ganhoAluguel: 0,
    economiaGerada: 0,
    investimentoViabilizacao: 0
  });

  const [creditoInfo, setCreditoInfo] = useState<CreditoInfo>({
    taxaJurosMensal: 1.5,
    quantidadeParcelas: 180
  });

  const [custoCreditoInfo, setCustoCreditoInfo] = useState<CustoCreditoInfo | null>(null);
  const [graficoVisivel, setGraficoVisivel] = useState(false);
  const [dadosGrafico, setDadosGrafico] = useState<DadosGrafico[]>([]);
  const [dadosGraficoPagamento, setDadosGraficoPagamento] = useState<DadosPagamento[]>([]);

  const ganhoPotencial = projetoInfo.ganhosQualidadeVida + projetoInfo.ganhoValorizacao + 
                         projetoInfo.ganhoAluguel + projetoInfo.economiaGerada;
  
  const expectativaLucro = projetoInfo.investimentoViabilizacao > 0 
    ? ganhoPotencial / projetoInfo.investimentoViabilizacao 
    : 0;

  // Função para calcular o custo do crédito
  const calcularCustoCredito = useCallback(() => {
    if (projetoInfo.investimentoViabilizacao <= 0) {
      setCustoCreditoInfo(null);
      setDadosGraficoPagamento([]);
      return;
    }

    const valorFinanciado = projetoInfo.investimentoViabilizacao * 1.11;
    const taxaJuros = creditoInfo.taxaJurosMensal / 100;
    const numParcelas = creditoInfo.quantidadeParcelas;

    // Cálculo da parcela usando a fórmula de amortização
    const parcela = valorFinanciado * (
      (taxaJuros * Math.pow(1 + taxaJuros, numParcelas)) /
      (Math.pow(1 + taxaJuros, numParcelas) - 1)
    );

    const custoTotal = parcela * numParcelas;
    const jurosTotal = custoTotal - valorFinanciado;

    setCustoCreditoInfo({
      parcelaMensal: parcela,
      custoTotal: custoTotal,
      jurosTotal: jurosTotal
    });

    // Cálculo da evolução do saldo devedor
    const dadosPagamento: DadosPagamento[] = [];
    let saldoDevedor = valorFinanciado;

    for (let mes = 1; mes <= numParcelas; mes++) {
      const jurosDoMes = saldoDevedor * taxaJuros;
      const amortizacao = parcela - jurosDoMes;
      saldoDevedor -= amortizacao;

      dadosPagamento.push({
        mes,
        saldoDevedor: Math.max(0, saldoDevedor),
        parcela: parcela
      });
    }

    setDadosGraficoPagamento(dadosPagamento);
  }, [projetoInfo.investimentoViabilizacao, creditoInfo.taxaJurosMensal, creditoInfo.quantidadeParcelas]);

  // Atualiza os cálculos sempre que houver mudança nos valores
  useEffect(() => {
    calcularCustoCredito();
  }, [calcularCustoCredito]);

  const calcularCustoOportunidade = useCallback(() => {
    if (!custoCreditoInfo) return;

    const dadosGrafico: DadosGrafico[] = [];
    const anos = Math.ceil(creditoInfo.quantidadeParcelas / 12);

    for (let ano = 1; ano <= anos; ano++) {
      const custoEmprestimo = custoCreditoInfo.parcelaMensal * 12 * ano;
      const ganhoPotencial = (
        projetoInfo.ganhosQualidadeVida +
        projetoInfo.ganhoValorizacao +
        projetoInfo.ganhoAluguel +
        projetoInfo.economiaGerada
      ) * ano;

      dadosGrafico.push({
        ano,
        ganhoPotencial,
        custoEmprestimo
      });
    }

    setDadosGrafico(dadosGrafico);
    setGraficoVisivel(true);
  }, [creditoInfo.quantidadeParcelas, custoCreditoInfo, projetoInfo]);

  const handleProjetoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjetoInfo((prev) => ({
      ...prev,
      [name]: name === 'descricao' ? value : Number(value)
    }));
  }, []);

  const handleCreditoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreditoInfo((prev) => ({
      ...prev,
      [name]: Number(value)
    }));
  }, []);

  const handleParcelasChange = useCallback((value: number[]) => {
    setCreditoInfo((prev) => ({
      ...prev,
      quantidadeParcelas: value[0]
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center tracking-tight">
          Simulador de Investimento
        </h1>
        <p className="text-slate-600 text-center mb-12 text-lg">
          Análise inteligente para decisões estratégicas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            formatoMoeda={formatoMoeda}
          />
        </div>

        {typeof window !== 'undefined' && ( // Isso evita erros de hidratação
          <OpportunityAnalysis
            calcularCustoOportunidade={calcularCustoOportunidade}
            graficoVisivel={graficoVisivel}
            dadosGrafico={dadosGrafico}
            formatoMoeda={formatoMoeda}
          />
        )}
      </div>
    </div>
  );
};

export default CustoOportunidadeCalculadora;