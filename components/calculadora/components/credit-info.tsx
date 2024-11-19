"use client";

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
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
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface CreditoInfo {
  taxaJurosMensal: number;
  quantidadeParcelas: number;
}

interface CustoCreditoInfo {
  parcelaMensal: number;
  custoTotal: number;
  jurosTotal: number;
}

interface CreditInfoProps {
  creditoInfo: CreditoInfo;
  handleCreditoChange: (field: keyof CreditoInfo, value: string) => void;
  handleParcelasChange: (value: string) => void;
  calcularCustoCredito: () => void;
  custoCreditoInfo: CustoCreditoInfo | null;
  dadosGraficoPagamento: Array<any>;
  dadosGrafico: Array<any>;
  custoOportunidade: any;
  formatoMoeda: Intl.NumberFormat;
  graficoVisivel: boolean;
}

export function CreditInfo({
  creditoInfo,
  handleCreditoChange,
  handleParcelasChange,
  calcularCustoCredito,
  custoCreditoInfo,
  dadosGraficoPagamento,
  dadosGrafico,
  custoOportunidade,
  formatoMoeda,
  graficoVisivel
}: CreditInfoProps) {
  // Efeito para recalcular quando houver mudanças nos valores
  useEffect(() => {
    const parcelaMensal = custoCreditoInfo?.parcelaMensal;
    if (parcelaMensal && parcelaMensal > 0) {
      calcularCustoCredito();
    }
  }, [custoCreditoInfo?.parcelaMensal, calcularCustoCredito]);

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-full overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 md:py-6 px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Simulação de Crédito</h2>
      </CardHeader>
      <CardContent className="p-4 md:p-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Taxa de Juros (a.m.)
            </label>
            <div className="relative">
              <Input
                name="taxaJurosMensal"
                type="number"
                placeholder="Taxa de Juros a.m."
                className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 pr-8 bg-white/50 hover:bg-white h-12 text-base"
                onChange={(e) => handleCreditoChange('taxaJurosMensal', e.target.value)}
                step="0.01"
                value={creditoInfo.taxaJurosMensal}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500">%</span>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Prazo: {creditoInfo.quantidadeParcelas} meses
            </label>
            <div className="flex items-center min-h-[48px] px-2">
              <Slider
                min={36}
                max={240}
                step={12}
                value={[creditoInfo.quantidadeParcelas]}
                onValueChange={(value) => handleParcelasChange(value.toString())}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {custoCreditoInfo && (
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-xs font-medium text-blue-600">Parcela Mensal</span>
                <span className="text-base font-bold text-slate-800">
                  {custoCreditoInfo?.parcelaMensal ? formatoMoeda.format(custoCreditoInfo.parcelaMensal) : 'R$ 0'}
                </span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-xs font-medium text-blue-600">Custo Total</span>
                <span className="text-base font-bold text-slate-800">
                  {custoCreditoInfo?.custoTotal ? formatoMoeda.format(custoCreditoInfo.custoTotal) : 'R$ 0'}
                </span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-xs font-medium text-blue-600">Total em Juros</span>
                <span className="text-base font-bold text-slate-800">
                  {custoCreditoInfo?.jurosTotal ? formatoMoeda.format(custoCreditoInfo.jurosTotal) : 'R$ 0'}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Parcela Mensal</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900">
                  {custoCreditoInfo?.parcelaMensal ? formatoMoeda.format(custoCreditoInfo.parcelaMensal) : 'R$ 0'}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Comprovação de Renda</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900">
                  {custoCreditoInfo?.parcelaMensal ? formatoMoeda.format((custoCreditoInfo.parcelaMensal * 10) / 3) : 'R$ 0'}
                </p>
              </div>
            </div>

            {graficoVisivel && dadosGrafico.length > 0 && (
              <div className="space-y-6">
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
                        formatter={(value: number) => formatoMoeda.format(value)}
                        labelFormatter={(label) => `Ano ${label}`}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="ganhoPotencial"
                        name="Ganho Potencial"
                        fill="#4ade80"
                        stroke="#22c55e"
                        fillOpacity={0.3}
                      />
                      <Line
                        type="monotone"
                        dataKey="custoEmprestimo"
                        name="Custo do Empréstimo"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-sm font-medium text-slate-700 mb-2">
                      Análise do Investimento
                    </h3>
                    <p className="text-sm text-slate-600">
                      {custoOportunidade ? (
                        `O investimento se paga em ${custoOportunidade.ano} anos, quando os ganhos superam os custos do financiamento.`
                      ) : (
                        'Os ganhos não superam os custos do financiamento no período analisado.'
                      )}
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-sm font-medium text-slate-700 mb-2">
                      Recomendação
                    </h3>
                    <p className="text-sm text-slate-600">
                      {custoOportunidade ? (
                        `Recomendamos prosseguir com o investimento, pois ele se mostra viável a partir do ${custoOportunidade.ano}º ano.`
                      ) : (
                        'Sugerimos reavaliar as condições do financiamento ou buscar alternativas de investimento.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}