"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Trophy,
  Star,
  Target,
  Zap,
  Crown,
  TrendingUp,
  CheckCircle,
  Lock,
  Sparkles,
  Gift,
  Calendar,
  Clock,
  Users,
  Flame,
  Heart,
  Shield,
  Rocket,
  Diamond,
} from "lucide-react"

export default function AchievementsSystem() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "Todos", icon: Trophy },
    { id: "learning", label: "Aprendizaje", icon: Target },
    { id: "practice", label: "Práctica", icon: Zap },
    { id: "social", label: "Social", icon: Users },
    { id: "special", label: "Especiales", icon: Crown },
  ]

  const achievements = [
    {
      id: 1,
      name: "Primera Clase",
      description: "Completaste tu primera clase de conducción",
      icon: Star,
      category: "learning",
      points: 50,
      rarity: "common",
      unlocked: true,
      progress: 100,
      unlockedDate: "15 Ene 2024",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Estudiante Dedicado",
      description: "Asiste a 10 clases consecutivas",
      icon: Calendar,
      category: "learning",
      points: 150,
      rarity: "rare",
      unlocked: true,
      progress: 100,
      unlockedDate: "28 Ene 2024",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Maestro del Estacionamiento",
      description: "Realiza 5 estacionamientos perfectos",
      icon: Target,
      category: "practice",
      points: 200,
      rarity: "rare",
      unlocked: true,
      progress: 100,
      unlockedDate: "5 Feb 2024",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "Racha de Fuego",
      description: "7 días seguidos practicando",
      icon: Flame,
      category: "practice",
      points: 300,
      rarity: "epic",
      unlocked: false,
      progress: 57,
      progressText: "4/7 días",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Conductor Social",
      description: "Ayuda a 3 compañeros en clase",
      icon: Users,
      category: "social",
      points: 100,
      rarity: "common",
      unlocked: true,
      progress: 100,
      unlockedDate: "12 Feb 2024",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 6,
      name: "Examen Perfecto",
      description: "Aprueba el examen teórico con 100%",
      icon: CheckCircle,
      category: "learning",
      points: 500,
      rarity: "legendary",
      unlocked: false,
      progress: 0,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      name: "Velocista",
      description: "Completa el curso en tiempo récord",
      icon: Rocket,
      category: "special",
      points: 400,
      rarity: "epic",
      unlocked: false,
      progress: 65,
      progressText: "13/20 clases",
      color: "from-pink-500 to-purple-500",
    },
    {
      id: 8,
      name: "Mentor",
      description: "Refiere 5 amigos a la academia",
      icon: Heart,
      category: "social",
      points: 250,
      rarity: "rare",
      unlocked: false,
      progress: 40,
      progressText: "2/5 referidos",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 9,
      name: "Leyenda del Volante",
      description: "Desbloquea todos los logros",
      icon: Crown,
      category: "special",
      points: 1000,
      rarity: "legendary",
      unlocked: false,
      progress: 35,
      progressText: "7/20 logros",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 10,
      name: "Guardián de la Seguridad",
      description: "Completa el módulo de seguridad vial",
      icon: Shield,
      category: "learning",
      points: 150,
      rarity: "rare",
      unlocked: true,
      progress: 100,
      unlockedDate: "20 Feb 2024",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 11,
      name: "Diamante en Bruto",
      description: "Alcanza 1000 puntos totales",
      icon: Diamond,
      category: "special",
      points: 500,
      rarity: "legendary",
      unlocked: false,
      progress: 45,
      progressText: "450/1000 pts",
      color: "from-cyan-400 to-blue-600",
    },
    {
      id: 12,
      name: "Madrugador",
      description: "Asiste a 5 clases antes de las 7am",
      icon: Clock,
      category: "practice",
      points: 100,
      rarity: "common",
      unlocked: false,
      progress: 60,
      progressText: "3/5 clases",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const stats = {
    totalPoints: 450,
    unlockedAchievements: achievements.filter((a) => a.unlocked).length,
    totalAchievements: achievements.length,
    currentLevel: 5,
    nextLevelPoints: 550,
    rank: "Conductor Plata",
  }

  const rarityColors = {
    common: "from-gray-500 to-gray-600",
    rare: "from-blue-500 to-purple-500",
    epic: "from-purple-500 to-pink-500",
    legendary: "from-yellow-500 to-orange-500",
  }

  const rarityLabels = {
    common: "Común",
    rare: "Raro",
    epic: "Épico",
    legendary: "Legendario",
  }

  const filteredAchievements =
    selectedCategory === "all" ? achievements : achievements.filter((a) => a.category === selectedCategory)

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.5, 1, 1.5],
          }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="glass-effect px-6 py-3 rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Sistema de Logros
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Celebra Cada{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Victoria
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desbloquea logros, gana puntos y conviértete en una leyenda del volante
          </p>
        </motion.div>

        {/* Player Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-3xl border border-white/10 p-8 mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />

          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level & Rank */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center relative">
                <Crown className="w-12 h-12 text-white" />
                <div className="absolute -bottom-2 px-3 py-1 bg-black rounded-full border-2 border-yellow-500">
                  <span className="text-yellow-400 font-bold text-sm">Nivel {stats.currentLevel}</span>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">{stats.rank}</h3>
              <p className="text-gray-400 text-sm">Tu rango actual</p>
            </div>

            {/* Total Points */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-1">{stats.totalPoints}</h3>
              <p className="text-gray-400 text-sm">Puntos totales</p>
              <div className="mt-2 text-xs text-purple-400">
                {stats.nextLevelPoints - stats.totalPoints} pts para nivel {stats.currentLevel + 1}
              </div>
            </div>

            {/* Achievements Progress */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-1">
                {stats.unlockedAchievements}/{stats.totalAchievements}
              </h3>
              <p className="text-gray-400 text-sm">Logros desbloqueados</p>
              <div className="mt-2 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(stats.unlockedAchievements / stats.totalAchievements) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Completion Rate */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-1">
                {Math.round((stats.unlockedAchievements / stats.totalAchievements) * 100)}%
              </h3>
              <p className="text-gray-400 text-sm">Completado</p>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                    : "glass-effect text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-effect rounded-3xl border overflow-hidden relative ${
                  achievement.unlocked ? "border-white/20 hover:border-yellow-500/50" : "border-white/10 opacity-75"
                }`}
              >
                {/* Rarity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 bg-gradient-to-r ${rarityColors[achievement.rarity]} rounded-full`}>
                    <span className="text-white text-xs font-bold">{rarityLabels[achievement.rarity]}</span>
                  </div>
                </div>

                {/* Icon Section */}
                <div
                  className={`relative h-40 bg-gradient-to-br ${achievement.color} flex items-center justify-center ${
                    !achievement.unlocked && "grayscale opacity-50"
                  }`}
                >
                  {achievement.unlocked ? (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.8 }}
                    >
                      <Icon className="w-20 h-20 text-white drop-shadow-lg" />
                    </motion.div>
                  ) : (
                    <div className="relative">
                      <Icon className="w-20 h-20 text-white/50" />
                      <Lock className="w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>

                  {/* Progress Bar */}
                  {!achievement.unlocked && achievement.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">Progreso</span>
                        <span className="text-xs text-gray-400">
                          {achievement.progressText || `${achievement.progress}%`}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${achievement.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${achievement.progress}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Unlocked Date */}
                  {achievement.unlocked && (
                    <div className="flex items-center gap-2 text-green-400 text-sm mb-4">
                      <CheckCircle className="w-4 h-4" />
                      <span>Desbloqueado el {achievement.unlockedDate}</span>
                    </div>
                  )}

                  {/* Points */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-bold">{achievement.points} pts</span>
                    </div>
                    {achievement.unlocked && (
                      <div className="px-3 py-1 bg-green-500/20 rounded-full">
                        <span className="text-green-400 text-xs font-bold">Completado</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 glass-effect rounded-3xl border border-yellow-500/30 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />
          <div className="relative z-10">
            <Gift className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Recompensas Exclusivas</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Canjea tus puntos por descuentos, clases gratis y beneficios especiales
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all"
            >
              Ver Recompensas
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
