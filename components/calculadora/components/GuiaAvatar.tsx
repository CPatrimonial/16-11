import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GuiaAvatarProps {
  passo: {
    titulo: string;
    descricao: string;
  };
  onProximo: () => void;
  onPular: () => void;
  progresso: number;
  total: number;
}

const GuiaAvatar = ({ passo, onProximo, onPular, progresso, total }: GuiaAvatarProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl p-4 border border-blue-100"
      >
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl">🤖</span>
          </div>

          {/* Conteúdo */}
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 mb-1">{passo.titulo}</h3>
            <p className="text-sm text-slate-600 mb-3">{passo.descricao}</p>

            {/* Barra de Progresso */}
            <div className="w-full bg-slate-200 h-1.5 rounded-full mb-3">
              <div 
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${(progresso / total) * 100}%` }}
              />
            </div>

            {/* Botões */}
            <div className="flex justify-between items-center">
              <button
                onClick={onPular}
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                Pular guia
              </button>
              <button
                onClick={onProximo}
                className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GuiaAvatar; 