/* src/components/CanvasPixelHero/pixelUtils.js
   Utility functions for canvas pixel manipulation
*/

/**
 * Draw image with pixelation effect
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {HTMLImageElement} img - Source image
 * @param {number} pixelSize - Size of each pixel block
 * @param {number} alpha - Opacity (0-1)
 */
export function drawPixelated(ctx, img, pixelSize, alpha = 1) {
  const canvas = ctx.canvas;
  const w = canvas.width;
  const h = canvas.height;

  // Create temporary small canvas for pixelation
  const tmpCanvas = document.createElement('canvas');
  const cols = Math.ceil(w / pixelSize);
  const rows = Math.ceil(h / pixelSize);
  tmpCanvas.width = cols;
  tmpCanvas.height = rows;

  const tmpCtx = tmpCanvas.getContext('2d', { alpha: false });

  // Draw image small (creates pixelation)
  tmpCtx.drawImage(img, 0, 0, cols, rows);

  // Clear main canvas
  ctx.clearRect(0, 0, w, h);
  ctx.globalAlpha = alpha;
  ctx.imageSmoothingEnabled = false; // Crisp pixels

  // Scale up (pixelated effect)
  ctx.drawImage(tmpCanvas, 0, 0, w, h);

  ctx.globalAlpha = 1;
}

/**
 * Draw pixelated grid with wave reveal effect
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {HTMLImageElement} img - Source image
 * @param {number} pixelSize - Size of each pixel block
 * @param {number} progress - Animation progress (0-1)
 * @param {string} color - Pixel color
 */
export function drawPixelGridReveal(ctx, img, pixelSize, progress, color = '#72BDC2') {
  const canvas = ctx.canvas;
  const w = canvas.width;
  const h = canvas.height;
  const cols = Math.ceil(w / pixelSize);
  const rows = Math.ceil(h / pixelSize);
  const centerX = cols / 2;
  const centerY = rows / 2;
  const maxDistance = Math.hypot(centerX, centerY);

  ctx.clearRect(0, 0, w, h);

  // Draw each pixel block
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * pixelSize;
      const y = row * pixelSize;

      // Calculate distance from center for wave effect
      const distance = Math.hypot(col - centerX, row - centerY);
      const normalizedDistance = distance / maxDistance;

      // Wave reveal: fade based on distance and progress
      const threshold = progress * 1.2 - 0.2; // Offset for wave
      const alpha = Math.max(0, Math.min(1, (threshold - normalizedDistance) * 5));

      if (alpha > 0) {
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }
  }

  ctx.globalAlpha = 1;
}

/**
 * Draw content to canvas
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {string} text - Text content
 * @param {Object} style - Style options
 */
export function drawTextContent(canvas, text, style = {}) {
  const ctx = canvas.getContext('2d');
  const {
    font = 'bold 48px Inter, sans-serif',
    color = '#ffffff',
    align = 'center',
    baseline = 'middle',
  } = style;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = baseline;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

/**
 * Ease out cubic easing function
 * @param {number} t - Progress (0-1)
 * @returns {number} - Eased value
 */
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Ease in-out cubic easing function
 * @param {number} t - Progress (0-1)
 * @returns {number} - Eased value
 */
export function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Load image with promise
 * @param {string} src - Image URL
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Setup canvas for high DPI displays
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {number} width - Desired width
 * @param {number} height - Desired height
 */
export function setupCanvas(canvas, width, height) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  return ctx;
}
