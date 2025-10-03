import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Sparkles, Heart, Users, Video, PenTool } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://art23.vercel.app/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "gallerytwentythree",
      "alternateName": "Gallery Twenty Three",
      "url": "https://art23.vercel.app",
      "logo": "https://art23.vercel.app/images/art23-logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-GALLERY",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      "email": "hello@gallerytwentythree.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "United States"
      }
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Digital Platform',
      details: ['Serving artists nationwide', 'All 50 states', 'Online gallery & community'],
      color: 'text-primary-cyan'
    },
    {
      icon: Phone,
      title: 'Reach Out',
      details: ['+1 (555) GALLERY-23', 'Response within 24 hours', 'Artist support available'],
      color: 'text-primary-teal'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@gallerytwentythree.com', 'artists@gallerytwentythree.com', 'Khalaf "Leaf" Jerry, Founder'],
      color: 'text-primary-sage'
    },
    {
      icon: Clock,
      title: 'Platform Access',
      details: ['Available 24/7', 'Online community', 'Instant art discovery'],
      color: 'text-primary-tan'
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: 'Artist Submissions',
      description: 'Share your portfolio and join 500+ American artists showcasing their work nationwide',
      color: 'text-primary-cyan'
    },
    {
      icon: Heart,
      title: 'Collector Inquiries',
      description: 'Connect with artists, explore authentic American art, and start your collection today',
      color: 'text-primary-teal'
    },
    {
      icon: Video,
      title: 'Video Interviews',
      description: 'Tell your story through professional video features that bring your art and process to life',
      color: 'text-primary-sage'
    },
    {
      icon: PenTool,
      title: 'Platform Resources',
      description: 'Get access to blogging tools, social media integration, and comprehensive artist support',
      color: 'text-primary-tan'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Contact gallerytwentythree - Get in Touch with American Art Community"
        description="Reach out to gallerytwentythree to join our artist community, inquire about artwork, or learn about our platform resources. We're here to support American artists and art lovers nationwide."
        keywords="contact gallerytwentythree, american art community, artist submissions, art collectors, gallery contact, Khalaf Jerry contact, artist platform support"
        structuredData={structuredData}
      />

      {/* Skip to main content link for accessibility */}
      <a
        href="#contact-form"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-cyan focus:text-primary-dark focus:rounded-lg focus:shadow-neu-lg"
      >
        Skip to contact form
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card - Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-20"
          role="banner"
          aria-label="Contact page hero"
        >
          <div className="relative neu-card-raised overflow-hidden p-8 md:p-12 lg:p-16 animate-glow">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 via-primary-teal/20 to-primary-sage/20 animate-pulse-slow"></div>

            {/* Floating Blur Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-cyan/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-teal/15 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 2s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary-sage/10 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite 4s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6"
              >
                <MessageCircle className="w-5 h-5 text-primary-cyan animate-float" />
                <span className="text-sm text-primary-cyan font-medium">Contact gallerytwentythree</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
              >
                Let's Start a <span className="gradient-text">Conversation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              >
                Whether you're an artist ready to share your work, a collector seeking inspiration,
                or someone with a story to tell—we're here to listen and collaborate.
                <span className="text-primary-tan block mt-2">Your creative journey begins with a simple message.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <div className="glass-card px-6 py-3 text-center">
                  <div className="text-2xl font-bold gradient-text">24h</div>
                  <div className="text-xs text-primary-sage">Response Time</div>
                </div>
                <div className="glass-card px-6 py-3 text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-xs text-primary-sage">States Served</div>
                </div>
                <div className="glass-card px-6 py-3 text-center">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-primary-sage">Artist Focused</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Reasons to Contact */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" aria-label="Reasons to contact us">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full neu-card mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className={`w-6 h-6 ${reason.color} animate-float`} />
              </div>
              <h3 className="font-semibold mb-2 text-primary-tan">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </section>

        <div className="grid lg:grid-cols-2 gap-12" role="main">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div id="contact-form" className="neu-card-raised p-8 hover:shadow-neu-lg transition-shadow duration-300" role="form" aria-label="Contact form">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full neu-card flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-cyan" />
                </div>
                <h2 className="text-2xl font-bold">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-primary-tan mb-2 transition-colors duration-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neu-input text-white focus:ring-2 focus:ring-primary-cyan/50 focus:outline-none transition-all duration-300"
                    placeholder="e.g., Alex Rivera"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-primary-tan mb-2 transition-colors duration-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neu-input text-white focus:ring-2 focus:ring-primary-teal/50 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-tan mb-2 transition-colors duration-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="neu-input text-white focus:ring-2 focus:ring-primary-sage/50 focus:outline-none transition-all duration-300"
                    placeholder="Artist submission, collector inquiry, or general question"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-tan mb-2 transition-colors duration-200">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="neu-input text-white resize-none focus:ring-2 focus:ring-primary-tan/50 focus:outline-none transition-all duration-300"
                    placeholder="Share your story, portfolio link, or question. We're excited to hear from you and typically respond within 24 hours..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full neu-button flex items-center justify-center space-x-2 py-4 group focus:outline-none focus:ring-4 focus:ring-primary-cyan/50 focus:ring-offset-2 focus:ring-offset-primary-dark ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-neu-lg'
                  }`}
                  aria-label={isSubmitting ? 'Sending message' : 'Send message to gallerytwentythree'}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-cyan border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-primary-cyan group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="gradient-text font-semibold">Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="glass-card p-4 text-center border-2 border-primary-cyan/30"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-primary-cyan/20 flex items-center justify-center">
                        <span className="text-primary-cyan text-sm">✓</span>
                      </div>
                      <span className="text-primary-cyan font-medium">Thank you for reaching out! We'll respond within 24 hours. Welcome to the gallerytwentythree community!</span>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Animated Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
            aria-label="Contact information"
          >
            {/* Animated Gradient Visualization - Replacing Spline */}
            <div className="relative neu-card-raised h-64 overflow-hidden rounded-2xl group" role="img" aria-label="Animated gradient visualization representing creative communication">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/30 via-primary-teal/20 to-primary-sage/30 animate-pulse-slow"></div>

              {/* Floating Animated Orbs */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary-cyan/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-teal/20 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 2s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-primary-sage/25 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite 4s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-primary-tan/20 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite 1s' }}></div>
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="neu-card w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                >
                  <MessageCircle className="w-10 h-10 text-primary-cyan animate-float" />
                </motion.div>
              </div>

              {/* Corner Sparkles */}
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary-cyan/50 animate-float" />
              <Sparkles className="absolute bottom-4 left-4 w-5 h-5 text-primary-teal/50" style={{ animation: 'float 6s ease-in-out infinite 2s' }} />
            </div>

            {/* Contact Cards with Color Rotation */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 group hover:shadow-neu-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full neu-card mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className={`w-6 h-6 ${info.color} animate-float`} />
                  </div>
                  <h3 className="font-semibold mb-3 text-primary-tan">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="neu-card-raised p-6 hover:shadow-neu-lg transition-all duration-300"
            >
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full neu-card flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-cyan animate-float" />
                </div>
                <span className="text-primary-tan">Find Us</span>
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-primary-dark/50 relative group">
                {/* Placeholder for map - in production, you'd use Google Maps or Mapbox */}
                <div className="w-full h-full flex items-center justify-center glass-card relative">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/10 via-transparent to-primary-teal/10"></div>

                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-16 h-16 rounded-full neu-card mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-primary-cyan" />
                    </div>
                    <p className="text-gray-300 text-sm font-medium">Nationwide Digital Platform</p>
                    <p className="text-xs text-primary-sage">Serving American Artists in All 50 States</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
          aria-label="Frequently asked questions"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-primary-sage animate-float" />
              <span className="text-sm text-primary-sage font-medium">Common Questions</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">Quick answers to help you get started</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'How can I join as an artist?',
                a: 'Submit your portfolio and artist statement through our contact form above. We welcome artists from all 50 states working in any medium. Share your unique perspective and join our vibrant community of 500+ American creators.',
                color: 'text-primary-cyan',
                icon: Users
              },
              {
                q: 'What resources do you provide to artists?',
                a: 'gallerytwentythree offers a comprehensive digital showcase platform, professional video interview features, integrated blogging tools, social media amplification, and upcoming storage/shipping solutions—all designed to help you build and sustain your art career.',
                color: 'text-primary-teal',
                icon: PenTool
              },
              {
                q: 'Do you offer video interview features?',
                a: 'Absolutely! We produce professional video interviews that showcase your creative process, artistic journey, and personal story. These videos help collectors connect with you on a deeper level and understand the meaning behind your work.',
                color: 'text-primary-sage',
                icon: Video
              },
              {
                q: 'How can collectors purchase artwork?',
                a: 'Browse our curated collection of American art and reach out through our contact form. We personally connect you with the artist and facilitate secure acquisitions. Every purchase directly supports the creator.',
                color: 'text-primary-tan',
                icon: Heart
              },
              {
                q: 'What makes gallerytwentythree different?',
                a: 'We\'re a digital-first platform exclusively celebrating American artists, providing tools for growth, and building genuine community. Founded by Khalaf "Leaf" Jerry with a vision of diversity, inclusion, and artist empowerment across all 50 states.',
                color: 'text-primary-cyan',
                icon: Sparkles
              },
              {
                q: 'How quickly will I hear back?',
                a: 'We respond to all inquiries within 24 hours, typically much sooner. Your message goes directly to our team who are passionate about supporting artists and collectors. We\'re excited to hear from you!',
                color: 'text-primary-teal',
                icon: MessageCircle
              }
            ].map((faq, index) => {
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 hover:shadow-neu-md transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full neu-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-5 h-5 ${faq.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-3 ${faq.color}`}>{faq.q}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
