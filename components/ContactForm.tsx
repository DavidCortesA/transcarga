"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const services = [
  "Transporte Empresarial",
  "Fletes Especializados",
  "Logística Urgente",
  "Custodia y Monitoreo",
  "Maquinaria Pesada",
  "Distribución Nacional",
  "Otro / Consulta General",
];

const volumes = [
  "1 – 5 movimientos / mes",
  "6 – 20 movimientos / mes",
  "21 – 50 movimientos / mes",
  "50+ movimientos / mes",
  "Proyecto específico",
];

type FormState = "idle" | "sending" | "success";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    telefono: "",
    email: "",
    servicio: "",
    volumen: "",
    origen: "",
    destino: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-12 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">
          ¡Solicitud recibida!
        </h3>
        <p className="text-slate-600 mb-2">
          Un asesor comercial se pondrá en contacto contigo en{" "}
          <strong className="text-slate-900">menos de 2 horas</strong>.
        </p>
        <p className="text-slate-400 text-sm">
          Revisa tu correo: <strong>{form.email}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-2">
          Solicitar Cotización Ejecutiva
        </h2>
        <p className="text-slate-500 text-sm">
          Completa el formulario y recibe una propuesta personalizada en menos de 2 horas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Ing. Nombre Apellido"
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Empresa <span className="text-red-500">*</span>
            </label>
            <input
              name="empresa"
              value={form.empresa}
              onChange={handleChange}
              required
              placeholder="Razón social o nombre"
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Cargo / Puesto
            </label>
            <input
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              placeholder="Director de Operaciones"
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
              type="tel"
              placeholder="(81) 0000-0000"
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-1.5">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="nombre@empresa.com.mx"
            className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Servicio de interés <span className="text-red-500">*</span>
            </label>
            <select
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
              required
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all text-slate-700 bg-white"
            >
              <option value="">Seleccionar servicio</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Volumen estimado
            </label>
            <select
              name="volumen"
              value={form.volumen}
              onChange={handleChange}
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all text-slate-700 bg-white"
            >
              <option value="">Frecuencia de envíos</option>
              {volumes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Ciudad / Estado de origen
            </label>
            <input
              name="origen"
              value={form.origen}
              onChange={handleChange}
              placeholder="Monterrey, N.L."
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1.5">
              Ciudad / Estado de destino
            </label>
            <input
              name="destino"
              value={form.destino}
              onChange={handleChange}
              placeholder="CDMX, Guadalajara..."
              className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-1.5">
            Descripción de la operación
          </label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows={4}
            placeholder="Cuéntanos sobre tu carga, necesidades especiales, fechas o cualquier detalle relevante..."
            className="w-full border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={state === "sending"}
          className="w-full flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-slate-900 font-black px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
        >
          {state === "sending" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando solicitud...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Solicitar Cotización Ejecutiva
            </>
          )}
        </button>

        <p className="text-slate-400 text-xs text-center">
          Al enviar aceptas nuestro{" "}
          <a href="/privacidad" className="underline hover:text-amber-600">
            Aviso de Privacidad
          </a>
          . Prometemos no enviarte spam.
        </p>
      </form>
    </div>
  );
}
