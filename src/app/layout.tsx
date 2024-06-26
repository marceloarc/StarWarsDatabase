import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { CartProvider } from "@/context/CartContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star wars Database",
  description: "Site de informaçoes sobre star wars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="pt-BR">
        <body className="bg-zinc-950"><Navbar /><section className="bg-zinc-950 md:h-full w-full items-center justify-center ">
          {children}</section><Footer /></body>
      </html>
    </CartProvider>
  );
}
