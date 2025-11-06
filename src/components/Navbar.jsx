import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, LogOut, User } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // 🔹 Verificar si el usuario está autenticado
  const isAuthenticated = localStorage.getItem("token") || localStorage.getItem("authToken");
  const userName = localStorage.getItem("userName") || "Usuario";

  // 🔹 Links del menú (solo se muestran si NO está autenticado)
  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Marcas", href: "#brands" },
    { name: "Repuestos", href: "#parts" },
    { name: "Escuela", href: "#driving-school" },
    { name: "Contacto", href: "#social" },
  ];

  // 🔹 Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setMobileMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar - Siempre transparente */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="container-custom py-4 md:py-6">
          {/* Mobile Menu Button - Top Left */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden fixed top-6 left-4 z-50 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md border border-primary-500/30 rounded-full text-white hover:bg-primary-600/80 transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
         
          {/* Logo Centrado */}
          <div className="relative flex justify-center items-center h-20 md:h-24">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute z-10"
            >
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src="/logoEmpresa/logoNav(sinFondo).png"
                  alt="Caribe Autos"
                  className="h-72 w-96 md:h-40 lg:h-44 object-contain transition-all duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Contact Button - Desktop only */}
          <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 gap-4">
            {isAuthenticated ? (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-primary-500/30 rounded-full text-white"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm">{userName}</span>
                </motion.div>
                <motion.button
                  onClick={handleLogout}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-600 rounded-full text-white font-semibold shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Cerrar Sesión</span>
                </motion.button>
              </>
            ) : (
              <motion.a
                href="#social"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 gradient-bg-green rounded-full text-white font-semibold shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Contacto</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-r border-primary-500/20 z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* 🔹 Si está autenticado, mostrar info de usuario */}
                {isAuthenticated ? (
                  <>
                    <div className="mb-8 p-4 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 gradient-bg-green rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{userName}</p>
                          <p className="text-gray-400 text-sm">Usuario activo</p>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={handleLogout}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-6 py-4 bg-red-600 rounded-full text-white font-semibold text-center shadow-lg hover:bg-red-700 transition-all"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <LogOut className="w-5 h-5" />
                        <span>Cerrar Sesión</span>
                      </div>
                    </motion.button>
                  </>
                ) : (
                  <>
                    {/* 🔹 Si NO está autenticado, mostrar los links */}
                    <div className="space-y-4 mb-12">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-300 hover:text-primary-400 font-medium py-3 hover:pl-4 transition-all text-lg border-b border-gray-800/50"
                        >
                          {link.name}
                        </motion.a>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 pt-8 border-t border-gray-800">
                      <h3 className="text-primary-400 font-bold mb-4">Contacto</h3>

                      <a
                        href="tel:+13214567890"
                        className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <div className="w-10 h-10 gradient-bg-green rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm">+1 (321) 456-789-00</span>
                      </a>

                      <a
                        href="mailto:info@caribeautos.com"
                        className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <div className="w-10 h-10 gradient-bg-green rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm">info@caribeautos.com</span>
                      </a>

                      <div className="flex items-center space-x-3 text-gray-400">
                        <div className="w-10 h-10 gradient-bg-green rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm">Barranquilla, Colombia</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#social"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full mt-8 px-6 py-4 gradient-bg-green rounded-full text-white font-semibold text-center shadow-lg"
                    >
                      Contáctanos Ahora
                    </motion.a>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}