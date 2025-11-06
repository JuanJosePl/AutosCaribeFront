import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Calendar,
  CreditCard,
  RefreshCcw,
  Package,
  Users,
  MonitorPlay,
  BarChart,
  FileText,
  Map,
  Star,
  Trophy,
  Share2,
  LogOut,
  User,
  Settings,
  Bell,
  ChevronRight,
  Zap,
  Target,
  Award,
} from "lucide-react";

export default function SidebarAcademia() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("academyCurrentUser"));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("academyCurrentUser");
    navigate("/academia/login");
  };

  const menuGroups = [
    {
      title: "Principal",
      items: [
        { to: "/academia/dashboard", label: "Dashboard", icon: Home, badge: null },
        { to: "/academia/mis-clases", label: "Mis Clases", icon: BookOpen, badge: "3" },
        { to: "/academia/agendar", label: "Agendar Clase", icon: Calendar, badge: null },
      ],
    },
    {
      title: "Aprendizaje",
      items: [
        { to: "/academia/progreso", label: "Mi Progreso", icon: BarChart, badge: "85%" },
        { to: "/academia/simulador", label: "Simulador", icon: MonitorPlay, badge: "Nuevo" },
        { to: "/academia/ruta", label: "Ruta de Aprendizaje", icon: Map, badge: null },
        { to: "/academia/examenes", label: "Exámenes", icon: FileText, badge: null },
      ],
    },
    {
      title: "Servicios",
      items: [
        { to: "/academia/planes", label: "Planes", icon: CreditCard, badge: null },
        { to: "/academia/renovar", label: "Renovar Licencia", icon: RefreshCcw, badge: null },
        { to: "/academia/combos", label: "Combos", icon: Package, badge: "Oferta" },
      ],
    },
    {
      title: "Comunidad",
      items: [
        { to: "/academia/instructores", label: "Instructores", icon: Users, badge: null },
        { to: "/academia/logros", label: "Logros", icon: Trophy, badge: "5" },
        { to: "/academia/referidos", label: "Referir Amigos", icon: Share2, badge: null },
      ],
    },
  ];

  const quickStats = [
    { icon: Target, value: "8/20", label: "Clases", color: "text-primary-400" },
    { icon: Zap, value: "85%", label: "Progreso", color: "text-green-400" },
    { icon: Award, value: "5", label: "Logros", color: "text-yellow-400" },
  ];

  const SidebarContent = ({ mobile = false }) => (
    <>
      {/* Header con Logo y Usuario */}
      <div className={`${mobile ? "p-4" : "p-6"} border-b border-gray-800/50`}>
        <Link to="/academia/dashboard" className="block mb-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">
                Academia <span className="text-primary-400">Caribe</span>
              </h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                Driving School
              </p>
            </div>
          </motion.div>
        </Link>

        {currentUser && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect p-3 rounded-xl border border-gray-800/50 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">
                  {currentUser.fullName?.split(" ")[0]}
                </p>
                <p className="text-gray-500 text-xs truncate">Plan Premium</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-primary-400 transition-colors" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="p-4 grid grid-cols-3 gap-2">
        {quickStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              className="glass-effect p-3 rounded-xl border border-gray-800/50 text-center"
            >
              <Icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
              <p className="text-white font-bold text-sm">{stat.value}</p>
              <p className="text-gray-500 text-[10px]">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6 custom-scrollbar">
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider px-3 mb-3">
              {group.title}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => mobile && setOpen(false)}
                    onMouseEnter={() => setHoveredLink(item.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="block relative"
                  >
                    <motion.div
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-primary-600/20 to-accent-600/20 text-white border border-primary-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                      {item.badge && (
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            item.badge === "Nuevo" || item.badge === "Oferta"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-primary-500/20 text-primary-400"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </motion.div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-r-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-800/50 space-y-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Bell className="w-5 h-5" />
          <span className="text-sm font-medium">Notificaciones</span>
          <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Configuración</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Cerrar Sesión</span>
        </motion.button>

        <div className="text-center text-gray-600 text-[10px] mt-4">
          © 2024 Academia Caribe
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button - Floating & Animated */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-5 left-5 z-[60] md:hidden w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl shadow-lg flex items-center justify-center"
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

      {/* Mobile Sidebar - Slide from Left */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900/98 to-black/98 backdrop-blur-xl shadow-2xl z-[56] border-r border-gray-800/50 flex flex-col md:hidden overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/30 rounded-full blur-3xl"
                />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <SidebarContent mobile={true} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Always Visible */}
      <aside className="hidden md:flex md:flex-col h-screen w-80 bg-gradient-to-b from-gray-900/98 to-black/98 backdrop-blur-xl border-r border-gray-800/50 fixed left-0 top-0 z-40 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <SidebarContent />
        </div>
      </aside>
    </>
  );
}