import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { 
  Search, SlidersHorizontal, Grid, LayoutGrid, Sparkles, 
  Zap, DollarSign, Calendar, Fuel, Gauge, Eye, Heart, 
  ChevronDown, X, Filter, TrendingUp, Award, ShoppingCart
} from "lucide-react"

export default function CarsGallery() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid") // grid, masonry, list
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    priceRange: [0, 200000],
    year: [],
    type: [],
    fuel: [],
    power: []
  })
  const [sortBy, setSortBy] = useState("featured")
  const [hoveredCar, setHoveredCar] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)
  const [favorites, setFavorites] = useState([])
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorXSpring = useSpring(cursorX, { stiffness: 400, damping: 25 })
  const cursorYSpring = useSpring(cursorY, { stiffness: 400, damping: 25 })

  // Mock data - Expandido
  const allCars = [
    {
      id: 1,
      brand: "BMW",
      model: "M4 Competition",
      year: 2024,
      price: 85000,
      type: "Deportivo",
      fuel: "Gasolina",
      power: 510,
      acceleration: "3.5s",
      topSpeed: 290,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      featured: true,
      new: true,
      tags: ["Alto Rendimiento", "Lujo", "AWD"],
      color: "#2563EB"
    },
    {
      id: 2,
      brand: "Porsche",
      model: "911 Carrera",
      year: 2024,
      price: 120000,
      type: "Deportivo",
      fuel: "Gasolina",
      power: 450,
      acceleration: "3.2s",
      topSpeed: 308,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      featured: true,
      new: true,
      tags: ["Icónico", "Performance", "RWD"],
      color: "#DC2626"
    },
    {
      id: 3,
      brand: "Mercedes-AMG",
      model: "GT 63S",
      year: 2024,
      price: 145000,
      type: "Gran Turismo",
      fuel: "Gasolina",
      power: 630,
      acceleration: "3.0s",
      topSpeed: 318,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      featured: true,
      new: false,
      tags: ["Lujo Premium", "V8 Biturbo", "AWD"],
      color: "#18181B"
    },
    {
      id: 4,
      brand: "Audi",
      model: "RS e-tron GT",
      year: 2024,
      price: 155000,
      type: "Eléctrico",
      fuel: "Eléctrico",
      power: 646,
      acceleration: "3.3s",
      topSpeed: 250,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
      featured: true,
      new: true,
      tags: ["Cero Emisiones", "Futuro", "Quattro"],
      color: "#22C55E"
    },
    {
      id: 5,
      brand: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      price: 135000,
      type: "Eléctrico",
      fuel: "Eléctrico",
      power: 1020,
      acceleration: "1.99s",
      topSpeed: 322,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      featured: false,
      new: true,
      tags: ["Más Rápido", "Autopilot", "Tech"],
      color: "#EF4444"
    },
    {
      id: 6,
      brand: "Lamborghini",
      model: "Huracán EVO",
      year: 2023,
      price: 280000,
      type: "Superdeportivo",
      fuel: "Gasolina",
      power: 640,
      acceleration: "2.9s",
      topSpeed: 325,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      featured: true,
      new: false,
      tags: ["Exclusivo", "V10", "Extremo"],
      color: "#F59E0B"
    },
    {
      id: 7,
      brand: "Ferrari",
      model: "F8 Tributo",
      year: 2023,
      price: 295000,
      type: "Superdeportivo",
      fuel: "Gasolina",
      power: 720,
      acceleration: "2.9s",
      topSpeed: 340,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      featured: true,
      new: false,
      tags: ["Legendario", "V8", "Italiano"],
      color: "#DC2626"
    },
    {
      id: 8,
      brand: "McLaren",
      model: "720S",
      year: 2023,
      price: 310000,
      type: "Superdeportivo",
      fuel: "Gasolina",
      power: 720,
      acceleration: "2.8s",
      topSpeed: 341,
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80",
      featured: false,
      new: false,
      tags: ["Británico", "Carbono", "Racing"],
      color: "#F97316"
    },
  ]

  const filterOptions = {
    brands: ["BMW", "Porsche", "Mercedes-AMG", "Audi", "Tesla", "Lamborghini", "Ferrari", "McLaren"],
    types: ["Deportivo", "Gran Turismo", "Eléctrico", "Superdeportivo"],
    fuels: ["Gasolina", "Eléctrico", "Híbrido"],
    years: [2024, 2023, 2022],
    powers: ["300-500 HP", "500-700 HP", "700+ HP"]
  }

  // Filter logic
  const filteredCars = allCars.filter(car => {
    const matchSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       car.model.toLowerCase().includes(searchQuery.toLowerCase())
    const matchBrands = selectedFilters.brands.length === 0 || selectedFilters.brands.includes(car.brand)
    const matchPrice = car.price >= selectedFilters.priceRange[0] && car.price <= selectedFilters.priceRange[1]
    const matchType = selectedFilters.type.length === 0 || selectedFilters.type.includes(car.type)
    const matchFuel = selectedFilters.fuel.length === 0 || selectedFilters.fuel.includes(car.fuel)
    
    return matchSearch && matchBrands && matchPrice && matchType && matchFuel
  })

  // Sort logic
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch(sortBy) {
      case "price-low": return a.price - b.price
      case "price-high": return b.price - a.price
      case "power": return b.power - a.power
      case "new": return b.year - a.year
      default: return b.featured ? 1 : -1
    }
  })

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({
      brands: [],
      priceRange: [0, 200000],
      year: [],
      type: [],
      fuel: [],
      power: []
    })
  }

  const activeFiltersCount = 
    selectedFilters.brands.length +
    selectedFilters.type.length +
    selectedFilters.fuel.length

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Colección <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Completa</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg md:text-xl">
            {sortedCars.length} vehículos excepcionales esperándote
          </p>
        </motion.div>

        {/* Search & Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-white/10 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por marca, modelo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {filterOptions.brands.slice(0, 4).map(brand => (
                <motion.button
                  key={brand}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleFilter('brands', brand)}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedFilters.brands.includes(brand)
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {brand}
                </motion.button>
              ))}
            </div>

            {/* View & Filter Buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="relative px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <SlidersHorizontal className="w-5 h-5 text-white" />
                <span className="text-white font-medium hidden md:inline">Filtros</span>
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {activeFiltersCount}
                  </span>
                )}
              </motion.button>

              <div className="flex border border-white/10 rounded-2xl overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-4 transition-all ${
                    viewMode === 'grid' ? 'bg-green-500' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <Grid className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('masonry')}
                  className={`p-4 transition-all ${
                    viewMode === 'masonry' ? 'bg-green-500' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <LayoutGrid className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/10 space-y-6">
                  {/* Sort */}
                  <div>
                    <label className="text-white font-medium mb-3 block flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Ordenar por
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: "featured", label: "Destacados" },
                        { value: "price-low", label: "Menor precio" },
                        { value: "price-high", label: "Mayor precio" },
                        { value: "power", label: "Potencia" },
                        { value: "new", label: "Más nuevos" }
                      ].map(option => (
                        <button
                          key={option.value}
                          onClick={() => setSortBy(option.value)}
                          className={`px-4 py-2 rounded-lg transition-all ${
                            sortBy === option.value
                              ? 'bg-green-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <label className="text-white font-medium mb-3 block flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-400" />
                      Tipo de vehículo
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.types.map(type => (
                        <button
                          key={type}
                          onClick={() => toggleFilter('type', type)}
                          className={`px-4 py-2 rounded-lg transition-all ${
                            selectedFilters.type.includes(type)
                              ? 'bg-blue-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fuel */}
                  <div>
                    <label className="text-white font-medium mb-3 block flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-green-400" />
                      Combustible
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.fuels.map(fuel => (
                        <button
                          key={fuel}
                          onClick={() => toggleFilter('fuel', fuel)}
                          className={`px-4 py-2 rounded-lg transition-all ${
                            selectedFilters.fuel.includes(fuel)
                              ? 'bg-green-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          {fuel}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Limpiar filtros
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count & Active Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <p className="text-gray-400">
            Mostrando <span className="text-white font-bold">{sortedCars.length}</span> resultados
          </p>
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedFilters.brands.map(brand => (
                <div key={brand} className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                  <span className="text-white">{brand}</span>
                  <button onClick={() => toggleFilter('brands', brand)}>
                    <X className="w-3 h-3 text-gray-400 hover:text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cars Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          <AnimatePresence>
            {sortedCars.map((car, index) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onHoverStart={() => setHoveredCar(car.id)}
                onHoverEnd={() => setHoveredCar(null)}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-500/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {car.new && (
                        <div className="px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold">
                          NUEVO
                        </div>
                      )}
                      {car.featured && (
                        <div className="px-3 py-1 bg-blue-500 rounded-full text-white text-xs font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          DESTACADO
                        </div>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(car.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          favorites.includes(car.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(car.id) ? 'fill-current' : ''}`} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedCar(car)}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-white font-bold text-xl mb-1">
                            {car.brand}
                          </h3>
                          <p className="text-gray-300 text-sm">{car.model}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold text-2xl">
                            ${(car.price / 1000).toFixed(0)}K
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 backdrop-blur-md p-2 rounded-lg text-center">
                        <Zap className="w-4 h-4 text-green-400 mx-auto mb-1" />
                        <p className="text-white text-xs font-bold">{car.power} HP</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-md p-2 rounded-lg text-center">
                        <Gauge className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <p className="text-white text-xs font-bold">{car.acceleration}</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-md p-2 rounded-lg text-center">
                        <Calendar className="w-4 h-4 text-green-400 mx-auto mb-1" />
                        <p className="text-white text-xs font-bold">{car.year}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {car.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCar(car)}
                      className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Ver Detalles
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {sortedCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              No encontramos resultados
            </h3>
            <p className="text-gray-400 mb-6">
              Intenta ajustar tus filtros o búsqueda
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCar(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 my-8"
            >
              <div className="relative">
                <img
                  src={selectedCar.image}
                  alt={`${selectedCar.brand} ${selectedCar.model}`}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {selectedCar.brand} {selectedCar.model}
                    </h2>
                    <p className="text-gray-400">{selectedCar.type} • {selectedCar.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold text-5xl">
                      ${selectedCar.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Zap, label: "Potencia", value: `${selectedCar.power} HP` },
                    { icon: Gauge, label: "0-100 km/h", value: selectedCar.acceleration },
                    { icon: Fuel, label: "Combustible", value: selectedCar.fuel },
                    { icon: TrendingUp, label: "Velocidad", value: `${selectedCar.topSpeed} km/h` }
                  ].map((spec, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-md p-4 rounded-xl text-center">
                      <spec.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm mb-1">{spec.label}</p>
                      <p className="text-white font-bold">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCar.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl mb-6">
                  <h3 className="text-white font-bold text-xl mb-3">Descripción</h3>
                  <p className="text-gray-400 leading-relaxed">
                    El {selectedCar.brand} {selectedCar.model} representa la excelencia en ingeniería automotriz. 
                    Con {selectedCar.power} HP de potencia pura y una aceleración de 0-100 km/h en {selectedCar.acceleration}, 
                    este {selectedCar.type.toLowerCase()} está diseñado para emocionar. Su sistema de propulsión {selectedCar.fuel.toLowerCase()} 
                    ofrece un rendimiento excepcional, alcanzando velocidades máximas de {selectedCar.topSpeed} km/h.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Solicitar Información
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleFavorite(selectedCar.id)}
                    className={`px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-2 ${
                      favorites.includes(selectedCar.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/5 backdrop-blur-md text-white hover:bg-white/10'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(selectedCar.id) ? 'fill-current' : ''}`} />
                    {favorites.includes(selectedCar.id) ? 'Guardado' : 'Guardar'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}