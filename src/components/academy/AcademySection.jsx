import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { 
  Car, Clock, Award, Shield, Calendar, CheckCircle, 
  Users, TrendingUp, Star, Zap, BookOpen, FileCheck 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AcademySection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedPlan, setSelectedPlan] = useState(null);

  const stats = [
    { icon: Users, value: "500+", label: "Estudiantes Graduados" },
    { icon: Award, value: "98%", label: "Tasa de Aprobación" },
    { icon: Star, value: "4.9/5", label: "Calificación" },
    { icon: TrendingUp, value: "15+", label: "Años de Experiencia" },
  ];

  const services = [
    {
      icon: Car,
      title: "Clases de Conducción",
      description: "Aprende desde cero o perfecciona tu técnica",
      features: ["Vehículos modernos", "Instructores certificados", "Rutas seguras"]
    },
    {
      icon: FileCheck,
      title: "Renovación de Licencias",
      description: "Renueva tu licencia sin complicaciones",
      features: ["Proceso rápido", "Documentación incluida", "Asesoría completa"]
    },
    {
      icon: BookOpen,
      title: "Actualización de Clases",
      description: "Mantente al día con las nuevas normativas",
      features: ["Normativas actuales", "Práctica intensiva", "Certificado oficial"]
    },
  ];

  const plans = [
    {
      id: 1,
      name: "Plan Básico",
      price: "$450.000",
      duration: "10 clases",
      hours: "1 hora por clase",
      popular: false,
      features: [
        "10 clases prácticas",
        "Material didáctico incluido",
        "Vehículo asegurado",
        "Instructor certificado",
        "Horario flexible",
        "Primera clase gratis"
      ],
      color: "from-gray-700 to-gray-800",
      scheduleOptions: [
        { id: "morning", label: "Mañana (6am - 12pm)", available: true },
        { id: "afternoon", label: "Tarde (12pm - 6pm)", available: true },
        { id: "evening", label: "Noche (6pm - 9pm)", available: true }
      ]
    },
    {
      id: 2,
      name: "Plan Premium",
      price: "$850.000",
      duration: "20 clases",
      hours: "1.5 horas por clase",
      popular: true,
      features: [
        "20 clases prácticas extendidas",
        "Material didáctico premium",
        "Vehículo premium asegurado",
        "Instructor VIP personalizado",
        "Horario ultra flexible",
        "Primera clase gratis",
        "Simulador de conducción",
        "Clases de teoría incluidas",
        "Asesoría para examen oficial"
      ],
      color: "from-primary-600 to-accent-600",
      scheduleOptions: [
        { id: "morning", label: "Mañana (6am - 12pm)", available: true },
        { id: "afternoon", label: "Tarde (12pm - 6pm)", available: true },
        { id: "evening", label: "Noche (6pm - 9pm)", available: true },
        { id: "weekend", label: "Fines de semana", available: true }
      ]
    },
    {
      id: 3,
      name: "Plan Elite",
      price: "$1.200.000",
      duration: "30 clases",
      hours: "2 horas por clase",
      popular: false,
      features: [
        "30 clases prácticas intensivas",
        "Material didáctico completo",
        "Vehículo de lujo asegurado",
        "Instructor elite 24/7",
        "Horario completamente personalizado",
        "Dos clases gratis",
        "Simulador avanzado ilimitado",
        "Clases teóricas y prácticas",
        "Preparación examen oficial",
        "Acompañamiento día del examen",
        "Garantía de aprobación*"
      ],
      color: "from-yellow-600 to-orange-600",
      scheduleOptions: [
        { id: "morning", label: "Mañana (6am - 12pm)", available: true },
        { id: "afternoon", label: "Tarde (12pm - 6pm)", available: true },
        { id: "evening", label: "Noche (6pm - 9pm)", available: true },
        { id: "weekend", label: "Fines de semana", available: true },
        { id: "custom", label: "Horario personalizado", available: true }
      ]
    },
  ];

  const combos = [
    {
      name: "Combo Familiar",
      price: "$1.500.000",
      save: "Ahorra $300.000",
      description: "2 personas - Plan Premium c/u",
      icon: Users
    },
    {
      name: "Combo Rápido",
      price: "$650.000",
      save: "Clases intensivas",
      description: "15 clases - 2 semanas",
      icon: Zap
    },
    {
      name: "Combo Completo",
      price: "$2.200.000",
      save: "Ahorra $500.000",
      description: "Plan Elite + Renovación",
      icon: Award
    },
  ];

  return (
    <section 
      id="academia"
      ref={sectionRef} 
      className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        {/* Aquí irá la imagen de la academia cuando te la envíen */}
        <div className="w-full h-full bg-gradient-to-br from-primary-900/20 to-accent-900/20" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
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
            scale: [1.2, 1, 1.2],
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
                🎓 Academia del Caribe
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">
            Aprende a Conducir con{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Confianza
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            15 años formando conductores seguros y responsables en el Caribe colombiano
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50 text-center group hover:border-primary-500/50 transition-all"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Planes de{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Aprendizaje
              </span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Elige el plan perfecto para ti y empieza tu aventura al volante
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative glass-effect p-6 md:p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                    : 'border-gray-700/50'
                } transition-all group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full">
                    <span className="text-white font-bold text-sm">Más Popular</span>
                  </div>
                )}

                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 mt-2">{plan.name}</h4>
                <div className="mb-6">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                    {plan.price}
                  </div>
                  <p className="text-gray-400 text-sm">{plan.duration} • {plan.hours}</p>
                </div>

                <div className="border-t border-gray-700 pt-6 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule Selection */}
                <div className="mb-6">
                  <p className="text-white font-semibold mb-3 text-sm">Horarios disponibles:</p>
                  <div className="space-y-2">
                    {plan.scheduleOptions.map((option) => (
                      <label 
                        key={option.id}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer group/option"
                      >
                        <div className="w-4 h-4 rounded border-2 border-gray-600 group-hover/option:border-primary-500 transition-colors flex items-center justify-center">
                          <Clock className="w-3 h-3 text-primary-400 opacity-0 group-hover/option:opacity-100" />
                        </div>
                        <span className="text-xs md:text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/academia/registro')}
                  className={`w-full px-6 py-3 md:py-4 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500'
                      : 'bg-white/10 hover:bg-white/20'
                  } text-white font-semibold rounded-full transition-all text-sm md:text-base`}
                >
                  Elegir Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Combos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Combos{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Especiales
              </span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Ahorra más con nuestros paquetes combo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {combos.map((combo, index) => {
              const Icon = combo.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass-effect p-6 md:p-8 rounded-2xl border border-primary-500/30 group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 px-4 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    {combo.save}
                  </div>
                  <Icon className="w-12 h-12 md:w-14 md:h-14 text-primary-400 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3">{combo.name}</h4>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">{combo.description}</p>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-6">
                    {combo.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/academia/registro')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-full transition-all text-sm md:text-base"
                  >
                    Obtener Combo
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="glass-effect p-8 md:p-12 lg:p-16 rounded-3xl border border-primary-500/30 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              ¿Listo para tu Primera Clase?
            </h3>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Regístrate ahora y obtén tu primera clase completamente gratis. Sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/academia/registro')}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-full shadow-lg transition-all text-sm md:text-base"
              >
                Registrarme Gratis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/academia/login')}
                className="px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all text-sm md:text-base"
              >
                Ya Tengo Cuenta
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}