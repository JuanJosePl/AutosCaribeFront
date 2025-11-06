"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Users,
  MessageSquare,
  Hand,
  Settings,
  Phone,
  Camera,
  Volume2,
  VolumeX,
  User,
  Clock,
  Signal,
  ChevronRight,
  Play,
  ScreenShare,
  Download,
  Activity,
} from "lucide-react"

export default function LiveClassroom() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Instructor Carlos",
      message: "Bienvenidos a la clase de hoy",
      time: "10:00 AM",
      isInstructor: true,
    },
    { id: 2, user: "María G.", message: "Buenos días! Lista para aprender", time: "10:01 AM", isInstructor: false },
    {
      id: 3,
      user: "Roberto D.",
      message: "Tengo una pregunta sobre el tema anterior",
      time: "10:02 AM",
      isInstructor: false,
    },
  ])
  const [handRaised, setHandRaised] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const participants = [
    {
      id: 1,
      name: "Instructor Carlos",
      role: "instructor",
      avatar: "https://i.pravatar.cc/150?img=12",
      status: "speaking",
      isMuted: false,
    },
    {
      id: 2,
      name: "María González",
      role: "student",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "active",
      isMuted: false,
    },
    {
      id: 3,
      name: "Roberto Díaz",
      role: "student",
      avatar: "https://i.pravatar.cc/150?img=13",
      status: "active",
      isMuted: true,
    },
    {
      id: 4,
      name: "Laura Mendoza",
      role: "student",
      avatar: "https://i.pravatar.cc/150?img=1",
      status: "active",
      isMuted: false,
    },
    {
      id: 5,
      name: "Carlos Torres",
      role: "student",
      avatar: "https://i.pravatar.cc/150?img=14",
      status: "idle",
      isMuted: true,
    },
    {
      id: 6,
      name: "Sofía Ramírez",
      role: "student",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "active",
      isMuted: false,
    },
  ]

  const classInfo = {
    title: "Señales de Tránsito y Normativa Vial",
    instructor: "Carlos Mendoza",
    duration: "1h 30min",
    progress: 45,
    studentsOnline: 24,
    category: "Categoría B1",
    module: "Módulo 3 de 8",
  }

  const features = [
    { icon: Video, title: "Video HD", description: "Transmisión en alta definición" },
    { icon: ScreenShare, title: "Compartir Pantalla", description: "Visualiza presentaciones en tiempo real" },
    { icon: MessageSquare, title: "Chat en Vivo", description: "Interactúa con instructor y compañeros" },
    { icon: Hand, title: "Levantar Mano", description: "Participa activamente en clase" },
    { icon: Download, title: "Grabaciones", description: "Accede a clases grabadas 24/7" },
    { icon: Activity, title: "Pizarra Digital", description: "Herramientas interactivas de aprendizaje" },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
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
            <div className="glass-effect px-6 py-3 rounded-full border border-blue-500/30">
              <span className="text-blue-400 font-semibold text-sm flex items-center gap-2">
                <Video className="w-4 h-4" />
                Aula Virtual en Vivo
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Aprende Desde{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Cualquier Lugar
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clases teóricas en vivo con tecnología de última generación
          </p>
        </motion.div>

        {/* Main Classroom Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-3 gap-6 mb-16"
        >
          {/* Main Video Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Container */}
            <div className="glass-effect rounded-3xl border border-white/10 overflow-hidden">
              {/* Class Info Bar */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">{classInfo.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-400">{classInfo.category}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{classInfo.module}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-red-400 text-sm font-semibold">EN VIVO</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                      <Users className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">{classInfo.studentsOnline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Video */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80"
                  alt="Clase en vivo"
                  className="w-full h-full object-cover opacity-60"
                />

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Instructor Info Overlay */}
                <div className="absolute top-4 left-4 glass-effect px-4 py-2 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Instructor" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-white text-sm font-semibold">Instructor Carlos</p>
                      <div className="flex items-center gap-1">
                        <Signal className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">Excelente</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Overlay */}
                <div className="absolute top-4 right-4 glass-effect px-4 py-2 rounded-full border border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {currentTime.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="glass-effect rounded-full p-2 border border-white/20">
                    <div className="flex items-center gap-3">
                      <button className="text-white hover:text-green-400 transition-colors">
                        <Play className="w-5 h-5" />
                      </button>
                      <div className="flex-1">
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${classInfo.progress}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                      <span className="text-white text-sm font-semibold">{classInfo.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Control Bar */}
              <div className="bg-black/50 backdrop-blur-xl p-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isMuted ? "bg-red-500 hover:bg-red-600" : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoOff(!isVideoOff)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isVideoOff ? "bg-red-500 hover:bg-red-600" : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {isVideoOff ? (
                        <VideoOff className="w-5 h-5 text-white" />
                      ) : (
                        <Camera className="w-5 h-5 text-white" />
                      )}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsSoundOn(!isSoundOn)}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    >
                      {isSoundOn ? (
                        <Volume2 className="w-5 h-5 text-white" />
                      ) : (
                        <VolumeX className="w-5 h-5 text-white" />
                      )}
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setHandRaised(!handRaised)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                        handRaised ? "bg-yellow-500 hover:bg-yellow-600" : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      <Hand className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-semibold">Levantar Mano</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    >
                      <ScreenShare className="w-5 h-5 text-white" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    >
                      <Settings className="w-5 h-5 text-white" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 flex items-center gap-2 transition-all"
                    >
                      <Phone className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-semibold">Salir</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Participants Grid */}
            <div className="glass-effect rounded-2xl border border-white/10 p-6">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                Participantes ({participants.length})
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {participants.map((participant) => (
                  <motion.div key={participant.id} whileHover={{ scale: 1.05 }} className="relative group">
                    <div
                      className={`relative rounded-xl overflow-hidden ${
                        participant.status === "speaking" ? "ring-2 ring-green-500" : ""
                      }`}
                    >
                      <img
                        src={participant.avatar || "/placeholder.svg"}
                        alt={participant.name}
                        className="w-full aspect-square object-cover"
                      />
                      {participant.isMuted && (
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <MicOff className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {participant.role === "instructor" && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500 rounded-full">
                          <span className="text-white text-xs font-bold">Instructor</span>
                        </div>
                      )}
                    </div>
                    <p className="text-white text-xs mt-2 text-center truncate">{participant.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chat/Participants Tabs */}
            <div className="glass-effect rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`flex-1 px-4 py-3 font-semibold transition-all ${
                    activeTab === "chat"
                      ? "bg-green-500/20 text-green-400 border-b-2 border-green-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <MessageSquare className="w-5 h-5 mx-auto mb-1" />
                  Chat
                </button>
                <button
                  onClick={() => setActiveTab("notes")}
                  className={`flex-1 px-4 py-3 font-semibold transition-all ${
                    activeTab === "notes"
                      ? "bg-green-500/20 text-green-400 border-b-2 border-green-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Download className="w-5 h-5 mx-auto mb-1" />
                  Material
                </button>
              </div>

              {activeTab === "chat" && (
                <div className="p-4">
                  <div className="space-y-4 h-96 overflow-y-auto mb-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`${msg.isInstructor ? "bg-blue-500/10" : "bg-white/5"} rounded-xl p-3`}
                      >
                        <div className="flex items-start gap-2">
                          <User className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span
                                className={`text-sm font-semibold ${msg.isInstructor ? "text-blue-400" : "text-white"}`}
                              >
                                {msg.user}
                              </span>
                              <span className="text-xs text-gray-500">{msg.time}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{msg.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Escribe un mensaje..."
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="p-4 space-y-3">
                  {[
                    { name: "Señales Reglamentarias.pdf", size: "2.4 MB", icon: Download },
                    { name: "Normativa Vial 2024.pdf", size: "1.8 MB", icon: Download },
                    { name: "Ejercicios Prácticos.pdf", size: "3.1 MB", icon: Download },
                  ].map((file, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <file.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">{file.name}</p>
                          <p className="text-gray-500 text-xs">{file.size}</p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
