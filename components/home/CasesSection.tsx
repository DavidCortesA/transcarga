"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, cardItem, fadeInUp, viewportOnce } from "@/lib/animations";

const cases = [
  {
    company: "Grupo Industrias del Norte",
    sector: "Manufactura Automotriz",
    logo: "GIN",
    result: "Reducción del 38% en tiempos de entrega",
    quote:
      "Transcarga MX transformó completamente nuestra cadena de suministro. La puntualidad y visibilidad en tiempo real nos permitió sincronizar toda la planta sin paros inesperados.",
    contact: "Director de Operaciones",
    rating: 5,
  },
  {
    company: "Corporativo Energía Sur",
    sector: "Energía e Infraestructura",
    logo: "CES",
    result: "Cero incidencias en 18 meses de operación",
    quote:
      "Para mover maquinaria de alto valor en rutas críticas necesitábamos un socio que entendiera la operación. Encontramos exactamente eso: confiabilidad total y comunicación permanente.",
    contact: "Gerente de Proyectos",
    rating: 5,
  },
  {
    company: "Farma Distribuciones MX",
    sector: "Farmacéutica",
    logo: "FDM",
    result: "+99.4% entregas a tiempo en 12 meses",
    quote:
      "El control de temperatura, la cadena de custodia y la rapidez de respuesta nos dieron la certeza que necesitábamos. Ahora son parte estratégica de nuestras operaciones.",
    contact: "Directora de Logística",
    rating: 5,
  },
];

export default function CasesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-3"
            variants={fadeInUp}
          >
            Casos de Éxito
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-4"
            variants={fadeInUp}
          >
            Resultados reales para
            <br />
            <span className="text-gradient">empresas reales</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Grandes corporativos confían en nosotros para mantener sus operaciones sin
            interrupciones. Estos son algunos de sus resultados.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {cases.map(({ company, sector, logo, result, quote, contact, rating }) => (
            <motion.div
              key={company}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8"
              variants={cardItem}
              whileHover={{
                y: -6,
                backgroundColor: "#ffffff",
                borderColor: "#fde68a",
                boxShadow: "0 20px 40px rgba(0,0,0,0.10)",
                transition: { duration: 0.25 },
              }}
            >
              {/* Logo + Rating */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.08, backgroundColor: "#1e293b" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-amber-500 font-black text-sm tracking-widest">
                    {logo}
                  </span>
                </motion.div>
                <div className="flex gap-0.5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.3, type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Result Badge */}
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold px-4 py-2 rounded-lg mb-5 inline-block">
                {result}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-slate-200 absolute -top-1 -left-1" />
                <p className="text-slate-600 text-sm leading-relaxed pl-6 italic">
                  {quote}
                </p>
              </div>

              {/* Company Info */}
              <div className="border-t border-slate-200 pt-5">
                <div className="text-slate-900 font-bold text-base">{company}</div>
                <div className="text-slate-400 text-sm mt-0.5">
                  {contact} · {sector}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
