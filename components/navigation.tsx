"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navigation = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Gestão Estratégica",
      items: [
        { title: "A Arte da Negociação", href: "/gestao-estrategica/arte-negociacao" },
        { title: "Reestruturação Patrimonial", href: "/gestao-estrategica/reestruturacao-patrimonial" },
      ],
    },
    {
      title: "Projetos Estratégicos",
      items: [
        { title: "Análise de Viabilidade", href: "/projetos-estrategicos/analise-viabilidade" },
        { title: "Estruturação de Garantias", href: "/projetos-estrategicos/estruturacao-garantias" },
      ],
    },
    {
      title: "Análise Avançada",
      items: [
        { title: "Modelagem de Cenários", href: "/analise-avancada/modelagem-cenarios" },
        { title: "Estratégias de Preservação", href: "/analise-avancada/estrategias-preservacao" },
      ],
    },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900">
            Crédito Patrimonial
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((section) => (
                <NavigationMenuItem key={section.title}>
                  <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 ${
                                pathname === item.href ? "bg-slate-100" : ""
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Navigation;