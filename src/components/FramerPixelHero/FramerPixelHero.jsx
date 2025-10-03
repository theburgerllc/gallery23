/* src/components/FramerPixelHero/FramerPixelHero.jsx
   Framer Motion-based Pixel Transition Hero
   Based on Olivier Larose's pixel transition tutorial
   Optimized for performance and accessibility
*/
import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './FramerPixelHero.module.css';

// Shuffle array for random pixel animation
const shuffle = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;
  const newArr = [...arr];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex]
    ];
  }

  return newArr;
};

export default function FramerPixelHero({
  firstContent,
  secondContent,
  gridSize = 30, // Increased from 20 for better performance
  pixelColor = '#72BDC2',
  animationDuration = 0.6,
  className = '',
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Memoize shuffled indexes for better performance
  const shuffledIndexes = useMemo(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      // Use larger grid size on mobile for better performance
      const isMobile = dimensions.width < 768;
      const effectiveGridSize = isMobile ? gridSize * 1.5 : gridSize;

      const numColumns = Math.ceil(dimensions.width / effectiveGridSize);
      const numRows = Math.ceil(dimensions.height / effectiveGridSize);
      const numBlocks = numColumns * numRows;

      const indexes = Array.from({ length: numBlocks }, (_, i) => i);
      return shuffle(indexes);
    }
    return [];
  }, [dimensions, gridSize]);

  // Memoize pixel blocks generation with 3D effects
  const pixelBlocks = useMemo(() => {
    const isMobile = dimensions.width < 768;
    const effectiveGridSize = isMobile ? gridSize * 1.5 : gridSize;
    const numColumns = Math.ceil(dimensions.width / effectiveGridSize);

    return shuffledIndexes.map((randomIndex, index) => {
      // Generate random 3D variations for each pixel
      const randomRotationX = (Math.random() - 0.5) * 180;
      const randomRotationY = (Math.random() - 0.5) * 180;
      const randomRotationZ = (Math.random() - 0.5) * 90;
      const randomScale = 0.9 + Math.random() * 0.2; // 0.9-1.1

      // Calculate position for distance-based delay (wave effect)
      const colIndex = index % numColumns;
      const rowIndex = Math.floor(index / numColumns);
      const numRows = Math.ceil(dimensions.height / effectiveGridSize);
      const distanceFromCenter = Math.hypot(
        colIndex - numColumns / 2,
        rowIndex - numRows / 2
      );

      return (
        <motion.div
          key={index}
          className={styles.pixel}
          style={{
            width: effectiveGridSize,
            height: effectiveGridSize,
            backgroundColor: pixelColor,
          }}
          variants={{
            initial: {
              opacity: 0,
              scale: 0,
              rotateX: randomRotationX,
              rotateY: randomRotationY,
              rotateZ: randomRotationZ,
              z: -100,
            },
            open: {
              opacity: 1,
              scale: randomScale,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              z: 0,
            },
            closed: {
              opacity: 0,
              scale: 0.7,
              rotateX: -randomRotationX,
              rotateY: -randomRotationY,
              rotateZ: -randomRotationZ,
              z: -100,
            },
          }}
          initial="initial"
          animate={isHovered ? 'open' : 'closed'}
          custom={randomIndex}
          transition={
            prefersReducedMotion
              ? { duration: 0.3, delay: 0 }
              : {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 0.5,
                  delay: 0.005 * distanceFromCenter,
                }
          }
        />
      );
    });
  }, [shuffledIndexes, isHovered, gridSize, pixelColor, dimensions, prefersReducedMotion]);

  // Memoize event handlers
  const handleMouseEnter = useCallback(() => {
    if (dimensions.width >= 768) setIsHovered(true);
  }, [dimensions.width]);

  const handleMouseLeave = useCallback(() => {
    if (dimensions.width >= 768) setIsHovered(false);
  }, [dimensions.width]);

  const handleClick = useCallback(() => {
    setIsHovered(!isHovered);
  }, [isHovered]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsHovered(!isHovered);
    }
  }, [isHovered]);

  return (
    <section
      className={`${styles.hero} ${className}`}
      role="region"
      aria-label="Interactive hero banner"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
    >
      {/* First Content - Initial State with 3D parallax */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 1, z: 0, scale: 1, rotateX: 0 }}
        animate={{
          opacity: isHovered ? 0 : 1,
          z: isHovered ? -50 : 0,
          scale: isHovered ? 0.95 : 1,
          rotateX: isHovered ? -3 : 0,
        }}
        transition={
          prefersReducedMotion
            ? { duration: 0.3 }
            : {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: isHovered ? 0 : 0.3,
              }
        }
      >
        {firstContent}
      </motion.div>

      {/* Pixel Grid Overlay */}
      <div className={styles.pixelGrid} aria-hidden="true">
        {dimensions.width > 0 && pixelBlocks}
      </div>

      {/* Second Content - Revealed State with 3D entrance */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, z: -100, scale: 0.9, rotateX: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          z: isHovered ? 0 : -100,
          scale: isHovered ? 1 : 0.9,
          rotateX: isHovered ? 0 : 10,
        }}
        transition={
          prefersReducedMotion
            ? { duration: 0.3 }
            : {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: isHovered ? 0.4 : 0,
              }
        }
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        {secondContent}
      </motion.div>
    </section>
  );
}
