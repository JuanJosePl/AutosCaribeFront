"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Star,
  Quote,
  ThumbsUp,
  MessageCircle,
  Award,
  Users,
  CheckCircle,
  Heart,
  Sparkles,
  MapPin,
  Calendar,
  Trophy,
  Target,
} from "lucide-react"

export default function StudentReviews() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [likedReviews, setLikedReviews] = useState([])

  const categories = [
    { id: "all", label: "Todas", icon: Star },
    { id: "beginner", label: "Principiantes", icon: Users },
    { id: "advanced", label: "Avanzados", icon: Trophy },
    { id: "renewal", label: "Renovación", icon: CheckCircle },
  ]

  const reviews = [
    {
      id: 1,
      name: "Laura Mendoza",
      age: 24,
      category: "beginner",
      location: "Barranquilla",
      image: "https://i.pravatar.cc/400?img=1",
      rating: 5,
      date: "Hace 2 días",
      course: "Categoría B1",
      duration: "6 semanas",
      review:
        "Nunca pensé que aprendería a conducir. Tenía pánico cada vez que me subía a un carro. Los instructores fueron increíblemente pacientes y me ayudaron a superar mis miedos paso a paso. Hoy conduzco con confianza total.",
      achievement: "Primera vez al volante",
      likes: 127,
      verified: true,
      tags: ["Paciente", "Profesional", "Recomendado"],
    },
    {
      id: 2,
      name: "Roberto Díaz",
      age: 35,
      category: "advanced",
      location: "Cartagena",
      image: "https://i.pravatar.cc/400?img=13",
      rating: 5,
      date: "Hace 1 semana",
      course: "Categoría C2",
      duration: "8 semanas",
      review:
        "Necesitaba la licencia C2 para trabajar. El curso fue intensivo pero muy completo. Los instructores conocen cada detalle de las rutas de examen y te preparan para cualquier situación. Aprobé en el primer intento.",
      achievement: "Aprobó primer intento",
      likes: 89,
      verified: true,
      tags: ["Profesional", "Efectivo", "Excelente"],
    },
    {
      id: 3,
      name: "Sofía Ramírez",
      age: 19,
      category: "beginner",
      location: "Santa Marta",
      image: "https://i.pravatar.cc/400?img=5",
      rating: 5,
      date: "Hace 3 días",
      course: "Categoría A1",
      duration: "3 semanas",
      review:
        "Acababa de cumplir 18 y quería mi primera moto. El curso fue súper dinámico y divertido. Aprendí no solo a conducir, sino a ser una conductora responsable. Los instructores son jóvenes y entienden perfectamente a los estudiantes nuevos.",
      achievement: "Licencia a los 18",
      likes: 156,
      verified: true,
      tags: ["Dinámico", "Joven", "Divertido"],
    },
    {
      id: 4,
      name: "Miguel Ángel Torres",
      age: 52,
      category: "renewal",
      location: "Barranquilla",
      image: "https://i.pravatar.cc/400?img=12",
      rating: 5,
      date: "Hace 5 días",
      course: "Renovación B1",
      duration: "2 semanas",
      review:
        "Llevaba 20 años sin renovar mi licencia. El proceso fue rapidísimo y sin complicaciones. Me actualizaron en todas las nuevas normas de tránsito y me sentí seguro nuevamente. Servicio impecable.",
      achievement: "20 años renovados",
      likes: 73,
      verified: true,
      tags: ["Rápido", "Eficiente", "Actualizado"],
    },
    {
      id: 5,
      name: "Valentina Castro",
      age: 28,
      category: "beginner",
      location: "Cartagena",
      image: "https://i.pravatar.cc/400?img=9",
      rating: 5,
      date: "Hace 1 semana",
      course: "Categoría B1",
      duration: "5 semanas",
      review:
        "Como mujer, tenía miedo de que no me tomaran en serio. Pero aquí encontré un ambiente súper respetuoso y profesional. La instructora que me tocó fue increíble, me enseñó trucos que solo una mujer conductora conoce. 100% recomendado para mujeres.",
      achievement: "Conductora empoderada",
      likes: 203,
      verified: true,
      tags: ["Respetuoso", "Inclusivo", "Empoderador"],
    },
    {
      id: 6,
      name: "Carlos Mendoza",
      age: 41,
      category: "advanced",
      location: "Santa Marta",
      image: "https://i.pravatar.cc/400?img=14",
      rating: 5,
      date: "Hace 4 días",
      course: "Categoría A2",
      duration: "4 semanas",
      review:
        "Quería pasar de A1 a A2 para comprar una moto más grande. El curso de actualización fue perfecto. Me enseñaron técnicas avanzadas de manejo y seguridad en carretera. Ahora viajo por toda la costa sin problemas.",
      achievement: "Upgrade exitoso",
      likes: 91,
      verified: true,
      tags: ["Avanzado", "Técnico", "Seguro"],
    },
  ]

  const stats = [
    { icon: Star, value: "4.9/5", label: "Calificación Promedio", color: "from-yellow-500 to-orange-500" },
    { icon: Users, value: "500+", label: "Reseñas Verificadas", color: "from-green-500 to-emerald-500" },
    { icon: ThumbsUp, value: "98%", label: "Recomendación", color: "from-blue-500 to-cyan-500" },
    { icon: Trophy, value: "95%", label: "Aprobación 1er Intento", color: "from-purple-500 to-pink-500" },
  ]

  const filteredReviews = selectedCategory === "all" ? reviews : reviews.filter((r) => r.category === selectedCategory)

  const toggleLike = (reviewId) => {
    setLikedReviews((prev) => (prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]))
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="glass-effect px-6 py-3 rounded-full border border-green-500/30">
              <span className="text-green-400 font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Historias Reales
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lo Que Dicen Nuestros{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Estudiantes
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más de 500 historias de transformación y éxito en la carretera
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="glass-effect p-6 rounded-2xl border border-white/10 text-center group hover:border-green-500/50 transition-all"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg"
                    : "glass-effect text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-3xl border border-white/10 hover:border-green-500/50 transition-all overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-green-500/50"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.age} años</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-gray-500">{review.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="flex gap-2 mb-4">
                  <div className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400 font-semibold">
                    {review.course}
                  </div>
                  <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs text-cyan-400 font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {review.duration}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-500/20" />
                  <p className="text-gray-300 leading-relaxed pl-6 text-sm">{review.review}</p>
                </div>

                {/* Achievement Badge */}
                <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-3 mb-4 border border-green-500/20">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold text-white">{review.achievement}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(review.id)}
                    className="flex items-center gap-2 group/like"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all ${
                        likedReviews.includes(review.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400 group-hover/like:text-red-500"
                      }`}
                    />
                    <span className="text-sm text-gray-400">
                      {review.likes + (likedReviews.includes(review.id) ? 1 : 0)}
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">Comentar</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-12 rounded-3xl border border-green-500/30 max-w-3xl mx-auto">
            <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">¿Listo para tu propia historia de éxito?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Únete a más de 500 estudiantes satisfechos que ya transformaron sus vidas
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/50 transition-all"
            >
              Comenzar Mi Historia
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
