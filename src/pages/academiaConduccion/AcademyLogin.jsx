import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Car, CheckCircle, Clock } from "lucide-react";

export default function AcademyLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('academyUsers') || '[]');
    
    // Find user
    const user = users.find(u => u.email === formData.email);
    
    if (!user) {
      setError("Usuario no encontrado");
      return;
    }
    
    // In a real app, you'd verify the password here
    // For demo purposes, we'll just log them in
    
    // Save current user
    localStorage.setItem('academyCurrentUser', JSON.stringify(user));
    
    if (formData.rememberMe) {
      localStorage.setItem('academyRememberMe', 'true');
    }
    
    // Redirect to dashboard
    navigate('/academia/dashboard');
  };

  const features = [
    { icon: Car, text: "Vehículos modernos" },
    { icon: CheckCircle, text: "Clases personalizadas" },
    { icon: Clock, text: "Horarios flexibles" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center pt-20 pb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-3 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full">
                    <span className="text-primary-400 font-semibold text-sm">
                      🎓 Academia del Caribe
                    </span>
                  </div>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Bienvenido de{" "}
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Nuevo
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Inicia sesión y continúa tu camino hacia la excelencia al volante
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-4 glass-effect p-4 rounded-xl border border-gray-700/50"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { value: "500+", label: "Estudiantes" },
                  { value: "98%", label: "Aprobación" },
                  { value: "4.9★", label: "Rating" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="glass-effect p-4 rounded-xl text-center border border-gray-700/50"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="glass-effect p-8 md:p-10 rounded-3xl border border-primary-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
              
              <div className="relative z-10">
                {/* Mobile Header */}
                <div className="lg:hidden mb-8 text-center">
                  <div className="inline-block px-6 py-3 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full mb-4">
                    <span className="text-primary-400 font-semibold text-sm">
                      🎓 Academia del Caribe
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Iniciar Sesión</h2>
                </div>

                <div className="hidden lg:block mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Iniciar Sesión</h2>
                  <p className="text-gray-400">Accede a tu cuenta de estudiante</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/50 rounded-xl p-4"
                    >
                      <p className="text-red-400 text-sm text-center">{error}</p>
                    </motion.div>
                  )}

                  <div>
                    <label className="text-white font-medium mb-2 block">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Tu contraseña"
                        required
                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-gray-300 text-sm">Recordarme</span>
                    </label>
                    <button
                      type="button"
                      className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
                  >
                    Iniciar Sesión
                  </motion.button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-black text-gray-400">O</span>
                    </div>
                  </div>

                  <p className="text-center text-gray-400 text-sm">
                    ¿No tienes cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => navigate('/academia/registro')}
                      className="text-primary-400 hover:text-primary-300 font-semibold"
                    >
                      Regístrate gratis
                    </button>
                  </p>
                </form>

                {/* Demo Info */}
                <div className="mt-8 p-4 bg-primary-500/10 border border-primary-500/30 rounded-xl">
                  <p className="text-primary-300 text-xs text-center">
                    💡 Tip: Si no tienes cuenta, regístrate para obtener tu primera clase gratis
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}