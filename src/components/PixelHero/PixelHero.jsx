/* src/components/PixelHero/PixelHero.jsx
   Production PixelReveal hero component (JavaScript + CSS Module)
   Canvas pixelation for images, grid fallback for arbitrary content
*/
import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './PixelHero.module.css';

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handler = () => setPrefers(Boolean(mq && mq.matches));
    handler();
    mq?.addEventListener?.('change', handler);
    return () => mq?.removeEventListener?.('change', handler);
  }, []);
  return prefers;
}

function useInView(ref, opts = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
          else if (opts.threshold === 0 && !opts.root) setInView(false);
        });
      },
      { threshold: opts.threshold ?? 0.25, root: opts.root ?? null }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, opts.threshold, opts.root]);
  return inView;
}

export default function PixelHero({
  firstContent,
  secondContent,
  imageSrc,
  mode = 'in-view',
  gridSize = 12,
  duration = 0.9,
  delay = 0,
  easing = 'cubic-bezier(.2,.8,.2,1)',
  replay = false,
  reducedMotionFallback = true,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const rafRef = useRef(null);
  const [active, setActive] = useState(false);
  const [playedOnce, setPlayedOnce] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const inView = useInView(containerRef, { threshold: 0.2 });

  useEffect(() => {
    if (mode === 'in-view' && inView) {
      startReveal();
    } else if (mode === 'in-view' && !replay && inView && playedOnce) {
      // no-op
    } else if (mode === 'in-view' && !inView && replay) {
      setActive(false);
      setPlayedOnce(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, mode]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !imageSrc) return;
    let mounted = true;
    const resize = () => {
      if (!mounted) return;
      const rect = el.getBoundingClientRect();
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resize();
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resize._t);
      resize._t = window.setTimeout(resize, 80);
    });
    ro.observe(el);
    return () => {
      mounted = false;
      ro.disconnect();
    };
  }, [imageSrc]);

  const cancelRaf = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => () => cancelRaf(), [cancelRaf]);

  const runCanvasReveal = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const start = performance.now();
    const total = Math.max(1, Math.floor(duration * 1000));
    const maxBlocks = Math.max(2, gridSize);
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    function drawAt(blockProgress) {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;

      const blocks = Math.max(1, Math.round(maxBlocks * blockProgress));
      const tmp = document.createElement('canvas');
      tmp.width = blocks;
      tmp.height = Math.max(1, Math.round((blocks * h) / w));
      const tctx = tmp.getContext('2d');
      if (!tctx) return;
      try {
        tctx.drawImage(img, 0, 0, tmp.width, tmp.height);
      } catch {
        // CORS or drawing error -> fallback
      }

      const sx = tmp.width;
      const sy = tmp.height;
      const pxW = Math.ceil(w / sx);
      const pxH = Math.ceil(h / sy);

      ctx.clearRect(0, 0, w, h);
      let imgd = null;
      try {
        imgd = tctx.getImageData(0, 0, sx, sy);
      } catch {
        imgd = null;
      }
      if (imgd) {
        const d = imgd.data;
        let idx = 0;
        for (let y = 0; y < sy; y++) {
          for (let x = 0; x < sx; x++) {
            const r = d[idx++];
            const g = d[idx++];
            const b = d[idx++];
            const a = d[idx++];
            ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
            ctx.fillRect(x * pxW, y * pxH, pxW, pxH);
          }
        }
      } else {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(tmp, 0, 0, w, h);
      }
    }

    function frame(now) {
      const t = Math.min(1, Math.max(0, (now - start - delay * 1000) / total));
      const eased = 1 - Math.pow(1 - t, 2);
      const progress = 1 - eased;
      drawAt(progress);
      if (t < 1) rafRef.current = requestAnimationFrame(frame);
      else {
        rafRef.current = null;
        setPlayedOnce(true);
      }
    }

    cancelRaf();
    rafRef.current = requestAnimationFrame(frame);
  }, [gridSize, duration, delay, cancelRaf]);

  const startReveal = useCallback(() => {
    if (prefersReduced && reducedMotionFallback) {
      setActive(true);
      setPlayedOnce(true);
      return;
    }
    setActive(true);
    setTimeout(() => {
      if (imageSrc && imgRef.current && canvasRef.current) {
        runCanvasReveal();
      } else {
        setPlayedOnce(true);
      }
    }, Math.max(0, delay * 1000));
  }, [imageSrc, runCanvasReveal, delay, prefersReduced, reducedMotionFallback]);

  const handleClick = () => {
    if (mode !== 'click') return;
    if (!replay && playedOnce) return;
    startReveal();
  };
  const handleKey = (e) => {
    if (mode !== 'click') return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    imgRef.current = img;
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    const onLoad = () => {
      if (mode === 'in-view' && inView) startReveal();
    };
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onLoad);
    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onLoad);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  const revealClass = active || (mode === 'in-view' && inView) ? styles.revealed : styles.idle;
  const reducedClass = prefersReduced && reducedMotionFallback ? styles.reduced : '';
  const containerClasses = `${styles.hero} ${revealClass} ${reducedClass} ${className}`;

  const inlineStyle = {
    ...style,
    '--pixel-duration': `${duration}s`,
    '--pixel-easing': easing,
    '--pixel-grid': `${gridSize}`,
    '--pixel-delay': `${delay}s`,
  };

  return (
    <section
      ref={containerRef}
      className={containerClasses}
      style={inlineStyle}
      onClick={handleClick}
      onKeyDown={handleKey}
      role="region"
      aria-label="Pixel hero"
      tabIndex={mode === 'click' ? 0 : undefined}
      data-testid="pixel-hero-root"
      onMouseEnter={() => {
        if (mode === 'hover' && (!playedOnce || replay)) startReveal();
      }}
    >
      <div className={`${styles.layer} ${styles.first}`} data-testid="first-layer">
        {firstContent}
      </div>

      <div className={`${styles.layer} ${styles.second}`} aria-hidden={!active} data-testid="second-layer">
        {imageSrc ? (
          <>
            <img
              ref={imgRef}
              src={imageSrc}
              alt=""
              aria-hidden
              className={styles.hiddenImg}
              crossOrigin="anonymous"
            />
            <canvas ref={canvasRef} className={styles.pixelCanvas} data-testid="pixel-canvas" />
            <div className={styles.revealedContent} data-testid="revealed-content">
              {secondContent}
            </div>
          </>
        ) : (
          <>
            <div className={styles.gridMask} aria-hidden>
              {Array.from({ length: gridSize * gridSize }).map((_, i) => (
                <span
                  key={i}
                  className={styles.gridCell}
                  style={{
                    '--cell-i': `${i}`,
                  }}
                />
              ))}
            </div>
            <div className={styles.revealedContent} data-testid="revealed-content">
              {secondContent}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
