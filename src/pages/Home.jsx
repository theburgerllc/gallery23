import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Eye, Heart } from 'lucide-react';
import CanvasPixelHero from '../components/CanvasPixelHero/CanvasPixelHero';

const Home = () => {
  const featuredWorks = [
    {
      id: 1,
      title: 'Abstract Serenity',
      artist: 'Marina Rodriguez',
      category: 'Abstract',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
      views: 1250,
      likes: 342
    },
    {
      id: 2,
      title: 'Urban Dreams',
      artist: 'Chen Wei',
      category: 'Contemporary',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      views: 980,
      likes: 287
    },
    {
      id: 3,
      title: 'Ethereal Waters',
      artist: 'Sophie Laurent',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
      views: 2100,
      likes: 512
    },
    {
      id: 4,
      title: 'Geometric Harmony',
      artist: 'Alex Thompson',
      category: 'Modern',
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
      views: 1567,
      likes: 423
    }
  ];

  const stats = [
    { label: 'Artworks', value: '500+' },
    { label: 'Artists', value: '120+' },
    { label: 'Exhibitions', value: '45+' },
    { label: 'Visitors', value: '50K+' }
  ];

  return (
    <div className="relative">
      {/* Canvas Pixel Reveal Hero - 60fps Performance */}
      <CanvasPixelHero
        imageSrc="/images/hero-bg.webp"
        pixelSize={30}
        pixelColor="#72BDC2"
        duration={800}
        firstContent={
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text leading-none tracking-tighter">
              gallerytwentythree
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-primary-cyan/90">
              Art that builds bridges
            </p>
          </div>
        }
        secondContent={
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Welcome to the
              <br />
              <span className="gradient-text">New Era of Art</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Curated works & stories from American artists
            </p>
            <Link to="/gallery">
              <button className="glass-button inline-flex items-center space-x-2 text-lg px-8 py-4">
                <span>Explore Gallery</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        }
      />

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="neu-card-raised p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 glass-card px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-primary-cyan" />
                <span className="text-sm text-primary-cyan font-medium">About Us</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold">
                Welcome to
                <br />
                <span className="gradient-text">gallerytwentythree</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                A digital sanctuary celebrating the boundless creativity of artists from across the United States.
                We curate diverse, inspiring collections that highlight the heart and soul of American artistry.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Our mission is simple: to connect people with art that transforms, inspires, and transcends boundaries.
                Step into a space where innovation, imagination, and diversity thrive — one masterpiece at a time.
              </p>

              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button flex items-center space-x-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="neu-card-raised p-8 space-y-6">
                <img
                  src="/images/art23-logo.jpg"
                  alt="gallerytwentythree"
                  className="w-full rounded-lg shadow-neu-md"
                />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full"></div>
                    <p className="text-gray-300 text-sm">Celebrating artists from all 50 states</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full"></div>
                    <p className="text-gray-300 text-sm">Digital platform with artist tools & resources</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full"></div>
                    <p className="text-gray-300 text-sm">Community hub for creators and collectors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Artworks</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handpicked masterpieces from our curated collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="neu-card-raised overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="glass-card p-4 space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-300">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{work.views}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>{work.likes}</span>
                            </span>
                          </div>
                          <span className="px-2 py-1 bg-primary-cyan/20 rounded-full text-primary-cyan">
                            {work.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary-cyan transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 text-sm">by {work.artist}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button inline-flex items-center space-x-2"
              >
                <span>View All Artworks</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neu-card-raised p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-primary-teal/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Experience
                <br />
                <span className="gradient-text">Art Like Never Before?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of art enthusiasts and discover extraordinary pieces that inspire and transform.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button text-lg px-8 py-4"
                >
                  Get Started Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
