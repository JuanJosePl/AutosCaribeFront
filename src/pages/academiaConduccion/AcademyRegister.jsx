import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Calendar, Lock, Eye, EyeOff, Car, CheckCircle, Shield, Award } from "lucide-react";

export default function AcademyRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    city: "Barranquilla",
    hasLicense: "no",
    experience: "ninguna",
    preferredSchedule: "mañana",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (!formData.age) newErrors.age = "La edad es requerida";
    else if (formData.age < 16) newErrors.age = "Debes tener al menos 16 años";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.address.trim()) newErrors.address = "La dirección es requerida";
    if (!formData.city.trim()) newErrors.city = "La ciudad es requerida";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = "La contraseña es requerida";
    else if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    if (!formData.acceptTerms) newErrors.acceptTerms = "Debes aceptar los términos";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    if (step === 1) isValid = validateStep1();
    if (step === 2) isValid = validateStep2();
    if (step === 3) isValid = validateStep3();
    
    if (isValid && step < 3) {
      setStep(step + 1);
    } else if (isValid && step === 3) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('academyUsers') || '[]');
    
    // Check if email already exists
    if (users.some(u => u.email === formData.email)) {
      setErrors({ email: 'Este email ya está registrado' });
      setStep(1);
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
      registeredAt: new Date().toISOString(),
      status: 'active'
    };
    
    delete newUser.password;
    delete newUser.confirmPassword;
    
    users.push(newUser);
    localStorage.setItem('academyUsers', JSON.stringify(users));
    
    // Save session
    localStorage.setItem('academyCurrentUser', JSON.stringify(newUser));
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate('/academia/dashboard');
    }, 2000);
  };

  const benefits = [
    { icon: Shield, text: "Primera clase gratis sin compromiso" },
    { icon: Award, text: "Instructores certificados" },
    { icon: Car, text: "Vehículos modernos y seguros" },
    { icon: CheckCircle, text: "Horarios 100% flexibles" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <div className="mb-8">
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comienza tu{" "}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Aventura al Volante
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Aprende a conducir con confianza. Regístrate hoy y obtén tu primera clase completamente gratis.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 glass-effect p-4 rounded-xl border border-gray-700/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300">{benefit.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Estudiantes" },
                { value: "98%", label: "Éxito" },
                { value: "15+", label: "Años" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-effect p-4 rounded-xl text-center border border-gray-700/50"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 md:p-10 rounded-3xl border border-primary-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
            
            <div className="relative z-10">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        step >= s 
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' 
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {s}
                      </div>
                      {s < 3 && (
                        <div className={`w-16 md:w-24 h-1 mx-2 rounded transition-all ${
                          step > s ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-gray-700'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Paso {step} de 3
                </p>
              </div>

              {/* Step 1 - Personal Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Información Personal</h2>
                  
                  <div>
                    <label className="text-white font-medium mb-2 block">Nombre Completo *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Juan Pérez García"
                        className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-medium mb-2 block">Teléfono *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="310 123 4567"
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Edad *</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="18"
                          min="16"
                          max="100"
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.age ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                        />
                      </div>
                      {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 - Location & Experience */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Ubicación y Experiencia</h2>
                  
                  <div>
                    <label className="text-white font-medium mb-2 block">Dirección *</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Calle 79 #49c-47"
                        className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.address ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                      />
                    </div>
                    {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Ciudad *</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="Barranquilla">Barranquilla</option>
                      <option value="Cartagena">Cartagena</option>
                      <option value="Santa Marta">Santa Marta</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">¿Tienes licencia de conducción?</label>
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="hasLicense"
                          value="si"
                          checked={formData.hasLicense === 'si'}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`p-4 rounded-xl border-2 transition-all text-center ${
                          formData.hasLicense === 'si'
                            ? 'border-primary-500 bg-primary-500/20'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}>
                          <span className="text-white font-medium">Sí</span>
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="hasLicense"
                          value="no"
                          checked={formData.hasLicense === 'no'}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`p-4 rounded-xl border-2 transition-all text-center ${
                          formData.hasLicense === 'no'
                            ? 'border-primary-500 bg-primary-500/20'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}>
                          <span className="text-white font-medium">No</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Experiencia al conducir</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="ninguna">Ninguna</option>
                      <option value="basica">Básica</option>
                      <option value="intermedia">Intermedia</option>
                      <option value="avanzada">Avanzada</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Horario Preferido</label>
                    <select
                      name="preferredSchedule"
                      value={formData.preferredSchedule}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="mañana">Mañana (6am - 12pm)</option>
                      <option value="tarde">Tarde (12pm - 6pm)</option>
                      <option value="noche">Noche (6pm - 9pm)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 3 - Security */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Seguridad</h2>
                  
                  <div>
                    <label className="text-white font-medium mb-2 block">Contraseña *</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Mínimo 6 caracteres"
                        className={`w-full pl-12 pr-12 py-4 bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Confirmar Contraseña *</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Repite tu contraseña"
                        className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                      />
                    </div>
                    {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>

                  <div className="glass-effect p-6 rounded-xl border border-primary-500/30">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-gray-600 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-gray-300 text-sm">
                        Acepto los términos y condiciones, política de privacidad y autorizo el tratamiento de mis datos personales.
                      </span>
                    </label>
                    {errors.acceptTerms && <p className="text-red-400 text-sm mt-2">{errors.acceptTerms}</p>}
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
                  >
                    Anterior
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg transition-all"
                >
                  {step === 3 ? 'Completar Registro' : 'Siguiente'}
                </motion.button>
              </div>

              <p className="text-center text-gray-400 text-sm mt-6">
                ¿Ya tienes cuenta?{" "}
                <button
                  onClick={() => navigate('/academia/login')}
                  className="text-primary-400 hover:text-primary-300 font-semibold"
                >
                  Inicia sesión aquí
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}