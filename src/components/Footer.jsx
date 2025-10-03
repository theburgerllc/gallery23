import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative mt-20 neu-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/art23-logo.jpg"
                alt="art23 Gallery"
                className="h-10 w-10 rounded-lg object-cover shadow-neu-sm"
              />
              <h3 className="text-2xl font-bold gradient-text">art23</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Discover contemporary art that inspires and transforms. Your gateway to exceptional artistic experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg glass-card hover:bg-primary-cyan/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-cyan" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-cyan">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Gallery', 'Shop', 'Blog', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-cyan transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-cyan">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary-cyan transition-colors text-sm">
                  Current Exhibitions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-cyan transition-colors text-sm">
                  Artist Spotlight
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary-cyan transition-colors text-sm">
                  Virtual Tours
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-cyan transition-colors text-sm">
                  Art Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-cyan">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary-cyan flex-shrink-0 mt-0.5" />
                <span>123 Art District, Creative Quarter, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary-cyan flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary-cyan flex-shrink-0" />
                <span>hello@art23gallery.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-cyan/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} art23 Gallery. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
