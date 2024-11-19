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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Se for o campo de descrição, passa o valor direto
    if (name === 'descricao') {
      handleProjetoChange(e);
      return;
    }
    
    // Para campos numéricos, remove caracteres não numéricos
    const numeroLimpo = value.replace(/\D/g, '');
    
    const novoEvento = {
      target: {
        name,
        value: numeroLimpo
      }
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    
    handleProjetoChange(novoEvento);
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 md:py-6 px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Informações do Projeto</h2>
      </CardHeader>
      <CardContent className="p-4 md:p-8">
        <div className="flex flex-row gap-2 md:gap-4 mb-6">
          <div className="flex-1 text-center p-2 md:p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-[11px] md:text-xs font-medium text-blue-600">Ganho Potencial</span>
            <span className="text-sm md:text-base font-bold text-slate-800">{formatoMoeda.format(ganhoPotencial)}</span>
          </div>
          <div className="flex-1 text-center p-2 md:p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-[11px] md:text-xs font-medium text-blue-600">Investimento</span>
            <span className="text-sm md:text-base font-bold text-slate-800">{formatoMoeda.format(projetoInfo.investimentoViabilizacao)}</span>
          </div>
          <div className="flex-1 text-center p-2 md:p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-[11px] md:text-xs font-medium text-blue-600">ROI</span>
            <span className="text-sm md:text-base font-bold text-slate-800">{expectativaLucro.toFixed(2)}x</span>
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-2">Descrição do Projeto</label>
          <textarea
            name="descricao"
            className="w-full h-24 md:h-32 p-3 md:p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
            placeholder="Descreva seu projeto considerando todos os aspectos que o tornam único e valioso."
            onChange={handleInputChange}
            value={projetoInfo.descricao}
          />
          <p className="text-xs md:text-sm text-slate-500 mt-2 italic">
            Detalhe os benefícios e o impacto esperado em seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                  type="text"
                  name={field.name}
                  value={projetoInfo[field.name as keyof typeof projetoInfo].toString()}
                  onChange={handleInputChange}
                  className="pl-8 w-full bg-white/50"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}