"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInLeft, viewportOnce } from "@/lib/animations";

const benefits = [
  "Cotización en menos de 2 horas",
  "Asesor comercial dedicado",
  "Sin compromiso de contratación",
  "Propuesta personalizada",
];

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=85&fit=crop"
          alt="Operaciones logísticas en almacén"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/88" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
      </div>

      {/* Top accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500 via-amber-400 to-transparent z-10"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-8">
              <Clock className="w-4 h-4" />
              Respuesta Garantizada en Menos de 2 Horas
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            variants={slideInLeft}
          >
            ¿Listo para llevar tu
            <br />
            <span className="text-gradient">logística al siguiente nivel?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-300 mb-8 max-w-xl leading-relaxed"
            variants={fadeInUp}
          >
            Habla hoy con nuestro equipo comercial y obtén una propuesta personalizada
            para tus operaciones. Sin costos ocultos, sin compromisos.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            variants={staggerContainer}
          >
            {benefits.map((b) => (
              <motion.div
                key={b}
                className="flex items-center gap-2 text-slate-300"
                variants={fadeInUp}
              >
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-sm">{b}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacto"
                className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-5 rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-amber-500/30"
              >
                Cotizar Ahora — Es Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <div className="flex gap-3">
              <motion.a
                href="https://wa.me/528112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-5 rounded-xl transition-all text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp
              </motion.a>
              <motion.a
                href="tel:+528112345678"
                className="flex items-center gap-2 border-2 border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-5 rounded-xl transition-all text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5 text-amber-400" />
                Llamar
              </motion.a>
            </div>
          </motion.div>

          <motion.p className="text-slate-500 text-sm mt-6" variants={fadeInUp}>
            Atención comercial 24/7 · Monterrey, Nuevo León · Cobertura nacional
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
