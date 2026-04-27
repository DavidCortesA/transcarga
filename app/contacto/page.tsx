import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Transcarga MX — Cotizar Transporte Empresarial México",
  description:
    "Solicita una cotización de transporte o logística industrial. Respuesta en menos de 2 horas. Atención comercial 24/7 en Monterrey, N.L.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Línea Comercial 24/7",
    value: "(81) 1234-5678",
    sub: "Atención ejecutiva inmediata",
    href: "tel:+528112345678",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Empresarial",
    value: "+52 (81) 1234-5678",
    sub: "Respuesta en minutos",
    href: "https://wa.me/528112345678",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Mail,
    title: "Correo Corporativo",
    value: "ventas@transcargamx.com",
    sub: "Propuestas y cotizaciones",
    href: "mailto:ventas@transcargamx.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: MapPin,
    title: "Oficina Corporativa",
    value: "Monterrey, N.L.",
    sub: "Av. Constitución 1500, Col. Centro",
    href: "https://maps.google.com",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
];

const guarantees = [
  "Cotización detallada en menos de 2 horas",
  "Sin costos ni compromisos por solicitar",
  "Asesor comercial asignado a tu cuenta",
  "Propuesta personalizada a tu operación",
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80&fit=crop"
            alt="Contacto comercial logística"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-8">
            <Clock className="w-4 h-4" />
            Respuesta garantizada en menos de 2 horas
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Hablemos de tu
            <br />
            <span className="text-gradient">operación logística</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Nuestro equipo comercial está listo para diseñar una solución a la medida
            de tus necesidades. Sin rodeos, sin compromisos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                  Contacto directo con el área comercial
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Evita intermediarios. Habla directamente con quienes toman
                  decisiones y pueden comprometerse con tu operación.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, sub, href, color, bg }) => (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all group"
                  >
                    <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-500 text-xs font-medium mb-0.5">{title}</div>
                      <div className="text-slate-900 font-bold text-sm">{value}</div>
                      <div className="text-slate-400 text-xs">{sub}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>

              {/* Guarantees */}
              <div className="bg-slate-900 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span className="text-white font-bold text-sm">Nuestro Compromiso</span>
                </div>
                <ul className="space-y-3">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-slate-300 text-sm">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3 text-slate-600">
                <Clock className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    Horario de Atención Comercial
                  </div>
                  <div className="text-sm">
                    Lun – Vie: 8:00 AM – 8:00 PM
                    <br />
                    Sáb: 9:00 AM – 2:00 PM
                    <br />
                    <span className="text-amber-600 font-medium">
                      Emergencias 24/7 vía WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            ¿Necesitas un servicio urgente ahora mismo?
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-xl mx-auto">
            No esperes el formulario. Llámanos directamente o escríbenos por WhatsApp
            y tenemos unidad disponible en menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+528112345678"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-8 py-4 rounded-xl text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/528112345678?text=Necesito servicio urgente de transporte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-black px-8 py-4 rounded-xl text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              WhatsApp Urgente
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
