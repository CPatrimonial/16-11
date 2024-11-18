"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { ProjectInfo } from './components/project-info';
import { CreditInfo } from './components/credit-info';

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
    const ganhoPotencial = projetoInfo.ganhosQualidadeVida +
                          projetoInfo.ganhoValorizacao +
                          projetoInfo.ganhoAluguel +
                          projetoInfo.economiaGerada;

    const valorFinanciado = projetoInfo.investimentoViabilizacao * 1.0111;
    const taxaMensal = creditoInfo.taxaJurosMensal / 100;
    let saldoDevedor = valorFinanciado;
    let totalPago = 0;

    for (let mes = 1; mes <= creditoInfo.quantidadeParcelas; mes++) {
      const juros = saldoDevedor * taxaMensal;
      const amortizacao = custoCreditoInfo.parcelaMensal - juros;
      
      saldoDevedor = Math.max(0, saldoDevedor - amortizacao);
      totalPago += custoCreditoInfo.parcelaMensal;

      if (mes % 12 === 0 || mes === creditoInfo.quantidadeParcelas) {
        const ano = Math.ceil(mes / 12);
        dadosGrafico.push({
          ano,
          ganhoPotencial,
          custoEmprestimo: totalPago
        });
      }

      if (saldoDevedor === 0) break;
    }

    setDadosGrafico(dadosGrafico);
    setGraficoVisivel(true);
  }, [creditoInfo.quantidadeParcelas, creditoInfo.taxaJurosMensal, custoCreditoInfo, projetoInfo]);

  const handleCreditoChange = (field: keyof CreditoInfo, value: string) => {
    const novoValor = Number(value);
    if (!isNaN(novoValor)) {
      setCreditoInfo(prev => ({
        ...prev,
        [field]: novoValor
      }));
      calcularCustoOportunidade();
    }
  };

  const handleParcelasChange = (value: string) => {
    const parcelas = Number(value);
    if (!isNaN(parcelas)) {
      setCreditoInfo(prev => ({
        ...prev,
        quantidadeParcelas: parcelas
      }));
      calcularCustoOportunidade();
    }
  };

  const handleProjetoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Se for o campo de descrição, atualiza diretamente como string
    if (name === 'descricao') {
      setProjetoInfo(prev => ({
        ...prev,
        [name]: value
      }));
      return;
    }
    
    // Para os outros campos, converte para número
    const novoValor = Number(value);
    if (!isNaN(novoValor)) {
      setProjetoInfo(prev => ({
        ...prev,
        [name]: novoValor
      }));
      calcularCustoOportunidade();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center tracking-tight">
          Simulador de Investimento
        </h1>
        <p className="text-slate-600 text-center mb-8 md:mb-12 text-base md:text-lg">
          Análise inteligente para decisões estratégicas
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
            calcularCustoCredito={calcularCustoOportunidade}
            custoCreditoInfo={custoCreditoInfo}
            dadosGraficoPagamento={dadosGraficoPagamento}
            dadosGrafico={dadosGrafico}
            custoOportunidade={dadosGrafico.find(
              dado => dado.ganhoPotencial > dado.custoEmprestimo
            )}
            formatoMoeda={formatoMoeda}
            graficoVisivel={graficoVisivel}
          />
        </div>
      </div>
    </div>
  );
};

export default CustoOportunidadeCalculadora;