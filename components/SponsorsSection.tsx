'use client'

import { motion } from 'framer-motion'

/*
  NOTA: Cuando tengas logos reales, añade las imágenes a /public/sponsors/
  y reemplaza el texto del nombre por un <Image>. Ejemplo:

  import Image from 'next/image'
  ...
  <Image
    src="/sponsors/ayuntamiento.png"
    alt={sponsor.name}
    width={160}
    height={80}
    className="object-contain max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
  />
*/

const sponsors = [
  'Ayuntamiento de Muros',
  'Café de Pravia',
  'Deportes Asturias',
  'Hostal el Nalón',
  'Transportes del Cantábrico',
  'Ropa deportiva Norte',
  'Restaurante la Rula',
  'Asociación de Vecinos',
]

export default function SponsorsSection() {
  return (
    <section id="patrocinadores" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Gracias por hacerlo posible
            </span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
            Patrocinadores
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center h-28 md:h-32 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
            >
              <span className="text-gray-400 font-semibold text-sm md:text-base text-center px-4 group-hover:text-white transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          ¿Quieres aparecer aquí?{' '}
          <a href="#contacto" className="text-primary hover:text-white transition-colors underline underline-offset-4">
            Contáctanos para patrocinar la carrera
          </a>
        </motion.p>
      </div>
    </section>
  )
}
