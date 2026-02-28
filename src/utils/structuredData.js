// Structured Data Generator for SEO
export const generateStructuredData = (page) => {
  const isProduction = typeof process !== 'undefined' && process.env.NODE_ENV === 'production'; // eslint-disable-line no-undef
  const baseUrl = isProduction ? 'https://cheerbucks.com' : '';

  // Organization Data
  const organization = {
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    "name": "Cheerbucks Events",
    "description": "Premier event planning company in Chennai with 11+ years of experience creating unforgettable celebrations.",
    "url": baseUrl || "https://cheerbucks.com",
    "telephone": "+91 91764 68656",
    "email": "cheerbucks21@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 7, Guru Krupa, Usha Nagar Second Street, Ullagaram",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600091",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9516",
      "longitude": "80.1463"
    },
    "sameAs": [
      "https://www.facebook.com/cheerbucks",
      "https://www.instagram.com/cheerbucks",
      "https://www.twitter.com/cheerbucks",
      "https://www.youtube.com/cheerbucks",
      "https://wa.me/919176468656"
    ],
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa 09:00-20:00",
      "Su 10:00-18:00"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/logo.jpeg`,
      "width": 400,
      "height": 400
    },
    "image": `${baseUrl}/assets/logo.jpeg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Event Planning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Planning",
            "description": "Professional corporate events, conferences, and business meetings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Planning",
            "description": "Complete wedding coordination and decoration services"
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
        }
      ]
    }
  };

  switch (page) {
    case 'home':
      return {
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebSite",
            "@id": `${baseUrl}#website`,
            "url": baseUrl || "https://cheerbucks.com",
            "name": "Cheerbucks Events",
            "description": "Premier event planning company in Chennai with 11+ years of experience creating unforgettable weddings, corporate events, birthdays, and special celebrations.",
            "publisher": {
              "@id": `${baseUrl}#organization`
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${baseUrl}/search?q={search_term_string}`,
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
            "@id": `${baseUrl}/about#webpage`,
            "url": `${baseUrl}/about`,
            "name": "About Cheerbucks Events",
            "description": "Learn about Cheerbucks Events - Chennai's premier event planning company with 11+ years of experience creating unforgettable celebrations.",
            "isPartOf": {
              "@id": `${baseUrl}#website`
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl || "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": `${baseUrl}/about`
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
            "@id": `${baseUrl}/services#webpage`,
            "url": `${baseUrl}/services`,
            "name": "Event Planning Services - Cheerbucks Events",
            "description": "Explore our comprehensive event planning services including weddings, corporate events, birthdays, sports events, and cultural programs in Chennai.",
            "isPartOf": {
              "@id": `${baseUrl}#website`
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl || "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": `${baseUrl}/services`
                }
              ]
            }
          },
          {
            "@type": "Service",
            "@id": `${baseUrl}/services#service`,
            "name": "Event Planning Services",
            "description": "Professional event planning services for weddings, corporate events, birthdays, sports events, and cultural programs in Chennai.",
            "provider": {
              "@id": `${baseUrl}#organization`
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
            "@id": `${baseUrl}/gallery#webpage`,
            "url": `${baseUrl}/gallery`,
            "name": "Event Gallery - Cheerbucks Events",
            "description": "Browse our extensive gallery of successful events including weddings, corporate events, birthdays, and celebrations across Chennai.",
            "isPartOf": {
              "@id": `${baseUrl}#website`
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl || "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Gallery",
                  "item": `${baseUrl}/gallery`
                }
              ]
            },
            "mainEntity": {
              "@type": "ImageGallery",
              "@id": `${baseUrl}/gallery#gallery`,
              "name": "Cheerbucks Events Gallery",
              "description": "Collection of photos from our successful events including weddings, corporate events, birthdays, and celebrations.",
              "url": `${baseUrl}/gallery`,
              "provider": {
                "@id": `${baseUrl}#organization`
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
            "@id": `${baseUrl}/contact#webpage`,
            "url": `${baseUrl}/contact`,
            "name": "Contact Cheerbucks Events",
            "description": "Get in touch with Cheerbucks Events for premier event planning services in Chennai. Contact us for weddings, corporate events, birthdays, and special celebrations.",
            "isPartOf": {
              "@id": `${baseUrl}#website`
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl || "https://cheerbucks.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": `${baseUrl}/contact`
                }
              ]
            },
            "mainEntity": {
              "@type": "ContactPage",
              "@id": `${baseUrl}/contact#contact`,
              "name": "Cheerbucks Events Contact",
              "description": "Contact Cheerbucks Events for premier event planning services in Chennai.",
              "url": `${baseUrl}/contact`,
              "provider": {
                "@id": `${baseUrl}#organization`
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
