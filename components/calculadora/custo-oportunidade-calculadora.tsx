"use client";

import React, { useState, useCallback } from 'react';
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
  const [projetoInfo, setProjetoInfo] = useState<ProjetoInfo>({
    descricao: '',
    ganhosQualidadeVida: 0,
    ganhoValorizacao: 0,
    ganhoAluguel: 0,
    economiaGerada: 0,
    investimentoViabilizacao: 0
  });

  const [creditoInfo, setCreditoInfo] = useState<CreditoInfo>({
    taxaJurosMensal: 0,
    quantidadeParcelas: 36
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

  // Tipagem dos handlers
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

  const calcularCustoCredito = useCallback(() => {
    const { taxaJurosMensal, quantidadeParcelas } = creditoInfo;
    const valorCredito = projetoInfo.investimentoViabilizacao * 1.11;
    const taxaMensal = taxaJurosMensal / 100;

    if (taxaMensal <= 0 || quantidadeParcelas <= 0) return;

    const parcelaMensal = 
      (valorCredito * (taxaMensal * Math.pow(1 + taxaMensal, quantidadeParcelas))) /
      (Math.pow(1 + taxaMensal, quantidadeParcelas) - 1);

    const custoTotal = parcelaMensal * quantidadeParcelas;
    const jurosTotal = custoTotal - valorCredito;

    setCustoCreditoInfo({
      parcelaMensal,
      custoTotal,
      jurosTotal
    });

    // Calcular dados para o gráfico de pagamento
    const dadosPagamento: DadosPagamento[] = [];
    let saldoDevedor = valorCredito;

    for (let mes = 1; mes <= quantidadeParcelas; mes++) {
      const juros = saldoDevedor * taxaMensal;
      const amortizacao = parcelaMensal - juros;
      saldoDevedor -= amortizacao;

      dadosPagamento.push({
        mes,
        saldoDevedor: Math.max(0, saldoDevedor),
        parcela: parcelaMensal
      });
    }

    setDadosGraficoPagamento(dadosPagamento);
  }, [creditoInfo, projetoInfo.investimentoViabilizacao]);

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

  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

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