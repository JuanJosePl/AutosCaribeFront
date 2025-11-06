import { useState } from "react"
import { motion } from "framer-motion"
import { 
  MapPin, CheckCircle, Lock, Clock, Trophy, Star,
  Target, Award, TrendingUp, ChevronRight, Play, Book,
  Car, Zap, Shield, Calendar, Users, FileText, Activity 
} from "lucide-react"

export default function LearningPath() {
  const [selectedLevel, setSelectedLevel] = useState(null)

  const pathStats = {
    currentLevel: "Nivel 2: Intermedio",
    progress: 65,
    completedModules: 13,
    totalModules: 20,
    daysActive: 28,
    nextUnlock: "Nivel 3 en 5 días"
  }

  const learningPath = [
    {
      id: 1,
      level: "Nivel 1: Principiante",
      title: "Fundamentos de Conducción",
      status: "completed",
      progress: 100,
      modules: [
        {
          id: 1,
          title: "Introducción al Vehículo",
          description: "Conoce los controles básicos y el tablero",
          duration: "30 min",
          type: "theory",
          status: "completed",
          icon: Car,
          score: 95
        },
        {
          id: 2,
          title: "Posición de Conducción",
          description: "Ajusta asiento, espejos y volante correctamente",
          duration: "20 min",
          type: "practice",
          status: "completed",
          icon: Users,
          score: 92
        },
        {
          id: 3,
          title: "Arranque y Parada",
          description: "Aprende a arrancar y detener el vehículo suavemente",
          duration: "45 min",
          type: "practice",
          status: "completed",
          icon: Play,
          score: 88
        },
        {
          id: 4,
          title: "Señales de Tránsito Básicas",
          description: "Identifica las señales más importantes",
          duration: "40 min",
          type: "theory",
          status: "completed",
          icon: Target,
          score: 100
        },
        {
          id: 5,
          title: "Primera Práctica en Pista",
          description: "Conduce por primera vez en un entorno controlado",
          duration: "2 horas",
          type: "practice",
          status: "completed",
          icon: Trophy,
          score: 90
        }
      ],
      icon: Book,
      color: "from-green-500 to-emerald-600",
      unlocked: true
    },
    {
      id: 2,
      level: "Nivel 2: Intermedio",
      title: "Conducción en Ciudad",
      status: "in_progress",
      progress: 65,
      modules: [
        {
          id: 6,
          title: "Giros y Cambios de Carril",
          description: "Domina los giros en intersecciones",
          duration: "1 hora",
          type: "practice",
          status: "completed",
          icon: Activity,
          score: 87
        },
        {
          id: 7,
          title: "Estacionamiento en Línea",
          description: "Aprende a estacionar entre dos vehículos",
          duration: "1.5 horas",
          type: "practice",
          status: "completed",
          icon: Target,
          score: 85
        },
        {
          id: 8,
          title: "Rotondas y Glorietas",
          description: "Navega correctamente en rotondas",
          duration: "45 min",
          type: "practice",
          status: "completed",
          icon: Zap,
          score: 90
        },
        {
          id: 9,
          title: "Conducción Nocturna",
          description: "Practica conducción con poca visibilidad",
          duration: "1 hora",
          type: "practice",
          status: "in_progress",
          icon: Shield,
          score: null
        },
        {
          id: 10,
          title: "Tráfico Pesado",
          description: "Maneja en condiciones de alto tráfico",
          duration: "2 horas",
          type: "practice",
          status: "locked",
          icon: Car,
          score: null
        }
      ],
      icon: MapPin,
      color: "from-blue-500 to-cyan-600",
      unlocked: true
    },
    {
      id: 3,
      level: "Nivel 3: Avanzado",
      title: "Autopista y Alta Velocidad",
      status: "locked",
      progress: 0,
      modules: [
        {
          id: 11,
          title: "Incorporación a Autopista",
          description: "Entra a la autopista de forma segura",
          duration: "1 hora",
          type: "practice",
          status: "locked",
          icon: Zap,
          score: null
        },
        {
          id: 12,
          title: "Adelantamientos Seguros",
          description: "Aprende a adelantar correctamente",
          duration: "1.5 horas",
          type: "practice",
          status: "locked",
          icon: TrendingUp,
          score: null
        },
        {
          id: 13,
          title: "Conducción a Alta Velocidad",
          description: "Mantén el control a velocidades altas",
          duration: "2 horas",
          type: "practice",
          status: "locked",
          icon: Trophy,
          score: null
        },
        {
          id: 14,
          title: "Salidas y Emergencias",
          description: "Maneja situaciones de emergencia en autopista",
          duration: "1 hora",
          type: "theory",
          status: "locked",
          icon: Shield,
          score: null
        }
      ],
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      unlocked: false
    },
    {
      id: 4,
      level: "Nivel 4: Experto",
      title: "Conducción Defensiva y Especializada",
      status: "locked",
      progress: 0,
      modules: [
        {
          id: 15,
          title: "Conducción en Lluvia",
          description: "Domina superficies mojadas y resbalosas",
          duration: "2 horas",
          type: "practice",
          status: "locked",
          icon: Shield,
          score: null
        },
        {
          id: 16,
          title: "Técnicas de Frenado Avanzado",
          description: "Frenado de emergencia y ABS",
          duration: "1.5 horas",
          type: "practice",
          status: "locked",
          icon: Target,
          score: null
        },
        {
          id: 17,
          title: "Anticipación de Riesgos",
          description: "Identifica peligros antes de que ocurran",
          duration: "1 hora",
          type: "theory",
          status: "locked",
          icon: Award,
          score: null
        },
        {
          id: 18,
          title: "Conducción Eco-Eficiente",
          description: "Optimiza el consumo de combustible",
          duration: "45 min",
          type: "theory",
          status: "locked",
          icon: Book,
          score: null
        }
      ],
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      unlocked: false
    },
    {
      id: 5,
      level: "Nivel 5: Maestro",
      title: "Certificación Final",
      status: "locked",
      progress: 0,
      modules: [
        {
          id: 19,
          title: "Examen Teórico Final",
          description: "Demuestra todos tus conocimientos",
          duration: "1 hora",
          type: "exam",
          status: "locked",
          icon: FileText,
          score: null
        },
        {
          id: 20,
          title: "Examen Práctico Final",
          description: "Prueba final de conducción",
          duration: "1 hora",
          type: "exam",
          status: "locked",
          icon: Trophy,
          score: null
        }
      ],
      icon: Trophy,
      color: "from-red-500 to-rose-600",
      unlocked: false
    }
  ]

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
            <MapPin className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tu Ruta de <span className="gradient-text-static">Aprendizaje</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Sigue un camino estructurado desde principiante hasta experto
          </p>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: pathStats.currentLevel, icon: Trophy, value: `${pathStats.progress}%`, color: "text-blue-400" },
            { label: "Módulos Completados", icon: CheckCircle, value: `${pathStats.completedModules}/${pathStats.totalModules}`, color: "text-green-400" },
            { label: "Días Activos", icon: Calendar, value: pathStats.daysActive, color: "text-yellow-400" },
            { label: "Próximo Nivel", icon: Lock, value: pathStats.nextUnlock, color: "text-purple-400" }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect-strong p-6 rounded-2xl border border-primary-500/20"
              >
                <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Learning Path */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-gray-700" />

          <div className="space-y-8">
            {learningPath.map((level, levelIndex) => {
              const LevelIcon = level.icon
              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: levelIndex * 0.1 }}
                  className="relative"
                >
                  {/* Level Header */}
                  <div className="flex items-start gap-8 mb-6">
                    {/* Icon Circle */}
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center ${
                      !level.unlocked ? 'opacity-50' : ''
                    }`}>
                      {level.unlocked ? (
                        level.status === 'completed' ? (
                          <CheckCircle className="w-8 h-8 text-white" />
                        ) : (
                          <LevelIcon className="w-8 h-8 text-white" />
                        )
                      ) : (
                        <Lock className="w-8 h-8 text-white" />
                      )}
                    </div>

                    {/* Level Info */}
                    <div className="flex-1">
                      <motion.button
                        whileHover={{ scale: level.unlocked ? 1.02 : 1 }}
                        onClick={() => level.unlocked && setSelectedLevel(selectedLevel === level.id ? null : level.id)}
                        className={`w-full glass-effect-strong p-6 rounded-2xl border border-primary-500/20 text-left transition-all ${
                          level.unlocked ? 'hover:border-primary-500/50 cursor-pointer' : 'opacity-60 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{level.level}</h3>
                            <p className="text-gray-400">{level.title}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            {level.status === 'completed' && (
                              <div className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-bold">
                                Completado
                              </div>
                            )}
                            {level.status === 'in_progress' && (
                              <div className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">
                                En Progreso
                              </div>
                            )}
                            {level.status === 'locked' && (
                              <div className="px-4 py-2 bg-gray-500/20 rounded-full text-gray-400 text-sm font-bold flex items-center gap-2">
                                <Lock className="w-4 h-4" />
                                Bloqueado
                              </div>
                            )}
                            {level.unlocked && (
                              <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform ${
                                selectedLevel === level.id ? 'rotate-90' : ''
                              }`} />
                            )}
                          </div>
                        </div>

                        {level.progress > 0 && (
                          <div>
                            <div className="flex items-center justify-between mb-2 text-sm">
                              <span className="text-gray-400">Progreso del Nivel</span>
                              <span className="text-white font-bold">{level.progress}%</span>
                            </div>
                            <div className="bg-white/5 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${level.color}`}
                                style={{ width: `${level.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </motion.button>

                      {/* Modules */}
                      {selectedLevel === level.id && level.unlocked && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 space-y-4 ml-8"
                        >
                          {level.modules.map((module, moduleIndex) => {
                            const ModuleIcon = module.icon
                            return (
                              <motion.div
                                key={module.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: moduleIndex * 0.05 }}
                                className={`glass-effect p-6 rounded-xl border border-primary-500/20 ${
                                  module.status === 'locked' ? 'opacity-50' : 'hover:bg-white/10'
                                } transition-all`}
                              >
                                <div className="flex items-start gap-4">
                                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    module.status === 'completed' ? 'bg-green-500/20' :
                                    module.status === 'in_progress' ? 'bg-blue-500/20' :
                                    'bg-gray-500/20'
                                  }`}>
                                    {module.status === 'completed' ? (
                                      <CheckCircle className="w-6 h-6 text-green-400" />
                                    ) : module.status === 'locked' ? (
                                      <Lock className="w-6 h-6 text-gray-400" />
                                    ) : (
                                      <ModuleIcon className="w-6 h-6 text-primary-400" />
                                    )}
                                  </div>

                                  <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                      <div>
                                        <h4 className="text-white font-bold mb-1">{module.title}</h4>
                                        <p className="text-gray-400 text-sm">{module.description}</p>
                                      </div>
                                      {module.score && (
                                        <div className="text-right ml-4">
                                          <Star className="w-5 h-5 text-yellow-400 inline mb-1" />
                                          <p className="text-white font-bold">{module.score}%</p>
                                        </div>
                                      )}
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {module.duration}
                                      </div>
                                      <span className={`px-2 py-1 rounded ${
                                        module.type === 'practice' ? 'bg-blue-500/20 text-blue-400' :
                                        module.type === 'theory' ? 'bg-purple-500/20 text-purple-400' :
                                        'bg-yellow-500/20 text-yellow-400'
                                      }`}>
                                        {module.type === 'practice' ? 'Práctica' :
                                         module.type === 'theory' ? 'Teoría' : 'Examen'}
                                      </span>
                                    </div>

                                    <motion.button
                                      whileHover={{ scale: module.status !== 'locked' ? 1.02 : 1 }}
                                      whileTap={{ scale: module.status !== 'locked' ? 0.98 : 1 }}
                                      disabled={module.status === 'locked'}
                                      className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 ${
                                        module.status === 'locked'
                                          ? 'glass-effect text-gray-500 cursor-not-allowed'
                                          : module.status === 'completed'
                                          ? 'glass-effect text-white hover:bg-white/10'
                                          : 'gradient-bg-green text-white hover:shadow-lg hover:shadow-primary-500/50'
                                      } transition-all`}
                                    >
                                      <Play className="w-4 h-4" />
                                      {module.status === 'completed' ? 'Revisar' :
                                       module.status === 'in_progress' ? 'Continuar' :
                                       'Bloqueado'}
                                    </motion.button>
                                  </div>
                                </div>
                              </motion.div>
                            )
                          })}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Completion Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-effect-strong p-8 rounded-3xl border border-primary-500/30 text-center"
        >
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">
            ¡Sigue Adelante!
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estás en {pathStats.currentLevel} con {pathStats.progress}% de progreso.
            Completa los módulos restantes para desbloquear el siguiente nivel.
          </p>
        </motion.div>
      </div>
    </section>
  )
}