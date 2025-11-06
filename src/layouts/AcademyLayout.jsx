import { Outlet, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import SidebarAcademia from "../components/academy/SidebarAcademia"

export default function AcademyLayout() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar si hay usuario autenticado
    const currentUser = localStorage.getItem("academyCurrentUser")
    
    if (!currentUser) {
      navigate("/academia/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [navigate])

  if (!isAuthenticated) {
    return null // O un loader mientras verifica
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Sidebar */}
      <SidebarAcademia />

      {/* Main Content Area - Responsive Padding */}
      <div className="md:ml-80 min-h-screen">
        {/* Animated Background Decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden md:ml-80">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        {/* Content with proper padding and spacing */}
        <main className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  )
}