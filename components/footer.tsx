import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Crédito Patrimonial</h3>
            <p className="text-gray-300 text-sm">
              Transformando seu patrimônio em oportunidades reais para realizar grandes projetos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/calculadora" className="text-gray-300 hover:text-white text-sm">
                  Simulador Financeiro
                </Link>
              </li>
              <li>
                <Link href="/consultoria" className="text-gray-300 hover:text-white text-sm">
                  Consultoria Personalizada
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white text-sm">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:consultoria@creditopatrimonial.com.br" className="hover:text-white transition-colors">
                  consultoria@creditopatrimonial.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5516997338791" className="hover:text-white transition-colors">
                  +55 (16) 99733-8791
                </a>
              </li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <Link href="https://api.whatsapp.com/send?phone=5516997338791&text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20a%20Cr%C3%A9dito%20Patrimonial" 
                className="text-gray-300 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-8 pt-8 text-center text-sm text-gray-300">
          <div className="text-sm text-slate-600">
            <p> {new Date().getFullYear()} Crédito Patrimonial. Todos os direitos reservados.</p>
            <p>Ribeirão Preto - SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;