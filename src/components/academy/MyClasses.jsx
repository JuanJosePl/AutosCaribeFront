import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, Clock, User, MapPin, CheckCircle, XCircle, 
  AlertCircle, ChevronLeft, Filter, Search, MoreVertical,
  Edit, Trash2, MessageCircle
} from "lucide-react";

export default function MyClasses() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [classes, setClasses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('academyCurrentUser'));
    if (!user) {
      navigate('/academia/login');
      return;
    }
    setCurrentUser(user);

    // Get scheduled classes
    const scheduledClasses = JSON.parse(localStorage.getItem('scheduledClasses') || '[]');
    const userClasses = scheduledClasses.filter(c => c.userId === user.id);
    setClasses(userClasses);
  }, [navigate]);

  const handleCancelClass = (classId) => {
    if (!window.confirm('¿Estás seguro de cancelar esta clase?')) return;
    
    const scheduledClasses = JSON.parse(localStorage.getItem('scheduledClasses') || '[]');
    const updatedClasses = scheduledClasses.map(c => 
      c.id === classId ? { ...c, status: 'cancelled' } : c
    );
    localStorage.setItem('scheduledClasses', JSON.stringify(updatedClasses));
    
    setClasses(updatedClasses.filter(c => c.userId === currentUser.id));
    setActiveMenu(null);
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { color: 'bg-yellow-500/20 text-yellow-400', text: 'Pendiente' },
      confirmed: { color: 'bg-green-500/20 text-green-400', text: 'Confirmada' },
      completed: { color: 'bg-blue-500/20 text-blue-400', text: 'Completada' },
      cancelled: { color: 'bg-red-500/20 text-red-400', text: 'Cancelada' }
    };
    return badges[status] || badges.pending;
  };

  const filteredClasses = classes.filter(clase => {
    const matchesFilter = filter === "all" || clase.status === filter;
    const matchesSearch = clase.instructor?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clase.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { label: "Total", value: classes.length, color: "from-gray-600 to-gray-700" },
    { label: "Confirmadas", value: classes.filter(c => c.status === "confirmed").length, color: "from-green-500 to-green-600" },
    { label: "Pendientes", value: classes.filter(c => c.status === "pending").length, color: "from-yellow-500 to-yellow-600" },
    { label: "Completadas", value: classes.filter(c => c.status === "completed").length, color: "from-blue-500 to-blue-600" }
  ];

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/academia/dashboard')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver al Dashboard
          </button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Mis Clases
              </h1>
              <p className="text-gray-400">Gestiona todas tus clases agendadas</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/academia/agendar')}
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              + Agendar Nueva Clase
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl border border-gray-700/50"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="glass-effect p-4 md:p-6 rounded-xl border border-gray-700/50 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por instructor o tipo..."
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {[
                { value: "all", label: "Todas" },
                { value: "pending", label: "Pendientes" },
                { value: "confirmed", label: "Confirmadas" },
                { value: "completed", label: "Completadas" }
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    filter === f.value
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Classes List */}
        {filteredClasses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect p-12 rounded-2xl border border-gray-700/50 text-center"
          >
            <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No hay clases</h3>
            <p className="text-gray-400 mb-6">
              {filter === "all" 
                ? "Aún no has agendado ninguna clase"
                : `No tienes clases ${filter === "pending" ? "pendientes" : filter === "confirmed" ? "confirmadas" : "completadas"}`
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/academia/agendar')}
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              Agendar Primera Clase
            </motion.button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredClasses.map((clase, index) => {
              const statusBadge = getStatusBadge(clase.status);
              return (
                <motion.div
                  key={clase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Date Badge */}
                    <div className="flex-shrink-0 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-white">
                          {new Date(clase.date + 'T00:00:00').getDate()}
                        </div>
                        <div className="text-xs text-white/80">
                          {new Date(clase.date + 'T00:00:00').toLocaleDateString('es-ES', { month: 'short' }).toUpperCase()}
                        </div>
                      </div>
                    </div>

                    {/* Class Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white capitalize">
                              Clase {clase.type}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge.color}`}>
                              {statusBadge.text}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400">
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {clase.time}
                            </span>
                            {clase.instructor && (
                              <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {clase.instructor.name}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Actions Menu */}
                        <div className="relative">
                          <button
                            onClick={() => setActiveMenu(activeMenu === clase.id ? null : clase.id)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <MoreVertical className="w-5 h-5 text-gray-400" />
                          </button>
                          
                          {activeMenu === clase.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-0 mt-2 w-48 glass-effect rounded-xl border border-gray-700/50 overflow-hidden shadow-xl z-10"
                            >
                              <button
                                onClick={() => {
                                  setActiveMenu(null);
                                  // Navigate to edit
                                }}
                                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left"
                              >
                                <MessageCircle className="w-4 h-4 text-gray-400" />
                                <span className="text-white text-sm">Contactar Instructor</span>
                              </button>
                              {clase.status === "pending" && (
                                <>
                                  <button
                                    onClick={() => {
                                      setActiveMenu(null);
                                      // Navigate to edit
                                    }}
                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left"
                                  >
                                    <Edit className="w-4 h-4 text-gray-400" />
                                    <span className="text-white text-sm">Editar Clase</span>
                                  </button>
                                  <button
                                    onClick={() => handleCancelClass(clase.id)}
                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-500/10 transition-colors text-left"
                                  >
                                    <Trash2 className="w-4 h-4 text-red-400" />
                                    <span className="text-red-400 text-sm">Cancelar Clase</span>
                                  </button>
                                </>
                              )}
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {clase.pickupLocation && (
                        <div className="flex items-start gap-2 text-gray-400">
                          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{clase.pickupLocation}</span>
                        </div>
                      )}

                      {clase.notes && (
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-gray-300 text-sm">{clase.notes}</p>
                        </div>
                      )}
                    </div>

                    {/* Quick Actions */}
                    {clase.status === "confirmed" && (
                      <div className="flex-shrink-0 flex flex-col gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all text-sm font-medium"
                        >
                          Ver Detalles
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}