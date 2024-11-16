"use client";

import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface OpportunityAnalysisProps {
  calcularCustoOportunidade: () => void;
  graficoVisivel: boolean;
  dadosGrafico: {
    ano: number;
    ganhoPotencial: number;
    custoEmprestimo: number;
  }[];
  formatoMoeda: Intl.NumberFormat;
}

interface TooltipFormatterValue {
  value: number;
  name: string;
}

export function OpportunityAnalysis({
  calcularCustoOportunidade,
  graficoVisivel,
  dadosGrafico,
  formatoMoeda,
}: OpportunityAnalysisProps) {
  const custoOportunidade = dadosGrafico.find(
    dado => dado.ganhoPotencial > dado.custoEmprestimo
  );

  const tooltipFormatter = (value: number, name: string) => {
    return [formatoMoeda.format(value), name];
  };

  return (
    <>
      <Button 
        onClick={calcularCustoOportunidade} 
        className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
      >
        Analisar Custo de Oportunidade
      </Button>

      {graficoVisivel && (
        <div className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-slate-800">Análise de Custo de Oportunidade</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={dadosGrafico}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="ano" stroke="#64748b" />
              <YAxis 
                scale="log" 
                domain={['auto', 'auto']} 
                tickFormatter={(value) => formatoMoeda.format(value)}
                stroke="#64748b"
              />
              <Tooltip
                formatter={tooltipFormatter}
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="ganhoPotencial" 
                name="Ganho Potencial" 
                stroke="#1e293b" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="custoEmprestimo" 
                name="Custo do Crédito" 
                stroke="#3b82f6" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          {custoOportunidade && (
            <p className="mt-6 text-center text-lg font-semibold text-blue-600">
              Custo de Oportunidade: {formatoMoeda.format(custoOportunidade.ganhoPotencial - custoOportunidade.custoEmprestimo)} 
              no ano {custoOportunidade.ano}
            </p>
          )}
        </div>
      )}
    </>
  );
}