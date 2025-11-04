import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, TrendingUp, Users } from "lucide-react"

export default function BrandsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const brands = [
    { name: "BMW", logo: "/logoAutos/bmw.png" },
    { name: "Chevrolet", logo: "/logoAutos/chevrolet.png" },
    { name: "Ford", logo: "/logoAutos/ford.png" },
    { name: "Hyundai", logo: "/logoAutos/hyundai.png" },
    { name: "Mazda", logo: "/logoAutos/mazda.png" },
    { name: "Peugeot", logo: "/logoAutos/pegaut.png" },
    { name: "Porsche", logo: "/logoAutos/porshe.png" },
    { name: "Renault", logo: "/logoAutos/renault.png" },
    { name: "Toyota", logo: "/logoAutos/toyota.png" },
  ]

  const stats = [
    { icon: Award, value: "9+", label: "Marcas Premium", color: "from-primary-400 to-primary-600" },
    { icon: TrendingUp, value: "98%", label: "Satisfacción", color: "from-accent-400 to-accent-600" },
    { icon: Users, value: "15K+", label: "Clientes", color: "from-primary-500 to-primary-700" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="glass-effect px-6 py-3 rounded-full border border-primary-500/30">
              <span className="text-primary-400 font-semibold text-sm">
                🏆 Marcas Exclusivas
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white px-4">
            Marcas de{" "}
            <span className="gradient-text-green">
              Prestigio Mundial
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 leading-relaxed">
            Trabajamos con las marcas más reconocidas y prestigiosas del mercado automotriz internacional
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden glass-effect backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              className="group relative aspect-square flex items-center justify-center p-6 md:p-8 glass-effect backdrop-blur-sm rounded-2xl border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-all duration-500" />
              
              {/* Logo */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Brand name on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center font-semibold text-sm md:text-base">{brand.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 gradient-bg-green hover:gradient-bg-green-hover text-white font-semibold rounded-full shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
          >
            Ver Todos los Vehículos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}