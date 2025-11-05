import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  ShoppingCart,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  X,
  Check,
  Package,
  Sparkles,
  ChevronDown,
  Eye,
  Share2,
} from "lucide-react"

export default function GalleryRepuesto() {
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const galleryRef = useRef(null)

  const categories = [
    { id: "all", name: "Todos", icon: Package, count: 156 },
    { id: "motor", name: "Motor", icon: Zap, count: 45 },
    { id: "frenos", name: "Frenos", icon: Shield, count: 32 },
    { id: "suspension", name: "Suspensión", icon: TrendingUp, count: 28 },
    { id: "electrico", name: "Eléctrico", icon: Sparkles, count: 24 },
    { id: "filtros", name: "Filtros", icon: Filter, count: 27 },
  ]

  const brands = [
    "Todas las Marcas",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
  ]

  const products = [
    {
      id: 1,
      name: "Pastillas de Freno Premium",
      category: "frenos",
      brand: "BMW",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500",
      badge: "Bestseller",
      stock: 45,
      discount: 25,
    },
    {
      id: 2,
      name: "Filtro de Aceite OEM",
      category: "filtros",
      brand: "Mercedes-Benz",
      price: 89,
      rating: 4.8,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500",
      badge: "Nuevo",
      stock: 78,
    },
    {
      id: 3,
      name: "Kit de Suspensión Deportiva",
      category: "suspension",
      brand: "Porsche",
      price: 1299,
      originalPrice: 1599,
      rating: 5.0,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500",
      badge: "Premium",
      stock: 12,
      discount: 19,
    },
    {
      id: 4,
      name: "Batería de Alto Rendimiento",
      category: "electrico",
      brand: "Audi",
      price: 459,
      rating: 4.7,
      reviews: 143,
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=500",
      stock: 34,
    },
    {
      id: 5,
      name: "Bomba de Agua Original",
      category: "motor",
      brand: "Toyota",
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      reviews: 201,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500",
      badge: "Bestseller",
      stock: 56,
      discount: 24,
    },
    {
      id: 6,
      name: "Discos de Freno Ventilados",
      category: "frenos",
      brand: "BMW",
      price: 549,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500",
      stock: 23,
    },
    {
      id: 7,
      name: "Filtro de Aire Deportivo",
      category: "filtros",
      brand: "Porsche",
      price: 159,
      originalPrice: 199,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500",
      badge: "Hot",
      stock: 67,
      discount: 20,
    },
    {
      id: 8,
      name: "Amortiguadores Premium",
      category: "suspension",
      brand: "Mercedes-Benz",
      price: 899,
      rating: 4.7,
      reviews: 74,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
      stock: 18,
    },
    {
      id: 9,
      name: "Alternador de Alta Potencia",
      category: "electrico",
      brand: "Ford",
      price: 379,
      originalPrice: 479,
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?w=500",
      badge: "Oferta",
      stock: 29,
      discount: 21,
    },
    {
      id: 10,
      name: "Kit de Distribución Completo",
      category: "motor",
      brand: "Audi",
      price: 699,
      rating: 5.0,
      reviews: 183,
      image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=500",
      badge: "Premium",
      stock: 14,
    },
    {
      id: 11,
      name: "Sistema ABS Original",
      category: "frenos",
      brand: "Toyota",
      price: 1499,
      rating: 4.9,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=500",
      stock: 8,
    },
    {
      id: 12,
      name: "Filtro de Combustible",
      category: "filtros",
      brand: "Chevrolet",
      price: 79,
      originalPrice: 99,
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=500",
      badge: "Económico",
      stock: 92,
      discount: 20,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesBrand =
      selectedBrand === "all" ||
      selectedBrand === "Todas las Marcas" ||
      product.brand === selectedBrand
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "popular":
      default:
        return b.reviews - a.reviews
    }
  })

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container-custom mb-12"
      >
        <div className="glass-effect-strong rounded-3xl p-8 md:p-12 border border-primary-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-semibold">Catálogo Premium</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Galería de{" "}
              <span className="gradient-text-static">Repuestos Originales</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explora nuestro catálogo con más de 500 repuestos certificados para tu vehículo
            </p>
          </div>
        </div>
      </motion.div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full glass-effect-strong px-6 py-4 rounded-xl flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>

            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              {/* Search */}
              <div className="glass-effect-strong p-6 rounded-xl border border-primary-500/20">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary-400" />
                  Buscar
                </h3>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar repuestos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 border border-white/10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="glass-effect-strong p-6 rounded-xl border border-primary-500/20">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary-400" />
                  Categorías
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                          selectedCategory === category.id
                            ? "gradient-bg-green text-white"
                            : "glass-effect hover:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          {category.name}
                        </span>
                        <span className="text-sm opacity-75">({category.count})</span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Brands */}
              <div className="glass-effect-strong p-6 rounded-xl border border-primary-500/20">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary-400" />
                  Marcas
                </h3>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full p-3 glass-effect rounded-lg text-white focus:outline-none focus:border-primary-500 border border-white/10"
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand} className="bg-gray-900">
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="glass-effect-strong p-6 rounded-xl border border-primary-500/20">
                <h3 className="text-lg font-bold mb-4">Rango de Precio</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-primary-500"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="glass-effect px-3 py-1 rounded">${priceRange[0]}</span>
                    <span className="text-gray-400">-</span>
                    <span className="glass-effect px-3 py-1 rounded">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== "all" ||
                selectedBrand !== "Todas las Marcas" ||
                searchTerm) && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedBrand("Todas las Marcas")
                    setSearchTerm("")
                    setPriceRange([0, 10000])
                  }}
                  className="w-full glass-effect-strong p-4 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2 text-red-400"
                >
                  <X className="w-5 h-5" />
                  Limpiar Filtros
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="glass-effect-strong p-6 rounded-xl border border-primary-500/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">
                  <span className="text-white font-semibold">{sortedProducts.length}</span>{" "}
                  productos encontrados
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 glass-effect rounded-lg text-white focus:outline-none focus:border-primary-500 border border-white/10"
                >
                  <option value="popular" className="bg-gray-900">
                    Más Popular
                  </option>
                  <option value="price-low" className="bg-gray-900">
                    Menor Precio
                  </option>
                  <option value="price-high" className="bg-gray-900">
                    Mayor Precio
                  </option>
                  <option value="rating" className="bg-gray-900">
                    Mejor Valorado
                  </option>
                </select>

                {/* View Mode */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "gradient-bg-green text-white"
                        : "glass-effect hover:bg-white/5"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "list"
                        ? "gradient-bg-green text-white"
                        : "glass-effect hover:bg-white/5"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <motion.div
              ref={galleryRef}
              layout
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              <AnimatePresence mode="popLayout">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group relative glass-effect-strong rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all ${
                      viewMode === "list" ? "flex gap-6" : ""
                    }`}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            product.badge === "Bestseller"
                              ? "bg-yellow-500 text-black"
                              : product.badge === "Nuevo"
                              ? "bg-blue-500 text-white"
                              : product.badge === "Premium"
                              ? "bg-purple-500 text-white"
                              : product.badge === "Hot"
                              ? "bg-red-500 text-white"
                              : product.badge === "Oferta"
                              ? "bg-green-500 text-white"
                              : "bg-gray-500 text-white"
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                          -{product.discount}%
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div
                      className={`relative overflow-hidden bg-gray-900 ${
                        viewMode === "list" ? "w-64 flex-shrink-0" : "aspect-square"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Quick Actions */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleFavorite(product.id)}
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            favorites.includes(product.id)
                              ? "gradient-bg-green text-white"
                              : "glass-effect-strong text-white"
                          }`}
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              favorites.includes(product.id) ? "fill-current" : ""
                            }`}
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedProduct(product)}
                          className="w-12 h-12 glass-effect-strong rounded-full flex items-center justify-center text-white"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 glass-effect-strong rounded-full flex items-center justify-center text-white"
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm text-primary-400 mb-1">{product.brand}</p>
                          <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Stock */}
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            product.stock > 20
                              ? "bg-green-500"
                              : product.stock > 10
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        />
                        <span className="text-sm text-gray-400">
                          {product.stock > 20
                            ? "En Stock"
                            : product.stock > 10
                            ? "Stock Limitado"
                            : "Últimas Unidades"}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through mr-2">
                              ${product.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-white">
                            ${product.price}
                          </span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => addToCart(product)}
                        className="w-full gradient-bg-green text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Agregar al Carrito
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {sortedProducts.length === 0 && (
              <div className="glass-effect-strong p-12 rounded-xl text-center">
                <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron productos</h3>
                <p className="text-gray-400">Intenta ajustar los filtros de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect-strong max-w-4xl w-full rounded-3xl overflow-hidden border border-primary-500/30 max-h-[90vh] overflow-y-auto"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#22c55e #000000' }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full rounded-xl"
                  />
                </div>
                <div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <p className="text-primary-400 mb-2">{selectedProduct.brand}</p>
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400">
                      {selectedProduct.rating} ({selectedProduct.reviews} reseñas)
                    </span>
                  </div>

                  <div className="mb-6">
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-gray-500 line-through mr-3">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-white">
                      ${selectedProduct.price}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary-400" />
                      <span>Garantía de 2 años incluida</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-primary-400" />
                      <span>Envío gratis en compras mayores a $200</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary-400" />
                      <span>100% Original y Certificado</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">
                    Repuesto original de alta calidad, diseñado específicamente para {selectedProduct.brand}. 
                    Garantizamos su compatibilidad y rendimiento óptimo. Instalación profesional disponible.
                  </p>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        addToCart(selectedProduct)
                        setSelectedProduct(null)
                      }}
                      className="flex-1 gradient-bg-green text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Agregar al Carrito
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        favorites.includes(selectedProduct.id)
                          ? "gradient-bg-green text-white"
                          : "glass-effect border border-primary-500/30"
                      }`}
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          favorites.includes(selectedProduct.id) ? "fill-current" : ""
                        }`}
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shopping Cart Badge */}
      {cart.length > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative gradient-bg-green w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/50"
          >
            <ShoppingCart className="w-7 h-7" />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
              {cart.length}
            </span>
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}