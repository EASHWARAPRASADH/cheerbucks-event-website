import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
    '/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.25%20PM.jpeg',
    '/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.26%20PM.jpeg',
    '/assets/Bithday/decoration/m%20birthday.jpeg',
    '/assets/Bithday/baby%201/2.jpg.jpeg',
    '/assets/Star/star%2012.jpeg',
    '/assets/Bithday/baby%203/b%20birthday.jpeg',
    '/assets/Bithday/baby%201/cake/1.jpg.jpeg',
    '/assets/Star/star%203.jpeg',
    '/assets/Bithday/baby%202/6b.jpg.jpeg',
    '/assets/Bithday/baby%201/decoration/3.jpg.jpeg',
    '/assets/Star/star%2021.jpeg',
    '/assets/Bithday/cake/cake%202.jpeg'
];

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-900 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-gray-900 opacity-80" />
                <div className="container relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-white font-bold mb-4"
                    >
                        Event <span className="text-primary-400 italic">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        A glimpse into the magical moments we've created.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 flex-grow">
                <div className="container">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className="break-inside-avoid overflow-hidden rounded-2xl shadow-md group relative"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
