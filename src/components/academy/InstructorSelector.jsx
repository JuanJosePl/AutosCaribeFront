import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Star, Calendar, Clock, Award, CheckCircle, MessageSquare, 
  MapPin, Car, Users, TrendingUp, Filter, X 
} from "lucide-react"

export default function InstructorSelector() {
  const [selectedInstructor, setSelectedInstructor] = useState(null)
  const [filterBy, setFilterBy] = useState("all") // all, rating, experience, availability
  const [showBooking, setShowBooking] = useState(false)

  const instructors = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      photo: "https://i.pravatar.cc/150?img=12",
      rating: 4.9,
      reviews: 248,
      experience: 12,
      specialties: ["Manual", "Automático", "Defensiva"],
      languages: ["Español", "Inglés"],
      availability: "Disponible Hoy",
      price: 45,
      totalStudents: 1250,
      successRate: 98,
      certifications: ["Instructor Certificado", "Manejo Defensivo", "Primeros Auxilios"],
      bio: "Instructor apasionado con más de 12 años de experiencia. Especializado en estudiantes nerviosos y primera vez al volante.",
      available: true,
      schedule: ["Lun-Vie: 8AM-6PM", "Sáb: 9AM-2PM"]
    },
    {
      id: 2,
      name: "María González",
      photo: "https://i.pravatar.cc/150?img=5",
      rating: 5.0,
      reviews: 312,
      experience: 15,
      specialties: ["Automático", "Estacionamiento", "Carretera"],
      languages: ["Español", "Inglés", "Francés"],
      availability: "Disponible Mañana",
      price: 50,
      totalStudents: 1580,
      successRate: 99,
      certifications: ["Master Instructor", "Manejo Avanzado", "Instructor del Año 2023"],
      bio: "Instructora líder con enfoque en confianza y seguridad. Excelente para conductoras principiantes.",
      available: true,
      schedule: ["Lun-Sáb: 7AM-7PM"]
    },
    {
      id: 3,
      name: "Roberto Martínez",
      photo: "https://i.pravatar.cc/150?img=33",
      rating: 4.8,
      reviews: 189,
      experience: 8,
      specialties: ["Manual", "Deportivo", "Alta Performance"],
      languages: ["Español"],
      availability: "Disponible Hoy",
      price: 55,
      totalStudents: 890,
      successRate: 96,
      certifications: ["Instructor Avanzado", "Manejo Deportivo", "Track Day Certified"],
      bio: "Especialista en manejo deportivo y técnicas avanzadas. Perfecto para quienes buscan perfeccionar sus habilidades.",
      available: true,
      schedule: ["Mar-Dom: 10AM-8PM"]
    },
    {
      id: 4,
      name: "Ana Pérez",
      photo: "https://i.pravatar.cc/150?img=9",
      rating: 4.9,
      reviews: 276,
      experience: 10,
      specialties: ["Automático", "Senior", "Adaptado"],
      languages: ["Español", "Portugués"],
      availability: "Ocupado",
      price: 48,
      totalStudents: 1120,
      successRate: 97,
      certifications: ["Instructor Certificado", "Educación Especial", "Paciencia Extrema"],
      bio: "Especializada en adultos mayores y personas con necesidades especiales. Ambiente de aprendizaje tranquilo.",
      available: false,
      schedule: ["Lun-Vie: 9AM-5PM"]
    },
    {
      id: 5,
      name: "Luis Torres",
      photo: "https://i.pravatar.cc/150?img=15",
      rating: 4.7,
      reviews: 156,
      experience: 6,
      specialties: ["Manual", "Ciudad", "Tráfico Pesado"],
      languages: ["Español", "Inglés"],
      availability: "Disponible Hoy",
      price: 42,
      totalStudents: 650,
      successRate: 95,
      certifications: ["Instructor Básico", "Manejo Urbano", "Eco Driving"],
      bio: "Instructor dinámico enfocado en manejo urbano y técnicas de conducción eficiente en ciudad.",
      available: true,
      schedule: ["Lun-Vie: 2PM-10PM"]
    },
    {
      id: 6,
      name: "Patricia Silva",
      photo: "https://i.pravatar.cc/150?img=45",
      rating: 5.0,
      reviews: 298,
      experience: 14,
      specialties: ["Automático", "Adolescentes", "Primera Licencia"],
      languages: ["Español"],
      availability: "Disponible Mañana",
      price: 47,
      totalStudents: 1340,
      successRate: 98,
      certifications: ["Instructor Juvenil", "Psicología Educativa", "Mejor Instructor 2022"],
      bio: "Experta en enseñar a adolescentes. Crea un ambiente seguro y motivador para jóvenes conductores.",
      available: true,
      schedule: ["Lun-Sáb: 8AM-6PM"]
    }
  ]

  const filteredInstructors = instructors.filter(instructor => {
    switch(filterBy) {
      case "rating":
        return instructor.rating >= 4.9
      case "experience":
        return instructor.experience >= 10
      case "availability":
        return instructor.available
      default:
        return true
    }
  })

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
            <Users className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Elige tu <span className="gradient-text-static">Instructor</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Instructores certificados y altamente calificados esperándote
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect-strong p-4 rounded-2xl border border-primary-500/20 mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-primary-400" />
            <span className="text-white font-semibold">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { value: "all", label: "Todos", icon: Users },
              { value: "rating", label: "Mejor Valorados", icon: Star },
              { value: "experience", label: "Más Experiencia", icon: Award },
              { value: "availability", label: "Disponibles Hoy", icon: CheckCircle }
            ].map(filter => {
              const Icon = filter.icon
              return (
                <motion.button
                  key={filter.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterBy(filter.value)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                    filterBy === filter.value
                      ? 'gradient-bg-green text-white'
                      : 'glass-effect text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredInstructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-hover glass-effect-strong rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50"
            >
              {/* Header Card */}
              <div className="relative h-32 bg-gradient-to-br from-primary-600/20 to-accent-600/20">
                <div className="absolute -bottom-12 left-6">
                  <div className="relative">
                    <img
                      src={instructor.photo}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full border-4 border-black object-cover"
                    />
                    {instructor.available && (
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-black" />
                    )}
                  </div>
                </div>
                {!instructor.available && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                    Ocupado
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="pt-16 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{instructor.experience} años de experiencia</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(instructor.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold">{instructor.rating}</span>
                  <span className="text-gray-400 text-sm">({instructor.reviews} reseñas)</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="glass-effect p-3 rounded-lg text-center">
                    <Users className="w-4 h-4 text-primary-400 mx-auto mb-1" />
                    <p className="text-white text-sm font-bold">{instructor.totalStudents}</p>
                    <p className="text-gray-400 text-xs">Estudiantes</p>
                  </div>
                  <div className="glass-effect p-3 rounded-lg text-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
                    <p className="text-white text-sm font-bold">{instructor.successRate}%</p>
                    <p className="text-gray-400 text-xs">Aprobación</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.slice(0, 3).map(specialty => (
                      <span key={specialty} className="px-2 py-1 glass-effect rounded text-xs text-white">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Availability */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Desde</p>
                    <p className="text-primary-400 text-2xl font-bold">${instructor.price}/hora</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{instructor.availability}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedInstructor(instructor)}
                    className="flex-1 py-3 glass-effect border border-primary-500/30 text-white font-semibold rounded-xl hover:bg-primary-500/20 transition-all"
                  >
                    Ver Perfil
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedInstructor(instructor)
                      setShowBooking(true)
                    }}
                    disabled={!instructor.available}
                    className={`flex-1 py-3 font-semibold rounded-xl transition-all ${
                      instructor.available
                        ? 'gradient-bg-green text-white hover:shadow-lg hover:shadow-primary-500/50'
                        : 'glass-effect text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {instructor.available ? 'Reservar' : 'No Disponible'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instructor Detail Modal */}
      <AnimatePresence>
        {selectedInstructor && !showBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInstructor(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect-strong max-w-3xl w-full rounded-3xl overflow-hidden border border-primary-500/30 my-8"
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary-600/30 to-accent-600/30 p-8">
                <button
                  onClick={() => setSelectedInstructor(null)}
                  className="absolute top-4 right-4 w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="flex items-center gap-6">
                  <img
                    src={selectedInstructor.photo}
                    alt={selectedInstructor.name}
                    className="w-32 h-32 rounded-full border-4 border-black object-cover"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedInstructor.name}</h2>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(selectedInstructor.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-bold">{selectedInstructor.rating}</span>
                      <span className="text-gray-400">({selectedInstructor.reviews} reseñas)</span>
                    </div>
                    <div className="flex gap-2">
                      {selectedInstructor.languages.map(lang => (
                        <span key={lang} className="px-3 py-1 glass-effect rounded-full text-sm text-white">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Bio */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Sobre mí</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedInstructor.bio}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-effect p-4 rounded-xl text-center">
                    <Clock className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedInstructor.experience}</p>
                    <p className="text-gray-400 text-sm">Años</p>
                  </div>
                  <div className="glass-effect p-4 rounded-xl text-center">
                    <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedInstructor.totalStudents}</p>
                    <p className="text-gray-400 text-sm">Estudiantes</p>
                  </div>
                  <div className="glass-effect p-4 rounded-xl text-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedInstructor.successRate}%</p>
                    <p className="text-gray-400 text-sm">Éxito</p>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Especialidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedInstructor.specialties.map(specialty => (
                      <span key={specialty} className="px-4 py-2 glass-effect rounded-xl text-white">
                        <Car className="w-4 h-4 inline mr-2" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Certificaciones</h3>
                  <div className="space-y-2">
                    {selectedInstructor.certifications.map(cert => (
                      <div key={cert} className="flex items-center gap-3 glass-effect p-3 rounded-lg">
                        <Award className="w-5 h-5 text-primary-400" />
                        <span className="text-white">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Horario</h3>
                  <div className="space-y-2">
                    {selectedInstructor.schedule.map((time, i) => (
                      <div key={i} className="flex items-center gap-3 glass-effect p-3 rounded-lg">
                        <Calendar className="w-5 h-5 text-green-400" />
                        <span className="text-white">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 glass-effect border border-primary-500/30 text-white font-semibold rounded-xl hover:bg-primary-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Enviar Mensaje
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowBooking(true)}
                    disabled={!selectedInstructor.available}
                    className={`flex-1 py-4 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
                      selectedInstructor.available
                        ? 'gradient-bg-green text-white hover:shadow-lg hover:shadow-primary-500/50'
                        : 'glass-effect text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    Reservar Clase
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBooking && selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBooking(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect-strong max-w-md w-full rounded-3xl overflow-hidden border border-primary-500/30 p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Reservar Clase</h3>
                <button
                  onClick={() => setShowBooking(false)}
                  className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                  <img
                    src={selectedInstructor.photo}
                    alt={selectedInstructor.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="text-white font-bold">{selectedInstructor.name}</p>
                    <p className="text-primary-400 text-sm">${selectedInstructor.price}/hora</p>
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">Fecha</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 glass-effect rounded-xl text-white focus:outline-none focus:border-primary-500 border border-white/10"
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">Hora</label>
                  <select className="w-full px-4 py-3 glass-effect rounded-xl text-white focus:outline-none focus:border-primary-500 border border-white/10">
                    <option value="">Seleccionar hora</option>
                    <option value="8">8:00 AM</option>
                    <option value="9">9:00 AM</option>
                    <option value="10">10:00 AM</option>
                    <option value="11">11:00 AM</option>
                    <option value="14">2:00 PM</option>
                    <option value="15">3:00 PM</option>
                    <option value="16">4:00 PM</option>
                    <option value="17">5:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">Duración</label>
                  <select className="w-full px-4 py-3 glass-effect rounded-xl text-white focus:outline-none focus:border-primary-500 border border-white/10">
                    <option value="1">1 hora - ${selectedInstructor.price}</option>
                    <option value="2">2 horas - ${selectedInstructor.price * 2}</option>
                    <option value="3">3 horas - ${selectedInstructor.price * 3}</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 gradient-bg-green text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  Confirmar Reserva
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}