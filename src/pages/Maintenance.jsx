import { motion } from "framer-motion";
import { Wrench, Calendar, Shield, Clock, Star, CheckCircle, Settings, Award } from "lucide-react";

export default function Maintenance() {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento Preventivo",
      description: "Revisiones programadas para mantener tu vehículo en óptimas condiciones",
      features: ["Cambio de aceite", "Revisión de frenos", "Filtros", "Fluidos"],
      price: "Desde $150"
    },
    {
      icon: Settings,
      title: "Mantenimiento Correctivo",
      description: "Reparaciones especializadas con repuestos originales garantizados",
      features: ["Diagnóstico completo", "Reparación de motor", "Sistema eléctrico", "Transmisión"],
      price: "Consultar"
    },
    {
      icon: Shield,
      title: "Inspección Técnica",
      description: "Revisión exhaustiva de 120 puntos para garantizar seguridad",
      features: ["120 puntos de revisión", "Reporte detallado", "Certificado técnico", "Garantía"],
      price: "Desde $80"
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Técnicos Certificados",
      description: "Personal altamente capacitado y certificado por las marcas"
    },
    {
      icon: Shield,
      title: "Repuestos Originales",
      description: "Solo utilizamos repuestos 100% originales con garantía"
    },
    {
      icon: Clock,
      title: "Servicio Express",
      description: "Mantenimientos rápidos mientras esperas"
    },
    {
      icon: Star,
      title: "Garantía Total",
      description: "Todos nuestros servicios incluyen garantía extendida"
    },
  ];

  const packages = [
    {
      name: "Básico",
      price: "$150",
      duration: "1 hora",
      services: [
        "Cambio de aceite y filtro",
        "Revisión de frenos",
        "Revisión de luces",
        "Lavado exterior",
        "Reporte de inspección"
      ],
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "Premium",
      price: "$350",
      duration: "2-3 horas",
      services: [
        "Todo lo del plan Básico",
        "Cambio de filtro de aire",
        "Rotación de llantas",
        "Balance y alineación",
        "Limpieza de inyectores",
        "Aspirado interior completo"
      ],
      color: "from-primary-600 to-accent-600",
      popular: true
    },
    {
      name: "Elite",
      price: "$650",
      duration: "4-5 horas",
      services: [
        "Todo lo del plan Premium",
        "Cambio de bujías",
        "Limpieza sistema de frenos",
        "Tratamiento aire acondicionado",
        "Pulido y encerado",
        "Detallado interior premium",
        "Garantía extendida 6 meses"
      ],
      color: "from-yellow-600 to-orange-600"
    },
  ];

  const testimonials = [
    {
      name: "Roberto Sánchez",
      text: "Excelente servicio. Mi BMW quedó como nuevo después del mantenimiento.",
      rating: 5,
      service: "Mantenimiento Premium"
    },
    {
      name: "Laura Martínez",
      text: "Técnicos muy profesionales y el trabajo fue impecable. Totalmente recomendado.",
      rating: 5,
      service: "Inspección Técnica"
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videoBackground/piesasCars.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-6 py-3 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full mb-6">
              <span className="text-primary-400 font-semibold text-sm">
                <Wrench className="w-4 h-4 inline mr-2" />
                Servicio Técnico Especializado
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Mantenimiento{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                de Excelencia
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mantén tu vehículo en perfectas condiciones con nuestro servicio técnico
              especializado y repuestos originales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-full shadow-lg transition-all"
              >
                Agendar Cita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all"
              >
                Ver Servicios
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Servicios integrales para mantener tu vehículo en óptimas condiciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-primary-400">{service.price}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Paquetes de{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Mantenimiento
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Elige el paquete que mejor se adapte a las necesidades de tu vehículo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative glass-effect p-8 rounded-2xl border ${
                  pkg.popular ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-700/50'
                } transition-all group`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full">
                    <span className="text-white font-bold text-sm">Más Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2 mt-2">{pkg.name}</h3>
                <div className="mb-6">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                    {pkg.price}
                  </div>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-6 mb-6">
                  <ul className="space-y-3">
                    {pkg.services.map((service, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500'
                      : 'bg-white/10 hover:bg-white/20'
                  } text-white font-semibold rounded-full transition-all`}
                >
                  Agendar Ahora
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl border border-primary-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Calendar className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Agenda tu Cita
                </h2>
                <p className="text-gray-300">
                  Selecciona la fecha y hora que mejor te convenga
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2 block">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white font-semibold mb-2 block">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="Tu número de teléfono"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white font-semibold mb-2 block">Marca del Vehículo</label>
                  <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors">
                    <option value="">Selecciona una marca</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes-Benz</option>
                    <option value="audi">Audi</option>
                    <option value="porsche">Porsche</option>
                  </select>
                </div>
                <div>
                  <label className="text-white font-semibold mb-2 block">Servicio</label>
                  <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors">
                    <option value="">Selecciona un servicio</option>
                    <option value="basico">Básico</option>
                    <option value="premium">Premium</option>
                    <option value="elite">Elite</option>
                  </select>
                </div>
                <div>
                  <label className="text-white font-semibold mb-2 block">Fecha</label>
                  <input
                    type="date"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white font-semibold mb-2 block">Hora</label>
                  <input
                    type="time"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
              >
                Confirmar Cita
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Opiniones de{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Clientes
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl border border-gray-700/50"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}