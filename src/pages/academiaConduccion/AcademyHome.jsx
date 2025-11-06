"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Car,
  Trophy,
  Users,
  Star,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Play,
  Award,
  Target,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function AcademyHome() {
  const stats = [
    { icon: Users, value: "15,000+", label: "Estudiantes Graduados" },
    { icon: Trophy, value: "98%", label: "Tasa de Aprobación" },
    { icon: Star, value: "4.9/5", label: "Calificación Promedio" },
    { icon: Award, value: "25+", label: "Años de Experiencia" },
  ]

  const features = [
    {
      icon: Car,
      title: "Simulador Virtual 3D",
      description: "Practica en un entorno seguro antes de conducir en la calle",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: GraduationCap,
      title: "Instructores Certificados",
      description: "Aprende con los mejores profesionales del sector",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Clases disponibles 24/7 adaptadas a tu agenda",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Garantía de Aprobación",
      description: "Si no apruebas, te devolvemos tu dinero",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Aprendizaje Rápido",
      description: "Obtén tu licencia en tiempo récord con nuestro método",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Target,
      title: "Rutas Personalizadas",
      description: "Plan de estudios adaptado a tu nivel y objetivos",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const benefits = [
    "Clases teóricas y prácticas incluidas",
    "Acceso ilimitado al simulador virtual",
    "Material de estudio digital gratuito",
    "Seguimiento personalizado de progreso",
    "Certificación oficial reconocida",
    "Soporte 24/7 vía chat y WhatsApp",
  ]

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-emerald-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DriveAcademy</h1>
                <p className="text-xs text-emerald-400">Tu camino al éxito</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 text-white hover:text-emerald-400 transition-colors"
                >
                  Iniciar Sesión
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30"
                >
                  Registrarse
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">La academia #1 del país</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Aprende a Conducir
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Como un Pro
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Obtén tu licencia de conducir con el método más innovador y efectivo. Clases presenciales, simulador 3D
                y seguimiento personalizado.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg shadow-2xl shadow-emerald-500/50 flex items-center gap-2"
                  >
                    Comenzar Ahora
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Ver Demo
                </motion.button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 border-2 border-slate-950"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-400">Más de 15,000 estudiantes satisfechos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Car className="w-32 h-32 text-emerald-400" />
                </div>

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-8 right-8 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-emerald-500/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">98%</p>
                      <p className="text-xs text-slate-400">Aprobación</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="absolute bottom-8 left-8 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">15K+</p>
                      <p className="text-xs text-slate-400">Estudiantes</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-all group"
              >
                <stat.icon className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ofrecemos la mejor experiencia de aprendizaje con tecnología de punta
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Todo lo que necesitas en un solo lugar</h2>
              <p className="text-xl text-slate-400 mb-8">
                Nuestro programa completo incluye todo lo necesario para que obtengas tu licencia sin complicaciones
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <GraduationCap className="w-48 h-48 text-emerald-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/30 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Únete a miles de estudiantes que ya obtuvieron su licencia con nosotros
            </p>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg shadow-2xl shadow-emerald-500/50 inline-flex items-center gap-2"
              >
                Registrarse Gratis
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DriveAcademy</span>
          </div>
          <p className="text-slate-400 mb-4">La mejor academia de conducción del país</p>
          <p className="text-sm text-slate-500">© 2025 DriveAcademy. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
