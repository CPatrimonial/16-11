import React from 'react';
import { motion } from 'framer-motion';
import { CampoMonetario } from './CampoMonetario';
import type { FormularioInvestimentoProps } from './types';

export const FormularioInvestimento: React.FC<FormularioInvestimentoProps> = ({
  projetoInfo,
  setProjetoInfo,
  onCalcular,
  erros
}) => {
  return (
    <div className="space-y-4">
      <CampoMonetario
        label="Investimento Total"
        valor={projetoInfo.investimentoTotal}
        onChange={(valor) => setProjetoInfo(prev => ({ ...prev, investimentoTotal: valor }))}
        erro={erros.investimentoTotal}
      />
      
      <CampoMonetario
        label="Retorno Mensal Esperado"
        valor={projetoInfo.retornoMensal}
        onChange={(valor) => setProjetoInfo(prev => ({ ...prev, retornoMensal: valor }))}
        erro={erros.retornoMensal}
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onCalcular}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Calcular Viabilidade
      </motion.button>
    </div>
  );
}; 