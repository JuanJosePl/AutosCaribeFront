"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export default function OurTeam() {
  const team = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Fundador",
      image: "/professional-businessman-ceo.jpg",
      bio: "Visionario con más de 25 años de experiencia en la industria automotriz",
      linkedin: "#",
      email: "carlos@caribeautos.com",
    },
    {
      name: "María Rodríguez",
      role: "Directora de Ventas",
      image: "/professional-businesswoman-sales-director.jpg",
      bio: "Experta en ventas de vehículos de lujo con 15 años de trayectoria",
      linkedin: "#",
      email: "maria@caribeautos.com",
    },
    {
      name: "Juan Pérez",
      role: "Gerente de Repuestos",
      image: "/professional-businessman-parts-manager.jpg",
      bio: "Especialista en repuestos originales y logística automotriz",
      linkedin: "#",
      email: "juan@caribeautos.com",
    },
    {
      name: "Ana García",
      role: "Jefa de Servicio al Cliente",
      image: "/professional-businesswoman-customer-service.jpg",
      bio: "Comprometida con la excelencia en atención y satisfacción del cliente",
      linkedin: "#",
      email: "ana@caribeautos.com",
    },
    {
      name: "Roberto Silva",
      role: "Director Técnico",
      image: "/professional-businessman-technical-director.jpg",
      bio: "Ingeniero mecánico con certificaciones internacionales",
      linkedin: "#",
      email: "roberto@caribeautos.com",
    },
    {
      name: "Laura Martínez",
      role: "Gerente de Marketing",
      image: "/professional-businesswoman-marketing-manager.jpg",
      bio: "Estratega digital con pasión por la innovación y las marcas premium",
      linkedin: "#",
      email: "laura@caribeautos.com",
    },
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
            Nuestro <span className="text-blue-500">Equipo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Profesionales apasionados comprometidos con tu satisfacción
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-500 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 transition-all"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Quieres unirte a nuestro <span className="text-blue-500">equipo</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Estamos siempre buscando talento apasionado por la industria automotriz
            </p>
            <a
              href="/carreras"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105"
            >
              Ver Oportunidades
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
