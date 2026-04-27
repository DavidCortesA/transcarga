import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Award,
  Users,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Transcarga MX — 20 Años de Logística Industrial en México",
  description:
    "Conoce a Transcarga MX, la empresa logística de Monterrey que durante 20 años ha movido las industrias más exigentes de México con confiabilidad y tecnología.",
};

const values = [
  {
    icon: Shield,
    title: "Confiabilidad",
    description:
      "Cada embarque llega a tiempo y en perfecto estado. Nuestros clientes duermen tranquilos porque saben que estamos en control.",
  },
  {
    icon: TrendingUp,
    title: "Eficiencia Operativa",
    description:
      "Optimizamos cada ruta, reducimos tiempos muertos y maximizamos la utilización de activos para dar el mejor costo-beneficio.",
  },
  {
    icon: Users,
    title: "Servicio Personalizado",
    description:
      "No somos un proveedor más. Somos el socio logístico que entiende tu negocio y propone soluciones antes de que surjan los problemas.",
  },
  {
    icon: Award,
    title: "Excelencia Certificada",
    description:
      "ISO 9001, C-TPAT y OEA avalan que nuestros procesos están al nivel de los estándares internacionales más exigentes.",
  },
];

const timeline = [
  { year: "2004", event: "Fundación de Transcarga MX en Monterrey con 12 unidades propias" },
  { year: "2008", event: "Expansión a cobertura nacional — 32 estados de la República" },
  { year: "2012", event: "Certificación ISO 9001 y sistema de rastreo GPS propio" },
  { year: "2016", event: "Obtención de certificación C-TPAT y apertura de base en CDMX" },
  { year: "2019", event: "Lanzamiento de plataforma digital de tracking para clientes" },
  { year: "2022", event: "Ampliación de flota a 350+ unidades y nuevo centro logístico" },
  { year: "2024", event: "Implementación de IA para optimización de rutas y predictivo de mantenimiento" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80&fit=crop"
            alt="Operaciones Transcarga MX"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-4">
              Quiénes Somos
            </p>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              20 años moviendo
              <br />
              <span className="text-gradient">la industria mexicana</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Nacimos en Monterrey como una empresa familiar con 12 camiones y un
              compromiso inquebrantable con la puntualidad. Hoy somos uno de los
              operadores logísticos más confiables del país.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85&fit=crop"
                  alt="Centro logístico Transcarga"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "20+", label: "Años" },
                      { value: "350+", label: "Unidades" },
                      { value: "99.4%", label: "Efectividad" },
                    ].map(({ value, label }) => (
                      <div key={label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                        <div className="text-amber-400 font-black text-xl leading-none">{value}</div>
                        <div className="text-white text-xs mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Nuestra Misión</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Ser el socio logístico de mayor confianza para la industria mexicana,
                  proporcionando soluciones de transporte que reduzcan costos, eliminen
                  riesgos y generen ventaja competitiva para nuestros clientes.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Nuestra Visión</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Consolidarnos como el operador logístico líder del norte de México,
                  integrando tecnología avanzada y talento humano de excelencia para
                  brindar servicios que superen las expectativas del mercado global.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-amber-600 font-bold text-xs tracking-widest uppercase mb-3">
                  Certificaciones Vigentes
                </p>
                <div className="space-y-2">
                  {["ISO 9001:2015 — Sistema de Gestión de Calidad", "C-TPAT — Customs-Trade Partnership Against Terrorism", "OEA Autorizado — Operador Económico Autorizado", "DGAF — Dirección General de Autotransporte Federal"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-3">
              Nuestros Valores
            </p>
            <h2 className="text-4xl font-black text-white">
              Lo que nos hace diferentes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-7 transition-all group card-hover"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-3">
              Historia
            </p>
            <h2 className="text-4xl font-black text-slate-900">
              20 años de crecimiento continuo
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-8">
              {timeline.map(({ year, event }) => (
                <div key={year} className="relative flex items-start gap-6">
                  <div className="w-16 shrink-0 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow z-10 mt-1" />
                  </div>
                  <div className="bg-white rounded-xl border border-slate-100 p-5 flex-1 shadow-sm">
                    <div className="text-amber-600 font-black text-lg mb-1">{year}</div>
                    <p className="text-slate-700 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Únete a los +1,200 clientes que confían en nosotros
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Descubre por qué las industrias más exigentes de México eligen
            Transcarga MX como su socio logístico estratégico.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-4 rounded-xl text-lg transition-all"
          >
            Iniciar Conversación Comercial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
