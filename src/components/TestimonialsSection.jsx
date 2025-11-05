import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Empresario",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "Excelente servicio y atención. Compré mi BMW aquí y quedé fascinado con la profesionalidad del equipo. Sin duda la mejor experiencia en compra de vehículos de lujo.",
      location: "Barranquilla, Colombia",
    },
    {
      name: "María González",
      role: "Arquitecta",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Los repuestos son 100% originales y el servicio técnico es impecable. He traído mi Mercedes aquí por años y siempre me han brindado la mejor atención.",
      location: "Cartagena, Colombia",
    },
    {
      name: "Roberto Martínez",
      role: "Médico",
      image: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      text: "Caribe Autos superó todas mis expectativas. El proceso de compra fue rápido, transparente y profesional. Mi Porsche llegó en perfectas condiciones.",
      location: "Santa Marta, Colombia",
    },
    {
      name: "Ana Pérez",
      role: "Abogada",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "La mejor inversión que he hecho. El equipo me asesoró perfectamente y encontré el vehículo de mis sueños. Totalmente recomendado.",
      location: "Barranquilla, Colombia",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="glass-effect px-6 py-3 rounded-full border border-primary-500/30">
              <span className="text-primary-400 font-semibold text-sm">
                ⭐ Testimonios
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white px-4">
            Lo Que Dicen Nuestros{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Miles de clientes satisfechos confían en nosotros para sus vehículos de lujo
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-700/50 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 text-primary-500/10" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary-500 w-6 md:w-8"
                        : "bg-gray-600 hover:bg-gray-500 w-2 md:w-3"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16"
          >
            {[
              { value: "15,000+", label: "Clientes Felices" },
              { value: "4.9/5", label: "Calificación" },
              { value: "98%", label: "Satisfacción" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 glass-effect rounded-xl border border-gray-700/30"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}