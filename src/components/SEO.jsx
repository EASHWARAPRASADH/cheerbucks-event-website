import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  ogUrl,
  canonicalUrl,
  type = 'website',
  structuredData
}) => {
  const siteTitle = 'Cheerbucks Events - Premier Event Planning in Chennai';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Cheerbucks - Premier event planning company in Chennai with 11+ years of experience creating unforgettable weddings, corporate events, birthdays, and special celebrations.';
  const finalDescription = description || defaultDescription;
  const siteUrl = typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? 'https://cheerbucks.com' : ''; // eslint-disable-line no-undef
  const finalOgUrl = ogUrl || '';
  const finalCanonicalUrl = canonicalUrl || '';
  const finalOgImage = ogImage || '/assets/logo.jpeg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || 'event planning Chennai, wedding planners, birthday organizers, corporate events, event management, Cheerbucks, Chennai events, wedding decorations, anniversary celebrations, sports events, cultural programs'} />
      <meta name="author" content="Cheerbucks Events" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="ICBM" content="13.0827,80.2707" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Cheerbucks Events - Premier Event Planning in Chennai" />
      <meta property="og:site_name" content="Cheerbucks Events" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalOgUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalOgImage} />
      <meta property="twitter:image:alt" content="Cheerbucks Events - Premier Event Planning in Chennai" />
      <meta property="twitter:creator" content="@cheerbucks" />
      <meta property="twitter:site" content="@cheerbucks" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#f59e0b" />
      <meta name="msapplication-TileColor" content="#f59e0b" />
      <meta name="msapplication-TileImage" content={`${siteUrl}/assets/logo.jpeg`} />
      <link rel="apple-touch-icon" href={`${siteUrl}/assets/logo.jpeg`} />
      <link rel="icon" type="image/jpeg" href={`${siteUrl}/assets/logo.jpeg`} />
      <link rel="alternate" hrefLang="en" href={finalCanonicalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
  canonicalUrl: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object
};

export default SEO;
