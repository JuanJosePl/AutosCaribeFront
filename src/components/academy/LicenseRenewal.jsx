import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  CreditCard, Calendar, Clock, CheckCircle, AlertTriangle, 
  FileText, Upload, Camera, Phone, Mail, MapPin, User,
  Shield, Zap, Gift, ArrowRight, Download, Eye
} from "lucide-react"

export default function LicenseRenewal() {
  const [step, setStep] = useState(1)
  const [renewalType, setRenewalType] = useState(null)
  const [formData, setFormData] = useState({
    licenseNumber: "",
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    category: "",
    expirationDate: "",
    medicalExam: false,
    psychologicalExam: false,
    photoUpdated: false
  })
  const [uploadedDocs, setUploadedDocs] = useState({
    license: null,
    id: null,
    medical: null,
    photo: null
  })

  const renewalTypes = [
    {
      id: "simple",
      name: "Renovación Simple",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      price: 180000,
      duration: "3-5 días hábiles",
      description: "Renovación estándar sin cambios",
      features: [
        "Trámite completo",
        "Actualización de datos",
        "Nueva foto digital",
        "Examen médico básico",
        "Certificado digital"
      ],
      requirements: [
        "Licencia anterior",
        "Cédula vigente",
        "2 fotos 3x4",
        "Examen médico"
      ]
    },
    {
      id: "express",
      name: "Renovación Express",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      price: 280000,
      duration: "24 horas",
      description: "Renovación prioritaria rápida",
      features: [
        "Trámite ultra rápido",
        "Prioridad absoluta",
        "Nueva foto profesional",
        "Examen médico premium",
        "Certificado digital",
        "Asesoría personalizada",
        "Entrega a domicilio",
        "Seguro incluido"
      ],
      requirements: [
        "Licencia anterior",
        "Cédula vigente",
        "Foto digital incluida",
        "Examen médico incluido"
      ],
      popular: true
    },
    {
      id: "upgrade",
      name: "Renovación + Upgrade",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      price: 450000,
      duration: "7-10 días hábiles",
      description: "Renovación con cambio de categoría",
      features: [
        "Trámite completo",
        "Cambio de categoría",
        "Clases de refuerzo incluidas",
        "Examen teórico y práctico",
        "Nueva foto profesional",
        "Certificado médico premium",
        "Seguro por 1 año",
        "Soporte 24/7"
      ],
      requirements: [
        "Licencia anterior",
        "Cédula vigente",
        "Aprobar examen teórico",
        "Aprobar examen práctico",
        "Certificado médico completo"
      ]
    }
  ]

  const selectedRenewal = renewalTypes.find(r => r.id === renewalType)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileUpload = (docType, file) => {
    setUploadedDocs({
      ...uploadedDocs,
      [docType]: file
    })
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-500/30">
              <span className="text-purple-400 font-semibold text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Renovación de Licencias
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Renueva tu Licencia <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Sin Complicaciones</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proceso 100% digital. Rápido, seguro y sin filas.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Tipo" },
              { num: 2, label: "Datos" },
              { num: 3, label: "Documentos" },
              { num: 4, label: "Pago" }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s.num 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'bg-white/5 text-gray-500'
                  }`}>
                    {step > s.num ? <CheckCircle className="w-6 h-6" /> : s.num}
                  </div>
                  <span className="text-sm text-gray-400 mt-2">{s.label}</span>
                </div>
                {idx < 3 && (
                  <div className={`h-1 flex-1 mx-2 transition-all ${
                    step > s.num ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Renewal Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {renewalTypes.map((type, idx) => {
                  const Icon = type.icon
                  return (
                    <motion.div
                      key={type.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -10 }}
                      onClick={() => setRenewalType(type.id)}
                      className={`relative cursor-pointer group ${type.popular ? 'md:scale-105' : ''}`}
                    >
                      {type.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                            ⭐ Más Rápido
                          </div>
                        </div>
                      )}

                      <div className={`relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl border transition-all duration-500 p-8 h-full ${
                        renewalType === type.id 
                          ? 'border-purple-500 shadow-lg shadow-purple-500/50' 
                          : 'border-white/10 hover:border-purple-500/50'
                      }`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className={`relative w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                        <p className="text-gray-400 mb-4">{type.description}</p>

                        <div className="mb-6">
                          <div className="text-4xl font-bold text-white mb-2">
                            {formatPrice(type.price)}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            {type.duration}
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {type.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                          renewalType === type.id
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {renewalType === type.id ? 'Seleccionado' : 'Seleccionar'}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && selectedRenewal && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Información Personal</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Número de Licencia
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="Ej: 123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="Nombre completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Número de Cédula
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="310 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Fecha de Vencimiento
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Dirección
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all resize-none"
                        placeholder="Dirección completa"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Document Upload */}
            {step === 3 && selectedRenewal && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Documentos Requeridos</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { id: 'license', label: 'Licencia Actual', icon: FileText },
                    { id: 'id', label: 'Cédula (Ambos lados)', icon: CreditCard },
                    { id: 'medical', label: 'Certificado Médico', icon: Shield },
                    { id: 'photo', label: 'Foto Reciente', icon: Camera }
                  ].map((doc) => {
                    const Icon = doc.icon
                    return (
                      <div key={doc.id} className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          {doc.label}
                        </label>
                        <div className={`relative border-2 border-dashed rounded-xl p-6 transition-all cursor-pointer ${
                          uploadedDocs[doc.id] 
                            ? 'border-green-500 bg-green-500/10' 
                            : 'border-white/20 hover:border-purple-500 bg-white/5'
                        }`}>
                          <input
                            type="file"
                            onChange={(e) => handleFileUpload(doc.id, e.target.files[0])}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            accept="image/*,.pdf"
                          />
                          <div className="text-center">
                            {uploadedDocs[doc.id] ? (
                              <>
                                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                                <p className="text-green-400 font-medium">{uploadedDocs[doc.id].name}</p>
                                <p className="text-xs text-gray-500 mt-1">Archivo cargado</p>
                              </>
                            ) : (
                              <>
                                <Icon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-400">Click para subir</p>
                                <p className="text-xs text-gray-500 mt-1">JPG, PNG o PDF (Max 5MB)</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-200">
                    <strong>Importante:</strong> Asegúrate de que todos los documentos sean legibles y estén actualizados. Los documentos borrosos o vencidos serán rechazados.
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Payment Summary */}
            {step === 4 && selectedRenewal && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Resumen del Pedido</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Tipo de renovación:</span>
                      <span className="font-semibold text-white">{selectedRenewal.name}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Duración estimada:</span>
                      <span className="text-purple-400">{selectedRenewal.duration}</span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-lg">
                        <span className="text-gray-300">Subtotal:</span>
                        <span className="text-white font-semibold">{formatPrice(selectedRenewal.price)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>IVA (0%):</span>
                        <span>$0</span>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-2xl font-bold">
                        <span className="text-white">Total:</span>
                        <span className="text-purple-400">{formatPrice(selectedRenewal.price)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {selectedRenewal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Método de Pago</h3>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'card', name: 'Tarjeta de Crédito/Débito', icon: CreditCard },
                      { id: 'transfer', name: 'Transferencia Bancaria', icon: Shield },
                      { id: 'cash', name: 'Pago en Efectivo (Sede)', icon: Gift }
                    ].map((method) => {
                      const Icon = method.icon
                      return (
                        <div key={method.id} className="relative">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id={method.id}
                            className="peer sr-only"
                          />
                          <label
                            htmlFor={method.id}
                            className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all peer-checked:border-purple-500 peer-checked:bg-purple-500/10 hover:bg-white/10"
                          >
                            <Icon className="w-6 h-6 text-gray-400 peer-checked:text-purple-400" />
                            <span className="text-white font-medium">{method.name}</span>
                          </label>
                        </div>
                      )
                    })}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    Proceder al Pago
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    Al continuar, aceptas nuestros términos y condiciones
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevStep}
                className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
              >
                Anterior
              </motion.button>
            )}
            {step < 4 && renewalType && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}