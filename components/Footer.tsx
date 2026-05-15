import { Trophy } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Carrera de Reyes
            </span>
          </div>

          <p className="text-gray-500 text-sm text-center">
            {currentYear} · San Esteban de Pravia · Muros de Nalón · Asturias
          </p>

          <div className="text-gray-600 text-xs">
            Diseño y desarrollo
          </div>
        </div>
      </div>
    </footer>
  )
}