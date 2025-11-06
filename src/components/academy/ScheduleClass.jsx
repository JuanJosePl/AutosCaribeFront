import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, User, Car, MapPin, CheckCircle, AlertCircle, ChevronLeft } from "lucide-react";

export default function ScheduleClass() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [selectedType, setSelectedType] = useState("practica");
  const [pickupLocation, setPickupLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('academyCurrentUser'));
    if (!user) {
      navigate('/academia/login');
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  const instructors = [
    { 
      id: 1, 
      name: "Carlos Rodríguez", 
      rating: 4.9, 
      experience: "15 años",
      specialty: "Manejo urbano y carretera",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    { 
      id: 2, 
      name: "María González", 
      rating: 4.8, 
      experience: "12 años",
      specialty: "Conducción defensiva",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    { 
      id: 3, 
      name: "Roberto Martínez", 
      rating: 4.9, 
      experience: "18 años",
      specialty: "Manejo avanzado",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
  ];

  const timeSlots = [
    "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const vehicles = [
    { id: 1, name: "Chevrolet Spark 2023", type: "Manual", color: "Blanco" },
    { id: 2, name: "Mazda 3 2023", type: "Automático", color: "Gris" },
    { id: 3, name: "Toyota Corolla 2023", type: "Automático", color: "Negro" },
  ];

  const handleSchedule = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const scheduledClasses = JSON.parse(localStorage.getItem('scheduledClasses') || '[]');
    const newClass = {
      id: Date.now(),
      userId: currentUser.id,
      date: selectedDate,
      time: selectedTime,
      instructor: instructors.find(i => i.id === parseInt(selectedInstructor)),
      type: selectedType,
      pickupLocation,
      notes,
      status: "pending",
      createdAt: new Date().toISOString()
    };
    
    scheduledClasses.push(newClass);
    localStorage.setItem('scheduledClasses', JSON.stringify(scheduledClasses));
    
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/academia/dashboard');
    }, 2000);
  };

  const minDate = new Date().toISOString().split('T')[0];

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/academia/dashboard')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver al Dashboard
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Agendar Nueva Clase
          </h1>
          <p className="text-gray-400">Elige la fecha, hora e instructor para tu próxima clase</p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 glass-effect p-6 rounded-xl border border-green-500/50 bg-green-500/10"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-white font-semibold">¡Clase agendada exitosamente!</h3>
                <p className="text-gray-300 text-sm">Serás redirigido al dashboard...</p>
              </div>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSchedule}>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tipo de Clase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50"
              >
                <h2 className="text-xl font-bold text-white mb-6">Tipo de Clase</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "practica", label: "Práctica", icon: Car },
                    { value: "teorica", label: "Teórica", icon: Calendar }
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <label
                        key={type.value}
                        className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
                          selectedType === type.value
                            ? 'border-primary-500 bg-primary-500/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={selectedType === type.value}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="hidden"
                        />
                        <Icon className={`w-8 h-8 mx-auto mb-3 ${
                          selectedType === type.value ? 'text-primary-400' : 'text-gray-400'
                        }`} />
                        <p className={`text-center font-semibold ${
                          selectedType === type.value ? 'text-white' : 'text-gray-400'
                        }`}>
                          {type.label}
                        </p>
                      </label>
                    );
                  })}
                </div>
              </motion.div>

              {/* Fecha y Hora */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50"
              >
                <h2 className="text-xl font-bold text-white mb-6">Fecha y Hora</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white font-medium mb-2 block">Fecha</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={minDate}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white font-medium mb-2 block">Hora</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                      >
                        <option value="">Seleccionar hora</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Instructor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50"
              >
                <h2 className="text-xl font-bold text-white mb-6">Selecciona tu Instructor</h2>
                <div className="space-y-4">
                  {instructors.map((instructor) => (
                    <label
                      key={instructor.id}
                      className={`cursor-pointer flex items-center p-4 rounded-xl border-2 transition-all ${
                        selectedInstructor === instructor.id.toString()
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="instructor"
                        value={instructor.id}
                        checked={selectedInstructor === instructor.id.toString()}
                        onChange={(e) => setSelectedInstructor(e.target.value)}
                        required
                        className="hidden"
                      />
                      <img
                        src={instructor.avatar}
                        alt={instructor.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{instructor.name}</h3>
                        <p className="text-gray-400 text-sm">{instructor.specialty}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="flex items-center gap-1 text-yellow-400 text-sm">
                            ⭐ {instructor.rating}
                          </span>
                          <span className="text-gray-500 text-sm">{instructor.experience}</span>
                        </div>
                      </div>
                      <CheckCircle className={`w-6 h-6 ${
                        selectedInstructor === instructor.id.toString()
                          ? 'text-primary-400'
                          : 'text-gray-700'
                      }`} />
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Ubicación y Notas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50"
              >
                <h2 className="text-xl font-bold text-white mb-6">Detalles Adicionales</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-medium mb-2 block">
                      Punto de Recogida {selectedType === "practica" && "*"}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        required={selectedType === "practica"}
                        placeholder="Ej: Calle 79 #49c-47, Barranquilla"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white font-medium mb-2 block">
                      Notas Adicionales (Opcional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Escribe cualquier requerimiento especial..."
                      rows="4"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-effect p-6 rounded-2xl border border-primary-500/30 sticky top-24"
              >
                <h3 className="text-xl font-bold text-white mb-6">Resumen</h3>
                <div className="space-y-4 mb-6">
                  <div className="pb-4 border-b border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Tipo de Clase</p>
                    <p className="text-white font-semibold capitalize">{selectedType || "No seleccionado"}</p>
                  </div>
                  <div className="pb-4 border-b border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Fecha</p>
                    <p className="text-white font-semibold">
                      {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('es-ES', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : "No seleccionada"}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Hora</p>
                    <p className="text-white font-semibold">{selectedTime || "No seleccionada"}</p>
                  </div>
                  <div className="pb-4 border-b border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Instructor</p>
                    <p className="text-white font-semibold">
                      {selectedInstructor 
                        ? instructors.find(i => i.id === parseInt(selectedInstructor))?.name
                        : "No seleccionado"}
                    </p>
                  </div>
                  {pickupLocation && (
                    <div className="pb-4 border-b border-gray-700">
                      <p className="text-gray-400 text-sm mb-1">Punto de Recogida</p>
                      <p className="text-white text-sm">{pickupLocation}</p>
                    </div>
                  )}
                </div>

                <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-primary-300 text-sm font-semibold mb-1">
                        Importante
                      </p>
                      <p className="text-gray-400 text-xs">
                        Recibirás una confirmación por WhatsApp. Cancela con 24h de anticipación.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
                >
                  Confirmar Clase
                </motion.button>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}