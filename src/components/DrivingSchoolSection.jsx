import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Play,
  Pause,
  Car,
  Bike,
  Bus,
  Phone,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DrivingSchoolSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Stories de transformación real
  const stories = [
    {
      id: 1,
      name: "María González",
      age: 28,
      role: "Diseñadora",
      location: "Barranquilla",
      image: "https://i.pravatar.cc/400?img=5",
      quote:
        "Tenía 28 años y nunca había conducido. El miedo me paralizaba. Hoy manejo mi propio carro y llevé a mi mamá al hospital cuando más lo necesitaba.",
      moment: "Mi primer viaje sola a la playa",
      emotion: "Libertad absoluta",
      time: "3 meses después",
      bgColor: "from-primary-500/20 to-accent-500/20",
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      age: 45,
      role: "Empresario",
      location: "Cartagena",
      image: "https://i.pravatar.cc/400?img=12",
      quote:
        "Perdí mi trabajo y necesitaba nuevas oportunidades. Aprender a conducir me abrió puertas que nunca imaginé. Ahora tengo mi propio negocio de transporte.",
      moment: "El día que compré mi primer vehículo",
      emotion: "Orgullo y determinación",
      time: "6 meses después",
      bgColor: "from-accent-500/20 to-primary-500/20",
    },
    {
      id: 3,
      name: "Ana Martínez",
      age: 62,
      role: "Jubilada",
      location: "Santa Marta",
      image: "https://i.pravatar.cc/400?img=9",
      quote:
        "Todos decían que era muy tarde. A mis 62 años aprendí a conducir y ahora recorro el país visitando a mis nietos. La edad es solo un número.",
      moment: "Viaje de 800km sola",
      emotion: "Nunca es tarde",
      time: "8 meses después",
      bgColor: "from-primary-600/20 to-accent-400/20",
    },
  ];

  // Categorías de licencias reales del CEA Del Caribe
  const categories = [
    {
      id: "A1",
      name: "Categoría A1",
      icon: Bike,
      color: "from-green-500 to-emerald-600",
      description:
        "Apropiada para conducir motocicletas de cilindraje igual o menor a 125 c.c.",
      image:
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&auto=format&fit=crop",
      benefits: ["Ideal para comenzar", "Económico", "Ágil en ciudad"],
      duration: "2-3 semanas",
    },
    {
      id: "A2",
      name: "Categoría A2",
      icon: Bike,
      color: "from-blue-500 to-cyan-600",
      description:
        "Para motocicletas, motociclos y mototriciclos (moto taxis) de cilindrajes menores o superiores a 125 c.c.",
      image:
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&auto=format&fit=crop",
      benefits: ["Mayor potencia", "Más libertad", "Trabajo (mototaxi)"],
      duration: "3-4 semanas",
    },
    {
      id: "B1",
      name: "Categoría B1",
      icon: Car,
      color: "from-purple-500 to-pink-600",
      description:
        "Automóviles, motocarros, camperos, camionetas, vehículos cuatromotor y microbuses de servicio particular.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop",
      benefits: ["Uso personal", "Más seguridad", "Comodidad familiar"],
      duration: "4-6 semanas",
    },
    {
      id: "C1",
      name: "Categoría C1",
      icon: Bus,
      color: "from-orange-500 to-red-600",
      description:
        "Especializado en automóviles, motocarros, cuatrimotor, camperos, camionetas y microbuses de servicio público.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
      benefits: ["Oportunidad laboral", "Servicio público", "Mayor ingreso"],
      duration: "6-8 semanas",
    },
    {
      id: "C2",
      name: "Categoría C2",
      icon: Bus,
      color: "from-indigo-500 to-blue-600",
      description:
        "Para conducir camiones rígidos, buses y busetas de servicio público.",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop",
      benefits: ["Transporte masivo", "Alta demanda", "Estabilidad laboral"],
      duration: "8-10 semanas",
    },
  ];

  const philosophyPoints = [
    {
      number: "01",
      title: "No enseñamos a conducir",
      subtitle: "Te damos las llaves de tu libertad",
      description:
        "Cada clase es un paso hacia tu independencia. No memorizamos reglas, creamos conductores conscientes y seguros.",
    },
    {
      number: "02",
      title: "El miedo es normal",
      subtitle: "Lo extraordinario es superarlo",
      description:
        "Nuestro método se adapta a tu ritmo. Sin presión, sin juicios. Solo avanzamos cuando tú estás listo.",
    },
    {
      number: "03",
      title: "Tu historia es única",
      subtitle: "Tu aprendizaje también",
      description:
        "No hay dos estudiantes iguales. Personalizamos cada experiencia porque entendemos que cada persona tiene su propio camino.",
    },
  ];

  // Auto-play stories
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStory((current) => (current + 1) % stories.length);
          return 0;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isPlaying, stories.length]);

  const handleStoryChange = (index) => {
    setCurrentStory(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="driving-school"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Video Background Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-green-900/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        {/* Emotional Opening */}
        <motion.div
          style={{ opacity }}
          className="max-w-5xl mx-auto text-center mb-20 md:mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-green-400 text-lg font-semibold">
              @ceadelcaribesas
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            ¿Cuándo fue la última vez que{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block mt-4">
              hiciste algo por primera vez?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto"
          >
            Cada día, miles de personas postergan sus sueños por miedo.
            <span className="block mt-4 text-white font-normal">
              Nosotros no te enseñamos a conducir. Te enseñamos a vencer el
              miedo.
            </span>
          </motion.p>
        </motion.div>

        {/* Stories Instagram-Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-32"
        >
          {/* Story Indicators */}
          <div className="flex gap-2 mb-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStoryChange(index)}
                className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      currentStory === index
                        ? `${progress}%`
                        : currentStory > index
                        ? "100%"
                        : "0%",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </button>
            ))}
          </div>

          {/* Story Card */}
          <div className="relative">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${stories[currentStory].bgColor} backdrop-blur-xl border border-white/10`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left - Image */}
                <div className="relative">
                  <motion.img
                    src={stories[currentStory].image}
                    alt={stories[currentStory].name}
                    className="w-full aspect-square object-cover rounded-2xl"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Location Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm font-medium">
                      {stories[currentStory].location}
                    </span>
                  </motion.div>

                  {/* Play/Pause Button */}
                  <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </motion.button>
                </div>

                {/* Right - Content */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stories[currentStory].name}
                      </h3>
                      <p className="text-green-400 text-lg">
                        {stories[currentStory].role},{" "}
                        {stories[currentStory].age} años
                      </p>
                    </div>

                    <div className="relative mb-8">
                      <MessageCircle className="absolute -left-2 -top-2 w-8 h-8 text-green-500/30" />
                      <p className="text-xl md:text-2xl text-gray-200 leading-relaxed pl-8 italic">
                        "{stories[currentStory].quote}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl">
                        <p className="text-gray-400 text-sm mb-1">
                          Su momento favorito
                        </p>
                        <p className="text-white font-semibold text-lg">
                          {stories[currentStory].moment}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex-1">
                          <p className="text-gray-400 text-sm mb-1">Tiempo</p>
                          <p className="text-green-400 font-semibold">
                            {stories[currentStory].time}
                          </p>
                        </div>
                        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex-1">
                          <p className="text-gray-400 text-sm mb-1">
                            Sensación
                          </p>
                          <p className="text-blue-400 font-semibold">
                            {stories[currentStory].emotion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                handleStoryChange(
                  (currentStory - 1 + stories.length) % stories.length
                )
              }
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full items-center justify-center hover:bg-white/20 transition-all"
            >
              <span className="text-white text-2xl">←</span>
            </button>
            <button
              onClick={() =>
                handleStoryChange((currentStory + 1) % stories.length)
              }
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full items-center justify-center hover:bg-white/20 transition-all"
            >
              <span className="text-white text-2xl">→</span>
            </button>
          </div>
        </motion.div>

        {/* Categorías de Licencias */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Nuestras{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Categorías
              </span>
            </h3>
            <p className="text-xl text-gray-400">
              Encuentra la licencia perfecta para ti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-green-500/50 transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Name */}
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {category.name}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-4">
                    {category.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-500">Duración</span>
                    <span className="text-sm font-semibold text-green-400">
                      {category.duration}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              filosofía
            </span>{" "}
            es diferente
          </h3>

          <div className="space-y-12 md:space-y-20">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center"
                  >
                    <span className="text-6xl md:text-7xl font-bold text-white">
                      {point.number}
                    </span>
                  </motion.div>
                </div>

                <div className="flex-1">
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {point.title}
                  </h4>
                  <p className="text-xl md:text-2xl text-green-400 mb-4 font-medium">
                    {point.subtitle}
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA - Emotional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-3xl border border-primary-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
               ¿Qué deseas hacer {" "}
                <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                  hoy?
                </span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-4">
                No te prometemos un curso perfecto. Te prometemos que estaremos
                contigo en cada momento de duda, en cada logro pequeño, hasta
                que ese miedo se convierta en seguridad.
              </p>

              {/* Botones principales */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8 px-4">
                {/* ✅ Link de Registro */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/academia/registro"
                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-500 to-accent-600 text-white font-bold rounded-full text-base md:text-lg shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    Registrarme Ahora
                  </Link>
                </motion.div>

                {/* Botón de WhatsApp */}
                <motion.a
                  href="https://wa.me/573107167090"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-base md:text-lg shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Primera Clase Gratis
                </motion.a>

                {/* Botón de contacto */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-black/50 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar con Instructor
                </motion.button>
              </div>

              {/* Información de contacto */}
              <div className="flex flex-col items-center gap-3 text-gray-400 px-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-center sm:text-left">
                      Calle 79 #49c-47, Barranquilla
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">WhatsApp: 310 716 7090</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 text-center">
                  * Primera clase sin compromiso • Método personalizado •
                  Horarios flexibles
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
