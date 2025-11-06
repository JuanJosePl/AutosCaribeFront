import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import {
  Menu,
  X,
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
} from "lucide-react"

export default function SidebarAcademia() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: "/academia/seccion", label: "Inicio", icon: BookOpen },
    { to: "/academia/mis-clases", label: "Mis Clases", icon: MonitorPlay },
    { to: "/academia/agendar-clase", label: "Agendar Clase", icon: Calendar },
    { to: "/academia/planes", label: "Planes", icon: CreditCard },
    { to: "/academia/renovar-licencia", label: "Renovar Licencia", icon: RefreshCcw },
    { to: "/academia/combos", label: "Combos", icon: Package },
    { to: "/academia/instructores", label: "Instructores", icon: Users },
    { to: "/academia/simulador", label: "Simulador Virtual", icon: MonitorPlay },
    { to: "/academia/progreso", label: "Progreso", icon: BarChart },
    { to: "/academia/examenes", label: "Exámenes", icon: FileText },
    { to: "/academia/ruta-aprendizaje", label: "Ruta de Aprendizaje", icon: Map },
    { to: "/academia/opiniones", label: "Opiniones", icon: Star },
    { to: "/academia/clases-en-vivo", label: "Clases en Vivo", icon: MonitorPlay },
    { to: "/academia/logros", label: "Logros", icon: Trophy },
    { to: "/academia/referidos", label: "Referidos", icon: Share2 },
  ]

  return (
    <>
      {/* Botón flotante solo visible en móvil */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all md:hidden"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar en móviles (animada) */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900/95 to-black/90 backdrop-blur-xl shadow-2xl z-40 border-r border-gray-800 flex flex-col md:hidden"
          >
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">
                Academia <span className="text-primary-400">de Conduccion</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Tu camino hacia la conducción segura 🚗
              </p>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {links.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                    location.pathname === to
                      ? "bg-primary-600/30 text-white border border-primary-500/40"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-800 text-center text-gray-400 text-xs">
              © {new Date().getFullYear()} Academia Drive.  
              <br /> Todos los derechos reservados.
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Sidebar fija en escritorio */}
      <aside className="hidden md:flex md:flex-col md:w-72 h-screen bg-gradient-to-b from-gray-900/95 to-black/90 border-r border-gray-800 p-6 fixed left-0 top-0 z-30">
        <h2 className="text-2xl font-bold text-white mb-2">
          Academia <span className="text-primary-400">Drive</span>
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Tu camino hacia la conducción segura 🚗
        </p>

        <nav className="flex-1 overflow-y-auto space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                location.pathname === to
                  ? "bg-primary-600/30 text-white border border-primary-500/40"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} Academia Drive
        </div>
      </aside>
    </>
  )
}
