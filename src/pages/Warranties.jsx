"use client"

import { motion } from "framer-motion"
import { Award, Check } from "lucide-react"

export default function Warranties() {
  const warranties = [
    {
      title: "Garantía de Vehículos Nuevos",
      items: [
        "3-5 años o 100,000 km de cobertura completa",
        "Asistencia en carretera 24/7",
        "Mantenimiento preventivo incluido",
        "Cobertura de motor y transmisión",
      ],
    },
    {
      title: "Garantía de Vehículos Usados",
      items: [
        "1-2 años de garantía mecánica",
        "Inspección de 150 puntos antes de la venta",
        "Historial completo del vehículo",
        "Garantía transferible",
      ],
    },
    {
      title: "Garantía de Repuestos",
      items: [
        "100% repuestos originales certificados",
        "1 año de garantía en todos los repuestos",
        "Instalación profesional incluida",
        "Soporte técnico especializado",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">Garantías</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestras <span className="text-blue-500">Garantías</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Protegemos tu inversión con las mejores garantías del mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {warranties.map((warranty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">{warranty.title}</h2>

              <ul className="space-y-4">
                {warranty.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">¿Necesitas más información?</h2>
          <p className="text-gray-400 text-center mb-8">
            Nuestro equipo está disponible para responder todas tus preguntas sobre garantías y cobertura
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Contactar a un Asesor
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
