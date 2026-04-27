import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transcarga MX | Logística Industrial y Transporte Empresarial en México",
  description:
    "Empresa líder en logística industrial, transporte de carga pesada y soluciones empresariales en Monterrey y todo México. Más de 20 años atendiendo las grandes industrias del país.",
  keywords:
    "logística industrial Monterrey, transporte empresarial México, empresa de transporte de carga pesada, soluciones logísticas industriales, fletes especializados, transporte dedicado",
  openGraph: {
    title: "Transcarga MX | Logística Industrial Premium",
    description:
      "Soluciones logísticas de alto nivel para la industria mexicana. Confiabilidad, cobertura nacional y capacidad operativa.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.className} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
