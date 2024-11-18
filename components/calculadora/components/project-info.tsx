"use client";

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ProjectInfoProps {
  projetoInfo: {
    descricao: string;
    ganhosQualidadeVida: number;
    ganhoValorizacao: number;
    ganhoAluguel: number;
    economiaGerada: number;
    investimentoViabilizacao: number;
  };
  handleProjetoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  ganhoPotencial: number;
  expectativaLucro: number;
  formatoMoeda: Intl.NumberFormat;
}

export function ProjectInfo({
  projetoInfo,
  handleProjetoChange,
  ganhoPotencial,
  expectativaLucro,
  formatoMoeda,
}: ProjectInfoProps) {
  // Função para formatar o valor como moeda
  const formatarMoeda = (valor: string) => {
    const numero = valor.replace(/\D/g, '');
    const valorNumerico = parseInt(numero);
    return valorNumerico ? formatoMoeda.format(valorNumerico) : '';
  };

  // Função para remover a formatação e enviar apenas o número
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numeroLimpo = value.replace(/\D/g, '');
    
    const novoEvento = {
      target: {
        name,
        value: numeroLimpo
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    handleProjetoChange(novoEvento);
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Informações do Projeto</h2>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm">
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm font-medium text-blue-600 mb-1">Ganho Potencial</span>
            <span className="text-xl font-bold text-slate-800">{formatoMoeda.format(ganhoPotencial)}</span>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm font-medium text-blue-600 mb-1">Investimento</span>
            <span className="text-xl font-bold text-slate-800">{formatoMoeda.format(projetoInfo.investimentoViabilizacao)}</span>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm font-medium text-blue-600 mb-1">ROI</span>
            <span className="text-xl font-bold text-slate-800">{expectativaLucro.toFixed(2)}x</span>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-2">Descrição do Projeto</label>
          <textarea
            name="descricao"
            className="w-full h-32 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
            placeholder="Descreva seu projeto considerando todos os aspectos que o tornam único e valioso."
            onChange={handleProjetoChange}
            value={projetoInfo.descricao}
          />
          <p className="text-sm text-slate-500 mt-2 italic">
            Detalhe os benefícios e o impacto esperado em seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { name: 'ganhosQualidadeVida', label: 'Ganhos em Qualidade de Vida', icon: '✨' },
            { name: 'ganhoValorizacao', label: 'Ganho de Valorização do Ativo', icon: '📈' },
            { name: 'ganhoAluguel', label: 'Ganho de Aluguel', icon: '🏠' },
            { name: 'economiaGerada', label: 'Economia Gerada', icon: '💰' },
            { name: 'investimentoViabilizacao', label: 'Investimento para Viabilização', icon: '💎' },
          ].map((field) => (
            <div key={field.name} className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <span className="mr-2">{field.icon}</span>
                {field.label}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                  R$
                </span>
                <Input
                  name={field.name}
                  type="text"
                  placeholder="0"
                  className="pl-8 transition-all duration-300 focus:ring-2 focus:ring-blue-500 bg-white/50 hover:bg-white"
                  onChange={handleInputChange}
                  value={formatarMoeda(projetoInfo[field.name as keyof typeof projetoInfo].toString()).replace('R$', '').trim()}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}