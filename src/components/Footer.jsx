"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    empresa: [
      { name: "Sobre Nosotros", href: "/sobre-nosotros" },
      { name: "Nuestro Equipo", href: "/equipo" },
      { name: "Testimonios", href: "/testimonios" },
      { name: "Carreras", href: "/carreras" },
    ],
    servicios: [
      { name: "Compra de Vehículos", href: "/galeria" },
      { name: "Venta de Repuestos", href: "/galeria-repuesto" },
      { name: "Financiamiento", href: "/finanzas" },
      { name: "Mantenimiento", href: "/mantenimiento" },
    ],
    recursos: [
      { name: "Blog", href: "/blog" },
      { name: "Guías", href: "/guias" },
      { name: "FAQ", href: "/faq" },
      { name: "Contacto", href: "/contacto" },
    ],
    legal: [
      { name: "Términos de Uso", href: "/terminos" },
      { name: "Política de Privacidad", href: "/privacidad" },
      { name: "Cookies", href: "/cookies" },
      { name: "Garantías", href: "/garantias" },
    ],
  };

  const socialMedia = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-500" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-500" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-500" },
    { icon: FaWhatsapp, href: "#", color: "hover:text-green-500" },
  ];

  return (
    <footer className="relative bg-black text-gray-400 border-t border-gray-800 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info - Spans 2 columns on large screens */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/logoEmpresa/logoNav(sinFondo).png"
                  alt="Caribe Autos"
                  className="h-16 mb-6 object-contain"
                />
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                  Tu socio de confianza en vehículos de lujo y repuestos
                  originales en el Caribe. Más de 20 años brindando calidad y
                  excelencia.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="mailto:info@caribeautos.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm">info@caribeautos.com</span>
                  </a>

                  <a
                    href="tel:+13214567890"
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm">+1 (321) 456-789-00</span>
                  </a>

                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm">Barranquilla, Colombia</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-3 mt-6">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all hover:shadow-lg`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-white font-bold text-base md:text-lg mb-4 capitalize">
                    {category === "empresa"
                      ? "Empresa"
                      : category === "servicios"
                      ? "Servicios"
                      : category === "recursos"
                      ? "Recursos"
                      : "Legal"}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-blue-500 transition-colors text-sm flex items-center group"
                        >
                          <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500 flex items-center gap-1 text-center">
              &copy; {currentYear} Caribe Autos. Hecho con{" "}
              <Heart className="w-4 h-4 text-blue-500 fill-current inline-block" />{" "}
              en Colombia
            </p>

            <div className="flex items-center flex-wrap justify-center gap-6">
              <Link
                to="/terminos"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                Términos
              </Link>
              <Link
                to="/privacidad"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                Privacidad
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50 transition-all z-50"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    </footer>
  );
}
