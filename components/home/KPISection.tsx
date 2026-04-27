"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Truck, MapPin, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardItem, fadeInUp, viewportOnce } from "@/lib/animations";

const kpis = [
  {
    icon: TrendingUp,
    raw: 20,
    suffix: "+",
    label: "Años de Experiencia",
    description: "Dos décadas respaldando a la industria mexicana",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Truck,
    raw: 350,
    suffix: "+",
    label: "Unidades Operativas",
    description: "Flota propia con mantenimiento preventivo certificado",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: MapPin,
    raw: 32,
    suffix: "",
    label: "Estados de Cobertura",
    description: "Presencia en toda la República Mexicana",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Users,
    raw: 1200,
    suffix: "+",
    label: "Clientes Atendidos",
    description: "Grandes corporativos e industrias de alta exigencia",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = Math.round(target * progress);
      setCount(current);
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000 ? count.toLocaleString("es-MX") : count;

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function KPISection() {
  return (
    <section className="bg-slate-900 py-20 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-3"
            variants={fadeInUp}
          >
            Capacidad Operativa Comprobada
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-black text-white"
            variants={fadeInUp}
          >
            Números que respaldan
            <span className="text-gradient"> nuestra confiabilidad</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {kpis.map(({ icon: Icon, raw, suffix, label, description, color, bg }) => (
            <motion.div
              key={label}
              className="relative group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-colors duration-300 overflow-hidden"
              variants={cardItem}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              <div
                className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center mb-6`}
              >
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <div className={`text-5xl font-black ${color} mb-2 leading-none tabular-nums`}>
                <CountUp target={raw} suffix={suffix} />
              </div>
              <div className="text-white font-bold text-base mb-2">{label}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{description}</div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
