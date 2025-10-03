/* src/components/CanvasPixelHero/useCanvasAnimation.js
   Custom hook for smooth canvas animations using requestAnimationFrame
*/
import { useEffect, useRef, useCallback } from 'react';
import { easeInOutCubic } from './pixelUtils';

export function useCanvasAnimation(isActive, duration = 800, onComplete) {
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const progressRef = useRef(0);

  const cancelAnimation = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const animate = useCallback((callback) => {
    startTimeRef.current = null;
    progressRef.current = 0;

    const frame = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(rawProgress);

      progressRef.current = easedProgress;
      callback(easedProgress);

      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        rafRef.current = null;
        if (onComplete) onComplete();
      }
    };

    cancelAnimation();
    rafRef.current = requestAnimationFrame(frame);
  }, [duration, onComplete, cancelAnimation]);

  useEffect(() => {
    return () => cancelAnimation();
  }, [cancelAnimation]);

  return {
    animate,
    cancel: cancelAnimation,
    progress: progressRef.current,
  };
}

export function useResizeCanvas(canvasRef, onResize) {
  useEffect(() => {
    if (!canvasRef.current) return;

    const handleResize = () => {
      if (onResize) onResize();
    };

    // Debounced resize
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [canvasRef, onResize]);
}
