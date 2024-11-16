"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Gestão Estratégica",
      items: [
        { name: "Arte da Negociação", href: "/arte-negociacao" },
        { name: "Reestruturação Patrimonial", href: "/reestruturacao-patrimonial" },
      ],
    },
    {
      title: "Projetos Estratégicos",
      items: [
        { name: "Análise de Viabilidade", href: "/analise-viabilidade" },
        { name: "Estruturação de Garantias", href: "/estruturacao-garantias" },
      ],
    },
    {
      title: "Análise Avançada",
      items: [
        { name: "Modelagem de Cenários", href: "/modelagem-cenarios" },
        { name: "Estratégias de Preservação", href: "/estrategias-preservacao" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              Crédito Patrimonial
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((section) => (
                <div key={section.title} className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    {section.title}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button asChild variant="outline" className="mr-4">
              <Link href="/custo-oportunidade">Simular Crédito</Link>
            </Button>
            <Button asChild>
              <Link href="/consultoria">Consultoria Gratuita</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;