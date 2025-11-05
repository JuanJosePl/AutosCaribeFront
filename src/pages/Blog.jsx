"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Las Mejores Marcas de Autos de Lujo en 2024",
      excerpt: "Descubre cuáles son las marcas que están dominando el mercado de vehículos premium este año.",
      image: "/luxury-car-showroom.png",
      author: "Carlos Mendoza",
      date: "15 Marzo 2024",
      category: "Tendencias",
    },
    {
      id: 2,
      title: "Mantenimiento Preventivo: Guía Completa",
      excerpt: "Todo lo que necesitas saber para mantener tu vehículo en perfectas condiciones.",
      image: "/car-maintenance-mechanic.jpg",
      author: "Ana García",
      date: "10 Marzo 2024",
      category: "Mantenimiento",
    },
    {
      id: 3,
      title: "Repuestos Originales vs Genéricos",
      excerpt: "Conoce las diferencias y por qué es importante elegir repuestos certificados.",
      image: "/car-parts-original.jpg",
      author: "Roberto Silva",
      date: "5 Marzo 2024",
      category: "Repuestos",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestro <span className="text-blue-500">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Artículos, consejos y novedades del mundo automotriz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-white text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors">
                  Leer más <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
