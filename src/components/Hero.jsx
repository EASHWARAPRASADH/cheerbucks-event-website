import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.26%20PM.jpeg"
                    alt="Elegant Event"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900"></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center px-4">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block mb-6 px-4 py-1 rounded-full border border-primary-400/50 bg-primary-500/10 backdrop-blur-sm text-primary-300 text-sm font-medium"
                >
                    ✨ Premier Event Management in Chennai
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-5xl"
                >
                    We Turn Your Moments <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 italic">
                        Into Celebrations
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl"
                >
                    From intimate family gatherings to grand corporate events, Cheerbucks crafts unforgettable experiences with 15+ years of excellence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">Plan Your Event</Link>
                    <a href="https://wa.me/919176468656" target="_blank" rel="noreferrer" className="btn px-8 py-4 text-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors">
                        WhatsApp Us
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-white"
                >
                    <div>
                        <div className="font-serif text-4xl font-bold text-primary-400">3000+</div>
                        <div className="text-sm text-gray-300 uppercase tracking-widest mt-1">Events</div>
                    </div>
                    <div>
                        <div className="font-serif text-4xl font-bold text-primary-400">50K+</div>
                        <div className="text-sm text-gray-300 uppercase tracking-widest mt-1">Happy Guests</div>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-t border-white/20 pt-8 md:pt-0 md:border-t-0 md:border-l md:pl-8">
                        <div className="font-serif text-4xl font-bold text-primary-400">15+</div>
                        <div className="text-sm text-gray-300 uppercase tracking-widest mt-1">Years Experience</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
