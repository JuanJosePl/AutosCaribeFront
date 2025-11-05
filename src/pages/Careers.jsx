"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, Send } from "lucide-react"

export default function Careers() {
  const positions = [
    {
      title: "Asesor de Ventas Senior",
      department: "Ventas",
      location: "Barranquilla, Colombia",
      type: "Tiempo Completo",
      salary: "Competitivo + Comisiones",
      description:
        "Buscamos un asesor de ventas experimentado con pasión por vehículos de lujo y excelentes habilidades de comunicación.",
      requirements: [
        "3+ años de experiencia en ventas automotrices",
        "Conocimiento de marcas premium",
        "Excelentes habilidades interpersonales",
        "Licencia de conducir vigente",
      ],
    },
    {
      title: "Técnico Mecánico Certificado",
      department: "Servicio Técnico",
      location: "Barranquilla, Colombia",
      type: "Tiempo Completo",
      salary: "Según experiencia",
      description: "Técnico mecánico con certificaciones internacionales para trabajar con vehículos de alta gama.",
      requirements: [
        "Certificación técnica en mecánica automotriz",
        "5+ años de experiencia",
        "Conocimiento de sistemas electrónicos",
        "Experiencia con marcas premium",
      ],
    },
    {
      title: "Especialista en Repuestos",
      department: "Repuestos",
      location: "Barranquilla, Colombia",
      type: "Tiempo Completo",
      salary: "Competitivo",
      description: "Especialista en identificación y venta de repuestos originales para múltiples marcas.",
      requirements: [
        "2+ años en área de repuestos",
        "Conocimiento de sistemas de inventario",
        "Atención al detalle",
        "Habilidades de servicio al cliente",
      ],
    },
    {
      title: "Gerente de Marketing Digital",
      department: "Marketing",
      location: "Barranquilla, Colombia",
      type: "Tiempo Completo",
      salary: "Competitivo",
      description: "Liderar estrategias de marketing digital para posicionar nuestra marca en el mercado.",
      requirements: [
        "3+ años en marketing digital",
        "Experiencia en industria automotriz (preferible)",
        "Conocimiento de SEO, SEM y redes sociales",
        "Habilidades analíticas",
      ],
    },
  ]

  const benefits = [
    "Salario competitivo",
    "Comisiones atractivas",
    "Seguro médico",
    "Capacitación continua",
    "Ambiente laboral positivo",
    "Oportunidades de crecimiento",
    "Descuentos en vehículos y repuestos",
    "Bonos por desempeño",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Únete a Nuestro <span className="text-blue-500">Equipo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Construye tu carrera en la industria automotriz de lujo
          </p>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué trabajar en <span className="text-blue-500">Caribe Autos</span>?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ofrecemos un ambiente de trabajo dinámico, oportunidades de crecimiento y beneficios competitivos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all"
              >
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Posiciones <span className="text-blue-500">Abiertas</span>
            </h2>
            <p className="text-gray-300 text-lg">Encuentra la oportunidad perfecta para ti</p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <p className="text-blue-500 font-semibold mb-4">{position.department}</p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{position.salary}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{position.description}</p>

                    <div>
                      <h4 className="font-bold mb-3">Requisitos:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-400">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 flex items-center space-x-2 whitespace-nowrap">
                    <Send className="w-5 h-5" />
                    <span>Aplicar Ahora</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿No encuentras la posición ideal?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Envíanos tu CV y nos pondremos en contacto cuando surja una oportunidad que se ajuste a tu perfil
            </p>
            <a
              href="mailto:rrhh@caribeautos.com"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105"
            >
              Enviar CV Espontáneo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
