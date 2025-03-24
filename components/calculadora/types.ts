export interface ProjetoInfo {
  investimentoTotal: number;
  retornoMensal: number;
}

export interface ResultadoSimulacao {
  retornoAnual: number;
  tempoRetorno: number;
  viabilidade: 'alto' | 'medio' | 'baixo';
  roi: number;
}

export interface FormularioInvestimentoProps {
  projetoInfo: ProjetoInfo;
  setProjetoInfo: React.Dispatch<React.SetStateAction<ProjetoInfo>>;
  onCalcular: () => void;
  erros: Record<string, string>;
} 