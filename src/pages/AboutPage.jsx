import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Stats from '../components/Stats';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-gray-50 flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-gray-900 opacity-80" />
                <div className="container relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-white font-bold mb-4"
                    >
                        About <span className="text-primary-400 italic">Cheerbucks</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Chennai's premier event planning company, dedicated to transforming your special moments into extraordinary celebrations.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow">
                <About />
                <Stats />
            </div>
        </div>
    );
};

export default AboutPage;
