"use client"

import { motion } from "framer-motion"
import { Cookie } from "lucide-react"

export default function Cookies() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Cookie className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">Cookies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Política de <span className="text-blue-500">Cookies</span>
          </h1>
          <p className="text-gray-400">Última actualización: Marzo 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8 text-gray-300 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio
              web. Nos ayudan a mejorar su experiencia y proporcionar funcionalidades personalizadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cookies Esenciales</h3>
                <p>Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cookies de Rendimiento</h3>
                <p>
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando información de
                  forma anónima.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cookies de Funcionalidad</h3>
                <p>Permiten que el sitio web recuerde sus preferencias y proporcione características mejoradas.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Control de Cookies</h2>
            <p>
              Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su
              computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
