"use client";

import CalculadoraAmortizacao from '@/components/calculadora/calculadora-amortizacao';

export default function PlanoFinanceiroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center pt-32 pb-12">
          <h1 className="premium-heading text-4xl md:text-5xl font-bold mb-6">
            Plano Financeiro
            <span className="block premium-text-gradient mt-2">Personalizado</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Simule diferentes cenários e encontre a melhor estratégia para seu patrimônio
          </p>
        </div>
        <CalculadoraAmortizacao />
      </div>
    </div>
  );
}