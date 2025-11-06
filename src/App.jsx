import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

// 🔹 Páginas principales
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import GalleryParts from "./pages/GalleryParts"
import Blog from "./pages/Blog"
import Guides from "./pages/Guides"
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import Cookies from "./pages/Cookies"
import Warranties from "./pages/Warranties"
import Financing from "./pages/Financing"
import AboutUs from "./pages/AboutUs"
import Maintenance from "./pages/Maintenance"
import OurTeam from "./pages/OurTeam"
import Testimonials from "./pages/Testimonials"
import Careers from "./pages/Careers"

// 🔹 Páginas de academia
import AcademyHome from "./pages/academiaConduccion/AcademyHome"
import AcademyDashboard from "./pages/academiaConduccion/AcademyDashboard"
import AcademyLogin from "./pages/academiaConduccion/AcademyLogin"
import AcademyRegister from "./pages/academiaConduccion/AcademyRegister"

// 🔹 Componentes de academia
import AcademySection from "./components/academy/AcademySection"
import MyClasses from "./components/academy/MyClasses"
import ScheduleClass from "./components/academy/ScheduleClass"
import PricingPlans from "./components/academy/PricingPlans"
import LicenseRenewal from "./components/academy/LicenseRenewal"
import ComboPackages from "./components/academy/ComboPackages"
import InstructorSelector from "./components/academy/InstructorSelector"
import VirtualSimulator from "./components/academy/VirtualSimulator"
import ProgressTracker from "./components/academy/ProgressTracker"
import ExamPreparation from "./components/academy/ExamPreparation"
import LearningPath from "./components/academy/LearningPath"
import StudentReviews from "./components/academy/StudentReviews"
import LiveClassroom from "./components/academy/LiveClassroom"
import AchievementsSystem from "./components/academy/AchievementsSystem"
import ReferralProgram from "./components/academy/ReferralProgram"
import AcademyLayout from "./layouts/AcademyLayout"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-black text-white">
        <Routes>
          {/* 🔹 Páginas principales */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/galeria" element={<><Navbar /><Gallery /><Footer /></>} />
          <Route path="/galeria-repuesto" element={<><Navbar /><GalleryParts /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/guias" element={<><Navbar /><Guides /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><FAQ /><Footer /></>} />
          <Route path="/contacto" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/terminos" element={<><Navbar /><Terms /><Footer /></>} />
          <Route path="/privacidad" element={<><Navbar /><Privacy /><Footer /></>} />
          <Route path="/cookies" element={<><Navbar /><Cookies /><Footer /></>} />
          <Route path="/garantias" element={<><Navbar /><Warranties /><Footer /></>} />
          <Route path="/finanzas" element={<><Navbar /><Financing /><Footer /></>} />
          <Route path="/sobre-nosotros" element={<><Navbar /><AboutUs /><Footer /></>} />
          <Route path="/mantenimiento" element={<><Navbar /><Maintenance /><Footer /></>} />
          <Route path="/equipo" element={<><Navbar /><OurTeam /><Footer /></>} />
          <Route path="/testimonios" element={<><Navbar /><Testimonials /><Footer /></>} />
          <Route path="/carreras" element={<><Navbar /><Careers /><Footer /></>} />

          {/* 🔹 Rutas Academia con layout */}
          <Route path="/academia" element={<AcademyLayout />}>
            <Route index element={<AcademyHome />} />
            <Route path="dashboard" element={<AcademyDashboard />} />
            <Route path="seccion" element={<AcademySection />} />
            <Route path="mis-clases" element={<MyClasses />} />
            <Route path="agendar-clase" element={<ScheduleClass />} />
            <Route path="planes" element={<PricingPlans />} />
            <Route path="renovar-licencia" element={<LicenseRenewal />} />
            <Route path="combos" element={<ComboPackages />} />
            <Route path="instructores" element={<InstructorSelector />} />
            <Route path="simulador" element={<VirtualSimulator />} />
            <Route path="progreso" element={<ProgressTracker />} />
            <Route path="examenes" element={<ExamPreparation />} />
            <Route path="ruta-aprendizaje" element={<LearningPath />} />
            <Route path="opiniones" element={<StudentReviews />} />
            <Route path="clases-en-vivo" element={<LiveClassroom />} />
            <Route path="logros" element={<AchievementsSystem />} />
            <Route path="referidos" element={<ReferralProgram />} />
          </Route>

          {/* 🔹 Login / Registro (fuera del layout) */}
          <Route path="/academia/login" element={<><Navbar /><AcademyLogin /><Footer /></>} />
          <Route path="/academia/registro" element={<><Navbar /><AcademyRegister /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
