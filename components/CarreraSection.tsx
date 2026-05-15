'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Users, Route } from 'lucide-react'

const stats = [
  { icon: Route, value: '5 km', label: 'Distancia', description: 'Recorrido urbano por el pueblo' },
  { icon: MapPin, value: 'Urbano', label: 'Desnivel', description: 'Costa atlántica de Asturias' },
  { icon: Users, value: '+300', label: 'Corredores', description: 'Participantes en cada edición' },
]

export default function CarreraSection() {
  return (
    <section id="carrera" className="py-20 md:py-32 bg-dark">
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
              La Carrera
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <p className="text-xs text-gray-500 mt-2">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                La <span className="text-primary font-semibold">Carrera de Reyes de San Esteban de Pravia</span> es una tradición que celebra el Día de los Reyes Magos con energía y emoción. Cada 6 de enero, corredores de todas las edades se reúnen en este pequeño pueblo marinero de la costa inmueña para disfrutar de una jornada única.
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                El recorrido discurre por las calles del pueblo y la costa del Nalón, ofreciendo vistas al estuario y la praia de Aguilera. El ambiente festivo, con la animación de vecinos y familiares, convierte esta carrera popular en una experiencia inolvidable.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=800"
              alt="Corredor en trail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-white/80 text-sm">San Esteban de Pravia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}