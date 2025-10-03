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

  // Memoize pixel blocks generation
  const pixelBlocks = useMemo(() => {
    const isMobile = dimensions.width < 768;
    const effectiveGridSize = isMobile ? gridSize * 1.5 : gridSize;

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className={styles.pixel}
        style={{
          width: effectiveGridSize,
          height: effectiveGridSize,
          backgroundColor: pixelColor,
        }}
        variants={{
          initial: { opacity: 0 },
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        initial="initial"
        animate={isHovered ? 'open' : 'closed'}
        custom={randomIndex}
        transition={{
          duration: prefersReducedMotion ? 0.3 : 0,
          delay: prefersReducedMotion ? 0 : 0.015 * randomIndex,
        }}
      />
    ));
  }, [shuffledIndexes, isHovered, gridSize, pixelColor, dimensions.width, prefersReducedMotion]);

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
      {/* First Content - Initial State */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3, delay: isHovered ? 0 : 0.3 }}
      >
        {firstContent}
      </motion.div>

      {/* Pixel Grid Overlay */}
      <div className={styles.pixelGrid} aria-hidden="true">
        {dimensions.width > 0 && pixelBlocks}
      </div>

      {/* Second Content - Revealed State */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isHovered ? 0.3 : 0 }}
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        {secondContent}
      </motion.div>
    </section>
  );
}
