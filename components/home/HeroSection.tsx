"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

const trustBadges = [
  { icon: Shield, text: "ISO 9001 Certificado" },
  { icon: CheckCircle2, text: "C-TPAT Autorizado" },
  { icon: Zap, text: "Rastreo GPS en Tiempo Real" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=85&fit=crop"
          alt="Flota de transporte pesado en operación"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Accent Line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent z-10"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Monterrey · Cobertura Nacional · 20+ Años de Experiencia
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            variants={fadeInUp}
          >
            Logística que
            <br />
            <span className="text-gradient">Mueve Industrias</span>
            <br />
            Enteras
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-4 max-w-2xl"
            variants={fadeInUp}
          >
            Reducimos tus tiempos muertos y riesgos operativos con soluciones de
            transporte diseñadas para grandes corporativos e industrias exigentes.
          </motion.p>

          <motion.p
            className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl"
            variants={fadeInUp}
          >
            Flota propia, operadores certificados y tecnología de monitoreo avanzado —
            para que tu cadena de suministro nunca se detenga.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacto"
                className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-4 rounded-xl text-lg tracking-wide transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30"
              >
                Cotizar Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://wa.me/528112345678?text=Hola, necesito asesoría logística"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                Solicitar Asesoría
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            variants={staggerContainer}
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                className="flex items-center gap-2 text-slate-400 text-sm"
                variants={fadeInUp}
              >
                <Icon className="w-4 h-4 text-amber-500" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-amber-500/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
