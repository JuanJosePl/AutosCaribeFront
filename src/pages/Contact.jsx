"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contáctanos <span className="text-blue-500">Hoy</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+1 (321) 456-7890"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-gray-400">info@caribeautos.com</p>
                    <p className="text-gray-400">ventas@caribeautos.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Teléfono</h3>
                    <p className="text-gray-400">+1 (321) 456-789-00</p>
                    <p className="text-gray-400">+1 (321) 456-789-01</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Ubicación</h3>
                    <p className="text-gray-400">Barranquilla, Colombia</p>
                    <p className="text-gray-400">Calle 123 #45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Horario</h3>
                    <p className="text-gray-400">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Sábado: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/13214567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white font-bold py-6 rounded-2xl transition-colors text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <FaWhatsapp className="w-8 h-8" />
                <span className="text-xl">Chatea con nosotros en WhatsApp</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
