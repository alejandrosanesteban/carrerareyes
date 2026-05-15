'use client'

import { useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table'
import { Search, Upload, Download, ChevronLeft, ChevronRight, FileSpreadsheet } from 'lucide-react'
import Papa from 'papaparse'
import * as XLSX from 'xlsx'
import { Runner, CATEGORIAS, ANIOS_DISPONIBLES, EJEMPLO_CLASIFICACION_2026 } from '@/lib/data'

const columnHelper = createColumnHelper<Runner>()

const columns = [
  columnHelper.accessor('pos', {
    header: 'Pos.',
    cell: (info) => <span className="font-bold text-primary">{info.getValue()}</span>,
  }),
  columnHelper.accessor('dorsal', {
    header: 'Dorsal',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('nombre', {
    header: 'Nombre',
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor('categoria', {
    header: 'Categoría',
    cell: (info) => (
      <span className="px-2 py-0.5 bg-white/10 rounded text-xs">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('tiempo', {
    header: 'Tiempo',
    cell: (info) => <span className="font-mono text-primary">{info.getValue()}</span>,
  }),
]

export default function ClasificacionesSection() {
  const [data, setData] = useState<Runner[]>(EJEMPLO_CLASIFICACION_2026)
  const [selectedAnio, setSelectedAnio] = useState<number>(2026)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoriaFilter, setCategoriaFilter] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filteredData = useMemo(() => {
    return data.filter((runner) => {
      const matchesSearch = runner.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategoria = categoriaFilter ? runner.categoria === categoriaFilter : true
      const matchesAnio = runner.anio === selectedAnio
      return matchesSearch && matchesCategoria && matchesAnio
    })
  }, [data, searchTerm, categoriaFilter, selectedAnio])

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  })

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const extension = file.name.split('.').pop()?.toLowerCase()

    if (extension === 'csv') {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData: Runner[] = results.data.map((row: unknown) => {
            const r = row as Record<string, string>
            return {
              pos: parseInt(r.pos || '0', 10),
              dorsal: parseInt(r.dorsal || '0', 10),
              nombre: r.nombre || '',
              categoria: r.categoria || '',
              tiempo: r.tiempo || '',
              anio: selectedAnio,
            }
          })
          setData(parsedData)
        },
      })
    } else if (extension === 'xlsx' || extension === 'xls') {
      const reader = new FileReader()
      reader.onload = (event) => {
        const workbook = XLSX.read(event.target?.result as ArrayBuffer, { type: 'array' })
        const firstSheet = workbook.SheetNames[0]
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]) as Record<string, unknown>[]
        const parsedData: Runner[] = jsonData.map((row) => ({
          pos: parseInt(String(row.pos || '0'), 10),
          dorsal: parseInt(String(row.dorsal || '0'), 10),
          nombre: String(row.nombre || ''),
          categoria: String(row.categoria || ''),
          tiempo: String(row.tiempo || ''),
          anio: selectedAnio,
        }))
        setData(parsedData)
      }
      reader.readAsArrayBuffer(file)
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleExport = () => {
    const csv = Papa.unparse(filteredData.map(({ pos, dorsal, nombre, categoria, tiempo }) => ({
      pos,
      dorsal,
      nombre,
      categoria,
      tiempo,
    })))
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `clasificacion_${selectedAnio}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="clasificaciones" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-1 bg-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
              Clasificaciones
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-2xl border border-white/5 overflow-hidden"
        >
          <div className="p-6 border-b border-white/5 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedAnio}
                  onChange={(e) => setSelectedAnio(Number(e.target.value))}
                  className="bg-dark-lighter border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                >
                  {ANIOS_DISPONIBLES.map((anio) => (
                    <option key={anio} value={anio}>
                      Edición {anio}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar corredor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-dark-lighter border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary w-48"
                />
              </div>

              <select
                value={categoriaFilter}
                onChange={(e) => setCategoriaFilter(e.target.value)}
                className="bg-dark-lighter border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              >
                <option value="">Todas las categorías</option>
                {CATEGORIAS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <input
                type="file"
                ref={fileInputRef}
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-dark-lighter hover:bg-white/5 border border-white/10 rounded-lg text-white transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span className="text-sm">Importar</span>
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Exportar</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b border-white/5">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-white/5">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-white/5 transition-colors">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 text-sm text-gray-300">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              No se encontraron resultados
            </div>
          )}

          <div className="p-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Mostrando {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} -{' '}
              {Math.min(
                (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                filteredData.length
              )}{' '}
              de {filteredData.length} resultados
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="p-2 rounded-lg bg-dark-lighter hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-sm text-gray-400 px-2">
                {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
              </span>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="p-2 rounded-lg bg-dark-lighter hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}