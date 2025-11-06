"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Gift,
  Users,
  Copy,
  Check,
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  DollarSign,
  TrendingUp,
  Award,
  Star,
  Sparkles,
  Crown,
  Heart,
  Trophy,
  ChevronRight,
} from "lucide-react"

export default function ReferralProgram() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)
  const [referralCode] = useState("CONDUCE2024")

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://ceadelcaribe.com/ref/${referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const benefits = [
    {
      icon: DollarSign,
      title: "$50.000 por Referido",
      description: "Gana dinero por cada amigo que se inscriba",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Gift,
      title: "Descuentos Exclusivos",
      description: "Tu amigo recibe 15% de descuento en su curso",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Trophy,
      title: "Bonos Especiales",
      description: "Desbloquea recompensas al referir 5, 10 y 20 amigos",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Crown,
      title: "Programa VIP",
      description: "Acceso a beneficios exclusivos para top referidores",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const tiers = [
    {
      name: "Bronce",
      referrals: "1-4 referidos",
      icon: Award,
      color: "from-orange-700 to-orange-500",
      rewards: ["$50.000 por referido", "Certificado digital", "Acceso a eventos"],
    },
    {
      name: "Plata",
      referrals: "5-9 referidos",
      icon: Star,
      color: "from-gray-400 to-gray-300",
      rewards: ["$60.000 por referido", "Clase gratis adicional", "Merchandising exclusivo", "Prioridad en horarios"],
      popular: true,
    },
    {
      name: "Oro",
      referrals: "10-19 referidos",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-400",
      rewards: [
        "$75.000 por referido",
        "Curso gratis para familiar",
        "Kit VIP completo",
        "Eventos exclusivos",
        "Renovación gratis",
      ],
    },
    {
      name: "Diamante",
      referrals: "20+ referidos",
      icon: Crown,
      color: "from-cyan-400 to-blue-500",
      rewards: [
        "$100.000 por referido",
        "Vehículo premium 1 mes",
        "Membresía VIP vitalicia",
        "Viaje de conducción",
        "Comisiones permanentes",
        "Reconocimiento público",
      ],
    },
  ]

  const stats = [
    { icon: Users, value: "1,234", label: "Referidos Activos" },
    { icon: DollarSign, value: "$45M", label: "Pagado en Comisiones" },
    { icon: TrendingUp, value: "89%", label: "Tasa de Conversión" },
    { icon: Heart, value: "4.9/5", label: "Satisfacción" },
  ]

  const shareOptions = [
    { icon: MessageCircle, name: "WhatsApp", color: "bg-green-500", link: "whatsapp" },
    { icon: Facebook, name: "Facebook", color: "bg-blue-600", link: "facebook" },
    { icon: Twitter, name: "Twitter", color: "bg-sky-500", link: "twitter" },
    { icon: Instagram, name: "Instagram", color: "bg-pink-500", link: "instagram" },
    { icon: Mail, name: "Email", color: "bg-gray-600", link: "email" },
    { icon: Linkedin, name: "LinkedIn", color: "bg-blue-700", link: "linkedin" },
  ]

  const topReferrers = [
    {
      rank: 1,
      name: "María González",
      referrals: 47,
      earnings: "$4.700.000",
      avatar: "https://i.pravatar.cc/150?img=5",
      badge: "diamond",
    },
    {
      rank: 2,
      name: "Carlos Ruiz",
      referrals: 38,
      earnings: "$3.800.000",
      avatar: "https://i.pravatar.cc/150?img=12",
      badge: "diamond",
    },
    {
      rank: 3,
      name: "Laura Mendoza",
      referrals: 29,
      earnings: "$2.900.000",
      avatar: "https://i.pravatar.cc/150?img=1",
      badge: "gold",
    },
    {
      rank: 4,
      name: "Roberto Díaz",
      referrals: 23,
      earnings: "$2.300.000",
      avatar: "https://i.pravatar.cc/150?img=13",
      badge: "gold",
    },
    {
      rank: 5,
      name: "Ana Martínez",
      referrals: 18,
      earnings: "$1.800.000",
      avatar: "https://i.pravatar.cc/150?img=9",
      badge: "gold",
    },
  ]

  const badgeColors = {
    diamond: "from-cyan-400 to-blue-500",
    gold: "from-yellow-500 to-yellow-400",
    silver: "from-gray-400 to-gray-300",
    bronze: "from-orange-700 to-orange-500",
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.4, 1, 1.4],
          }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
                <Gift className="w-4 h-4" />
                Programa de Referidos
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gana Dinero{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Compartiendo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recomienda a tus amigos y gana hasta $100.000 por cada referido exitoso
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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
                <Icon className="w-10 h-10 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Referral Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-3xl border border-green-500/30 p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Tu Código de Referido</h3>
              <p className="text-gray-400">Comparte este código o link con tus amigos</p>
            </div>

            {/* Referral Code */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="glass-effect rounded-2xl border border-white/20 p-6 mb-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-2">Tu código único</p>
                    <p className="text-white text-2xl font-bold tracking-wider">{referralCode}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopy}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-semibold text-white flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copiar Link
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {shareOptions.map((option, idx) => {
                  const Icon = option.icon
                  return (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${option.color} p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-lg transition-all`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      <span className="text-white text-xs font-semibold">{option.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tiers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Niveles de{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Recompensas
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Mientras más referidos, mayores beneficios</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass-effect rounded-3xl border overflow-hidden relative ${
                    tier.popular ? "border-green-500 shadow-lg shadow-green-500/20" : "border-white/10"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full">
                      <span className="text-white text-xs font-bold">Popular</span>
                    </div>
                  )}

                  <div className={`h-32 bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                    <Icon className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                    <p className="text-gray-400 text-sm mb-6">{tier.referrals}</p>

                    <ul className="space-y-3">
                      {tier.rewards.map((reward, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{reward}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Top Referrers Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="glass-effect rounded-3xl border border-white/10 p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Top Referidores del Mes</h3>
              <p className="text-gray-400">Los mejores embajadores de nuestra academia</p>
            </div>
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>

          <div className="space-y-4">
            {topReferrers.map((referrer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6 + idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-2xl border border-white/10 p-6 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                      idx === 0
                        ? "bg-gradient-to-br from-yellow-500 to-yellow-400 text-white"
                        : idx === 1
                          ? "bg-gradient-to-br from-gray-400 to-gray-300 text-white"
                          : idx === 2
                            ? "bg-gradient-to-br from-orange-700 to-orange-500 text-white"
                            : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {referrer.rank}
                  </div>

                  {/* Avatar */}
                  <img
                    src={referrer.avatar || "/placeholder.svg"}
                    alt={referrer.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-green-500/50"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1">{referrer.name}</h4>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400">{referrer.referrals} referidos</span>
                      <span className="text-green-400 font-semibold">{referrer.earnings}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`px-4 py-2 bg-gradient-to-r ${badgeColors[referrer.badge]} rounded-full`}>
                    <span className="text-white text-sm font-bold capitalize">{referrer.badge}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-3xl border border-green-500/30 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10" />
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">¿Listo para Empezar a Ganar?</h3>
              <p className="text-gray-300 text-lg mb-8">
                Únete al programa hoy y comienza a ganar dinero compartiendo tu experiencia
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/50 transition-all inline-flex items-center gap-2"
              >
                Comenzar Ahora
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
