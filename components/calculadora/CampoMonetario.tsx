import React from 'react';
import { motion } from 'framer-motion';

interface CampoMonetarioProps {
  label: string;
  valor: number;
  onChange: (valor: number) => void;
  erro?: string;
}

const formatarMoeda = (valor: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(valor);
};

const tratarEntradaMoeda = (valor: string): number => {
  return Number(valor.replace(/\D/g, '')) / 100;
};

export const CampoMonetario: React.FC<CampoMonetarioProps> = ({ 
  label, 
  valor, 
  onChange, 
  erro 
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <motion.input
        type="text"
        value={formatarMoeda(valor)}
        onChange={(e) => onChange(tratarEntradaMoeda(e.target.value))}
        className={`
          w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
          ${erro ? 'border-red-500' : 'border-gray-300'}
        `}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      
      {erro && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {erro}
        </motion.p>
      )}
    </div>
  );
}; 