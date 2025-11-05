"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Roberto Martínez",
      role: "Empresario",
      image: "/professional-man-smiling.png",
      rating: 5,
      text: "Excelente servicio y atención. Compré mi BMW en Caribe Autos y la experiencia fue impecable. El equipo es muy profesional y conocedor.",
      vehicle: "BMW X5 2023",
    },
    {
      name: "Carolina Díaz",
      role: "Arquitecta",
      image: "/professional-woman-smiling.png",
      rating: 5,
      text: "La mejor inversión que he hecho. Mi Mercedes está en perfectas condiciones y el servicio post-venta es excepcional. Totalmente recomendado.",
      vehicle: "Mercedes-Benz C-Class",
    },
    {
      name: "Miguel Ángel Torres",
      role: "Médico",
      image: "/professional-man-doctor.png",
      rating: 5,
      text: "Llevo años comprando repuestos originales aquí. La calidad es garantizada y los precios son competitivos. Nunca me han fallado.",
      vehicle: "Repuestos Toyota",
    },
    {
      name: "Valentina Ruiz",
      role: "Diseñadora",
      image: "/professional-woman-designer.png",
      rating: 5,
      text: "Amo mi Mazda CX-5. El proceso de compra fue transparente y sin complicaciones. El equipo de ventas fue muy atento a mis necesidades.",
      vehicle: "Mazda CX-5 2024",
    },
    {
      name: "Andrés Gómez",
      role: "Ingeniero",
      image: "/professional-engineer.png",
      rating: 5,
      text: "Financiamiento flexible y tasas competitivas. Pude adquirir mi vehículo soñado sin complicaciones. Gracias Caribe Autos!",
      vehicle: "Ford Mustang",
    },
    {
      name: "Isabella Castro",
      role: "Abogada",
      image: "/professional-woman-lawyer.png",
      rating: 5,
      text: "El servicio de mantenimiento es de primera. Mi Hyundai siempre está en óptimas condiciones gracias al equipo técnico de Caribe Autos.",
      vehicle: "Hyundai Tucson",
    },
  ]

  const stats = [
    { number: "15K+", label: "Clientes Felices" },
    { number: "98%", label: "Satisfacción" },
    { number: "4.9/5", label: "Calificación" },
    { number: "20+", label: "Años de Confianza" },
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
            Lo Que Dicen Nuestros <span className="text-blue-500">Clientes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Miles de clientes satisfechos confían en nosotros
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-blue-500/30 mb-4" />

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6">{testimonial.text}</p>

                {/* Vehicle */}
                <p className="text-blue-500 font-semibold mb-6">{testimonial.vehicle}</p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-800">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para tu próximo <span className="text-blue-500">vehículo</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Únete a miles de clientes satisfechos y encuentra el auto de tus sueños
            </p>
            <a
              href="/galeria"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105"
            >
              Ver Vehículos Disponibles
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
