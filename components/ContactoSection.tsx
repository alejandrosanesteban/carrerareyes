'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2, Facebook, Instagram } from 'lucide-react'

interface FormData {
  nombre: string
  email: string
  telefono: string
  asunto: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  asunto?: string
  mensaje?: string
}

export default function ContactoSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido'
    }
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio'
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-1 bg-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
              Contacto
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-8 rounded-2xl border border-white/5"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">Email</h3>
            <a
              href="mailto:carrerareyes@murosnalon.es"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              carrerareyes@murosnalon.es
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-2xl border border-white/5"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">Ubicación</h3>
            <p className="text-gray-400">
              San Esteban de Pravia<br />
              Muros de Nalón, Asturias
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-8 rounded-2xl border border-white/5"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-4">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl border border-white/5 p-8 md:p-10"
        >
          <div className="mb-8">
            <h3 className="font-display text-xl font-bold text-white mb-2">Envíanos un mensaje</h3>
            <p className="text-gray-400 text-sm">
              Completa el formulario y te responderemos lo antes posible.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-display text-lg font-bold text-white mb-2">Mensaje enviado</h4>
                <p className="text-gray-400 text-sm max-w-md">
                  Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-primary hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-gray-300">
                    Nombre <span className="text-primary">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={`w-full bg-dark-lighter border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors ${
                      errors.nombre ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={`w-full bg-dark-lighter border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-gray-300">
                    Teléfono <span className="text-gray-500 text-xs">(opcional)</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="600 000 000"
                    className="w-full bg-dark-lighter border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium text-gray-300">
                    Asunto <span className="text-primary">*</span>
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className={`w-full bg-dark-lighter border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none ${
                      errors.asunto ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="inscripcion">Información sobre inscripción</option>
                    <option value="carrera">Dudas sobre la carrera</option>
                    <option value="patrocinio">Patrocinio / Colaboración</option>
                    <option value="voluntarios">Quiero ser voluntario</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.asunto && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.asunto}
                    </p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-gray-300">
                    Mensaje <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    className={`w-full bg-dark-lighter border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none ${
                      errors.mensaje ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.mensaje && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  {status === 'error' && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Hubo un error al enviar. Inténtalo de nuevo.
                    </p>
                  )}
                  <div className="ml-auto">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar mensaje
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
