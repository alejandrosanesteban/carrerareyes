'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-01-06T10:00:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = TARGET_DATE.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: 'DÍAS' },
    { value: timeLeft.hours, label: 'HORAS' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEG' },
  ]

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=2000"
          alt="Paisaje invernal de montaña"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Edición 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-white mb-4"
        >
          Carrera de Reyes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light"
        >
          6 de Enero · Muros de Nalón · Asturias
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
        >
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-dark/50 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-gray-400 mt-1 tracking-wider">{unit.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#clasificaciones"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Ver Clasificaciones
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}