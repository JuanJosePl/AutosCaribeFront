import { motion } from "framer-motion";
import { DollarSign, CreditCard, TrendingUp, Calculator, CheckCircle, FileText, Clock, Shield } from "lucide-react";
import { useState } from "react";

export default function Financing() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [months, setMonths] = useState(60);
  const interestRate = 0.08;

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1);
    return payment.toFixed(2);
  };

  const benefits = [
    {
      icon: CreditCard,
      title: "Crédito Pre-aprobado",
      description: "Respuesta en menos de 24 horas con aprobación rápida y segura"
    },
    {
      icon: TrendingUp,
      title: "Tasas Competitivas",
      description: "Las mejores tasas de interés del mercado desde 7.9% anual"
    },
    {
      icon: Clock,
      title: "Plazos Flexibles",
      description: "Hasta 84 meses para pagar tu vehículo de forma cómoda"
    },
    {
      icon: Shield,
      title: "Sin Penalización",
      description: "Paga anticipadamente sin cargos adicionales ni penalizaciones"
    },
  ];

  const plans = [
    {
      name: "Plan Básico",
      rate: "8.9%",
      term: "36 meses",
      downPayment: "30%",
      features: [
        "Aprobación en 48 horas",
        "Sin penalización por pago anticipado",
        "Seguros opcionales",
        "Soporte personalizado"
      ],
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "Plan Premium",
      rate: "7.9%",
      term: "60 meses",
      downPayment: "20%",
      features: [
        "Aprobación en 24 horas",
        "Sin penalización por pago anticipado",
        "Seguros incluidos",
        "Soporte VIP 24/7",
        "Mantenimiento incluido 1 año"
      ],
      color: "from-primary-600 to-accent-600",
      popular: true
    },
    {
      name: "Plan Elite",
      rate: "6.9%",
      term: "84 meses",
      downPayment: "15%",
      features: [
        "Aprobación inmediata",
        "Sin penalización por pago anticipado",
        "Seguros premium incluidos",
        "Concierge personalizado",
        "Mantenimiento incluido 2 años",
        "Garantía extendida"
      ],
      color: "from-yellow-600 to-orange-600"
    },
  ];

  const requirements = [
    "Identificación oficial vigente",
    "Comprobante de ingresos (últimos 3 meses)",
    "Comprobante de domicilio (no mayor a 3 meses)",
    "Estados de cuenta bancarios",
    "Referencias personales y laborales",
    "Historial crediticio positivo"
  ];

  const steps = [
    {
      number: "01",
      title: "Solicita tu Crédito",
      description: "Completa el formulario en línea o visítanos en nuestra sede"
    },
    {
      number: "02",
      title: "Análisis y Aprobación",
      description: "Evaluamos tu solicitud y te damos una respuesta en 24-48 horas"
    },
    {
      number: "03",
      title: "Elige tu Vehículo",
      description: "Selecciona el vehículo de tus sueños de nuestro inventario"
    },
    {
      number: "04",
      title: "Firma y Recibe",
      description: "Firma el contrato y llévate tu vehículo el mismo día"
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
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
                <DollarSign className="w-4 h-4 inline mr-2" />
                Financiamiento Flexible
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Financiamiento{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Hecho a tu Medida
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tasas competitivas, plazos flexibles y aprobación rápida. Haz realidad tu sueño
              de tener el vehículo que siempre quisiste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Calcula tu{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Cuota Mensual
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Usa nuestra calculadora para estimar tu pago mensual
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-3xl border border-primary-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="text-white font-semibold mb-4 block">
                    Monto del Vehículo: ${loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-gray-400 text-sm mt-2">
                    <span>$10,000</span>
                    <span>$200,000</span>
                  </div>
                </div>

                <div>
                  <label className="text-white font-semibold mb-4 block">
                    Plazo: {months} meses
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-gray-400 text-sm mt-2">
                    <span>12 meses</span>
                    <span>84 meses</span>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-primary-600/20 to-accent-600/20 p-8 rounded-2xl border border-primary-500/30">
                <p className="text-gray-300 mb-2">Tu cuota mensual aproximada sería:</p>
                <p className="text-5xl md:text-6xl font-bold text-white mb-4">
                  ${calculateMonthlyPayment()}
                  <span className="text-2xl text-gray-400">/mes</span>
                </p>
                <p className="text-gray-400 text-sm">
                  Tasa de interés: {(interestRate * 100).toFixed(1)}% anual
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-full shadow-lg transition-all"
              >
                Solicitar Pre-aprobación
              </motion.button>
            </div>
          </motion.div>
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
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

      {/* Plans Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Planes de{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Financiamiento
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Elige el plan que mejor se ajuste a tus necesidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative glass-effect p-8 rounded-2xl border ${
                  plan.popular ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-700/50'
                } transition-all group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full">
                    <span className="text-white font-bold text-sm">Más Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4 mt-2">{plan.name}</h3>
                <div className="mb-6">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                    {plan.rate}
                  </div>
                  <p className="text-gray-400">Tasa anual</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Plazo:</span>
                    <span className="font-semibold text-white">{plan.term}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Enganche:</span>
                    <span className="font-semibold text-white">{plan.downPayment}</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500'
                      : 'bg-white/10 hover:bg-white/20'
                  } text-white font-semibold rounded-full transition-all`}
                >
                  Solicitar Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proceso de{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Solicitud
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Requisitos{" "}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Necesarios
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Para solicitar tu financiamiento, necesitarás tener a la mano los siguientes documentos:
              </p>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {req}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 md:p-12 rounded-3xl border border-primary-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
              <div className="relative z-10">
                <Calculator className="w-16 h-16 text-primary-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">
                  Solicita tu Pre-aprobación
                </h3>
                <p className="text-gray-300 mb-8">
                  Completa el formulario y recibe una respuesta en menos de 24 horas
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="number"
                    placeholder="Ingresos mensuales"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
                  >
                    Enviar Solicitud
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}