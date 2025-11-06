import { Outlet } from "react-router-dom"
import SidebarAcademia from "../components/academy/SidebarAcademia"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"

export default function AcademyLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* 🔹 Navbar superior */}
      <Navbar />

      <div className="flex flex-1">
        {/* 🔹 Sidebar lateral izquierda */}
        <SidebarAcademia />

        {/* 🔹 Contenido principal (Outlet renderiza la página actual) */}
        <main className="flex-1 p-6 md:p-10 md:ml-72 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  )
}
