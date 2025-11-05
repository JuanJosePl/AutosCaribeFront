import { motion } from "framer-motion";
import { Shield, Award, Users, TrendingUp, CheckCircle, Target } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { icon: Award, value: "20+", label: "Años de Experiencia" },
    { icon: Users, value: "15,000+", label: "Clientes Satisfechos" },
    { icon: Shield, value: "100%", label: "Garantía Original" },
    { icon: TrendingUp, value: "98%", label: "Satisfacción Cliente" },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Compromiso",
      description: "Dedicados a brindar el mejor servicio y productos de calidad excepcional"
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Más de dos décadas construyendo relaciones duraderas con nuestros clientes"
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Superamos expectativas en cada vehículo y servicio que ofrecemos"
    },
  ];

  const timeline = [
    { year: "2003", event: "Fundación de Caribe Autos en Barranquilla" },
    { year: "2008", event: "Expansión a Cartagena y Santa Marta" },
    { year: "2015", event: "Alcanzamos 10,000 vehículos vendidos" },
    { year: "2020", event: "Certificación como distribuidor premium" },
    { year: "2023", event: "Líderes del mercado en el Caribe colombiano" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-6 py-3 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full mb-6">
              <span className="text-primary-400 font-semibold text-sm">Nuestra Historia</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Sobre{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Caribe Autos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Más de 20 años conectando a las personas con los vehículos de sus sueños
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50 text-center group hover:border-primary-500/50 transition-all"
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 md:p-12 rounded-3xl border border-primary-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Misión</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Proporcionar vehículos de lujo y repuestos originales de la más alta calidad,
                ofreciendo una experiencia de compra excepcional que supere las expectativas de
                nuestros clientes en el Caribe colombiano.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 md:p-12 rounded-3xl border border-accent-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Visión</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ser el referente líder en el mercado automotriz de lujo en Colombia, reconocidos
                por nuestra excelencia, innovación y compromiso con la satisfacción total de
                nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
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
                Valores
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en Caribe Autos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all"
                >
                  <Icon className="w-14 h-14 text-primary-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Trayectoria
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  <div className="flex-1 md:pr-8 md:pl-8">
                    <div
                      className={`glass-effect p-6 rounded-2xl border border-gray-700/50 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      } text-center`}
                    >
                      <div className="text-3xl font-bold text-primary-400 mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-300 text-lg">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-primary-500 rounded-full border-4 border-black my-4 md:my-0 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-effect p-12 md:p-16 rounded-3xl border border-primary-500/30 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para encontrar tu vehículo ideal?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para ayudarte a encontrar el vehículo
                perfecto para ti
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-full shadow-lg transition-all"
              >
                Contáctanos Ahora
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}