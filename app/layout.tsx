import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuri Alcantara — Planejamento & Estratégia",
  description: "Portfólio de Yuri Alcantara, Diretor de Planejamento e Estratégia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
