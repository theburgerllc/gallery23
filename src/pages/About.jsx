import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Palette, Globe, Target, Heart, Sparkles, Video, PenTool, Share2, Package } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "gallerytwentythree",
    "alternateName": "Gallery Twenty Three",
    "url": "https://art23.vercel.app",
    "logo": "https://art23.vercel.app/images/gallery23-logo-cropped.jpg",
    "description": "A digital platform celebrating American artists from all 50 states, offering tools, resources, and community for creative empowerment.",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Khalaf Jerry",
      "alternateName": "Leaf Jerry",
      "jobTitle": "Founder & Visionary"
    },
    "sameAs": [
      "https://www.instagram.com/gallerytwentythree",
      "https://www.facebook.com/gallerytwentythree",
      "https://twitter.com/gallery23"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States"
    }
  };

  const values = [
    {
      icon: Palette,
      title: 'Diversity & Inclusion',
      description: 'Championing voices from all 50 states, we showcase the vibrant mosaic of American artistry—from urban muralists to rural painters, established masters to emerging talents.'
    },
    {
      icon: Users,
      title: 'Artist Empowerment',
      description: 'Equipping creators with professional tools—video interviews, blogging platforms, and marketing resources—to amplify their voices and build sustainable art careers.'
    },
    {
      icon: Globe,
      title: 'Community Building',
      description: 'Fostering meaningful connections in a thriving digital hub where artists collaborate, collectors discover treasures, and creative passion ignites inspiration across the nation.'
    },
    {
      icon: Heart,
      title: 'Innovation & Support',
      description: 'Pioneering comprehensive artist services—from storytelling platforms and social media integration to forthcoming storage and shipping solutions that make managing your art effortless.'
    }
  ];

  const team = [
    {
      name: 'Khalaf "Leaf" Jerry',
      role: 'Founder & Visionary',
      image: '/images/gallery23-logo-cropped.jpg',
      bio: 'With an unwavering passion for American creativity, Leaf envisions gallerytwentythree as a transformative platform where every artist—regardless of background or location—finds the support, community, and resources to flourish and share their unique voice with the world.'
    }
  ];

  const milestones = [
    { year: 'Founded', event: 'gallerytwentythree Begins', description: 'Leaf Jerry launches a bold vision: a digital home where American artists of every medium and background can thrive together' },
    { year: 'Platform', event: 'Digital Gallery Launch', description: 'The platform goes live with curated galleries, artist profiles, and integrated tools designed for creative professionals' },
    { year: 'Community', event: 'Creative Ecosystem Grows', description: 'Video storytelling, blogging capabilities, and social integration empower artists to build their brands and connect with audiences' },
    { year: 'Nationwide', event: 'Coast-to-Coast Impact', description: 'The community expands to all 50 states, uniting urban and rural artists in a shared celebration of American creativity' },
    { year: 'Future', event: 'Full-Service Evolution', description: 'Comprehensive art logistics coming soon: secure storage, professional moving services, and worldwide shipping for seamless art management' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="About gallerytwentythree - Celebrating American Artists & Diversity"
        description="Discover the story behind gallerytwentythree, a digital platform founded by Khalaf 'Leaf' Jerry to empower American artists from all 50 states with tools, community, and visibility."
        keywords="about gallerytwentythree, american art community, artist platform, diverse artists, Khalaf Jerry, Leaf Jerry, art resources, artist empowerment, digital art gallery, contemporary american art"
        structuredData={structuredData}
      />

      {/* Skip to main content link for accessibility */}
      <a
        href="#mission"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-cyan focus:text-primary-dark focus:rounded-lg focus:shadow-neu-lg"
      >
        Skip to main content
      </a>

      {/* Hero Section with 3D Element */}
      <section className="relative mb-20" aria-label="Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 glass-card px-4 py-2 animate-glow"
              >
                <Sparkles className="w-4 h-4 text-primary-cyan animate-float" />
                <span className="text-sm text-primary-cyan font-medium">About gallerytwentythree</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-shadow">
                Celebrating American
                <br />
                <span className="gradient-text">Creativity & Diversity</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                At gallerytwentythree, art transcends the visual—it's a powerful force that builds bridges,
                amplifies untold stories, and transforms communities. We're dedicated to celebrating the boundless
                creativity and rich diversity of American artists, from bustling city studios to quiet country workshops,
                creating a digital home where every creative voice matters.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4">
                <div className="text-center neu-card px-6 py-4 flex-1 w-full sm:w-auto min-w-[120px]" role="group" aria-label="Artist statistics">
                  <div className="text-4xl font-bold gradient-text" aria-label="Over 500 artists">500+</div>
                  <div className="text-sm text-primary-sage">Artists</div>
                </div>
                <div className="text-center neu-card px-6 py-4 flex-1 w-full sm:w-auto min-w-[120px]" role="group" aria-label="Visitor statistics">
                  <div className="text-4xl font-bold gradient-text" aria-label="Over 50,000 visitors">50K+</div>
                  <div className="text-sm text-primary-sage">Visitors</div>
                </div>
                <div className="text-center neu-card px-6 py-4 flex-1 w-full sm:w-auto min-w-[120px]" role="group" aria-label="Exhibition statistics">
                  <div className="text-4xl font-bold gradient-text" aria-label="Over 45 exhibitions">45+</div>
                  <div className="text-sm text-primary-sage">Exhibitions</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] neu-card-raised overflow-hidden rounded-2xl group"
            >
              {/* Gradient Art Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 via-primary-teal/20 to-primary-sage/20 animate-pulse-slow"></div>

              {/* Animated Circles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-cyan/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-teal/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-sage/10 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Center Logo/Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full neu-card-raised bg-gradient-to-br from-primary-cyan/20 to-primary-teal/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <Palette className="w-16 h-16 text-primary-cyan animate-float" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold gradient-text">gallerytwentythree</h3>
                    <p className="text-gray-400 text-sm">Celebrating American Artistry</p>
                  </div>
                </div>
              </div>

              {/* Decorative Grid Overlay */}
              <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#72BDC2 1px, transparent 1px), linear-gradient(90deg, #72BDC2 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="py-20 relative" aria-label="Our mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neu-card-raised p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 via-primary-teal/5 to-primary-sage/5"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full neu-card mb-6 animate-float">
                <Target className="w-10 h-10 text-primary-cyan" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We curate extraordinary collections that celebrate innovation, imagination, and the diverse
                tapestry of American artistry. Every piece tells a story—a window into the artist's soul,
                their community, their journey. gallerytwentythree is where culture and creativity don't just
                meet; they spark conversations, forge connections, and inspire transformation.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mt-4">
                We're committed to giving artists the visibility, professional tools, and supportive community
                they deserve while offering collectors and art enthusiasts a gateway to discover authentic,
                compelling work that resonates deeply and enriches lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" aria-label="Our core values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-primary-tan text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full neu-card mb-6 group-hover:shadow-neu-lg transition-all duration-300">
                  <value.icon className={`w-8 h-8 transition-colors duration-300 ${
                    index === 0 ? 'text-primary-cyan' :
                    index === 1 ? 'text-primary-teal' :
                    index === 2 ? 'text-primary-sage' :
                    'text-primary-tan'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative" aria-label="Our journey and milestones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-primary-tan text-lg">Key milestones in our evolution</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-cyan via-primary-teal to-primary-sage opacity-30 hidden lg:block shadow-neu-sm"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="neu-card-raised p-6 inline-block group"
                    >
                      <div className="text-3xl font-bold gradient-text mb-2 text-shadow">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-cyan transition-colors duration-300">{milestone.event}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full neu-card flex-shrink-0 relative z-10 animate-glow">
                    <Award className={`w-8 h-8 ${
                      index % 4 === 0 ? 'text-primary-cyan' :
                      index % 4 === 1 ? 'text-primary-teal' :
                      index % 4 === 2 ? 'text-primary-sage' :
                      'text-primary-tan'
                    }`} />
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" aria-label="Meet our team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-primary-tan text-lg">Passionate individuals dedicated to artistic excellence</p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group max-w-md"
              >
                <div className="neu-card-raised overflow-hidden hover:shadow-neu-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} of gallerytwentythree`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-70"></div>
                  </div>
                  <div className="p-8 space-y-3 bg-gradient-to-br from-primary-dark to-primary-dark/80">
                    <h3 className="text-2xl font-semibold text-shadow">{member.name}</h3>
                    <p className="text-primary-cyan text-lg font-medium">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Resources */}
      <section className="py-20 relative" aria-label="Resources for artists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Resources for <span className="gradient-text">Artists</span>
            </h2>
            <p className="text-primary-tan text-lg max-w-2xl mx-auto">
              More than a gallery—we're your creative partner, offering comprehensive tools and resources to help you build, grow, and sustain your artistic career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: 'Showcase Platform',
                description: 'Professional digital galleries that put your work in front of collectors and art lovers across America—beautifully presented, easily discoverable'
              },
              {
                icon: Video,
                title: 'Video Interviews',
                description: 'Share your creative journey through professional video interviews that bring your personality, process, and passion to life for your audience'
              },
              {
                icon: PenTool,
                title: 'Blogging Tools',
                description: 'Tell your story your way with integrated blogging tools that help you build an engaged following and deepen connections with collectors'
              },
              {
                icon: Share2,
                title: 'Social Integration',
                description: 'Amplify your impact with seamless social media tools that help you reach wider audiences, build your brand, and turn followers into collectors'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full neu-card mb-6 group-hover:shadow-neu-lg transition-all duration-300">
                  <resource.icon className={`w-8 h-8 transition-colors duration-300 ${
                    index === 0 ? 'text-primary-cyan' :
                    index === 1 ? 'text-primary-teal' :
                    index === 2 ? 'text-primary-sage' :
                    'text-primary-tan'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-cyan transition-colors duration-300">{resource.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{resource.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mt-12 neu-card-raised p-8 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/5 to-primary-sage/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full neu-card mb-4 animate-float">
                <Package className="w-12 h-12 text-primary-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                <span className="gradient-text text-shadow">Coming Soon</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We're developing comprehensive art logistics services—secure climate-controlled storage, professional art moving, and reliable worldwide shipping—so you can focus on creating while we handle the rest.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neu-card-raised p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 via-primary-teal/5 to-primary-sage/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">
                Join the <span className="gradient-text">gallerytwentythree Community</span>
              </h2>
              <p className="text-primary-tan text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're an artist ready to share your vision with the world, or a collector searching for authentic American art that speaks to your soul—you belong here. Let's create something extraordinary together.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block neu-button px-8 py-4 text-lg text-white font-semibold hover:shadow-neu-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-cyan/50 focus:ring-offset-2 focus:ring-offset-primary-dark"
                aria-label="Contact gallerytwentythree to join the community"
              >
                <span className="gradient-text">Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
