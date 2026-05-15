'use client'

import { motion } from 'framer-motion'
import { Building2, Heart, Coffee, Trophy, Truck, Shirt, Hotel, Utensils } from 'lucide-react'

/*
  NOTA: Cuando tengas logos reales, reemplaza los iconos Lucide por <Image>
  apuntando a /public/sponsors/. Ejemplo:

  { name: 'Ayuntamiento de Muros', tier: 'principal', logo: '/sponsors/ayuntamiento.png' }

  En el renderizado, cambia <Icon ... /> por:
  <Image src={sponsor.logo} alt={sponsor.name} width={120} height={60} className="object-contain" />
  y añade `import Image from 'next/image'` arriba.
*/

const sponsors = [
  { name: 'Ayuntamiento de Muros', tier: 'principal', icon: Building2 },
  { name: 'Café de Pravia', tier: 'colaborador', icon: Coffee },
  { name: 'Deportes Asturias', tier: 'principal', icon: Trophy },
  { name: 'Hostal el Nalón', tier: 'colaborador', icon: Hotel },
  { name: 'Transportes del Cantábrico', tier: 'colaborador', icon: Truck },
  { name: 'Ropa deportiva Norte', tier: 'colaborador', icon: Shirt },
  { name: 'Restaurante la Rula', tier: 'colaborador', icon: Utensils },
  { name: 'Asociación de Vecinos', tier: 'institucional', icon: Heart },
]

const tierConfig = {
  principal: {
    label: 'Patrocinador Principal',
    cols: 'md:col-span-2 lg:col-span-2',
    height: 'h-32',
    iconSize: 'w-10 h-10',
    bg: 'bg-primary/10 border-primary/30',
    text: 'text-primary',
  },
  colaborador: {
    label: 'Colaborador',
    cols: '',
    height: 'h-28',
    iconSize: 'w-8 h-8',
    bg: 'bg-white/5 border-white/10 hover:border-primary/30',
    text: 'text-gray-400',
  },
  institucional: {
    label: 'Apoyo Institucional',
    cols: 'md:col-span-2 lg:col-span-2',
    height: 'h-28',
    iconSize: 'w-8 h-8',
    bg: 'bg-white/5 border-white/10 hover:border-primary/30',
    text: 'text-gray-400',
  },
}

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => {
            const config = tierConfig[sponsor.tier as keyof typeof tierConfig]
            const Icon = sponsor.icon
            return (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] group cursor-default ${config.cols} ${config.height} ${config.bg}`}
              >
                <Icon className={`${config.iconSize} ${config.text} group-hover:text-primary transition-colors`} />
                <span className="text-white font-semibold text-sm md:text-base text-center leading-tight">
                  {sponsor.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 absolute bottom-3">
                  {config.label}
                </span>
              </motion.div>
            )
          })}
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
