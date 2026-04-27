"use client";

import Link from "next/link";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, cardItem, fadeInUp, viewportOnce } from "@/lib/animations";

const services = [
  "Transporte Empresarial",
  "Fletes Especializados",
  "Logística Urgente",
  "Custodia y Monitoreo",
  "Maquinaria Pesada",
  "Distribución Nacional",
];

const certifications = [
  "ISO 9001:2015",
  "C-TPAT Certificado",
  "OEA Autorizado",
  "DGAF Habilitado",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Top CTA Bar */}
      <div className="bg-amber-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-900">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-sm tracking-wide">
              ATENCIÓN COMERCIAL 24/7 — RESPUESTA EN MENOS DE 2 HORAS
            </span>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              WhatsApp Empresarial
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contacto"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors"
              >
                Cotizar Ahora
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div className="lg:col-span-1" variants={cardItem}>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Truck className="w-6 h-6 text-slate-900" strokeWidth={2.5} />
              </motion.div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">
                  TRANS<span className="text-amber-500">CARGA</span>
                </span>
                <div className="text-slate-500 text-xs tracking-widest uppercase">
                  Logística Industrial
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Más de 20 años siendo el socio logístico de confianza para las grandes
              industrias de México. Cobertura nacional, flota propia y tecnología de
              rastreo en tiempo real.
            </p>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-xs">
                  <Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="text-slate-400">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={cardItem}>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500/50 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={cardItem}>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Quiénes Somos" },
                { href: "/servicios", label: "Servicios" },
                { href: "/contacto", label: "Contacto" },
                { href: "/privacidad", label: "Aviso de Privacidad" },
                { href: "/terminos", label: "Términos de Servicio" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500/50 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={cardItem}>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Contacto Comercial
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-white font-medium">Oficina Corporativa</div>
                  <div>Av. Constitución 1500, Col. Centro</div>
                  <div>Monterrey, N.L., C.P. 64000</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div className="text-sm">
                  <a href="tel:+528112345678" className="hover:text-amber-400 transition-colors">
                    (81) 1234-5678
                  </a>
                  <div className="text-slate-500 text-xs">Línea Comercial 24/7</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <div className="text-sm">
                  <a
                    href="mailto:ventas@transcargamx.com"
                    className="hover:text-amber-400 transition-colors"
                  >
                    ventas@transcargamx.com
                  </a>
                  <div className="text-slate-500 text-xs">Cotizaciones Ejecutivas</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <div className="text-sm">
                  <a
                    href="https://wa.me/528112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    +52 (81) 1234-5678
                  </a>
                  <div className="text-slate-500 text-xs">WhatsApp Empresarial</div>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">
                Redes Empresariales
              </h4>
              <div className="flex items-center gap-3">
                {["LinkedIn", "Facebook", "YouTube"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-colors group"
                    aria-label={social}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Award className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Transcarga MX, S.A. de C.V. — Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacidad" className="hover:text-amber-400 transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-amber-400 transition-colors">
              Términos de Uso
            </Link>
            <span className="text-slate-600">RFC: TCMX900101XXX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
