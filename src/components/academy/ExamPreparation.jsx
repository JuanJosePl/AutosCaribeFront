import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Car, Trophy, Target, Clock, Shield, Sparkles } from "lucide-react";

export default function ExamPreparation() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const modules = [
    {
      icon: Brain,
      title: "Simulador Cognitivo",
      description:
        "Entrena tus reflejos y tiempo de respuesta ante situaciones reales de tránsito con ejercicios interactivos.",
      gradient: "from-primary-600 to-accent-600",
    },
    {
      icon: Shield,
      title: "Normas y Seguridad",
      description:
        "Aprende la normativa vial y cómo reaccionar ante emergencias. Incluye test oficiales actualizados.",
      gradient: "from-green-700 to-green-900",
    },
    {
      icon: Target,
      title: "Evaluación Guiada",
      description:
        "Recibe retroalimentación personalizada y mejora tus puntos débiles antes del examen real.",
      gradient: "from-accent-700 to-accent-900",
    },
  ];

  const steps = [
    { step: 1, title: "Simulación Virtual", text: "Enfrenta escenarios de conducción reales." },
    { step: 2, title: "Evaluación Teórica", text: "Supera el test con preguntas oficiales." },
    { step: 3, title: "Práctica Final", text: "Pon a prueba todo lo aprendido al volante." },
  ];

  return (
    <section
      id="exam-preparation"
      ref={sectionRef}
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-900/20 to-black"></div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.4, 0.1] }}
          transition={{ repeat: Infinity, duration: 9, delay: 1 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="glass-effect px-6 py-3 rounded-full border border-primary-500/30">
              <span className="text-primary-400 font-semibold text-sm">
                🧩 Preparación de Examen
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Domina cada{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Prueba Oficial
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Desarrolla precisión, concentración y seguridad antes del examen de conducción.
          </p>
        </motion.div>

        {/* Modules */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`p-8 rounded-2xl glass-effect border border-gray-700/50 hover:border-primary-500/50 transition-all group`}
              >
                <div
                  className={`w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{mod.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{mod.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Steps timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-30"></div>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-${i % 2 === 0 ? "start" : "end"} mb-16`}
            >
              <div
                className={`absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 shadow-lg`}
              >
                <span className="font-bold text-white">{s.step}</span>
              </div>
              <div
                className={`mt-8 md:mt-0 md:w-1/2 ${
                  i % 2 === 0 ? "text-left md:pl-10" : "text-right md:pr-10"
                }`}
              >
                <h4 className="text-2xl font-semibold text-white mb-2">{s.title}</h4>
                <p className="text-gray-400 text-sm md:text-base">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-24"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:from-primary-500 hover:to-accent-500 hover-glow-green transition-all">
            <Sparkles className="inline-block mr-2 w-5 h-5" />
            Iniciar Simulación de Examen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
