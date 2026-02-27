import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-900 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-gray-900 opacity-80" />
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6"
                    >
                        <div className="text-8xl md:text-9xl font-bold text-primary-400">404</div>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif text-white font-bold mb-4"
                    >
                        Page Not <span className="text-primary-400 italic">Found</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                    >
                        Oops! The page you're looking for seems to have vanished into thin air.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link 
                            to="/" 
                            className="btn btn-primary px-8 py-3 rounded-full flex items-center gap-2 justify-center"
                        >
                            <Home size={20} />
                            Back to Home
                        </Link>
                        
                        <button
                            onClick={() => window.history.back()}
                            className="btn bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-3 rounded-full flex items-center gap-2 justify-center transition-colors border border-white/20"
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Helpful Content */}
            <section className="py-20 flex-grow">
                <div className="container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
                            What brings you here?
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                    <Search size={32} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Looking for something?</h3>
                                <p className="text-gray-600 mb-4">Try searching or browsing our main sections.</p>
                                <Link to="/gallery" className="text-primary-600 hover:text-primary-800 font-medium">
                                    Browse Gallery →
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                    <Home size={32} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Plan an event?</h3>
                                <p className="text-gray-600 mb-4">Check out our services and get in touch.</p>
                                <Link to="/services" className="text-primary-600 hover:text-primary-800 font-medium">
                                    View Services →
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Need help?</h3>
                                <p className="text-gray-600 mb-4">Our team is here to assist you.</p>
                                <Link to="/contact" className="text-primary-600 hover:text-primary-800 font-medium">
                                    Contact Us →
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="text-center bg-gray-50 rounded-xl p-6"
                        >
                            <p className="text-gray-600 mb-4">
                                If you believe this is an error, please <a href="mailto:cheerbucks21@gmail.com" className="text-primary-600 hover:text-primary-800 font-medium">contact our support team</a>.
                            </p>
                            <p className="text-sm text-gray-500">
                                Error Code: 404 | Page Not Found
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;
