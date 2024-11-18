"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, ArrowRight, CheckCircle2, Target, LineChart, Shield } from "lucide-react";
import Link from "next/link";

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="premium-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8">
            Consultoria Patrimonial
            <span className="block premium-text-gradient mt-2">Extraordinária</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Transforme seu patrimônio em um legado extraordinário através de estratégias personalizadas e expertise incomparável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              size="lg"
              className="premium-button bg-blue-900 hover:bg-blue-800 text-lg h-14 px-8"
              asChild
            >
              <Link href="#agendar">
                Agendar Consultoria Exclusiva
                <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="premium-button border-blue-900 text-blue-900 hover:bg-blue-50 text-lg h-14 px-8"
              asChild
            >
              <Link href="#duvidas">
                Diálogo Personalizado
                <MessageCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="premium-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
            Nossa Abordagem <span className="premium-text-gradient">Distintiva</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <Card className="premium-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 group-hover:bg-blue-100 transition-colors"></div>
              <Target className="h-14 w-14 text-blue-900 mb-6 relative z-10" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Análise Estratégica</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                Desenvolvemos um diagnóstico profundo e meticuloso do seu patrimônio e aspirações.
              </p>
            </Card>

            <Card className="premium-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 group-hover:bg-blue-100 transition-colors"></div>
              <LineChart className="h-14 w-14 text-blue-900 mb-6 relative z-10" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Planejamento Elite</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                Criamos soluções sob medida que maximizam o potencial do seu patrimônio.
              </p>
            </Card>

            <Card className="premium-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 group-hover:bg-blue-100 transition-colors"></div>
              <Shield className="h-14 w-14 text-blue-900 mb-6 relative z-10" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Execução Primorosa</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                Implementamos estratégias com precisão e acompanhamento contínuo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="premium-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
            Excelência em Cada <span className="premium-text-gradient">Detalhe</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              {[
                "Consultoria exclusiva e personalizada",
                "Análise patrimonial aprofundada",
                "Estratégias financeiras sofisticadas",
                "Acesso a oportunidades diferenciadas",
                "Acompanhamento dedicado e contínuo",
                "Confidencialidade absoluta"
              ].map((benefit, index) => (
                <div key={index} className="premium-card flex items-center space-x-4 p-6 rounded-xl">
                  <CheckCircle2 className="h-8 w-8 text-blue-900 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="premium-gradient rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Nossa Filosofia</h3>
              <p className="text-xl leading-relaxed mb-10">
                Buscamos a excelência em cada aspecto do nosso serviço, garantindo que seu patrimônio receba o cuidado e atenção que merece, com soluções verdadeiramente personalizadas.
              </p>
              <div className="flex flex-col space-y-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="premium-button w-full bg-white text-blue-900 hover:bg-blue-50 h-14"
                  asChild
                >
                  <Link href="#agendar">
                    Iniciar Jornada
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendar" className="py-16 md:py-24 premium-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="premium-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Eleve Seu Patrimônio ao Próximo Nível
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Agende uma reunião exclusiva com nossos especialistas e descubra como podemos transformar seus objetivos em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              size="lg"
              className="premium-button bg-white text-blue-900 hover:bg-blue-50 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto"
              asChild
            >
              <Link href="https://calendly.com/consultoria-creditopatrimonial/consultoria-gratuita">
                Agendar Consultoria Exclusiva
                <Calendar className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="premium-button bg-green-500 text-white hover:bg-green-600 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto border-none flex items-center justify-center"
              asChild
            >
              <Link href="https://api.whatsapp.com/send?phone=5516997338791&text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20a%20Cr%C3%A9dito%20Patrimonial">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                WhatsApp Corporativo
                <MessageCircle className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}