'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Facebook, Instagram } from 'lucide-react'

export default function ContactoSection() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}