import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage Component
 *
 * A responsive, optimized image component that:
 * - Serves modern formats (AVIF, WebP) with JPEG fallback
 * - Implements responsive images with srcset
 * - Shows blur placeholder while loading (LQIP)
 * - Prevents layout shift with aspect ratio
 * - Lazy loads by default with intersection observer
 *
 * @example
 * <OptimizedImage
 *   src="/images/gallery23-logo-cropped.jpg"
 *   alt="Team member photo"
 *   width={855}
 *   height={150}
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  priority = false,
  objectFit = 'cover',
  placeholder = null,
  dominantColor = '#1a1a1a',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Extract filename without extension
  const basePath = src.replace(/\.(jpg|jpeg|png)$/i, '');
  const isOptimized = src.includes('/optimized/');

  // Build srcset for responsive images
  const buildSrcSet = (format) => {
    if (!isOptimized) return '';

    const widths = [400, 800, 1200];
    return widths
      .map(w => `${basePath}-${w}w.${format} ${w}w`)
      .join(', ');
  };

  // Calculate aspect ratio for container
  const aspectRatio = width && height ? (height / width) * 100 : null;

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
        backgroundColor: dominantColor
      }}
    >
      {/* Blur placeholder - shown while loading */}
      {placeholder && !isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-300"
          style={{ opacity: isLoaded ? 0 : 1 }}
        />
      )}

      {/* Loading skeleton - fallback if no placeholder */}
      {!placeholder && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 animate-pulse" />
      )}

      {/* Main image with modern formats */}
      {!hasError ? (
        <picture>
          {/* AVIF - Best compression, modern browsers */}
          {isOptimized && (
            <source
              type="image/avif"
              srcSet={buildSrcSet('avif')}
              sizes={sizes}
            />
          )}

          {/* WebP - Good compression, wide support */}
          {isOptimized && (
            <source
              type="image/webp"
              srcSet={buildSrcSet('webp')}
              sizes={sizes}
            />
          )}

          {/* JPEG - Universal fallback */}
          <img
            src={src}
            srcSet={isOptimized ? buildSrcSet('jpg') : undefined}
            sizes={isOptimized ? sizes : undefined}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            className={`w-full h-full transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit }}
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      ) : (
        /* Error fallback */
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
          <div className="text-center text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Loading indicator for priority images */}
      {priority && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-primary-cyan border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  objectFit: PropTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']),
  placeholder: PropTypes.string,
  dominantColor: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

export default OptimizedImage;
