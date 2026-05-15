# Carrera de Reyes - San Esteban de Pravia

Aplicación web oficial de la Carrera de Reyes, una carrera popular celebrada el 6 de enero en San Esteban de Pravia, Muros de Nalón, Asturias.

## Descripción

Este proyecto es una página web informativa para la Carrera de Reyes. Incluye secciones sobre la carrera, el entorno de San Esteban de Pravia, clasificaciones de participantes y un formulario de contacto.

## Tecnologías

- **Framework:** [Next.js](https://nextjs.org/) 14 (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Tablas:** [@tanstack/react-table](https://tanstack.com/table/latest)
- **Procesamiento de datos:** [PapaParse](https://www.papaparse.com/), [xlsx](https://github.com/SheetJS/sheetjs)
- **Fechas:** [date-fns](https://date-fns.org/)

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## Estructura del proyecto

```
carrerareyes/
├── app/                    # Rutas y páginas (App Router)
│   ├── globals.css         # Estilos globales con Tailwind
│   ├── layout.tsx          # Layout raíz con fuentes y metadata
│   └── page.tsx            # Página principal
├── components/             # Componentes React reutilizables
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── CarreraSection.tsx
│   ├── EntornoSection.tsx
│   ├── ClasificacionesSection.tsx
│   ├── ContactoSection.tsx
│   └── Footer.tsx
├── lib/                    # Utilidades y datos
│   ├── data.ts
│   └── utils.ts
├── public/                 # Archivos estáticos
│   └── data/
│       └── ejemplo_clasificacion.csv
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Secciones de la web

1. **Navbar** – Navegación principal con enlaces a cada sección.
2. **Hero** – Presentación visual principal del evento.
3. **Carrera** – Información sobre la carrera.
4. **Entorno** – Detalles sobre San Esteban de Pravia y Muros de Nalón.
5. **Clasificaciones** – Tabla de resultados de los participantes (soporta importación desde CSV/Excel).
6. **Contacto** – Formulario de contacto para consultas.
7. **Footer** – Pie de página con información adicional.

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/alejandrosanesteban/carrerareyes.git
cd carrerareyes
npm install
```

## Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Producción

Compila y sirve la aplicación:

```bash
npm run build
npm run start
```

## Autor

- **Alejandro Díaz** – [alejandrosanesteban@gmail.com](mailto:alejandrosanesteban@gmail.com)

## Licencia

Este proyecto es privado.
