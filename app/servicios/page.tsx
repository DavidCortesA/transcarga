import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Zap,
  Shield,
  Weight,
  Package,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Transcarga MX — Transporte y Logística Industrial México",
  description:
    "Transporte empresarial, fletes especializados, logística urgente, custodia, maquinaria pesada y distribución nacional. Soluciones logísticas premium en México.",
};

const services = [
  {
    icon: Building2,
    title: "Transporte Empresarial",
    subtitle: "Flota Dedicada para Corporativos",
    description:
      "Diseñamos rutas y asignamos flota exclusiva para grandes empresas que requieren movimiento constante, confiable y trazable de sus mercancías.",
    features: [
      "Flota exclusiva con branding de tu empresa",
      "Operadores asignados y certificados",
      "Reportes ejecutivos semanales",
      "KPIs de desempeño en tiempo real",
      "Account Manager dedicado",
      "Cobertura en toda la República",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85&fit=crop",
    accent: "border-amber-500",
    tag: "Más Solicitado",
    tagColor: "bg-amber-500 text-slate-900",
    id: "transporte-empresarial",
  },
  {
    icon: Weight,
    title: "Fletes Especializados",
    subtitle: "Cargas Sobredimensionadas y Proyectos",
    description:
      "Manejamos cargas que requieren equipo especial: plataformas extendidas, grúas, permisos SCT y escoltas para asegurar el traslado exitoso.",
    features: [
      "Plataformas de 20 a 60 pies",
      "Cargas de hasta 80 toneladas",
      "Gestión completa de permisos SCT",
      "Escolta vehicular especializada",
      "Estudio de ruta previo",
      "Seguro de carga especializado",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
    accent: "border-blue-500",
    tag: "Especializado",
    tagColor: "bg-blue-600 text-white",
    id: "fletes-especializados",
  },
  {
    icon: Zap,
    title: "Logística Urgente",
    subtitle: "Respuesta Inmediata 24/7",
    description:
      "Para cuando la cadena de suministro no puede esperar. Salida garantizada en 2 horas con monitoreo minuto a minuto y comunicación directa.",
    features: [
      "Despacho en menos de 2 horas",
      "Disponibilidad 24/7/365",
      "Monitoreo GPS en tiempo real",
      "Comunicación directa con operador",
      "Confirmación de entrega inmediata",
      "Prioridad sobre otras cargas",
    ],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=85&fit=crop",
    accent: "border-red-500",
    tag: "Express 24/7",
    tagColor: "bg-red-600 text-white",
    id: "logistica-urgente",
  },
  {
    icon: Shield,
    title: "Custodia y Monitoreo",
    subtitle: "Mercancía de Alto Valor y Riesgo",
    description:
      "Transporte con custodia armada para productos de alto valor: electrónica, farmacéutica, joyería, efectivo y mercancía sensible.",
    features: [
      "Custodia armada certificada",
      "Rastreo satelital anti-jamming",
      "Reportes por geofence",
      "Protocolos de seguridad CTPAT",
      "Botón de pánico y respaldo",
      "Seguro de alto valor",
    ],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=85&fit=crop",
    accent: "border-purple-500",
    tag: "Alta Seguridad",
    tagColor: "bg-purple-600 text-white",
    id: "custodia-monitoreo",
  },
  {
    icon: RotateCcw,
    title: "Maquinaria Pesada",
    subtitle: "Traslado de Equipos Industriales",
    description:
      "Especialistas en el movimiento de maquinaria de construcción, equipos de minería, líneas de producción y generadores industriales.",
    features: [
      "Equipos de más de 40 toneladas",
      "Camas bajas y góndolas",
      "Desmontaje y montaje coordinado",
      "Ingeniería de ruta compleja",
      "Coordinación con autoridades locales",
      "Cobertura en proyectos remotos",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&fit=crop",
    accent: "border-orange-500",
    tag: "Industrial",
    tagColor: "bg-orange-600 text-white",
    id: "maquinaria-pesada",
  },
  {
    icon: Package,
    title: "Distribución Nacional",
    subtitle: "Red Capilar en Toda la República",
    description:
      "Distribución a destinos múltiples con ruteo inteligente, control de inventario en tránsito y visibilidad total de tu cadena de distribución.",
    features: [
      "Cobertura en 32 estados",
      "Ruteo optimizado con IA",
      "Cross-docking disponible",
      "Integración con tu WMS",
      "Reportes de nivel de servicio",
      "Devoluciones gestionadas",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85&fit=crop",
    accent: "border-emerald-500",
    tag: "Cobertura Total",
    tagColor: "bg-emerald-600 text-white",
    id: "distribucion-nacional",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-36 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80&fit=crop"
            alt="Servicios logísticos"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-4">
            Soluciones Logísticas
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Servicios Premium
            <br />
            <span className="text-gradient">para la Gran Industria</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Cada solución está construida sobre más de 20 años de experiencia,
            tecnología de punta y un equipo comprometido con cero incidencias.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map(
            (
              { icon: Icon, title, subtitle, description, features, image, accent, tag, tagColor, id },
              index
            ) => (
              <div
                key={id}
                id={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className={`absolute -inset-3 rounded-3xl border-2 ${accent} opacity-20`}
                  />
                  <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 lg:h-96">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${tagColor} text-xs font-bold px-3 py-1.5 rounded-full`}
                      >
                        {tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <p className="text-amber-600 font-bold text-xs tracking-widest uppercase mb-2">
                    {subtitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                    {title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-6 py-3 rounded-xl text-sm transition-all"
                    >
                      Cotizar este servicio
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:+528112345678"
                      className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:bg-slate-50"
                    >
                      <Phone className="w-4 h-4" />
                      (81) 1234-5678
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Necesitas un servicio a medida?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Cada operación es única. Cuéntanos tu necesidad y nuestro equipo
            diseñará la solución logística perfecta para tu empresa.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-4 rounded-xl text-lg transition-all"
          >
            Hablar con un Especialista
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
