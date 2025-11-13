import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, GraduationCap, RefreshCw, ArrowRight, Sparkles } from "lucide-react";

/**
 * HeroSection - Componente principal de la landing page
 * 
 * Funcionalidades implementadas:
 * - Efecto parallax con seguimiento del mouse (desktop) y giroscopio (mobile)
 * - Video de fondo con múltiples capas de overlay
 * - Animaciones suaves y progresivas con Framer Motion
 * - Botones CTA con efectos glow y hover avanzados
 * - Diseño completamente responsivo
 * - Jerarquía visual clara (título → subtítulo → CTAs)
 */
export default function HeroSection() {
  // ============================================
  // ESTADO Y VALORES DE ANIMACIÓN
  // ============================================
  
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Valores de motion para el efecto parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transformaciones suavizadas para el parallax (desktop)
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), {
    stiffness: 50,
    damping: 20,
  });
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), {
    stiffness: 50,
    damping: 20,
  });

  // ============================================
  // EFECTOS Y MANEJADORES DE EVENTOS
  // ============================================

  useEffect(() => {
    // Activar visibilidad para animaciones de entrada
    setIsVisible(true);

    // Detectar dispositivos móviles
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /**
   * handleMouseMove - Maneja el movimiento del mouse para efecto parallax
   * Convierte las coordenadas del mouse en valores normalizados (0-1)
   * para aplicar transformaciones suaves a los elementos
   */
  const handleMouseMove = (e) => {
    if (isMobile) return; // Desactivar en mobile

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Normalizar valores entre 0 y 1
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  /**
   * handleDeviceOrientation - Maneja el giroscopio en dispositivos móviles
   * Utiliza los valores beta (inclinación frontal) y gamma (inclinación lateral)
   * para simular el efecto parallax en mobile
   */
  useEffect(() => {
    if (!isMobile) return;

    const handleOrientation = (e) => {
      // Beta: inclinación frontal/trasera (-180 a 180)
      // Gamma: inclinación izquierda/derecha (-90 a 90)
      const beta = e.beta || 0;
      const gamma = e.gamma || 0;

      // Normalizar valores para parallax suave
      mouseX.set((gamma + 90) / 180); // -90 a 90 → 0 a 1
      mouseY.set((beta + 90) / 180); // -90 a 90 → 0 a 1
    };

    // Solicitar permiso en iOS 13+
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      // Android y navegadores que no requieren permiso
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [isMobile]);

  // ============================================
  // VARIANTES DE ANIMACIÓN
  // ============================================

  /**
   * containerVariants - Define la animación escalonada del contenedor
   * Los elementos hijos se animan uno tras otro con un retraso de 0.15s
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  /**
   * itemVariants - Animación de entrada para cada elemento
   * Los elementos aparecen desde abajo con un efecto de resorte natural
   */
  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  /**
   * floatingVariants - Animación flotante infinita para elementos decorativos
   * Crea un movimiento sutil y continuo hacia arriba y abajo
   */
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // ============================================
  // DATOS DE LOS BOTONES CTA
  // ============================================

  /**
   * ctaButtons - Configuración de los tres botones principales
   * Cada botón tiene:
   * - Icono distintivo
   * - Texto descriptivo
   * - Enlace de destino
   * - Colores de gradiente personalizados
   * - Efecto glow específico
   */
  const ctaButtons = [
    {
      icon: Car,
      text: "Compra tu vehículo con cero cuota inicial",
      href: "/galeria",
      gradient: "from-primary-500 to-primary-700",
      hoverGradient: "from-primary-400 to-primary-600",
      glowColor: "rgba(34, 197, 94, 0.6)",
    },
    {
      icon: GraduationCap,
      text: "Obtén tu licencia de conducción",
      href: "/academia",
      gradient: "from-accent-500 to-accent-700",
      hoverGradient: "from-accent-400 to-accent-600",
      glowColor: "rgba(6, 182, 212, 0.6)",
    },
    {
      icon: RefreshCw,
      text: "Renueva tu licencia — Chile y el Caribe",
      href: "/academia/renovar-licencia",
      gradient: "from-primary-600 to-accent-600",
      hoverGradient: "from-primary-500 to-accent-500",
      glowColor: "rgba(20, 184, 166, 0.6)",
    },
  ];

  // ============================================
  // RENDERIZADO DEL COMPONENTE
  // ============================================

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* ============================================
          FONDO DE VIDEO CON OVERLAYS
          ============================================ */}
      <div className="absolute inset-0">
        {/* Video de fondo optimizado */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            src="https://res.cloudinary.com/disqdfjy9/video/upload/v1762275537/cars2compri_sfogok.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Overlay de gradiente oscuro - Mejora la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
        
        {/* Overlay de gradiente lateral verde - Refuerza el branding */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-primary-900/30" />

        {/* ============================================
            ORBES ANIMADOS - Efecto parallax aplicado
            ============================================ */}
        
        {/* Orbe verde superior izquierdo con parallax */}
        <motion.div
          style={{
            x: parallaxX,
            y: parallaxY,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary-500/40 rounded-full blur-3xl"
        />

        {/* Orbe cian inferior derecho con parallax inverso */}
        <motion.div
          style={{
            x: useTransform(parallaxX, (v) => -v),
            y: useTransform(parallaxY, (v) => -v),
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent-500/40 rounded-full blur-3xl"
        />

        {/* Orbe adicional centro - Movimiento diagonal */}
        <motion.div
          style={{
            x: useTransform(parallaxX, (v) => v * 0.5),
            y: useTransform(parallaxY, (v) => v * 0.8),
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary-400/30 rounded-full blur-3xl"
        />
      </div>

      {/* ============================================
          CONTENIDO PRINCIPAL
          ============================================ */}
      <div className="relative z-10 w-full px-4 py-24 md:py-32 lg:py-40">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            {/* ============================================
                BADGE SUPERIOR - "Líder en el Caribe"
                ============================================ */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8 inline-block">
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="px-4 md:px-6 py-2.5 md:py-3 glass-effect border border-primary-500/40 rounded-full"
              >
                <span className="text-primary-400 font-semibold text-xs md:text-sm flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Líder en el Caribe
                </span>
              </motion.div>
            </motion.div>

            {/* ============================================
                TÍTULO PRINCIPAL
                Jerarquía visual más importante
                ============================================ */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight px-4"
            >
              Sea del Caribe —{" "}
              <span className="block sm:inline mt-1 sm:mt-0">
                <span className="gradient-text">
                  Donde la movilidad evoluciona
                </span>
              </span>
            </motion.h1>

            {/* ============================================
                SUBTÍTULO
                Mensaje de unión entre marcas
                ============================================ */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 md:mb-14 font-light leading-relaxed max-w-4xl mx-auto px-4"
            >
              <span className="font-semibold text-primary-400">Autos del Caribe</span> y{" "}
              <span className="font-semibold text-accent-400">CEA del Caribe</span>{" "}
              unidos para tu camino
            </motion.p>

            {/* ============================================
                BOTONES CTA - Call To Action
                Tres acciones principales del sitio
                ============================================ */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 justify-center px-4 mb-12 md:mb-16"
            >
              {ctaButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <Link key={index} to={button.href} className="flex-1 min-w-[280px] max-w-[400px]">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 20px 40px ${button.glowColor}`,
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={`group relative w-full px-6 py-4 bg-gradient-to-r ${button.gradient} text-white font-semibold rounded-xl overflow-hidden shadow-lg transition-all duration-300`}
                    >
                      {/* Efecto de brillo al hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${button.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      
                      {/* Contenido del botón */}
                      <span className="relative z-10 flex items-center justify-center gap-3 text-sm md:text-base">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                        {button.text}
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>

                      {/* Efecto de brillo animado (shimmer) */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </Link>
                );
              })}
            </motion.div>

            {/* ============================================
                ESTADÍSTICAS - Social Proof
                Muestra credibilidad y experiencia
                ============================================ */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
            >
              {[
                { value: "500+", label: "Vehículos Disponibles" },
                { value: "20+", label: "Años de Experiencia" },
                { value: "15K+", label: "Clientes Satisfechos" },
                { value: "98%", label: "Tasa de Aprobación" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 md:p-5 glass-effect rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-static mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============================================
          INDICADOR DE SCROLL
          Invita al usuario a explorar más contenido
          ============================================ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#brands"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
        >
          <span className="text-white/50 text-xs md:text-sm group-hover:text-primary-400 transition-colors">
            Descubre más
          </span>
          <div className="w-6 h-10 border-2 border-primary-500/50 group-hover:border-primary-500 rounded-full flex justify-center p-2 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}