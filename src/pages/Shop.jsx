import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart, Eye, Heart, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Abstract', 'Contemporary', 'Digital Art', 'Modern', 'Sculpture', 'Photography'];

  const artworks = [
    {
      id: 1,
      title: 'Abstract Serenity',
      artist: 'Marina Rodriguez',
      category: 'Abstract',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
      price: 2500,
      medium: 'Acrylic on Canvas',
      dimensions: '36" x 48"',
      year: 2024,
      description: 'A mesmerizing exploration of form and color that captures the essence of tranquility. This piece invites viewers into a world of peaceful contemplation.',
      inStock: true
    },
    {
      id: 2,
      title: 'Urban Dreams',
      artist: 'Chen Wei',
      category: 'Contemporary',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      price: 3200,
      medium: 'Mixed Media',
      dimensions: '40" x 60"',
      year: 2024,
      description: 'Contemporary piece reflecting the pulse of modern urban life through dynamic composition and bold color choices.',
      inStock: true
    },
    {
      id: 3,
      title: 'Ethereal Waters',
      artist: 'Sophie Laurent',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
      price: 1800,
      medium: 'Digital Print on Metal',
      dimensions: '30" x 40"',
      year: 2025,
      description: 'Digital masterpiece exploring the fluidity of light and water through innovative digital techniques.',
      inStock: true
    },
    {
      id: 4,
      title: 'Geometric Harmony',
      artist: 'Alex Thompson',
      category: 'Modern',
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
      price: 2800,
      medium: 'Oil on Canvas',
      dimensions: '48" x 48"',
      year: 2024,
      description: 'A bold statement in geometric abstraction and color theory, exploring the relationship between form and space.',
      inStock: true
    },
    {
      id: 5,
      title: 'Midnight Bloom',
      artist: 'Elena Vasquez',
      category: 'Abstract',
      image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&q=80',
      price: 3500,
      medium: 'Acrylic on Canvas',
      dimensions: '54" x 72"',
      year: 2024,
      description: 'Organic forms emerge from darkness in this evocative large-scale piece that commands attention.',
      inStock: true
    },
    {
      id: 6,
      title: 'Digital Horizons',
      artist: 'Marcus Kim',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
      price: 2200,
      medium: 'Digital Print on Aluminum',
      dimensions: '36" x 48"',
      year: 2025,
      description: 'Pushing boundaries between traditional and digital mediums, exploring new possibilities in art.',
      inStock: true
    },
    {
      id: 7,
      title: 'Sculptural Vision',
      artist: 'Isabella Romano',
      category: 'Sculpture',
      image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&q=80',
      price: 5500,
      medium: 'Bronze',
      dimensions: '24" x 18" x 12"',
      year: 2024,
      description: 'Three-dimensional exploration of space and material, crafted with meticulous attention to detail.',
      inStock: true
    },
    {
      id: 8,
      title: 'Urban Lens',
      artist: 'David Chen',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
      price: 1200,
      medium: 'Fine Art Photography',
      dimensions: '24" x 36"',
      year: 2024,
      description: 'Capturing the raw beauty of city life through a unique perspective, limited edition of 50.',
      inStock: true
    },
    {
      id: 9,
      title: 'Color Symphony',
      artist: 'Aria Johnson',
      category: 'Abstract',
      image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80',
      price: 4200,
      medium: 'Acrylic on Canvas',
      dimensions: '60" x 48"',
      year: 2024,
      description: 'A vibrant celebration of color and movement, this piece brings energy to any space.',
      inStock: true
    },
    {
      id: 10,
      title: 'Minimalist Space',
      artist: 'Yuki Tanaka',
      category: 'Modern',
      image: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&q=80',
      price: 2900,
      medium: 'Mixed Media',
      dimensions: '42" x 42"',
      year: 2024,
      description: 'Less is more in this thoughtful exploration of negative space and subtle form.',
      inStock: true
    },
    {
      id: 11,
      title: 'Nature Digital',
      artist: 'Emma Clarke',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80',
      price: 1950,
      medium: 'Digital Print on Canvas',
      dimensions: '32" x 48"',
      year: 2025,
      description: 'Where nature meets technology in perfect harmony, exploring organic forms through digital means.',
      inStock: true
    },
    {
      id: 12,
      title: 'Contemporary Forms',
      artist: 'Lucas Martinez',
      category: 'Contemporary',
      image: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800&q=80',
      price: 3800,
      medium: 'Oil on Canvas',
      dimensions: '48" x 60"',
      year: 2024,
      description: 'Bold exploration of contemporary artistic expression through innovative technique and vision.',
      inStock: true
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (artwork) => {
    addToCart(artwork);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Art <span className="gradient-text">Shop</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover and acquire exceptional artworks from our curated collection. Each piece is an investment in beauty and culture.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="neu-card p-4">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-primary-cyan" />
              <input
                type="text"
                placeholder="Search artworks or artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Filter className="w-5 h-5 text-primary-cyan" />
              <h3 className="text-lg font-semibold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-xl transition-all ${
                    selectedCategory === category
                      ? 'neu-button bg-primary-cyan/20 text-primary-cyan border border-primary-cyan/30'
                      : 'glass-button'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-gray-400"
        >
          Showing {filteredArtworks.length} {filteredArtworks.length === 1 ? 'artwork' : 'artworks'}
        </motion.div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="neu-card-raised overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setSelectedArtwork(artwork)}
                        className="p-2 glass-card rounded-lg"
                      >
                        <Eye className="w-5 h-5 text-primary-cyan" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 glass-card rounded-lg"
                      >
                        <Heart className="w-5 h-5 text-primary-cyan" />
                      </motion.button>
                    </div>

                    {/* Stock Badge */}
                    {artwork.inStock && (
                      <div className="absolute top-4 left-4">
                        <div className="glass-card px-3 py-1 text-xs text-primary-cyan font-medium">
                          Available
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary-cyan transition-colors mb-1">
                        {artwork.title}
                      </h3>
                      <p className="text-gray-400 text-sm">by {artwork.artist}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold gradient-text">
                          ${artwork.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">{artwork.dimensions}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(artwork)}
                        className="neu-button p-3 rounded-lg"
                      >
                        <ShoppingCart className="w-5 h-5 text-primary-cyan" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredArtworks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="neu-card-raised p-12 inline-block">
              <p className="text-gray-400 text-lg">No artworks found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 glass-button"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Artwork Detail Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtwork(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="neu-card-raised max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedArtwork.title}</h2>
                    <p className="text-primary-cyan text-lg mb-4">by {selectedArtwork.artist}</p>
                    <p className="text-4xl font-bold gradient-text mb-2">
                      ${selectedArtwork.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="glass-card p-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Medium:</span>
                      <span className="font-medium">{selectedArtwork.medium}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Dimensions:</span>
                      <span className="font-medium">{selectedArtwork.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Year:</span>
                      <span className="font-medium">{selectedArtwork.year}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Category:</span>
                      <span className="font-medium">{selectedArtwork.category}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                      <Info className="w-5 h-5 text-primary-cyan" />
                      <span>About This Piece</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedArtwork.description}
                    </p>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleAddToCart(selectedArtwork);
                        setSelectedArtwork(null);
                      }}
                      className="flex-1 neu-button flex items-center justify-center space-x-2 py-4"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-button p-4"
                    >
                      <Heart className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
