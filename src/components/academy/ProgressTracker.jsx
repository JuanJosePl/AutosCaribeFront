import { useState } from "react"
import { motion } from "framer-motion"
import { 
  TrendingUp, Target, Award, Clock, CheckCircle, 
  Calendar, BarChart3, Activity, Zap, Trophy, Star,
  ChevronRight, Info, Book, Car, MapPin
} from "lucide-react"

export default function ProgressTracker() {
  const [selectedPeriod, setSelectedPeriod] = useState("week") // week, month, all

  const overallProgress = {
    totalHours: 24,
    requiredHours: 40,
    completedLessons: 18,
    totalLessons: 30,
    practiceScore: 85,
    theoryScore: 92,
    nextMilestone: "Examen Práctico",
    daysUntilExam: 12
  }

  const skills = [
    { name: "Estacionamiento", progress: 90, level: "Avanzado", icon: Car, color: "from-green-500 to-emerald-600" },
    { name: "Manejo en Ciudad", progress: 75, level: "Intermedio", icon: MapPin, color: "from-blue-500 to-cyan-600" },
    { name: "Autopista", progress: 60, level: "Intermedio", icon: Zap, color: "from-yellow-500 to-orange-600" },
    { name: "Estacionamiento Paralelo", progress: 85, level: "Avanzado", icon: Target, color: "from-purple-500 to-pink-600" },
    { name: "Giros y Rotondas", progress: 70, level: "Intermedio", icon: Activity, color: "from-indigo-500 to-blue-600" },
    { name: "Conducción Defensiva", progress: 55, level: "Básico", icon: Award, color: "from-red-500 to-rose-600" }
  ]

  const recentActivities = [
    {
      date: "Hoy, 10:30 AM",
      title: "Clase Práctica - Autopista",
      duration: "2 horas",
      instructor: "Carlos Rodríguez",
      score: 88,
      type: "practice",
      icon: Car
    },
    {
      date: "Ayer, 3:00 PM",
      title: "Simulador Virtual - Estacionamiento",
      duration: "45 min",
      score: 92,
      type: "simulator",
      icon: Activity
    },
    {
      date: "15 Nov, 2:00 PM",
      title: "Examen Teórico - Señales de Tránsito",
      duration: "30 min",
      score: 95,
      type: "exam",
      icon: Book
    },
    {
      date: "13 Nov, 11:00 AM",
      title: "Clase Práctica - Ciudad",
      duration: "1.5 horas",
      instructor: "María González",
      score: 82,
      type: "practice",
      icon: Car
    }
  ]

  const weeklyStats = [
    { day: "Lun", hours: 2, lessons: 2 },
    { day: "Mar", hours: 1.5, lessons: 1 },
    { day: "Mié", hours: 3, lessons: 3 },
    { day: "Jue", hours: 2, lessons: 2 },
    { day: "Vie", hours: 2.5, lessons: 2 },
    { day: "Sáb", hours: 4, lessons: 3 },
    { day: "Dom", hours: 1, lessons: 1 }
  ]

  const achievements = [
    { title: "Primera Clase", icon: Star, unlocked: true, date: "1 Nov 2024" },
    { title: "10 Horas Completadas", icon: Clock, unlocked: true, date: "8 Nov 2024" },
    { title: "Estacionamiento Maestro", icon: Target, unlocked: true, date: "12 Nov 2024" },
    { title: "20 Horas Completadas", icon: Trophy, unlocked: false },
    { title: "Examen Teórico Aprobado", icon: Book, unlocked: false },
    { title: "Licencia Obtenida", icon: Award, unlocked: false }
  ]

  const maxHours = Math.max(...weeklyStats.map(s => s.hours))

  return (
    <section className="py-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Tu <span className="gradient-text-static">Progreso</span>
              </h2>
            </div>
            <div className="flex gap-2">
              {["week", "month", "all"].map(period => (
                <motion.button
                  key={period}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedPeriod === period
                      ? 'gradient-bg-green text-white'
                      : 'glass-effect text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {period === "week" ? "Semana" : period === "month" ? "Mes" : "Todo"}
                </motion.button>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            Monitorea tu avance y alcanza tus objetivos
          </p>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect-strong p-6 rounded-2xl border border-primary-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
              <span className="text-primary-400 text-sm font-bold">
                {Math.round((overallProgress.totalHours / overallProgress.requiredHours) * 100)}%
              </span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">
              {overallProgress.totalHours}/{overallProgress.requiredHours}h
            </h3>
            <p className="text-gray-400 text-sm">Horas de Práctica</p>
            <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(overallProgress.totalHours / overallProgress.requiredHours) * 100}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect-strong p-6 rounded-2xl border border-primary-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <Book className="w-8 h-8 text-green-400" />
              <span className="text-primary-400 text-sm font-bold">
                {Math.round((overallProgress.completedLessons / overallProgress.totalLessons) * 100)}%
              </span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">
              {overallProgress.completedLessons}/{overallProgress.totalLessons}
            </h3>
            <p className="text-gray-400 text-sm">Lecciones Completadas</p>
            <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(overallProgress.completedLessons / overallProgress.totalLessons) * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect-strong p-6 rounded-2xl border border-primary-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-bold">A</span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">
              {overallProgress.practiceScore}%
            </h3>
            <p className="text-gray-400 text-sm">Puntuación Práctica</p>
            <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress.practiceScore}%` }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect-strong p-6 rounded-2xl border border-primary-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-purple-400" />
              <span className="text-purple-400 text-sm font-bold">A+</span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">
              {overallProgress.theoryScore}%
            </h3>
            <p className="text-gray-400 text-sm">Puntuación Teórica</p>
            <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress.theoryScore}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Weekly Activity Chart */}
          <div className="lg:col-span-2 glass-effect-strong p-8 rounded-2xl border border-primary-500/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary-400" />
                <h3 className="text-2xl font-bold text-white">Actividad Semanal</h3>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600" />
                  <span className="text-gray-400">Horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600" />
                  <span className="text-gray-400">Lecciones</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 h-64">
              {weeklyStats.map((stat, index) => (
                <div key={stat.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(stat.hours / maxHours) * 100}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full bg-gradient-to-t from-primary-500 to-primary-600 rounded-t-lg min-h-[20px] relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity glass-effect-strong px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                        {stat.hours}h
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(stat.lessons / 3) * 60}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="w-full bg-gradient-to-t from-blue-500 to-cyan-600 rounded-t-lg min-h-[10px]"
                    />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">{stat.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Milestone */}
          <div className="glass-effect-strong p-8 rounded-2xl border border-primary-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary-400" />
              <h3 className="text-2xl font-bold text-white">Próximo Hito</h3>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 mb-4">
                <Trophy className="w-12 h-12 text-primary-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {overallProgress.nextMilestone}
              </h4>
              <p className="text-gray-400 text-sm">
                En {overallProgress.daysUntilExam} días
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between glass-effect p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Horas requeridas</span>
                <span className="text-white font-bold">{overallProgress.requiredHours}h</span>
              </div>
              <div className="flex items-center justify-between glass-effect p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Horas completadas</span>
                <span className="text-primary-400 font-bold">{overallProgress.totalHours}h</span>
              </div>
              <div className="flex items-center justify-between glass-effect p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Faltan</span>
                <span className="text-yellow-400 font-bold">
                  {overallProgress.requiredHours - overallProgress.totalHours}h
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 gradient-bg-green text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Ver Requisitos
            </motion.button>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="glass-effect-strong p-8 rounded-2xl border border-primary-500/20 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-primary-400" />
            <h3 className="text-2xl font-bold text-white">Habilidades de Conducción</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{skill.name}</h4>
                        <p className="text-gray-400 text-xs">{skill.level}</p>
                      </div>
                    </div>
                    <span className="text-primary-400 font-bold">{skill.progress}%</span>
                  </div>

                  <div className="bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 glass-effect-strong p-8 rounded-2xl border border-primary-500/20">
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-6 h-6 text-primary-400" />
              <h3 className="text-2xl font-bold text-white">Actividad Reciente</h3>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-4 rounded-xl hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'practice' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                        activity.type === 'simulator' ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                        'bg-gradient-to-br from-green-500 to-emerald-600'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-white font-bold mb-1">{activity.title}</h4>
                            <p className="text-gray-400 text-sm">{activity.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`text-2xl font-bold ${
                              activity.score >= 90 ? 'text-green-400' :
                              activity.score >= 70 ? 'text-yellow-400' :
                              'text-red-400'
                            }`}>
                              {activity.score}
                            </span>
                            <p className="text-gray-400 text-xs">puntos</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {activity.duration}
                          </div>
                          {activity.instructor && (
                            <div className="flex items-center gap-1">
                              <Info className="w-4 h-4" />
                              {activity.instructor}
                            </div>
                          )}
                        </div>
                      </div>

                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 py-3 glass-effect border border-primary-500/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Ver Todo el Historial
            </motion.button>
          </div>

          {/* Achievements */}
          <div className="glass-effect-strong p-8 rounded-2xl border border-primary-500/20">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Logros</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl transition-all ${
                      achievement.unlocked
                        ? 'glass-effect hover:bg-white/10'
                        : 'glass-effect opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-yellow-500 to-orange-600'
                          : 'bg-gray-700'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">{achievement.title}</h4>
                        {achievement.unlocked && (
                          <p className="text-gray-400 text-xs">{achievement.date}</p>
                        )}
                        {!achievement.unlocked && (
                          <p className="text-gray-500 text-xs">Bloqueado</p>
                        )}
                      </div>
                      {achievement.unlocked && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}