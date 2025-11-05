"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">Privacidad</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Política de <span className="text-blue-500">Privacidad</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
            <p>
              Recopilamos información personal que usted nos proporciona directamente, como nombre, dirección de correo
              electrónico, número de teléfono y dirección postal cuando se registra en nuestro sitio o realiza una
              compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
            <p>
              Utilizamos su información para procesar transacciones, mejorar nuestros servicios, enviar comunicaciones
              relacionadas con su cuenta, y proporcionar soporte al cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra
              acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
            <p>
              No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con
              proveedores de servicios que nos ayudan a operar nuestro negocio, siempre bajo estrictos acuerdos de
              confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, corregir o eliminar su información personal. También puede optar por no
              recibir comunicaciones de marketing en cualquier momento.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
