import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Crédito Patrimonial</h3>
            <p className="text-sm text-gray-300 mb-4">
              Transformando seu patrimônio em oportunidades para realizar grandes projetos!
            </p>
            <p className="text-sm text-gray-300 mb-4">
              Ajudando clientes a conseguirem as melhores ofertas de home equity desde 2021.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/cr%C3%A9dito-patrimonial/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/creditopatrimonial/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Coluna 2 - Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-300">Email:</p>
                <a href="mailto:consultoria@creditopatrimonial.com.br" className="text-sm text-gray-300 hover:text-white">
                  consultoria@creditopatrimonial.com.br
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">WhatsApp:</p>
                <a 
                  href="https://api.whatsapp.com/send?phone=5516997338791&text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20a%20Cr%C3%A9dito%20Patrimonial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  (16) 99733-8791
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Localização:</p>
                <p className="text-sm text-gray-300">Ribeirão Preto - SP</p>
              </div>
            </div>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculadora" className="text-sm text-gray-300 hover:text-white">
                  Custo de Oportunidade
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-gray-300 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Por que a Crédito Patrimonial? */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Por que a Crédito Patrimonial?</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-green-400">•</span>
                <span className="text-sm text-gray-300">Correspondente Bancário autorizado</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">•</span>
                <span className="text-sm text-gray-300">Membro ABCIP</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">•</span>
                <span className="text-sm text-gray-300">ISO 27001 - Segurança da Informação</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória e Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-300">
              <p> {new Date().getFullYear()} Crédito Patrimonial. Todos os direitos reservados.</p>
            </div>
            <div className="text-sm text-gray-300 md:text-right">
              <Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link>
              <span className="mx-2">|</span>
              <Link href="/termos" className="hover:text-white">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;