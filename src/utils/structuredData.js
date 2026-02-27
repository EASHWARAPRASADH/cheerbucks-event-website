import React from 'react';

// Structured Data Generator for SEO
export const generateStructuredData = (page, data = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@graph": []
  };

  // Organization Data
  const organization = {
    "@type": "Organization",
    "@id": "https://cheerbucks.com#organization",
    "name": "Cheerbucks Events",
    "description": "Premier event planning company in Chennai with 11+ years of experience creating unforgettable celebrations.",
    "url": "https://cheerbucks.com",
    "telephone": "+91 91764 68656",
    "telephone": "+91 63800 70721",
    "email": "cheerbucks21@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "N05/1st Floor, Nellayapar 1st Cross Street, Bharathipuram, Chrompet",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600044",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9516",
      "longitude": "80.1463"
    },
    "sameAs": [
      "https://wa.me/919176468656"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cheerbucks.com/assets/logo.jpeg",
      "width": 400,
      "height": 400
    },
    "image": "https://cheerbucks.com/assets/logo.jpeg"
  };

  switch (page) {
    case 'home':
      return {
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebSite",
            "@id": "https://cheerbucks.com#website",
            "url": "https://cheerbucks.com",
            "name": "Cheerbucks Events",
            "description": "Premier event planning company in Chennai with 11+ years of experience creating unforgettable weddings, corporate events, birthdays, and special celebrations.",
            "publisher": {
              "@id": "https://cheerbucks.com#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cheerbucks.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      };

    case 'about':
      return {
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebPage",
            "@id": "https://cheerbucks.com/about#webpage",
            "url": "https://cheerbucks.com/about",
            "name": "About Cheerbucks Events",
            "description": "Learn about Cheerbucks Events - Chennai's premier event planning company with 11+ years of experience creating unforgettable celebrations.",
            "isPartOf": {
              "@id": "https://cheerbucks.com#website"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://cheerbucks.com/about"
                }
              ]
            }
          }
        ]
      };

    case 'services':
      return {
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebPage",
            "@id": "https://cheerbucks.com/services#webpage",
            "url": "https://cheerbucks.com/services",
            "name": "Event Planning Services - Cheerbucks Events",
            "description": "Explore our comprehensive event planning services including weddings, corporate events, birthdays, sports events, and cultural programs in Chennai.",
            "isPartOf": {
              "@id": "https://cheerbucks.com#website"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://cheerbucks.com/services"
                }
              ]
            }
          },
          {
            "@type": "Service",
            "@id": "https://cheerbucks.com/services#service",
            "name": "Event Planning Services",
            "description": "Professional event planning services for weddings, corporate events, birthdays, sports events, and cultural programs in Chennai.",
            "provider": {
              "@id": "https://cheerbucks.com#organization"
            },
            "serviceType": "Event Planning Service",
            "areaServed": "Chennai, Tamil Nadu, South India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Event Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Planning",
                    "description": "Complete wedding coordination from engagement to reception"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Events",
                    "description": "Business meetings, conferences, seminars, and corporate functions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Birthday Celebrations",
                    "description": "Milestone birthday parties and themed celebrations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sports Events",
                    "description": "Tournaments, marathons, and sports day organization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cultural Programs",
                    "description": "Traditional celebrations and cultural event management"
                  }
                }
              ]
            }
          }
        ]
      };

    case 'gallery':
      return {
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebPage",
            "@id": "https://cheerbucks.com/gallery#webpage",
            "url": "https://cheerbucks.com/gallery",
            "name": "Event Gallery - Cheerbucks Events",
            "description": "Browse our extensive gallery of successful events including weddings, corporate events, birthdays, and celebrations across Chennai.",
            "isPartOf": {
              "@id": "https://cheerbucks.com#website"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Gallery",
                  "item": "https://cheerbucks.com/gallery"
                }
              ]
            },
            "mainEntity": {
              "@type": "ImageGallery",
              "@id": "https://cheerbucks.com/gallery#gallery",
              "name": "Cheerbucks Events Gallery",
              "description": "Collection of photos from our successful events including weddings, corporate events, birthdays, and celebrations.",
              "url": "https://cheerbucks.com/gallery",
              "provider": {
                "@id": "https://cheerbucks.com#organization"
              }
            }
          }
        ]
      };

    case 'contact':
      return {
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebPage",
            "@id": "https://cheerbucks.com/contact#webpage",
            "url": "https://cheerbucks.com/contact",
            "name": "Contact Cheerbucks Events",
            "description": "Get in touch with Cheerbucks Events for premier event planning services in Chennai. Contact us for weddings, corporate events, birthdays, and special celebrations.",
            "isPartOf": {
              "@id": "https://cheerbucks.com#website"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://cheerbucks.com/contact"
                }
              ]
            },
            "mainEntity": {
              "@type": "ContactPage",
              "@id": "https://cheerbucks.com/contact#contact",
              "name": "Cheerbucks Events Contact",
              "description": "Contact Cheerbucks Events for premier event planning services in Chennai.",
              "url": "https://cheerbucks.com/contact",
              "provider": {
                "@id": "https://cheerbucks.com#organization"
              },
              "availableChannel": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91 91764 68656",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Tamil", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91 63800 70721",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Tamil", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "email": "cheerbucks21@gmail.com",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Tamil", "Hindi"]
                }
              ]
            }
          }
        ]
      };

    default:
      return {
        "@context": "https://schema.org",
        "@graph": [organization]
      };
  }
};
