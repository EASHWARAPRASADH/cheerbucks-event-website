import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Reveal animation variants
export const revealVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade up animation
export const FadeUp = ({ children, delay = 0, duration = 0.6, className = "", viewport = { once: true, margin: "-100px" } }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fade left animation
export const FadeLeft = ({ children, delay = 0, duration = 0.6, className = "", viewport = { once: true, margin: "-100px" } }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fade right animation
export const FadeRight = ({ children, delay = 0, duration = 0.6, className = "", viewport = { once: true, margin: "-100px" } }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale animation
export const ScaleIn = ({ children, delay = 0, duration = 0.6, className = "", viewport = { once: true, margin: "-100px" } }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container for animating multiple children
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger child item
export const StaggerItem = ({ children, delay = 0, duration = 0.6, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide in from bottom
export const SlideInBottom = ({ children, delay = 0, duration = 0.8, className = "", viewport = { once: true, margin: "-100px" } }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Parallax scroll effect
export const ParallaxScroll = ({ children, speed = 0.5, className = "" }) => (
  <motion.div
    style={{
      y: useScrollY(speed)
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Custom hook for parallax
const useScrollY = (speed = 0.5) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return scrollY;
};

export default FadeUp;
