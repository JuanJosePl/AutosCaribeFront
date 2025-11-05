import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Zap, Droplet, Wind, Navigation, Calendar, ArrowRight, Info, Heart, Share2 } from "lucide-react"

export default function CarsShowcase() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredSpec, setHoveredSpec] = useState(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const cars = [
    {
      id: 1,
      brand: "BMW",
      model: "M4 Competition",
      year: "2024",
      tagline: "Ingeniería alemana. Alma deportiva.",
      price: "$85,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
      detailImage: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1600&q=90",
      color: "#1E40AF",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      specs: [
        { icon: Zap, label: "Potencia", value: "510 HP", detail: "Motor twin-turbo 6 cilindros" },
        { icon: Wind, label: "Velocidad", value: "290 km/h", detail: "Electrónicamente limitada" },
        { icon: Droplet, label: "0-100 km/h", value: "3.5s", detail: "Con Launch Control" },
        { icon: Navigation, label: "Transmisión", value: "8-Speed", detail: "M Steptronic" },
      ],
      highlights: ["M xDrive AWD", "Carbon Fiber", "Adaptive M Suspension", "M Sport Exhaust"],
      description: "La perfecta fusión entre lujo y performance. Cada detalle diseñado para la adrenalina pura.",
    },
    {
      id: 2,
      brand: "Porsche",
      model: "911 Carrera",
      year: "2024",
      tagline: "70 años de leyenda. Eternamente moderno.",
      price: "$120,000",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
      detailImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=90",
      color: "#DC2626",
      gradient: "from-red-600 via-red-500 to-orange-500",
      specs: [
        { icon: Zap, label: "Potencia", value: "450 HP", detail: "Motor Boxer 6 cilindros" },
        { icon: Wind, label: "Velocidad", value: "308 km/h", detail: "Sin limitaciones" },
        { icon: Droplet, label: "0-100 km/h", value: "3.2s", detail: "Sport Chrono Package" },
        { icon: Navigation, label: "Transmisión", value: "PDK 8-Speed", detail: "Doble embrague" },
      ],
      highlights: ["Rear Engine", "Active Aerodynamics", "PASM Suspension", "Sport Exhaust"],
      description: "Icónico. Atemporal. Incomparable. El deportivo que definió una era y sigue escribiendo historia.",
    },
    {
      id: 3,
      brand: "Mercedes-AMG",
      model: "GT 63S",
      year: "2024",
      tagline: "Lujo brutal. Sin excusas.",
      price: "$145,000",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=90",
      detailImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600&q=90",
      color: "#18181B",
      gradient: "from-gray-800 via-gray-700 to-gray-600",
      specs: [
        { icon: Zap, label: "Potencia", value: "630 HP", detail: "V8 Biturbo 4.0L" },
        { icon: Wind, label: "Velocidad", value: "318 km/h", detail: "Modo Race" },
        { icon: Droplet, label: "0-100 km/h", value: "3.0s", detail: "AMG Performance 4MATIC+" },
        { icon: Navigation, label: "Transmisión", value: "AMG 9G", detail: "Speedshift MCT" },
      ],
      highlights: ["4MATIC+ AWD", "AMG Ride Control+", "Active Aero", "Drift Mode"],
      description: "Donde la elegancia se encuentra con la brutalidad. Sofisticación sin límites de velocidad.",
    },
    
  ]

  const currentCar = cars[activeIndex]

  // Parallax effect based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Mouse parallax
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
  }

  // Auto-scroll through cars
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cars.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: '400vh' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentCar.color}15 0%, transparent 70%)`,
          }}
          animate={{
            background: `radial-gradient(circle at 50% 50%, ${currentCar.color}15 0%, transparent 70%)`,
          }}
          transition={{ duration: 1 }}
        />

        {/* Main Content */}
        <div 
          className="relative h-full flex flex-col"
          onMouseMove={handleMouseMove}
        >
          {/* Top Section - Brand & Navigation */}
          <div className="absolute top-0 left-0 right-0 z-20 pt-24 md:pt-32">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
              >
                {/* Left - Title */}
                <div>
                  <motion.p
                    key={currentCar.brand}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gray-500 text-sm md:text-base uppercase tracking-[0.3em] mb-2"
                  >
                    {currentCar.year}
                  </motion.p>
                  <motion.h2
                    key={currentCar.brand + currentCar.model}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
                  >
                    {currentCar.brand}
                    <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-gray-400 mt-2">
                      {currentCar.model}
                    </span>
                  </motion.h2>
                </div>

                {/* Right - Car Selector */}
                <div className="hidden md:flex gap-3">
                  {cars.map((car, idx) => (
                    <motion.button
                      key={car.id}
                      onClick={() => setActiveIndex(idx)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      <div
                        className={`w-12 h-12 rounded-full transition-all duration-500 ${
                          idx === activeIndex
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110'
                            : 'opacity-50 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: car.color }}
                      />
                      {idx === activeIndex && (
                        <motion.div
                          layoutId="activeCar"
                          className="absolute -inset-2 border-2 border-white/30 rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Center Section - Car Image with Parallax */}
          <div className="flex-1 flex items-center justify-center relative">
            <motion.div
              style={{ 
                scale,
                opacity,
                y: imageY,
                x: smoothMouseX,
                rotateY: useTransform(smoothMouseX, [-50, 50], [-5, 5]),
              }}
              className="relative w-full max-w-7xl px-4"
            >
              <motion.img
                key={currentCar.id}
                src={currentCar.image}
                alt={`${currentCar.brand} ${currentCar.model}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.5))',
                }}
              />

              {/* Floating Price Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-4 right-4 glass-effect-strong px-6 py-3 rounded-full border border-white/20"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {currentCar.price}
                </p>
              </motion.div>

              {/* Floating Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 left-4 glass-effect-strong px-6 py-4 rounded-2xl border border-white/20 max-w-md"
              >
                <p className="text-white/80 text-sm md:text-base italic">
                  "{currentCar.tagline}"
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section - Specs & Actions */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 md:pb-12">
            <div className="container-custom">
              {/* Specs Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
              >
                {currentCar.specs.map((spec, idx) => {
                  const Icon = spec.icon
                  return (
                    <motion.div
                      key={idx}
                      onHoverStart={() => setHoveredSpec(idx)}
                      onHoverEnd={() => setHoveredSpec(null)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative glass-effect-strong p-4 md:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer group"
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-400 mb-2" />
                      <p className="text-white font-bold text-xl md:text-2xl mb-1">
                        {spec.value}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {spec.label}
                      </p>

                      {/* Hover Detail */}
                      {hoveredSpec === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-16 left-1/2 -translate-x-1/2 glass-effect-strong px-4 py-2 rounded-lg border border-white/20 whitespace-nowrap"
                        >
                          <p className="text-white text-xs">{spec.detail}</p>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 rotate-45" />
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 py-4 px-6 bg-gradient-to-r ${currentCar.gradient} text-white font-bold rounded-full flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all group`}
                >
                  <span>Configurar Ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-4 px-6 glass-effect-strong border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="hidden sm:inline">Test Drive</span>
                </motion.button>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 glass-effect-strong rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 glass-effect-strong rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 glass-effect-strong rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
                  >
                    <Info className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Highlights Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-2 mt-4 justify-center"
              >
                {currentCar.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="glass-effect px-4 py-2 rounded-full border border-white/10 text-white/80 text-xs md:text-sm"
                  >
                    {highlight}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="flex flex-col gap-4">
              {cars.map((car, idx) => (
                <motion.button
                  key={car.id}
                  onClick={() => setActiveIndex(idx)}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                >
                  <div
                    className={`w-2 h-12 rounded-full transition-all duration-500 ${
                      idx === activeIndex ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                    }`}
                    style={{
                      backgroundColor: car.color,
                      boxShadow: idx === activeIndex ? `0 0 20px ${car.color}50` : 'none',
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Car Selector */}
          <div className="md:hidden absolute bottom-32 left-0 right-0 flex justify-center gap-2">
            {cars.map((car, idx) => (
              <button
                key={car.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIndex ? 'w-8 opacity-100' : 'opacity-30'
                }`}
                style={{ backgroundColor: car.color }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}