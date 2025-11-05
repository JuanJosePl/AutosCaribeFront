"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Ofrecen garantía en los vehículos?",
      answer:
        "Sí, todos nuestros vehículos incluyen garantía de fábrica. La duración varía según la marca y modelo, pero generalmente es de 3 a 5 años o hasta 100,000 km.",
    },
    {
      question: "¿Los repuestos son originales?",
      answer:
        "Absolutamente. Trabajamos únicamente con repuestos originales certificados por los fabricantes. Cada repuesto viene con su certificado de autenticidad.",
    },
    {
      question: "¿Ofrecen financiamiento?",
      answer:
        "Sí, contamos con múltiples opciones de financiamiento con las mejores tasas del mercado. Nuestros asesores pueden ayudarte a encontrar el plan que mejor se ajuste a tu presupuesto.",
    },
    {
      question: "¿Realizan entregas a domicilio?",
      answer:
        "Sí, ofrecemos servicio de entrega a domicilio en toda la región del Caribe. El costo varía según la distancia y se calcula al momento de la compra.",
    },
    {
      question: "¿Puedo hacer test drive antes de comprar?",
      answer:
        "Por supuesto. Agendamos test drives para que puedas probar el vehículo antes de tomar tu decisión. Solo necesitas contactarnos con anticipación.",
    },
    {
      question: "¿Aceptan vehículos como parte de pago?",
      answer:
        "Sí, aceptamos tu vehículo actual como parte de pago. Nuestros expertos realizarán una evaluación justa del valor de tu auto.",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">Preguntas Frecuentes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Tienes <span className="text-blue-500">Preguntas?</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-bold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className={`overflow-hidden transition-all ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
