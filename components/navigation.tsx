"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/custo-oportunidade", label: "Custo de Oportunidade" },
    { href: "/plano-financeiro", label: "Plano Financeiro" },
    { href: "/consultoria", label: "Consultoria" },
    { href: "/conteudo-patrimonial", label: "Conteúdo Patrimonial" },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Crédito Patrimonial
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-blue-900 hover:bg-blue-800"
              asChild
            >
              <Link href="/consultoria">
                Agendar Consultoria
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white z-40`}
      >
        <div className="pt-16 pb-3 px-4 space-y-3 flex flex-col h-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto pb-6">
            <Button 
              variant="default" 
              className="w-full bg-blue-900 hover:bg-blue-800 py-6 text-lg"
              asChild
            >
              <Link href="/consultoria" onClick={() => setIsOpen(false)}>
                Agendar Consultoria
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;