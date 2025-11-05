import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Package,
  Shield,
  Clock,
  CheckCircle,
  Wrench,
  Star,
  ArrowRight,
  Sparkles 
} from "lucide-react";
import { Link } from "react-router-dom"


export default function PartsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      icon: Package,
      value: "500+",
      label: "Repuestos en Stock",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Garantía Original",
      color: "from-accent-500 to-accent-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Soporte Técnico",
      color: "from-primary-600 to-primary-700",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Autenticidad Garantizada",
      description:
        "Todos nuestros repuestos son 100% originales y certificados",
    },
    {
      icon: Wrench,
      title: "Instalación Profesional",
      description: "Equipo de técnicos especializados en todas las marcas",
    },
    {
      icon: Star,
      title: "Calidad Premium",
      description: "Solo trabajamos con proveedores oficiales de primera línea",
    },
  ];

  return (
    <section
      id="parts"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/disqdfjy9/video/upload/f_auto,q_auto/v1730748023/piesasCars_uhujyb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Enhanced overlay with gradient - Verde */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-transparent to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 py-20 md:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block mb-8"
              >
                <div className="glass-effect px-6 py-3 rounded-full border border-primary-500/30">
                  <span className="text-primary-400 font-semibold text-sm flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Repuestos Certificados
                  </span>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
                Repuestos{" "}
                <span className="gradient-text-green block mt-2">
                  Originales
                </span>
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
                Contamos con un amplio inventario de repuestos originales y de
                alta calidad. Nuestro equipo de expertos garantiza la{" "}
                <span className="text-primary-400 font-semibold">
                  autenticidad
                </span>{" "}
                y el mejor{" "}
                <span className="text-primary-400 font-semibold">
                  rendimiento
                </span>{" "}
                para tu vehículo.
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 gradient-bg-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Link to="/galeria-repuesto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 gradient-bg-green text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-primary-500/50 transition-all mt-8 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="relative z-10">Ver Catálogo de Repuestos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Column - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden glass-effect-strong backdrop-blur-xl p-6 md:p-8 lg:p-10 rounded-2xl border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                      {/* Animated background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        animate={
                          hoveredCard === index
                            ? { scale: [1, 1.2, 1], rotate: [0, 90, 0] }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      <div className="relative z-10 flex items-center space-x-6">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        >
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <motion.div
                            className="text-4xl md:text-5xl font-bold text-white mb-2"
                            animate={
                              hoveredCard === index
                                ? { scale: [1, 1.1, 1] }
                                : {}
                            }
                            transition={{ duration: 0.3 }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-gray-300 text-base md:text-lg">
                            {stat.label}
                          </div>
                        </div>
                      </div>

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={hoveredCard === index ? { x: "100%" } : {}}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-effect-strong backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-primary-500/30"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary-400" />
                  ¿Por qué elegirnos?
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                    <div className="w-2 h-2 bg-primary-400 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm md:text-base">
                      Envío rápido a todo el Caribe
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                    <div className="w-2 h-2 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm md:text-base">
                      Precios competitivos garantizados
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                    <div className="w-2 h-2 bg-primary-400 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm md:text-base">
                      Asesoría técnica especializada
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
