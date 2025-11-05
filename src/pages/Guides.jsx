"use client"

import { motion } from "framer-motion"
import { BookOpen, Download, Play } from "lucide-react"

export default function Guides() {
  const guides = [
    {
      id: 1,
      title: "Guía de Compra de Vehículos Usados",
      description: "Todo lo que debes verificar antes de comprar un auto usado",
      type: "PDF",
      icon: Download,
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Manual de Mantenimiento Básico",
      description: "Aprende a realizar el mantenimiento básico de tu vehículo",
      type: "Video",
      icon: Play,
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Cómo Elegir Repuestos Originales",
      description: "Identifica repuestos certificados y evita falsificaciones",
      type: "PDF",
      icon: Download,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">Recursos Gratuitos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Guías y <span className="text-blue-500">Recursos</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Descarga nuestras guías gratuitas y aprende más sobre el mundo automotriz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all group"
              >
                <div className={`${guide.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">{guide.title}</h3>
                <p className="text-gray-400 mb-6">{guide.description}</p>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Icon className="w-5 h-5" />
                  Descargar {guide.type}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
