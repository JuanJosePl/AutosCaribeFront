import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function SocialSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, url: "#", color: "from-blue-600 to-blue-700", hoverColor: "group-hover:text-blue-500", count: "45K" },
    { name: "Instagram", icon: FaInstagram, url: "#", color: "from-pink-600 to-purple-600", hoverColor: "group-hover:text-pink-500", count: "38K" },
    { name: "Twitter", icon: FaTwitter, url: "#", color: "from-sky-500 to-blue-500", hoverColor: "group-hover:text-sky-500", count: "22K" },
    { name: "YouTube", icon: FaYoutube, url: "#", color: "from-red-600 to-red-700", hoverColor: "group-hover:text-red-500", count: "15K" },
    { name: "WhatsApp", icon: FaWhatsapp, url: "#", color: "from-green-500 to-green-600", hoverColor: "group-hover:text-green-500", count: "Online" },
    { name: "TikTok", icon: FaTiktok, url: "#", color: "from-gray-800 to-gray-900", hoverColor: "group-hover:text-white", count: "50K" },
  ]

  const contactInfo = [
    { icon: Mail, title: "Email", value: "info@caribeautos.com", link: "mailto:info@caribeautos.com" },
    { icon: Phone, title: "Teléfono", value: "+1 (321) 456-789-00", link: "tel:+13214567890" },
    { icon: MapPin, title: "Ubicación", value: "Barranquilla, Colombia", link: "#" },
  ]

  return (
    <section
      id="social"
      ref={sectionRef}
      className="bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden py-24 md:py-32"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-8"
          >
            <div className="glass-effect px-6 py-3 rounded-full border border-blue-500/30">
              <span className="text-blue-400 font-semibold text-sm">🌐 Síguenos en Redes</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white px-4">
            Conecta con <span className="gradient-text-static">Nosotros</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed">
            Síguenos en nuestras redes sociales y mantente al día con las últimas novedades, promociones exclusivas y
            contenido premium.
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="relative overflow-hidden glass-effect backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 flex flex-col items-center justify-center aspect-square">
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <Icon className={`w-12 h-12 md:w-16 md:h-16 text-gray-400 transition-colors duration-300 ${social.hoverColor}`} />
                  <div className="mt-4 text-center">
                    <p className="text-white font-semibold mb-1 text-sm md:text-base">{social.name}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{social.count}</p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-20 pt-8"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.link}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group glass-effect backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-bg-blue rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                    <p className="text-white font-medium truncate">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto glass-effect-strong backdrop-blur-xl p-10 md:p-12 rounded-3xl border border-blue-500/30 mt-16 relative overflow-hidden text-center"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Suscríbete a Nuestro Newsletter</h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Recibe ofertas exclusivas y las últimas noticias directamente en tu correo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 glass-effect border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 gradient-bg-blue text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <span>Suscribirse</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
