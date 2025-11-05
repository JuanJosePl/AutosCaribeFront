"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function Terms() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <FileText className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Términos de <span className="text-blue-500">Uso</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar los servicios de Caribe Autos, usted acepta estar sujeto a estos términos y
              condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros
              servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Servicios Ofrecidos</h2>
            <p>
              Caribe Autos ofrece servicios de venta de vehículos nuevos y usados, repuestos originales, y servicios de
              mantenimiento. Nos reservamos el derecho de modificar o discontinuar cualquier servicio sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Precios y Pagos</h2>
            <p>
              Todos los precios están sujetos a cambios sin previo aviso. Los pagos deben realizarse según los términos
              acordados al momento de la compra. Aceptamos múltiples formas de pago y ofrecemos opciones de
              financiamiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Garantías</h2>
            <p>
              Todos nuestros vehículos y repuestos vienen con garantía del fabricante. Los términos específicos de la
              garantía varían según el producto y se detallan en el momento de la compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              Caribe Autos no será responsable por daños indirectos, incidentales o consecuentes que resulten del uso de
              nuestros productos o servicios.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
