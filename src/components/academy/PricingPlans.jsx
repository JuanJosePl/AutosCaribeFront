import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, Star, Zap, Crown, Sparkles, Clock, Users, 
  Calendar, Award, TrendingUp, Gift, Shield, Phone
} from "lucide-react"

export default function PricingPlans() {
  const [selectedCategory, setSelectedCategory] = useState("A1")
  const [billingPeriod, setBillingPeriod] = useState("mensual") // mensual, completo

  const categories = [
    { id: "A1", name: "Categoría A1", icon: "🏍️", description: "Motos hasta 125cc" },
    { id: "A2", name: "Categoría A2", icon: "🏍️", description: "Motos +125cc" },
    { id: "B1", name: "Categoría B1", icon: "🚗", description: "Automóviles" },
    { id: "C1", name: "Categoría C1", icon: "🚐", description: "Servicio Público" },
    { id: "C2", name: "Categoría C2", icon: "🚌", description: "Buses" }
  ]

  const plans = {
    A1: [
      {
        id: "basic-a1",
        name: "Básico",
        icon: Star,
        color: "from-blue-500 to-cyan-500",
        priceMonthly: 180000,
        priceTotal: 500000,
        duration: "3 semanas",
        classes: 12,
        theory: 8,
        practice: 12,
        features: [
          "12 clases prácticas",
          "8 clases teóricas",
          "Material de estudio digital",
          "Horarios flexibles",
          "Simulador básico",
          "Certificado de finalización"
        ],
        popular: false
      },
      {
        id: "pro-a1",
        name: "Profesional",
        icon: Zap,
        color: "from-purple-500 to-pink-500",
        priceMonthly: 250000,
        priceTotal: 680000,
        duration: "4 semanas",
        classes: 16,
        theory: 12,
        practice: 16,
        features: [
          "16 clases prácticas",
          "12 clases teóricas",
          "Material premium impreso",
          "Prioridad en horarios",
          "Simulador avanzado ilimitado",
          "2 exámenes de práctica",
          "Seguro incluido",
          "Instructor dedicado",
          "Seguimiento personalizado"
        ],
        popular: true,
        discount: 15
      },
      {
        id: "vip-a1",
        name: "VIP Express",
        icon: Crown,
        color: "from-yellow-500 to-orange-500",
        priceMonthly: 350000,
        priceTotal: 950000,
        duration: "2 semanas",
        classes: 20,
        theory: 15,
        practice: 20,
        features: [
          "20 clases prácticas intensivas",
          "15 clases teóricas",
          "Kit premium completo",
          "Horarios VIP (cualquier hora)",
          "Simulador premium ilimitado",
          "5 exámenes de práctica",
          "Seguro premium",
          "Instructor VIP exclusivo",
          "Vehículo de última generación",
          "Preparación examen real",
          "Garantía de aprobación",
          "Renovación gratis 1 año"
        ],
        popular: false,
        badge: "Más Vendido"
      }
    ],
    B1: [
      {
        id: "basic-b1",
        name: "Básico",
        icon: Star,
        color: "from-green-500 to-emerald-500",
        priceMonthly: 280000,
        priceTotal: 850000,
        duration: "5 semanas",
        classes: 18,
        theory: 12,
        practice: 18,
        features: [
          "18 clases prácticas",
          "12 clases teóricas",
          "Material de estudio digital",
          "Horarios flexibles",
          "Simulador básico",
          "Práctica en ciudad",
          "Certificado de finalización"
        ],
        popular: false
      },
      {
        id: "pro-b1",
        name: "Profesional",
        icon: Zap,
        color: "from-blue-500 to-indigo-500",
        priceMonthly: 380000,
        priceTotal: 1100000,
        duration: "6 semanas",
        classes: 24,
        theory: 16,
        practice: 24,
        features: [
          "24 clases prácticas",
          "16 clases teóricas",
          "Material premium impreso",
          "Prioridad en horarios",
          "Simulador avanzado ilimitado",
          "Práctica en carretera",
          "4 exámenes de práctica",
          "Seguro incluido",
          "Instructor dedicado",
          "Estacionamiento avanzado",
          "Conducción nocturna"
        ],
        popular: true,
        discount: 20
      },
      {
        id: "vip-b1",
        name: "VIP Executive",
        icon: Crown,
        color: "from-purple-500 to-pink-500",
        priceMonthly: 550000,
        priceTotal: 1500000,
        duration: "4 semanas",
        classes: 30,
        theory: 20,
        practice: 30,
        features: [
          "30 clases prácticas intensivas",
          "20 clases teóricas personalizadas",
          "Kit ejecutivo premium",
          "Horarios VIP 24/7",
          "Simulador de última generación",
          "Práctica en todo terreno",
          "8 exámenes de práctica",
          "Seguro premium total",
          "Instructor VIP certificado",
          "Vehículo BMW/Mercedes",
          "Clases a domicilio",
          "Preparación psicotécnica",
          "Garantía aprobación 100%",
          "Renovación gratis 2 años",
          "Mantenimiento básico gratis"
        ],
        popular: false,
        badge: "Premium"
      }
    ]
  }

  const currentPlans = plans[selectedCategory] || plans.A1

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
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            <div className="bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-green-500/30">
              <span className="text-green-400 font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Planes Flexibles
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elige tu <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Plan Perfecto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Planes diseñados para cada necesidad. Paga mensual o completo con descuento.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-4 rounded-2xl font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/50'
                  : 'bg-white/5 backdrop-blur-xl text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div className="text-xs opacity-80">{category.description}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Billing Period Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-xl p-2 rounded-full border border-white/10 inline-flex">
            <button
              onClick={() => setBillingPeriod("mensual")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                billingPeriod === "mensual"
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Pago Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("completo")}
              className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                billingPeriod === "completo"
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Pago Completo
              <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                -15%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, index) => {
              const Icon = plan.icon
              const displayPrice = billingPeriod === "mensual" ? plan.priceMonthly : plan.priceTotal
              const finalPrice = billingPeriod === "completo" && plan.discount 
                ? displayPrice * (1 - plan.discount / 100) 
                : displayPrice

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`relative group ${plan.popular ? 'md:scale-105 z-10' : ''}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                        ⭐ Más Popular
                      </div>
                    </div>
                  )}

                  {plan.badge && (
                    <div className="absolute -top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className={`relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl border ${
                    plan.popular ? 'border-green-500/50' : 'border-white/10'
                  } p-8 h-full transition-all duration-500 group-hover:border-green-500/50`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.duration} • {plan.classes} clases</p>

                    {/* Price */}
                    <div className="mb-6">
                      {billingPeriod === "completo" && plan.discount && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-500 line-through text-lg">
                            {formatPrice(displayPrice)}
                          </span>
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            -{plan.discount}%
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">
                          {formatPrice(finalPrice).split(',')[0]}
                        </span>
                        {billingPeriod === "mensual" && (
                          <span className="text-gray-400">/mes</span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/50'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Elegir Plan
                    </motion.button>

                    {/* Additional Info */}
                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{plan.theory}h teoría</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{plan.practice}h práctica</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas un plan personalizado?
            </h3>
            <p className="text-gray-400 mb-6">
              Contáctanos y diseñaremos un plan adaptado a tus necesidades específicas
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Hablar con un Asesor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}