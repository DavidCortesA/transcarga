"use client";

import Image from "next/image";
import { Factory, Cpu, Pill, ShoppingCart, Flame, Car } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, cardItem, fadeInUp, viewportOnce } from "@/lib/animations";

const sectors = [
  {
    icon: Factory,
    name: "Manufactura",
    description: "Cadenas de suministro JIT para plantas de producción",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&q=80&fit=crop",
  },
  {
    icon: Cpu,
    name: "Autopartes",
    description: "Rutas dedicadas para la industria automotriz del norte",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80&fit=crop",
  },
  {
    icon: Pill,
    name: "Farmacéutica",
    description: "Transporte con control de temperatura y cadena de custodia",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80&fit=crop",
  },
  {
    icon: ShoppingCart,
    name: "Retail & Comercio",
    description: "Distribución capilar para grandes cadenas comerciales",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80&fit=crop",
  },
  {
    icon: Flame,
    name: "Energía e Industria",
    description: "Equipos pesados y materiales para proyectos de energía",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80&fit=crop",
  },
  {
    icon: Car,
    name: "Construcción",
    description: "Maquinaria pesada y materiales para obras de gran escala",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&fit=crop",
  },
];

export default function SectorsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-3"
            variants={fadeInUp}
          >
            Industrias que Confían en Nosotros
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            variants={fadeInUp}
          >
            Experiencia en los sectores
            <br />
            <span className="text-gradient">más exigentes del país</span>
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Conocemos las operaciones, tiempos y estándares de cada industria para
            ofrecer soluciones logísticas precisas.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {sectors.map(({ icon: Icon, name, description, image }) => (
            <motion.div
              key={name}
              className="group relative rounded-2xl overflow-hidden h-52 sm:h-64 cursor-pointer"
              variants={cardItem}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/40 to-transparent group-hover:from-slate-950/95 transition-all" />

              {/* Amber ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl ring-2 ring-amber-500/0 group-hover:ring-amber-500/50"
                transition={{ duration: 0.2 }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <motion.div
                    className="w-7 h-7 bg-amber-500/20 rounded-lg flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(245,158,11,0.4)" }}
                  >
                    <Icon className="w-4 h-4 text-amber-400" />
                  </motion.div>
                  <h3 className="text-white font-bold text-base sm:text-lg">{name}</h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
