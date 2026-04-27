"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Zap, Shield, Weight, Package, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, cardItem, fadeInUp, viewportOnce } from "@/lib/animations";

const services = [
  {
    icon: Building2,
    title: "Transporte Empresarial",
    description:
      "Soluciones de transporte dedicado para corporativos con rutas fijas, flota exclusiva y reportes ejecutivos en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&fit=crop",
    tag: "Alta Demanda",
    tagColor: "bg-amber-500 text-slate-900",
  },
  {
    icon: Weight,
    title: "Fletes Especializados",
    description:
      "Transporte de carga sobredimensionada, maquinaria pesada y equipos industriales con permisos SCT y escolta especializada.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    tag: "Especializado",
    tagColor: "bg-blue-600 text-white",
  },
  {
    icon: Zap,
    title: "Logística Urgente",
    description:
      "Servicio express con tiempos de respuesta de 2 horas. Para operaciones críticas que no pueden esperar ni un minuto.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80&fit=crop",
    tag: "24/7",
    tagColor: "bg-red-600 text-white",
  },
  {
    icon: Shield,
    title: "Custodia y Monitoreo",
    description:
      "Transporte de mercancía de alto valor con custodia armada, rastreo satelital y reportes en tiempo real para mayor tranquilidad.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&fit=crop",
    tag: "Premium",
    tagColor: "bg-purple-600 text-white",
  },
  {
    icon: RotateCcw,
    title: "Maquinaria Pesada",
    description:
      "Movimiento de equipos industriales, maquinaria de construcción y cargas especiales con plataformas certificadas.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop",
    tag: "Industrial",
    tagColor: "bg-slate-600 text-white",
  },
  {
    icon: Package,
    title: "Distribución Nacional",
    description:
      "Red de distribución capilar en toda la República con entrega a tiempo garantizada y visibilidad total de tu inventario.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&fit=crop",
    tag: "Cobertura Total",
    tagColor: "bg-emerald-600 text-white",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
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
            Soluciones Logísticas Premium
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-4"
            variants={fadeInUp}
          >
            Servicios diseñados para
            <br />
            <span className="text-gradient">grandes operaciones</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Cada servicio está respaldado por tecnología de punta, operadores certificados
            y protocolos que garantizan cero incidencias.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map(({ icon: Icon, title, description, image, tag, tagColor }) => (
            <motion.div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
              variants={cardItem}
              whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.12)", transition: { duration: 0.25 } }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />
                <div
                  className={`absolute top-4 left-4 ${tagColor} text-xs font-bold px-3 py-1 rounded-full tracking-wide`}
                >
                  {tag}
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-slate-900 font-bold text-xl mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-sm group/link"
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Ver todos los servicios
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
