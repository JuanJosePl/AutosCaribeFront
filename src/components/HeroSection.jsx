import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import { ChevronDown, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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
  };

  const features = [
    {
      icon: Sparkles,
      text: "Vehículos Premium",
      color: "from-primary-400 to-primary-600",
    },
    {
      icon: Zap,
      text: "Servicio Rápido",
      color: "from-accent-400 to-accent-600",
    },
    {
      icon: Shield,
      text: "Garantía Total",
      color: "from-primary-500 to-primary-700",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            src="https://res.cloudinary.com/disqdfjy9/video/upload/v1762275537/cars2compri_sfogok.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Multi-layer gradient overlay - Verde */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-transparent to-primary-900/40" />

        {/* Animated gradient orbs - Verde */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-32 md:py-40">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8 inline-block">
              <div className="px-6 py-3 glass-effect border border-primary-500/30 rounded-full">
                <span className="text-primary-400 font-semibold text-sm md:text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Líder en el Caribe
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-tight"
            >
              Bienvenido a{" "}
              <span className="gradient-text-green block sm:inline mt-2 sm:mt-0">
                Autos del Caribe
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto px-4"
            >
              Tu destino premium para vehículos de{" "}
              <span className="font-semibold text-primary-400">lujo</span> y
              repuestos de{" "}
              <span className="font-semibold text-primary-400">
                calidad excepcional
              </span>
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 px-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center space-x-2 px-4 md:px-6 py-3 glass-effect border border-primary-500/20 rounded-full"
                  >
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm md:text-base">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Link to="/galeria">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 gradient-bg-green text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Ver Inventario</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 gradient-bg-green-hover"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect border-2 border-primary-500/50 hover:border-primary-500 hover:bg-primary-500/10 text-white font-semibold rounded-full transition-all"
              >
                Contáctanos
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto px-4"
            >
              {[
                { value: "500+", label: "Vehículos" },
                { value: "20+", label: "Años" },
                { value: "15K+", label: "Clientes" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 glass-effect rounded-xl border border-primary-500/20"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#brands"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
        >
          <span className="text-white/60 text-sm group-hover:text-primary-400 transition-colors">
            Desliza
          </span>
          <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
