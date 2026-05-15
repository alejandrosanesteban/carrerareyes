export interface Runner {
  pos: number
  dorsal: number
  nombre: string
  categoria: string
  tiempo: string
  anio: number
}

export const CATEGORIAS = [
  'Absoluta M',
  'Absoluta F',
  'Veteranos M',
  'Veteranos F',
  'Junior M',
  'Junior F',
  'Juvenil M',
  'Juvenil F',
  'Cadete M',
  'Cadete F',
]

export const EJEMPLO_CLASIFICACION_2026: Runner[] = [
  { pos: 1, dorsal: 42, nombre: 'Alejandro Fernández García', categoria: 'Absoluta M', tiempo: '16:32', anio: 2026 },
  { pos: 2, dorsal: 18, nombre: 'Mario González Martínez', categoria: 'Absoluta M', tiempo: '16:45', anio: 2026 },
  { pos: 3, dorsal: 7, nombre: 'David Suárez Pérez', categoria: 'Veteranos M', tiempo: '17:12', anio: 2026 },
  { pos: 4, dorsal: 23, nombre: 'Carlos Rodríguez López', categoria: 'Absoluta M', tiempo: '17:28', anio: 2026 },
  { pos: 5, dorsal: 56, nombre: 'Ana Martínez García', categoria: 'Absoluta F', tiempo: '17:45', anio: 2026 },
  { pos: 6, dorsal: 91, nombre: 'Javier Fernández Díaz', categoria: 'Veteranos M', tiempo: '17:58', anio: 2026 },
  { pos: 7, dorsal: 34, nombre: 'Laura García Sánchez', categoria: 'Absoluta F', tiempo: '18:05', anio: 2026 },
  { pos: 8, dorsal: 12, nombre: 'Miguel Ángel Alonso', categoria: 'Junior M', tiempo: '18:15', anio: 2026 },
  { pos: 9, dorsal: 67, nombre: 'Sara González Ruiz', categoria: 'Veteranos F', tiempo: '18:22', anio: 2026 },
  { pos: 10, dorsal: 29, nombre: 'Pablo Díaz Martínez', categoria: 'Absoluta M', tiempo: '18:30', anio: 2026 },
  { pos: 11, dorsal: 88, nombre: 'Elena García Fernández', categoria: 'Absoluta F', tiempo: '18:38', anio: 2026 },
  { pos: 12, dorsal: 45, nombre: 'Roberto Suárez López', categoria: 'Veteranos M', tiempo: '18:45', anio: 2026 },
  { pos: 13, dorsal: 73, nombre: 'Carmen Rodríguez Sánchez', categoria: 'Veteranos F', tiempo: '18:52', anio: 2026 },
  { pos: 14, dorsal: 51, nombre: 'Diego García Pérez', categoria: 'Junior M', tiempo: '19:00', anio: 2026 },
  { pos: 15, dorsal: 19, nombre: 'María José Torres', categoria: 'Absoluta F', tiempo: '19:08', anio: 2026 },
  { pos: 16, dorsal: 82, nombre: 'Jorge Martínez González', categoria: 'Absoluta M', tiempo: '19:15', anio: 2026 },
  { pos: 17, dorsal: 38, nombre: 'Paula Fernández Díaz', categoria: 'Junior F', tiempo: '19:22', anio: 2026 },
  { pos: 18, dorsal: 64, nombre: 'Luis Alberto Blanco', categoria: 'Veteranos M', tiempo: '19:30', anio: 2026 },
  { pos: 19, dorsal: 27, nombre: 'Isabel García López', categoria: 'Veteranos F', tiempo: '19:38', anio: 2026 },
  { pos: 20, dorsal: 95, nombre: 'Antonio Suárez Ruiz', categoria: 'Absoluta M', tiempo: '19:45', anio: 2026 },
  { pos: 21, dorsal: 41, nombre: 'Patricia Sánchez Pérez', categoria: 'Absoluta F', tiempo: '19:52', anio: 2026 },
  { pos: 22, dorsal: 58, nombre: 'Juan Carlos Rodríguez', categoria: 'Veteranos M', tiempo: '20:00', anio: 2026 },
  { pos: 23, dorsal: 76, nombre: 'Marta González García', categoria: 'Absoluta F', tiempo: '20:08', anio: 2026 },
  { pos: 24, dorsal: 14, nombre: 'Daniel Martínez Fernández', categoria: 'Juvenil M', tiempo: '20:15', anio: 2026 },
  { pos: 25, dorsal: 83, nombre: 'Beatriz Díaz Alonso', categoria: 'Veteranos F', tiempo: '20:22', anio: 2026 },
  { pos: 26, dorsal: 62, nombre: 'Francisco José López', categoria: 'Veteranos M', tiempo: '20:30', anio: 2026 },
  { pos: 27, dorsal: 36, nombre: 'Raquel Torres Sánchez', categoria: 'Absoluta F', tiempo: '20:38', anio: 2026 },
  { pos: 28, dorsal: 99, nombre: 'Rubén García Díaz', categoria: 'Junior M', tiempo: '20:45', anio: 2026 },
  { pos: 29, dorsal: 21, nombre: 'Cristina Suárez Martín', categoria: 'Junior F', tiempo: '20:52', anio: 2026 },
  { pos: 30, dorsal: 47, nombre: 'Fernando Rodríguez', categoria: 'Cadete M', tiempo: '21:00', anio: 2026 },
]

export const ANIOS_DISPONIBLES = [2026, 2025, 2024]