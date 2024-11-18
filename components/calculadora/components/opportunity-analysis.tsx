"use client";

import { Button } from '@/components/ui/button';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

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
        className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
      >
        Analisar Custo de Oportunidade
      </Button>

      {graficoVisivel && (
        <div className="mt-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">Análise de Custo de Oportunidade</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={dadosGrafico}>
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
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  fontSize: '12px'
                }}
              />
              <Legend />
              <ReferenceLine
                y={dadosGrafico[0]?.ganhoPotencial}
                label="Ganho Potencial"
                stroke="#1e40af"
                strokeDasharray="3 3"
              />
              <Line 
                type="monotone" 
                dataKey="custoEmprestimo" 
                name="Custo do Crédito" 
                stroke="#3b82f6" 
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
          {custoOportunidade && (
            <p className="mt-4 text-center text-sm font-medium text-blue-600">
              Custo de Oportunidade: {formatoMoeda.format(custoOportunidade.ganhoPotencial - custoOportunidade.custoEmprestimo)} 
              no ano {custoOportunidade.ano}
            </p>
          )}
        </div>
      )}
    </>
  );
}