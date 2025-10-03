import { useEffect } from 'react';

const SEO = ({
  title = 'gallerytwentythree - Celebrating American Art & Artists',
  description = 'Discover and celebrate diverse American artists at gallerytwentythree. A digital platform empowering creators across all 50 states with tools, resources, and visibility.',
  keywords = 'american art gallery, diverse artists, online art platform, contemporary art, artist community, art resources, digital gallery, artist empowerment',
  ogImage = '/images/gallery23-logo-cropped.jpg',
  ogType = 'website',
  author = 'Khalaf "Leaf" Jerry',
  structuredData = null
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph / Facebook
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');

      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }

      scriptElement.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset to default title on unmount
      document.title = 'gallerytwentythree - Celebrating American Art & Artists';
    };
  }, [title, description, keywords, ogImage, ogType, author, structuredData]);

  return null; // This component doesn't render anything
};

export default SEO;
