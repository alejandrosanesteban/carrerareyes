'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600',
    alt: 'Paisaje de montaña asturiana',
  },
  {
    src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600',
    alt: 'Costa y playa de Asturias',
  },
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600',
    alt: 'Pueblo de montaña',
  },
]

export default function EntornoSection() {
  return (
    <section id="entorno" className="py-20 md:py-32 bg-dark-lighter">
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
              El Entorno
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-primary font-semibold">Muros de Nalón</span> es un concejo costero situado en el centro de Asturias, conocido por su puerto pesquero, sus playas y su naturaleza verde y exuberante.
            </p>
            <p className="text-gray-400 leading-relaxed">
              San Esteban de Pravia, enclave marinero del concejo, se encuentra a orillas del <span className="text-white">estuario del Nalón</span>, donde el río confluye con el Mar Cantábrico. La playa de Aguilera, una de las más bellas de la zona, completa un entorno natural privilegiado.
            </p>
            <p className="text-gray-400 leading-relaxed">
              En invierno, el pueblo respira un ambiente único: las casas de colores, el olor a mar y la gente del pueblo hacen de esta carrera una experiencia auténtica y tradicional.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-gray-300">Muros de Nalón, Asturias - Norte de España</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, index) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative aspect-square rounded-xl overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 bg-card rounded-xl border border-white/5"
        >
          <h3 className="font-display text-xl font-bold text-white mb-4">Cómo Llegar</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <span className="text-white font-medium block mb-1">En coche</span>
              Desde Oviedo (50 km) o Gijón (40 km) por la AS-19.
            </div>
            <div>
              <span className="text-white font-medium block mb-1">En tren</span>
              Línea de cercanías FEVE desde Oviedo a San Esteban.
            </div>
            <div>
              <span className="text-white font-medium block mb-1">En autobús</span>
              ALSA línea Oviedo-Muros de Nalón.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}