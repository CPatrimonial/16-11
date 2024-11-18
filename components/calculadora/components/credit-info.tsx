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
  custoCreditoInfo: CustoCreditoInfo;
  dadosGrafico: Array<any>;
  custoOportunidade: any;
  formatoMoeda: Intl.NumberFormat;
}

export function CreditInfo({
  creditoInfo,
  handleCreditoChange,
  handleParcelasChange,
  calcularCustoCredito,
  custoCreditoInfo,
  dadosGrafico,
  custoOportunidade,
  formatoMoeda,
}: CreditInfoProps) {
  // Efeito para recalcular quando houver mudanças nos valores
  useEffect(() => {
    if (custoCreditoInfo && custoCreditoInfo.parcelaMensal > 0) {
      calcularCustoCredito();
    }
  }, [creditoInfo, custoCreditoInfo, calcularCustoCredito]);

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-full overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">Simulação de Crédito</h2>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 md:p-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Custo Total</p>
                <p className="text-lg sm:text-xl font-semibold text-slate-800">
                  {formatoMoeda.format(custoCreditoInfo.custoTotal)}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Total de Juros</p>
                <p className="text-lg sm:text-xl font-semibold text-blue-800">
                  {formatoMoeda.format(custoCreditoInfo.jurosTotal)}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Parcela Mensal</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900">
                  {formatoMoeda.format(custoCreditoInfo.parcelaMensal)}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Comprovação de Renda</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900">
                  {formatoMoeda.format((custoCreditoInfo.parcelaMensal * 10) / 3)}
                </p>
              </div>
            </div>

            {dadosGrafico.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Análise de Custo de Oportunidade</h3>
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white/50 p-2 sm:p-4 rounded-xl">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart 
                      data={dadosGrafico}
                      margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="ano" 
                        stroke="#64748b"
                        tickMargin={8}
                        fontSize={10}
                        interval="preserveStartEnd"
                      />
                      <YAxis 
                        scale="log" 
                        domain={['auto', 'auto']} 
                        tickFormatter={(value) => formatoMoeda.format(value)}
                        stroke="#64748b"
                        tickMargin={8}
                        fontSize={10}
                        width={80}
                      />
                      {/* Área verde para custo de oportunidade positivo */}
                      <Area
                        dataKey={(data) => {
                          const ganhoPotencial = dadosGrafico[0]?.ganhoPotencial;
                          const custoOportunidade = ganhoPotencial - data.custoEmprestimo;
                          return custoOportunidade > 0 ? data.custoEmprestimo : null;
                        }}
                        stroke="none"
                        fill="#22c55e"
                        name="custoOportunidadePositivo"
                      />
                      {/* Área vermelha para custo de oportunidade negativo */}
                      <Area
                        dataKey={(data) => {
                          const ganhoPotencial = dadosGrafico[0]?.ganhoPotencial;
                          const custoOportunidade = ganhoPotencial - data.custoEmprestimo;
                          return custoOportunidade < 0 ? data.custoEmprestimo : null;
                        }}
                        stroke="none"
                        fill="#dc2626"
                        name="custoOportunidadeNegativo"
                      />
                      <Tooltip
                        formatter={(value: number, name: string, props: any) => {
                          const labels = {
                            custoEmprestimo: "Custo do Crédito",
                            referenceLine: "Ganho Potencial"
                          };
                          
                          if (name === "custoEmprestimo") {
                            const ganhoPotencial = dadosGrafico[0]?.ganhoPotencial;
                            const custoOportunidade = ganhoPotencial - value;
                            return [
                              <div key={name}>
                                <div>{labels[name as keyof typeof labels]}: {formatoMoeda.format(value)}</div>
                                <div className="text-emerald-600">Custo de Oportunidade: {formatoMoeda.format(custoOportunidade)}</div>
                              </div>,
                              ""
                            ];
                          }
                          
                          return [formatoMoeda.format(value), labels[name as keyof typeof labels]];
                        }}
                        contentStyle={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                          fontSize: '12px',
                          padding: '8px 12px'
                        }}
                      />
                      <Legend 
                        verticalAlign="top" 
                        height={50}
                        formatter={(value) => {
                          const labels = {
                            custoEmprestimo: "Custo do Crédito",
                            referenceLine: "Ganho Potencial"
                          };
                          return labels[value as keyof typeof labels];
                        }}
                        wrapperStyle={{
                          paddingBottom: '20px'
                        }}
                      />
                      <ReferenceLine 
                        y={dadosGrafico[0]?.ganhoPotencial} 
                        stroke="#22c55e"
                        strokeWidth={2}
                        name="referenceLine"
                        isFront={true}
                        label={{
                          value: formatoMoeda.format(dadosGrafico[0]?.ganhoPotencial),
                          position: "right",
                          fill: "#22c55e",
                          fontSize: 12,
                          offset: 10
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="custoEmprestimo"
                        name="custoEmprestimo"
                        stroke="#dc2626" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                {custoOportunidade && (
                  <>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-center text-sm font-medium text-blue-900">
                        {(() => {
                          const breakEvenIndex = dadosGrafico.findIndex((data, index) => {
                            if (index === 0) return false;
                            const custoAtual = dadosGrafico[0].ganhoPotencial - data.custoEmprestimo;
                            const custoAnterior = dadosGrafico[0].ganhoPotencial - dadosGrafico[index - 1].custoEmprestimo;
                            return custoAtual <= 0 && custoAnterior > 0;
                          });

                          if (breakEvenIndex > 0) {
                            return "Quitando o empréstimo dentro da área verde do gráfico, seu custo de oportunidade é positivo!";
                          }
                          
                          return "Seu custo de oportunidade permanece positivo durante todo o período!";
                        })()}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <p className="text-sm font-medium text-gray-700">
                        Quer saber como quitar no prazo?
                      </p>
                      <Button
                        onClick={() => window.location.href = '/plano-financeiro'}
                        variant="default"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Ver Plano Financeiro
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}