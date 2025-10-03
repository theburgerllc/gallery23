/* src/components/CanvasPixelHero/CanvasPixelHero.jsx
   High-performance canvas-based pixel reveal hero
   60fps GPU-accelerated animation with true pixelation
*/
import { useRef, useEffect, useState, useCallback } from 'react';
import { useCanvasAnimation, useResizeCanvas } from './useCanvasAnimation';
import {
  setupCanvas,
  drawPixelated,
  drawPixelGridReveal,
  loadImage,
} from './pixelUtils';
import styles from './CanvasPixelHero.module.css';

export default function CanvasPixelHero({
  firstContent,
  secondContent,
  imageSrc = '/images/hero-bg.webp',
  pixelSize = 30,
  duration = 800,
  pixelColor = '#72BDC2',
  className = '',
}) {
  const containerRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const pixelCanvasRef = useRef(null);
  const contentCanvasRef = useRef(null);
  const imageRef = useRef(null);

  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { animate, cancel } = useCanvasAnimation(
    isRevealed,
    duration,
    () => setIsAnimating(false)
  );

  // Load background image
  useEffect(() => {
    if (imageSrc) {
      loadImage(imageSrc)
        .then((img) => {
          imageRef.current = img;
          drawBackground();
        })
        .catch((err) => console.error('Failed to load image:', err));
    }
  }, [imageSrc]);

  // Setup canvas dimensions
  const updateCanvasDimensions = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    setDimensions({ width, height });

    // Setup all canvases
    if (bgCanvasRef.current) {
      setupCanvas(bgCanvasRef.current, width, height);
    }
    if (pixelCanvasRef.current) {
      setupCanvas(pixelCanvasRef.current, width, height);
    }
    if (contentCanvasRef.current) {
      setupCanvas(contentCanvasRef.current, width, height);
    }

    drawBackground();
  }, []);

  useResizeCanvas(containerRef, updateCanvasDimensions);

  // Draw background image
  const drawBackground = useCallback(() => {
    if (!bgCanvasRef.current || !imageRef.current) return;

    const ctx = bgCanvasRef.current.getContext('2d');
    const img = imageRef.current;

    // Draw full image (unpixelated background)
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
  }, [dimensions]);

  // Pixel reveal animation
  const animateReveal = useCallback((revealed) => {
    if (isAnimating) return;
    setIsAnimating(true);

    animate((progress) => {
      const pixelCtx = pixelCanvasRef.current?.getContext('2d');
      const contentCtx = contentCanvasRef.current?.getContext('2d');
      if (!pixelCtx || !contentCtx) return;

      const effectiveProgress = revealed ? progress : 1 - progress;

      // Draw pixel grid reveal
      if (imageRef.current) {
        drawPixelGridReveal(
          pixelCtx,
          imageRef.current,
          pixelSize,
          effectiveProgress,
          pixelColor
        );
      }

      // Fade content layers
      const firstAlpha = revealed ? 1 - progress : progress;
      const secondAlpha = revealed ? progress : 1 - progress;

      // Clear content canvas
      contentCtx.clearRect(0, 0, dimensions.width, dimensions.height);

      // This is where we'd draw content if rendering to canvas
      // For now, we use DOM overlays for firstContent/secondContent
    });
  }, [animate, isAnimating, pixelSize, pixelColor, dimensions]);

  // Handle interaction
  const handleToggle = useCallback(() => {
    const newState = !isRevealed;
    setIsRevealed(newState);
    animateReveal(newState);
  }, [isRevealed, animateReveal]);

  const handleMouseEnter = useCallback(() => {
    if (dimensions.width >= 768 && !isRevealed) {
      setIsRevealed(true);
      animateReveal(true);
    }
  }, [dimensions.width, isRevealed, animateReveal]);

  const handleMouseLeave = useCallback(() => {
    if (dimensions.width >= 768 && isRevealed) {
      setIsRevealed(false);
      animateReveal(false);
    }
  }, [dimensions.width, isRevealed, animateReveal]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  }, [handleToggle]);

  return (
    <section
      ref={containerRef}
      className={`${styles.hero} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Interactive hero banner"
      tabIndex={0}
    >
      {/* Background canvas (static image) */}
      <canvas
        ref={bgCanvasRef}
        className={styles.bgCanvas}
        aria-hidden="true"
      />

      {/* Pixel grid canvas (animated overlay) */}
      <canvas
        ref={pixelCanvasRef}
        className={styles.pixelCanvas}
        aria-hidden="true"
      />

      {/* Content canvas (for future text rendering) */}
      <canvas
        ref={contentCanvasRef}
        className={styles.contentCanvas}
        aria-hidden="true"
      />

      {/* First Content - DOM overlay */}
      <div
        className={styles.contentLayer}
        style={{
          opacity: isRevealed ? 0 : 1,
          pointerEvents: isRevealed ? 'none' : 'auto',
          transition: `opacity ${duration}ms ease-in-out`,
        }}
      >
        {firstContent}
      </div>

      {/* Second Content - DOM overlay */}
      <div
        className={styles.contentLayer}
        style={{
          opacity: isRevealed ? 1 : 0,
          pointerEvents: isRevealed ? 'auto' : 'none',
          transition: `opacity ${duration}ms ease-in-out ${isRevealed ? '400ms' : '0ms'}`,
        }}
      >
        {secondContent}
      </div>
    </section>
  );
}
