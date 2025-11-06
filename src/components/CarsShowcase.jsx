import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  Wind,
  Gauge,
  Settings,
  Calendar,
  ArrowRight,
  Info,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

export default function CarsShowcase() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cars = [
    {
      id: 1,
      brand: "BMW",
      model: "M4 Competition",
      year: "2024",
      tagline: "Ingeniería alemana. Alma deportiva.",
      price: "$85,000",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
      color: "#3B82F6",
      gradient: "from-blue-600 to-cyan-500",
      specs: [
        { icon: Zap, label: "Potencia", value: "510 HP" },
        { icon: Wind, label: "Velocidad", value: "290 km/h" },
        { icon: Gauge, label: "0-100", value: "3.5s" },
        { icon: Settings, label: "Trans.", value: "8-Speed" },
      ],
      highlights: ["M xDrive AWD", "Carbon Fiber", "M Suspension"],
    },
    {
      id: 2,
      brand: "Porsche",
      model: "911 Carrera",
      year: "2024",
      tagline: "Leyenda atemporal.",
      price: "$120,000",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
      color: "#DC2626",
      gradient: "from-red-600 to-orange-500",
      specs: [
        { icon: Zap, label: "Potencia", value: "450 HP" },
        { icon: Wind, label: "Velocidad", value: "308 km/h" },
        { icon: Gauge, label: "0-100", value: "3.2s" },
        { icon: Settings, label: "Trans.", value: "PDK 8" },
      ],
      highlights: ["Rear Engine", "Active Aero", "PASM"],
    },
    {
      id: 3,
      brand: "Mercedes-AMG",
      model: "GT 63S",
      year: "2024",
      tagline: "Lujo brutal.",
      price: "$145,000",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=90",
      color: "#18181B",
      gradient: "from-gray-800 to-gray-600",
      specs: [
        { icon: Zap, label: "Potencia", value: "630 HP" },
        { icon: Wind, label: "Velocidad", value: "318 km/h" },
        { icon: Gauge, label: "0-100", value: "3.0s" },
        { icon: Settings, label: "Trans.", value: "AMG 9G" },
      ],
      highlights: ["4MATIC+", "AMG Control+", "Drift Mode"],
    },
  ];

  const currentCar = cars[activeIndex];

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0.9, 1, 0.95] : [0.8, 1, 0.9]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cars.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile, cars.length]);

  const nextCar = () => setActiveIndex((prev) => (prev + 1) % cars.length);
  const prevCar = () =>
    setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: isMobile ? "200vh" : "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: `radial-gradient(circle at 50% 50%, ${currentCar.color}20 0%, transparent 70%)`,
          }}
          transition={{ duration: 1 }}
        />

        <div className="relative h-full flex flex-col px-4 sm:px-6 lg:px-8">
          {/* Top Section - Brand & Price */}
          <div className="pt-20 md:pt-24 lg:pt-32 mb-4 md:mb-0">
            <div className="flex items-start justify-between gap-4">
              <motion.div
                key={currentCar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest mb-2">
                  {currentCar.year}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {currentCar.brand}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-gray-400 mt-1 md:mt-2">
                  {currentCar.model}
                </p>
                <p className="text-sm md:text-base text-gray-500 italic mt-2 md:mt-4">
                  "{currentCar.tagline}"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-effect px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white/20"
              >
                <p className="text-xl md:text-3xl font-bold text-white">
                  {currentCar.price}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Center Section - Car Image */}
          <div className="flex-1 flex items-center justify-center relative min-h-0">
            <motion.div
              style={{ scale, opacity }}
              className="relative w-full max-w-4xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCar.id}
                  src={currentCar.image}
                  alt={`${currentCar.brand} ${currentCar.model}`}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </AnimatePresence>

              {/* Navigation Arrows - Mobile */}
              {isMobile && (
                <>
                  <button
                    onClick={prevCar}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 glass-effect rounded-full flex items-center justify-center border border-white/20"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextCar}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 glass-effect rounded-full flex items-center justify-center border border-white/20"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </motion.div>
          </div>

          {/* Bottom Section - Specs & Actions */}
          <div className="pb-6 md:pb-12 space-y-4 md:space-y-6">
            {/* Specs Grid - Responsive */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {currentCar.specs.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setSelectedSpec(selectedSpec === idx ? null : idx)
                    }
                    className={`glass-effect p-3 md:p-6 rounded-xl md:rounded-2xl border transition-all ${
                      selectedSpec === idx
                        ? "border-primary-500 bg-primary-500/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary-400 mb-1 md:mb-2 mx-auto" />
                    <p className="text-white font-bold text-sm md:text-2xl mb-0.5 md:mb-1">
                      {spec.value}
                    </p>
                    <p className="text-gray-400 text-[10px] md:text-sm">
                      {spec.label}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Highlights Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {currentCar.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="glass-effect px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 text-white/80 text-xs"
                >
                  {highlight}
                </div>
              ))}
            </div>

            {/* Actions - Responsive */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 py-3 md:py-4 px-4 md:px-6 bg-gradient-to-r ${currentCar.gradient} text-white font-bold rounded-xl md:rounded-full flex items-center justify-center gap-2 shadow-lg`}
              >
                <span className="text-sm md:text-base">Configurar</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 md:py-4 px-4 md:px-6 glass-effect border-2 border-white/20 text-white font-bold rounded-xl md:rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Test Drive</span>
              </motion.button>

              <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                {[
                  { icon: Heart, label: "Favorito" },
                  { icon: Share2, label: "Compartir" },
                  { icon: Info, label: "Info" },
                ].map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 md:w-14 md:h-14 glass-effect rounded-xl md:rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
                      title={action.label}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Car Selector Dots */}
            <div className="flex justify-center gap-2 md:gap-3">
              {cars.map((car, idx) => (
                <button
                  key={car.id}
                  onClick={() => setActiveIndex(idx)}
                  className="relative"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full transition-all ${
                      idx === activeIndex
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: car.color }}
                  />
                  {idx === activeIndex && (
                    <motion.div
                      layoutId="activeCar"
                      className="absolute -inset-1 border-2 border-white/30 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator - Desktop Only */}
        {!isMobile && (
          <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-4">
              {cars.map((car, idx) => (
                <button
                  key={car.id}
                  onClick={() => setActiveIndex(idx)}
                  className="relative group"
                >
                  <div
                    className={`w-1 h-12 rounded-full transition-all ${
                      idx === activeIndex
                        ? "opacity-100"
                        : "opacity-30 hover:opacity-60"
                    }`}
                    style={{
                      backgroundColor: car.color,
                      boxShadow:
                        idx === activeIndex
                          ? `0 0 20px ${car.color}50`
                          : "none",
                    }}
                  />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 glass-effect px-3 py-1 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <p className="text-white text-xs font-medium">
                      {car.brand}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
