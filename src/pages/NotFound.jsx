import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* 404 Visual */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-9xl md:text-[200px] font-bold gradient-text leading-none"
            >
              404
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Search className="w-20 h-20 md:w-32 md:h-32 text-primary-cyan/20" />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto">
              Oops! The page you're looking for seems to have wandered off into the art gallery.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neu-button flex items-center space-x-2 text-white font-medium"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </Link>

            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button flex items-center space-x-2 text-white font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Browse Gallery</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-12"
          >
            <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Gallery', path: '/gallery' },
                { name: 'Shop', path: '/shop' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="glass-card px-4 py-2 text-sm text-primary-cyan hover:bg-primary-cyan/10 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
