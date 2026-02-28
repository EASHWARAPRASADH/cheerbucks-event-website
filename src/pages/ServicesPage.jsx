import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-500 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-90" />
                <div className="container relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-white font-bold mb-4"
                    >
                        Our <span className="text-primary-400 italic">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Comprehensive event management solutions tailored to your unique needs.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow">
                <Services />
            </div>
        </div>
    );
};

export default ServicesPage;
