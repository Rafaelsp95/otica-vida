import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ótica — Sua visão, nosso cuidado",
  description: "Ótica especializada em óculos de grau e de sol. Produtos de qualidade e atendimento personalizado.",
  robots: "noindex nofollow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.png" type="image/svg+xml"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
