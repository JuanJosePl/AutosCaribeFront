import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import BrandsSection from "./components/BrandsSection"
import PartsSection from "./components/PartsSection"
import SocialSection from "./components/SocialSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <PartsSection />
      <SocialSection />
      <Footer />
    </div>
  )
}

export default App