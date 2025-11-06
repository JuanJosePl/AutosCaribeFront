import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, Calendar, Clock, Award, BookOpen, LogOut, 
  Bell, Settings, ChevronRight, Car, CheckCircle,
  TrendingUp, Star, FileText, MessageCircle
} from "lucide-react";

export default function AcademyDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Get current user from localStorage
    const user = JSON.parse(localStorage.getItem('academyCurrentUser'));
    if (!user) {
      navigate('/academia/login');
      return;
    }
    setCurrentUser(user);

    // Simulate upcoming classes
    setUpcomingClasses([
      {
        id: 1,
        date: "2024-01-15",
        time: "10:00 AM",
        instructor: "Carlos Rodríguez",
        type: "Práctica",
        status: "confirmed"
      },
      {
        id: 2,
        date: "2024-01-17",
        time: "3:00 PM",
        instructor: "María González",
        type: "Teórica",
        status: "pending"
      },
    ]);

    // Simulate progress
    setProgress(35);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('academyCurrentUser');
    navigate('/academia/login');
  };

  const stats = [
    { icon: Calendar, value: "8", label: "Clases Completadas", color: "from-primary-500 to-primary-600" },
    { icon: Clock, value: "12h", label: "Horas de Práctica", color: "from-accent-500 to-accent-600" },
    { icon: Award, value: "85%", label: "Progreso", color: "from-green-500 to-green-600" },
    { icon: Star, value: "4.8", label: "Tu Calificación", color: "from-yellow-500 to-yellow-600" },
  ];

  const recentActivity = [
    { type: "class", text: "Clase completada: Manejo en ciudad", time: "Hace 2 días", icon: CheckCircle },
    { type: "achievement", text: "¡Logro desbloqueado: Primera clase!", time: "Hace 5 días", icon: Award },
    { type: "message", text: "Mensaje del instructor Carlos", time: "Hace 1 semana", icon: MessageCircle },
  ];

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                ¡Hola, {currentUser.fullName?.split(' ')[0]}! 👋
              </h1>
              <p className="text-gray-400">Bienvenido a tu panel de estudiante</p>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all"
              >
                <Bell className="w-5 h-5 text-gray-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all"
              >
                <Settings className="w-5 h-5 text-gray-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl border border-red-500/30 transition-all flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Salir</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Progress Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Tu Progreso</h2>
                <span className="text-primary-400 font-semibold">{progress}%</span>
              </div>
              <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">8/20</div>
                  <div className="text-gray-400 text-xs">Clases</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">12/30</div>
                  <div className="text-gray-400 text-xs">Horas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">85%</div>
                  <div className="text-gray-400 text-xs">Dominio</div>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-effect p-6 md:p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Próximas Clases</h2>
                <button className="text-primary-400 hover:text-primary-300 text-sm font-semibold">
                  Ver todas
                </button>
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((clase) => (
                  <div
                    key={clase.id}
                    className="glass-effect p-4 md:p-6 rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Car className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold mb-1">{clase.type}</h3>
                          <p className="text-gray-400 text-sm mb-2">Instructor: {clase.instructor}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {clase.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {clase.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        clase.status === 'confirmed' 
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {clase.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl transition-all"
              >
                Agendar Nueva Clase
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-effect p-6 rounded-2xl border border-gray-700/50"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{currentUser.fullName}</h3>
                <p className="text-gray-400 text-sm">{currentUser.email}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Teléfono</span>
                  <span className="text-white text-sm">{currentUser.phone}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Ciudad</span>
                  <span className="text-white text-sm">{currentUser.city}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400 text-sm">Plan</span>
                  <span className="text-primary-400 font-semibold text-sm">Premium</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Editar Perfil
              </motion.button>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="glass-effect p-6 rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-lg font-bold text-white mb-6">Actividad Reciente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm mb-1">{activity.text}</p>
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="glass-effect p-6 rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-lg font-bold text-white mb-4">Acciones Rápidas</h3>
              <div className="space-y-2">
                {[
                  { icon: Calendar, text: "Agendar Clase" },
                  { icon: FileText, text: "Ver Documentos" },
                  { icon: MessageCircle, text: "Contactar Instructor" },
                  { icon: BookOpen, text: "Material de Estudio" },
                ].map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                        <span className="text-white text-sm">{action.text}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-primary-400 transition-colors" />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}