import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  Menu, X, Home, BookOpen, Calendar, CreditCard, RefreshCcw, Package,
  Users, MonitorPlay, BarChart, FileText, Map, Star, Trophy, Share2,
  LogOut, Settings, Bell, Search, ChevronRight, Zap, Award
} from "lucide-react"

export default function SidebarAcademia() {
  const [open, setOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Obtener usuario actual
    const usuarioActual = localStorage.getItem("academiaUsuarioActual")
    if (usuarioActual) {
      setUser(JSON.parse(usuarioActual))
    }
  }, [])

  const menuSections = [
    {
      title: "Principal",
      items: [
        { to: "/academia/dashboard", label: "Dashboard", icon: Home, color: "from-green-500 to-emerald-500", badge: null },
        { to: "/academia/mis-clases", label: "Mis Clases", icon: BookOpen, color: "from-blue-500 to-cyan-500", badge: "3" },
        { to: "/academia/agendar-clase", label: "Agendar Clase", icon: Calendar, color: "from-purple-500 to-pink-500", badge: null },
      ]
    },
    {
      title: "Servicios",
      items: [
        { to: "/academia/planes", label: "Planes", icon: CreditCard, color: "from-yellow-500 to-orange-500", badge: "Nuevo" },
        { to: "/academia/renovar-licencia", label: "Renovar Licencia", icon: RefreshCcw, color: "from-red-500 to-pink-500", badge: null },
        { to: "/academia/combos", label: "Combos", icon: Package, color: "from-green-500 to-teal-500", badge: "30% OFF" },
      ]
    },
    {
      title: "Aprendizaje",
      items: [
        { to: "/academia/instructores", label: "Instructores", icon: Users, color: "from-indigo-500 to-purple-500", badge: null },
        { to: "/academia/simulador", label: "Simulador Virtual", icon: MonitorPlay, color: "from-cyan-500 to-blue-500", badge: "VR" },
        { to: "/academia/progreso", label: "Mi Progreso", icon: BarChart, color: "from-green-500 to-lime-500", badge: "85%" },
        { to: "/academia/examenes", label: "Exámenes", icon: FileText, color: "from-orange-500 to-red-500", badge: null },
        { to: "/academia/ruta-aprendizaje", label: "Ruta de Aprendizaje", icon: Map, color: "from-pink-500 to-rose-500", badge: null },
      ]
    },
    {
      title: "Comunidad",
      items: [
        { to: "/academia/clases-en-vivo", label: "Clases en Vivo", icon: MonitorPlay, color: "from-red-500 to-orange-500", badge: "🔴 LIVE" },
        { to: "/academia/opiniones", label: "Opiniones", icon: Star, color: "from-yellow-500 to-amber-500", badge: null },
        { to: "/academia/logros", label: "Logros", icon: Trophy, color: "from-yellow-500 to-orange-500", badge: "12" },
        { to: "/academia/referidos", label: "Referir Amigos", icon: Share2, color: "from-blue-500 to-indigo-500", badge: "$$$" },
      ]
    }
  ]

  const allLinks = menuSections.flatMap(section => section.items)
  const filteredLinks = allLinks.filter(link => 
    link.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleLogout = () => {
    localStorage.removeItem("academiaUsuarioActual")
    navigate("/")
  }

  return (
    <>
      {/* Mobile Menu Button - Floating & Animated */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-6 left-6 z-[60] md:hidden w-14 h-14 gradient-bg-green rounded-2xl shadow-2xl flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Overlay for Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.aside
          initial={false}
          animate={{
            x: open ? 0 : -320,
            opacity: open ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`
            fixed top-0 left-0 h-screen w-80 z-50
            bg-gradient-to-b from-gray-950/95 via-gray-900/95 to-black/95
            backdrop-blur-2xl border-r border-primary-500/20
            flex flex-col shadow-2xl
            md:translate-x-0 md:opacity-100
          `}
        >
          {/* Header with Logo & User */}
          <div className="p-6 border-b border-white/10">
            {/* Logo */}
            <Link to="/academia/dashboard" onClick={() => setOpen(false)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6 relative"
              >
                <img
                  src="/logoEmpresa/logoNav(sinFondo).png"
                  alt="Academia Caribe"
                  className="h-16 w-auto mx-auto object-contain"
                />
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                      "0 0 40px rgba(34, 197, 94, 0.5)",
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
              </motion.div>
            </Link>

            {/* User Card */}
            {user && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-4 rounded-2xl border border-white/10 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-bg-green flex items-center justify-center text-white font-bold text-lg">
                    {user.nombres?.charAt(0)}{user.apellidos?.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold truncate">{user.nombres} {user.apellidos}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <Award className="w-3 h-3 text-green-400" />
                      Estudiante Activo
                    </p>
                  </div>
                  <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Search Bar */}
          <div className="px-6 py-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all text-sm"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6 scrollbar-hide">
            {searchQuery ? (
              // Search Results
              <div className="space-y-1">
                <p className="text-gray-500 text-xs px-4 mb-3">
                  {filteredLinks.length} resultados
                </p>
                {filteredLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    {...link}
                    isActive={location.pathname === link.to}
                    onHover={setHoveredLink}
                    isHovered={hoveredLink === link.to}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            ) : (
              // Grouped Navigation
              menuSections.map((section, idx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider px-4 mb-3 flex items-center gap-2">
                    <span className="flex-1">{section.title}</span>
                    <Zap className="w-3 h-3 text-green-400" />
                  </p>
                  <div className="space-y-1">
                    {section.items.map((link) => (
                      <NavLink
                        key={link.to}
                        {...link}
                        isActive={location.pathname === link.to}
                        onHover={setHoveredLink}
                        isHovered={hoveredLink === link.to}
                        onClick={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </nav>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 space-y-2">
            <Link
              to="/academia/configuracion"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 glass-effect rounded-xl hover:bg-white/10 transition-all text-gray-300 hover:text-white group"
            >
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-sm font-medium">Configuración</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 glass-effect rounded-xl hover:bg-red-500/20 border border-transparent hover:border-red-500/50 transition-all text-gray-300 hover:text-red-400 group"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Cerrar Sesión</span>
            </button>

            <div className="text-center pt-2">
              <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} Academia Caribe
              </p>
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  )
}

// NavLink Component with Advanced Animations
function NavLink({ to, label, icon: Icon, color, badge, isActive, onHover, isHovered, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => onHover(to)}
      onMouseLeave={() => onHover(null)}
      className="block relative group"
    >
      <motion.div
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all
          ${isActive 
            ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 shadow-lg shadow-green-500/20' 
            : 'hover:bg-white/5 border border-transparent'
          }
        `}
      >
        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 gradient-bg-green rounded-r-full"
          />
        )}

        {/* Icon with Gradient Background */}
        <div className={`
          relative w-10 h-10 rounded-xl flex items-center justify-center
          bg-gradient-to-br ${color}
          ${isActive ? 'scale-110 shadow-lg' : 'opacity-80 group-hover:opacity-100 group-hover:scale-110'}
          transition-all duration-300
        `}>
          <Icon className="w-5 h-5 text-white" />
          
          {/* Glow Effect */}
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color}`}
            />
          )}
        </div>

        {/* Label */}
        <span className={`
          flex-1 text-sm font-medium transition-colors
          ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}
        `}>
          {label}
        </span>

        {/* Badge */}
        {badge && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`
              px-2 py-1 rounded-full text-xs font-bold
              ${badge === "🔴 LIVE" 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-white/10 text-white'
              }
            `}
          >
            {badge}
          </motion.span>
        )}

        {/* Hover Arrow */}
        <ChevronRight className={`
          w-4 h-4 transition-all
          ${isActive || isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
          ${isActive ? 'text-green-400' : 'text-gray-400'}
        `} />

        {/* Hover Glow */}
        {isHovered && !isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-10`}
          />
        )}
      </motion.div>
    </Link>
  )
}