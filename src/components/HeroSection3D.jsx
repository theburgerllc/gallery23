import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import ArtThemeBackground from './ArtThemeBackground';

const HeroSection3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating art frames data
  const floatingFrames = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80',
      rotation: 0,
      delay: 0,
      scale: 1
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
      rotation: 72,
      delay: 0.2,
      scale: 0.9
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80',
      rotation: 144,
      delay: 0.4,
      scale: 0.85
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&q=80',
      rotation: 216,
      delay: 0.6,
      scale: 0.8
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=400&q=80',
      rotation: 288,
      delay: 0.8,
      scale: 0.95
    }
  ];

  // Geometric particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
  }));

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden perspective-2000"
    >
      {/* Art-Themed Animated Background (z-0 to z-2) */}
      <ArtThemeBackground />

      {/* 3D Animated Logo "g23" - Behind floating frames */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity, scale }}
      >
        <div className="text-center perspective-2000">
          <motion.div
            className="relative inline-block transform-3d"
            initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
            whileHover={{
              rotateY: [0, 10, -10, 0],
              rotateX: [0, 5, -5, 0],
              transition: { duration: 1, repeat: Infinity }
            }}
            style={{
              rotateX,
              rotateY
            }}
          >
            <h1 className="text-[10rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-3d-glow gradient-text backface-hidden gpu-accelerated pointer-events-none select-none">
              g23
            </h1>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Art Frames Orbital System - In front of logo */}
      <motion.div
        className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none z-20"
        style={{
          opacity,
          scale,
          rotateX,
          rotateY
        }}
      >
        <div className="relative w-[800px] h-[800px] transform-3d">
          {floatingFrames.map((frame, index) => (
            <motion.div
              key={frame.id}
              className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
              style={{
                width: `${120 * frame.scale}px`,
                height: `${160 * frame.scale}px`,
                marginLeft: `${-60 * frame.scale}px`,
                marginTop: `${-80 * frame.scale}px`
              }}
              initial={{ opacity: 0, scale: 0, rotateY: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: [0, 360],
                rotate: [0, 360]
              }}
              transition={{
                opacity: { delay: frame.delay, duration: 0.6 },
                scale: { delay: frame.delay, duration: 0.6 },
                rotateY: {
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  ease: 'linear'
                },
                rotate: {
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
              whileHover={{
                scale: frame.scale * 1.2,
                rotateZ: 0,
                transition: { duration: 0.3 }
              }}
            >
              <div
                className="relative w-full h-full transform-3d group"
                style={{
                  transform: `rotate(${frame.rotation}deg) translateX(300px) rotate(${-frame.rotation}deg)`
                }}
              >
                <div className="w-full h-full shadow-3d-lg rounded-lg overflow-hidden border-2 border-primary-cyan/30 group-hover:border-primary-cyan/60 transition-colors">
                  <img
                    src={frame.image}
                    alt={`Artwork ${frame.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <p className="text-white text-xs font-semibold">View Art</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-primary-cyan text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-cyan/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-primary-cyan rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection3D;
