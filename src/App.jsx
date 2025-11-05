import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
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





function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/galeria-repuesto" element={<GalleryParts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/guias" element={<Guides />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/garantias" element={<Warranties />} />
          <Route path="/finanzas" element={<Financing />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/mantenimiento" element={<Maintenance />} />
          <Route path="/equipo" element={<OurTeam />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="/carreras" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App