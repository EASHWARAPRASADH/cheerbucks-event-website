import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Cheerbucks made our wedding absolutely magical! Every detail was perfect. They exceeded our expectations in every single way. Truly the best event team in Chennai!",
        name: "Priya & Karthik Sharma",
        event: "Wedding Reception • 2024",
        initials: "P",
        color: "from-primary-500 to-primary-700"
    },
    {
        text: "Outstanding service for our corporate annual meet! Professional, punctual, and perfectly organized. Cheerbucks truly understands what corporate clients need. Highly recommended!",
        name: "Rajesh Kumar",
        event: "Corporate Annual Meet • 2023",
        initials: "R",
        color: "from-blue-500 to-indigo-700"
    },
    {
        text: "They turned our annual sports day into a grand affair! The team's dedication and organization were outstanding. Every participant was amazed by the arrangements!",
        name: "Lakshmi Venkataraman",
        event: "Annual Sports Meet • 2024",
        initials: "L",
        color: "from-emerald-400 to-teal-600"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4"
                    >
                        💬 Client Stories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
                    >
                        What Our <span className="italic text-primary-600">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-lg transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-lg transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Cards */}
                    <div className="overflow-hidden px-4 py-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="glass-card p-8 md:p-12 relative"
                            >
                                <div className="absolute top-8 right-8 text-primary-200 opacity-50">
                                    <Quote size={80} />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-primary-400 text-primary-400" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed relative z-10 font-serif italic">
                                    "{testimonials[current].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-xl font-serif font-bold shadow-md`}>
                                        {testimonials[current].initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                                        <p className="text-sm text-gray-500">{testimonials[current].event}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? "bg-primary-500 w-8" : "bg-primary-200 hover:bg-primary-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
