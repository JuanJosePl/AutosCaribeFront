import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play, Pause, RotateCcw, Check, X, AlertTriangle, 
  Gauge, Clock, Trophy, TrendingUp, Gamepad2, Monitor,
  Car, Navigation, Eye, Volume2, Settings, Shield
} from "lucide-react"

export default function VirtualSimulator() {
  const [activeScenario, setActiveScenario] = useState(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const [score, setScore] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [mistakes, setMistakes] = useState([])
  const [showResults, setShowResults] = useState(false)

  const scenarios = [
    {
      id: 1,
      title: "Estacionamiento en Paralelo",
      difficulty: "Principiante",
      duration: "5 min",
      description: "Aprende la técnica correcta para estacionar en paralelo sin tocar otros vehículos.",
      icon: Car,
      color: "from-green-500 to-emerald-600",
      objectives: [
        "Posicionarse correctamente",
        "Usar espejos adecuadamente",
        "Completar en 3 intentos",
        "No tocar vehículos"
      ],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
      skills: ["Precisión", "Espacial", "Espejos"]
    },
    {
      id: 2,
      title: "Manejo en Autopista",
      difficulty: "Intermedio",
      duration: "10 min",
      description: "Practica cambios de carril, adelantamientos y manejo a alta velocidad de forma segura.",
      icon: Gauge,
      color: "from-blue-500 to-cyan-600",
      objectives: [
        "Mantener velocidad constante",
        "Cambios de carril seguros",
        "Distancia de seguridad",
        "Usar señales correctamente"
      ],
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",
      skills: ["Velocidad", "Visión", "Anticipación"]
    },
    {
      id: 3,
      title: "Conducción Nocturna",
      difficulty: "Intermedio",
      duration: "8 min",
      description: "Aprende a manejar con poca visibilidad y usar correctamente las luces del vehículo.",
      icon: Eye,
      color: "from-purple-500 to-pink-600",
      objectives: [
        "Ajustar luces correctamente",
        "Mantener atención visual",
        "Evitar deslumbramiento",
        "Velocidad apropiada"
      ],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600",
      skills: ["Visión Nocturna", "Concentración", "Luces"]
    },
    {
      id: 4,
      title: "Manejo en Lluvia",
      difficulty: "Avanzado",
      duration: "12 min",
      description: "Domina técnicas para conducir de forma segura en condiciones climáticas adversas.",
      icon: AlertTriangle,
      color: "from-yellow-500 to-orange-600",
      objectives: [
        "Control en superficies mojadas",
        "Prevenir aquaplaning",
        "Distancia de frenado",
        "Visibilidad reducida"
      ],
      image: "https://images.unsplash.com/photo-1511994714008-b6fa741a7b0b?w=600",
      skills: ["Seguridad", "Control", "Paciencia"]
    },
    {
      id: 5,
      title: "Intersecciones Complejas",
      difficulty: "Avanzado",
      duration: "10 min",
      description: "Practica navegación en intersecciones con múltiples carriles y señales de tráfico.",
      icon: Navigation,
      color: "from-red-500 to-rose-600",
      objectives: [
        "Interpretación de señales",
        "Derecho de paso",
        "Giros protegidos",
        "Coordinación con tráfico"
      ],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600",
      skills: ["Decisión", "Señalización", "Timing"]
    },
    {
      id: 6,
      title: "Manejo Defensivo",
      difficulty: "Avanzado",
      duration: "15 min",
      description: "Desarrolla habilidades para anticipar y evitar situaciones peligrosas en la carretera.",
      icon: Shield,
      color: "from-indigo-500 to-blue-600",
      objectives: [
        "Anticipación de riesgos",
        "Reacción rápida",
        "Zona de escape",
        "Distancia de seguridad"
      ],
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600",
      skills: ["Anticipación", "Seguridad", "Conciencia"]
    }
  ]

  const stats = [
    { label: "Escenarios Completados", value: 12, icon: Check, color: "text-green-400" },
    { label: "Horas Practicadas", value: 8.5, icon: Clock, color: "text-blue-400" },
    { label: "Puntuación Promedio", value: 92, icon: Trophy, color: "text-yellow-400" },
    { label: "Nivel", value: "Intermedio", icon: TrendingUp, color: "text-purple-400" }
  ]

  useEffect(() => {
    let interval
    if (isSimulating) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isSimulating])

  const startSimulation = (scenario) => {
    setActiveScenario(scenario)
    setIsSimulating(true)
    setScore(0)
    setTimeElapsed(0)
    setMistakes([])
    setShowResults(false)
  }

  const pauseSimulation = () => {
    setIsSimulating(false)
  }

  const resetSimulation = () => {
    setIsSimulating(false)
    setScore(0)
    setTimeElapsed(0)
    setMistakes([])
    setShowResults(false)
  }

  const completeSimulation = () => {
    setIsSimulating(false)
    const finalScore = Math.max(0, 100 - (mistakes.length * 10) - (timeElapsed > 300 ? 10 : 0))
    setScore(finalScore)
    setShowResults(true)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Simulador <span className="gradient-text-static">Virtual</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Practica situaciones de conducción reales en un entorno seguro y controlado
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect-strong p-6 rounded-2xl border border-primary-500/20 text-center"
              >
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Scenarios Grid */}
        {!activeScenario && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon
              return (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card-hover glass-effect-strong rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={scenario.image}
                      alt={scenario.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${scenario.color} rounded-full text-white text-xs font-bold`}>
                        {scenario.difficulty}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="glass-effect-strong px-3 py-1 rounded-full text-white text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {scenario.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${scenario.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
                        <p className="text-gray-400 text-sm">{scenario.description}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2">Habilidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {scenario.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 glass-effect rounded text-xs text-white">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Objectives */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2">Objetivos:</p>
                      <ul className="space-y-1">
                        {scenario.objectives.slice(0, 3).map((obj, i) => (
                          <li key={i} className="text-white text-xs flex items-center gap-2">
                            <Check className="w-3 h-3 text-primary-400" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Start Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => startSimulation(scenario)}
                      className={`w-full py-3 bg-gradient-to-r ${scenario.color} text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                    >
                      <Play className="w-5 h-5" />
                      Iniciar Simulación
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Active Simulation */}
        <AnimatePresence>
          {activeScenario && !showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-effect-strong rounded-3xl overflow-hidden border border-primary-500/30 p-8"
            >
              {/* Simulation Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{activeScenario.title}</h3>
                  <p className="text-gray-400">{activeScenario.description}</p>
                </div>
                <button
                  onClick={resetSimulation}
                  className="glass-effect p-3 rounded-xl hover:bg-white/10 transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* HUD - Heads Up Display */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-effect p-4 rounded-xl text-center">
                  <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{formatTime(timeElapsed)}</p>
                  <p className="text-gray-400 text-sm">Tiempo</p>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{score}</p>
                  <p className="text-gray-400 text-sm">Puntuación</p>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{mistakes.length}</p>
                  <p className="text-gray-400 text-sm">Errores</p>
                </div>
              </div>

              {/* Simulation View */}
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden mb-8">
                <img
                  src={activeScenario.image}
                  alt="Simulación"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
                
                {/* Simulation Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isSimulating && (
                    <div className="text-center">
                      <Play className="w-20 h-20 text-white mx-auto mb-4" />
                      <p className="text-white text-2xl font-bold">Simulación en Pausa</p>
                    </div>
                  )}
                </div>

                {/* Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="glass-effect-strong px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                      <Volume2 className="w-4 h-4" />
                      Audio
                    </button>
                    <button className="glass-effect-strong px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                      <Settings className="w-4 h-4" />
                      Configurar
                    </button>
                  </div>
                  <div className="glass-effect-strong px-4 py-2 rounded-lg text-white text-sm">
                    <Monitor className="w-4 h-4 inline mr-2" />
                    Vista: Conductor
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {!isSimulating ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSimulating(true)}
                    className="flex-1 py-4 gradient-bg-green text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Continuar
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={pauseSimulation}
                    className="flex-1 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Pause className="w-5 h-5" />
                    Pausar
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetSimulation}
                  className="px-6 py-4 glass-effect border border-primary-500/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reiniciar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={completeSimulation}
                  className="px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Completar
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Modal */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass-effect-strong max-w-2xl w-full rounded-3xl overflow-hidden border border-primary-500/30 p-8"
              >
                <div className="text-center mb-8">
                  <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold text-white mb-2">¡Simulación Completada!</h2>
                  <p className="text-gray-400">Has terminado el escenario: {activeScenario?.title}</p>
                </div>

                {/* Score */}
                <div className="glass-effect p-8 rounded-2xl mb-8 text-center">
                  <p className="text-gray-400 mb-2">Puntuación Final</p>
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-6xl font-bold gradient-text-static"
                  >
                    {score}
                  </motion.p>
                  <p className="text-white text-lg mt-2">
                    {score >= 90 ? "¡Excelente!" : score >= 70 ? "¡Bien hecho!" : "Sigue practicando"}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-effect p-4 rounded-xl text-center">
                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{formatTime(timeElapsed)}</p>
                    <p className="text-gray-400 text-sm">Tiempo Total</p>
                  </div>
                  <div className="glass-effect p-4 rounded-xl text-center">
                    <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{mistakes.length}</p>
                    <p className="text-gray-400 text-sm">Errores</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowResults(false)
                      setActiveScenario(null)
                    }}
                    className="flex-1 py-4 glass-effect border border-primary-500/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    Volver al Menú
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowResults(false)
                      startSimulation(activeScenario)
                    }}
                    className="flex-1 py-4 gradient-bg-green text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reintentar
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}