import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";

import { ArrowRight, Calculator, LineChart, Shield, BarChart3, Coins, HeartHandshake } from "lucide-react";

import Image from 'next/image';

export const revalidate = 3600

export default function Home() {

  return (

    <>

      {/* Hero Section - Reduced Height */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-950 to-blue-900 text-white py-12">
        <div className="absolute inset-0" role="img" aria-label="Imagem de fundo representando sucesso financeiro">
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3"
            alt="Home Equity e Crédito com Garantia de Imóvel"
            fill
            priority
            className="object-cover opacity-10"
            quality={75}
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-3 text-blue-300 font-semibold tracking-wide text-lg uppercase">
            Home Equity | Crédito com Garantia de Imóvel
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Desbloqueie o Potencial do Seu Patrimônio
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-blue-300">
              Realize seus projetos de maneira inteligente
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Transforme seu imóvel em uma ferramenta para viabilizar suas ambições
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Entenda se o home equity faz sentido para seu caso, e como fazer o seu projeto da maneira mais segura
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Custo de Oportunidade */}
            <Link href="/custo-oportunidade" className="group">
              <Card className="h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-600">
                <BarChart3 className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Custo de Oportunidade</h3>
                <p className="text-gray-600 mb-4">Calcule o custo de oportunidade do seu dinheiro e tome decisões financeiras mais inteligentes.</p>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700">
                  Calcular Agora <ArrowRight className="ml-2" />
                </Button>
              </Card>
            </Link>

            {/* Calculadora de Amortização */}
            <Link href="/plano-financeiro" className="group">
              <Card className="h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-green-600">
                <Coins className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Calculadora de Amortização</h3>
                <p className="text-gray-600 mb-4">Simule diferentes cenários de financiamento e encontre o plano ideal para você.</p>
                <Button className="mt-auto bg-green-600 hover:bg-green-700">
                  Simular Agora <ArrowRight className="ml-2" />
                </Button>
              </Card>
            </Link>

            {/* Melhor Oferta */}
            <Link href="/consultoria" className="group">
              <Card className="h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-purple-600">
                <HeartHandshake className="h-16 w-16 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Melhor Oferta</h3>
                <p className="text-gray-600 mb-4">Receba consultoria gratuita e encontre as melhores condições para o seu projeto.</p>
                <Button className="mt-auto bg-purple-600 hover:bg-purple-700">
                  Consultar Agora <ArrowRight className="ml-2" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50" aria-label="Vantagens do Crédito Patrimonial">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-16">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">

              Crédito com Garantia de Imóvel

            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

              As melhores condições do mercado para transformar seu patrimônio em oportunidades 
              reais de crescimento e realização.

            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">

              <Calculator className="h-10 w-10 sm:h-12 sm:w-12 text-blue-900 mb-3 sm:mb-4" />

              <h3 className="text-lg sm:text-xl font-semibold mb-2">

                Taxas Competitivas

              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">

                Juros a partir de 0,99% ao mês, as menores taxas do mercado para 
                crédito com garantia de imóvel.

              </p>

            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">

              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-900 mb-3 sm:mb-4" />

              <h3 className="text-lg sm:text-xl font-semibold mb-2">

                Processo Seguro

              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">

                Garantimos total segurança jurídica e transparência em todas as etapas 
                do processo de crédito.

              </p>

            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">

              <LineChart className="h-10 w-10 sm:h-12 sm:w-12 text-blue-900 mb-3 sm:mb-4" />

              <h3 className="text-lg sm:text-xl font-semibold mb-2">

                Consultoria Especializada

              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">

                Equipe especializada em crédito com garantia de imóvel para orientar 
                você em cada etapa.

              </p>

            </Card>

          </div>

        </div>

      </section>

      {/* CTA Section */}

      <section className="py-12 sm:py-16 md:py-20 bg-blue-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">

            Realize Seus Projetos com Segurança

          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">

            Simule agora seu crédito com garantia de imóvel e descubra as melhores 
            condições para seu projeto.

          </p>

          <Button

            size="lg"

            className="bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg h-12 sm:h-14 w-full sm:w-auto px-4 sm:px-8"

            asChild

          >

            <Link href="/calculadora" className="flex items-center justify-center">

              Simular Crédito Agora <ArrowRight className="ml-2 h-5 w-5" />

            </Link>

          </Button>

        </div>

      </section>

    </>

  );

}