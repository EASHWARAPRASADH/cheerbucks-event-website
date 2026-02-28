// Image optimization utilities
export const optimizeImagePath = (src, options = {}) => {
  const {
    width,
    height,
    quality = 80,
    format = 'auto'
  } = options;

  // For now, return the original path
  // In a real app, you'd use a CDN like Cloudinary, ImageKit, or Vercel Image Optimization
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.append('w', width);
    if (height) params.append('h', height);
    params.append('q', quality);
    params.append('f', format);
    
    // Add optimization parameters (placeholder for actual CDN)
    return `${src}?${params.toString()}`;
  }
  
  return src;
};

export const generateSrcSet = (src, breakpoints = [320, 640, 768, 1024, 1280]) => {
  return breakpoints
    .map(width => `${optimizeImagePath(src, { width })} ${width}w`)
    .join(', ');
};

export const getResponsiveImageProps = (src, alt, className = '') => {
  return {
    src,
    alt,
    className,
    loading: 'lazy',
    decoding: 'async',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    srcSet: generateSrcSet(src)
  };
};
