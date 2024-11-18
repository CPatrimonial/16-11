"use client";

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CreditInfoProps {
  creditoInfo: {
    taxaJurosMensal: number;
    quantidadeParcelas: number;
  };
  handleCreditoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleParcelasChange: (value: number[]) => void;
  custoCreditoInfo: {
    parcelaMensal: number;
    custoTotal: number;
    jurosTotal: number;
  } | null;
  dadosGraficoPagamento: Array<{
    mes: number;
    saldoDevedor: number;
    parcela: number;
  }>;
  formatoMoeda: Intl.NumberFormat;
}

export function CreditInfo({
  creditoInfo,
  handleCreditoChange,
  handleParcelasChange,
  custoCreditoInfo,
  dadosGraficoPagamento,
  formatoMoeda,
}: CreditInfoProps) {
  // Formatter para o Tooltip e YAxis
  const formatValue = (value: number | string) => {
    return formatoMoeda.format(Number(value));
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Simulação de Crédito</h2>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Taxa de Juros (a.m.)
            </label>
            <div className="relative">
              <Input
                name="taxaJurosMensal"
                type="number"
                placeholder="Taxa de Juros a.m."
                className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 pr-8 bg-white/50 hover:bg-white"
                onChange={handleCreditoChange}
                step="0.01"
                value={creditoInfo.taxaJurosMensal}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500">%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Prazo: {creditoInfo.quantidadeParcelas} meses
            </label>
            <div className="flex items-center h-[40px] px-2">
              <Slider
                min={36}
                max={240}
                step={12}
                value={[creditoInfo.quantidadeParcelas]}
                onValueChange={handleParcelasChange}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {custoCreditoInfo && (
          <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm font-medium text-blue-600 mb-1">Custo Total</p>
                  <p className="text-lg font-semibold text-slate-800">
                    {formatoMoeda.format(custoCreditoInfo.custoTotal)}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm font-medium text-blue-600 mb-1">Total de Juros</p>
                  <p className="text-lg font-semibold text-blue-800">
                    {formatoMoeda.format(custoCreditoInfo.jurosTotal)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-medium text-blue-600 mb-1">Parcela Mensal</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
                  {formatoMoeda.format(custoCreditoInfo.parcelaMensal)}
                </p>
                <div className="mt-3 text-right">
                  <p className="text-sm font-medium text-blue-600">Comprovação de Renda</p>
                  <p className="text-lg font-semibold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
                    {formatoMoeda.format((custoCreditoInfo.parcelaMensal * 10) / 3)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {dadosGraficoPagamento.length > 0 && (
          <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-6 text-slate-800">Evolução do Saldo Devedor</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart 
                data={dadosGraficoPagamento}
                margin={{ top: 10, right: 30, left: 30, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="mes" 
                  stroke="#64748b"
                  tickMargin={10}
                />
                <YAxis 
                  tickFormatter={formatValue} 
                  stroke="#64748b"
                  width={100}
                  tickMargin={5}
                />
                <Tooltip
                  formatter={(value: number | string) => [formatValue(value), 'Saldo Devedor']}
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="saldoDevedor"
                  stroke="#1e40af"
                  fill="url(#colorGradient)"
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e40af" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}