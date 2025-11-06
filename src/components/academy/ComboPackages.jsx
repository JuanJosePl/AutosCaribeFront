import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Gift, Users, Star, Sparkles, TrendingUp, Award, 
  Clock, Check, Heart, Zap, Crown, Calendar, Shield,
  Target, Rocket, Package
} from "lucide-react"

export default function ComboPackages() {
  const [selectedCombo, setSelectedCombo] = useState(null)

  const combos = [
    {
      id: "family",
      name: "Combo Familiar",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      badge: "Popular",
      price: 1800000,
      originalPrice: 2400000,
      discount: 25,
      description: "Perfecto para toda la familia",
      licenses: 3,
      duration: "12 semanas",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
      features: [
        "3 licencias de cualquier categoría",
        "Horarios flexibles para cada miembro",
        "Descuento del 25%",
        "Instructores dedicados",
        "Material de estudio para todos",
        "Seguros incluidos",
        "Exámenes de práctica ilimitados",
        "Garantía de aprobación",
        "1 año de soporte post-licencia"
      ],
      includes: [
        { icon: Users, text: "3 personas" },
        { icon: Calendar, text: "3 meses" },
        { icon: Shield, text: "Seguro incluido" },
        { icon: Award, text: "Garantía" }
      ]
    },
    {
      id: "friends",
      name: "Combo Amigos",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      badge: "Mejor Valor",
      price: 2200000,
      originalPrice: 3000000,
      discount: 27,
      description: "Aprende con tus amigos",
      licenses: 4,
      duration: "14 semanas",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
      features: [
        "4 licencias categoría A1, A2 o B1",
        "Clases grupales divertidas",
        "Descuento del 27%",
        "Instructor compartido",
        "Eventos y actividades grupales",
        "Material premium",
        "Simulador ilimitado para todos",
        "Competencias amistosas",
        "Certificados especiales",
        "Seguimiento grupal"
      ],
      includes: [
        { icon: Users, text: "4 amigos" },
        { icon: Calendar, text: "3.5 meses" },
        { icon: Zap, text: "Clases grupales" },
        { icon: Gift, text: "Bonos extra" }
      ]
    },
    {
      id: "couple",
      name: "Combo Pareja",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      badge: "Romántico",
      price: 1400000,
      originalPrice: 1800000,
      discount: 22,
      description: "Aprende junto a tu pareja",
      licenses: 2,
      duration: "8 semanas",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
      features: [
        "2 licencias mismo horario",
        "Clases en pareja",
        "Descuento del 22%",
        "Instructor romántico",
        "Horarios nocturnos especiales",
        "Cena de celebración incluida",
        "Fotos profesionales",
        "Material personalizado",
        "Sorpresas especiales"
      ],
      includes: [
        { icon: Users, text: "2 personas" },
        { icon: Calendar, text: "2 meses" },
        { icon: Heart, text: "Experiencias" },
        { icon: Gift, text: "Detalles" }
      ]
    },
    {
      id: "student",
      name: "Combo Estudiante",
      icon: Star,
      color: "from-green-500 to-emerald-500",
      badge: "Estudiantes",
      price: 650000,
      originalPrice: 850000,
      discount: 24,
      description: "Especial para estudiantes",
      licenses: 1,
      duration: "6 semanas",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      features: [
        "Descuento estudiante 24%",
        "Horarios académicos flexibles",
        "Material digital completo",
        "Clases fin de semana",
        "Simulador ilimitado",
        "Grupo de estudio",
        "App móvil premium",
        "Mentoría personalizada",
        "Certificado verificable"
      ],
      includes: [
        { icon: Star, text: "1 estudiante" },
        { icon: Calendar, text: "1.5 meses" },
        { icon: Zap, text: "App incluida" },
        { icon: Award, text: "Certificado" }
      ]
    },
    {
      id: "express",
      name: "Combo Express VIP",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      badge: "Ultra Rápido",
      price: 1200000,
      originalPrice: 1600000,
      discount: 25,
      description: "Licencia en tiempo récord",
      licenses: 1,
      duration: "2 semanas",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      features: [
        "Licencia en 2 semanas",
        "Clases intensivas diarias",
        "Instructor VIP exclusivo",
        "Vehículo premium",
        "Prioridad absoluta",
        "Simulador premium 24/7",
        "Seguro total incluido",
        "Preparación psicotécnica",
        "Garantía aprobación",
        "Kit VIP completo"
      ],
      includes: [
        { icon: Rocket, text: "Ultra rápido" },
        { icon: Calendar, text: "2 semanas" },
        { icon: Crown, text: "VIP" },
        { icon: Shield, text: "Garantía" }
      ]
    },
    {
      id: "platinum",
      name: "Combo Platinum",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      badge: "Exclusivo",
      price: 3500000,
      originalPrice: 5000000,
      discount: 30,
      description: "La experiencia definitiva",
      licenses: 2,
      duration: "8 semanas",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
      features: [
        "2 licencias cualquier categoría",
        "Servicio VIP completo",
        "Vehículos de lujo",
        "Instructor celebridad",
        "Clases a domicilio",
        "Conserje personal",
        "Eventos exclusivos",
        "Seguro platinum",
        "Renovación gratis 3 años",
        "Mantenimiento incluido",
        "Acceso a club VIP",
        "Viajes de práctica"
      ],
      includes: [
        { icon: Crown, text: "Platinum" },
        { icon: Calendar, text: "2 meses" },
        { icon: Sparkles, text: "Todo incluido" },
        { icon: Gift, text: "Beneficios" }
      ]
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-pink-500/30">
              <span className="text-pink-400 font-semibold text-sm flex items-center gap-2">
                <Gift className="w-4 h-4 animate-bounce" />
                Combos Especiales
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Paquetes <span className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">Imbatibles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ahorra hasta 30% con nuestros combos diseñados para cada necesidad
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto"
        >
          {[
            { icon: Users, value: "2,500+", label: "Combos Vendidos" },
            { icon: Star, value: "4.9/5", label: "Satisfacción" },
            { icon: TrendingUp, value: "30%", label: "Ahorro Máximo" },
            { icon: Award, value: "95%", label: "Aprobación" }
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-pink-500/50 transition-all"
              >
                <Icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, index) => {
            const Icon = combo.icon
            return (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Badge */}
                <div className="absolute -top-4 right-4 z-20">
                  <div className={`bg-gradient-to-r ${combo.color} text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg`}>
                    {combo.badge}
                  </div>
                </div>

                <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-500 h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={combo.image} 
                      alt={combo.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Discount Badge on Image */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        -{combo.discount}%
                      </div>
                    </div>

                    {/* Icon on Image */}
                    <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br ${combo.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">{combo.name}</h3>
                    <p className="text-gray-400 mb-4">{combo.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500 line-through text-lg">
                          {formatPrice(combo.originalPrice)}
                        </span>
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          Ahorra {formatPrice(combo.originalPrice - combo.price)}
                        </span>
                      </div>
                      <div className="text-4xl font-bold text-white">
                        {formatPrice(combo.price)}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {combo.licenses} licencia{combo.licenses > 1 ? 's' : ''} • {combo.duration}
                      </div>
                    </div>

                    {/* Includes */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {combo.includes.map((item, idx) => {
                        const ItemIcon = item.icon
                        return (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <ItemIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                            <span>{item.text}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6 flex-1">
                      {combo.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {combo.features.length > 5 && (
                        <button className="text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">
                          + Ver {combo.features.length - 5} más
                        </button>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-gradient-to-r ${combo.color} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all`}
                    >
                      Comprar Combo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl border border-pink-500/30 p-12 max-w-4xl mx-auto">
            <Package className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿No encuentras el combo perfecto?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Crea tu propio combo personalizado. Elige las categorías, horarios y servicios que necesitas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-pink-500/50 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Crear Combo Personalizado
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}