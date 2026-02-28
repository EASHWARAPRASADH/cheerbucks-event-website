import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FadeUp } from './ScrollReveal';

const testimonials = [
    {
        text: "CheerBucks made our event absolutely unforgettable! From planning to execution, everything was handled professionally and creatively. The team managed every detail perfectly and made our special day stress-free. Highly recommended for any kind of event!",
        name: "Karthikeyan M",
        event: "Special Celebration",
        initials: "K",
        color: "from-primary-500 to-primary-700"
    },
    {
        text: "We hired CheerBucks for our wedding, and they exceeded all expectations. The decoration, coordination, and overall management were flawless. The team was friendly, organized, and extremely professional. Truly the best event planners!",
        name: "Vigneshwaran S",
        event: "Wedding Celebration",
        initials: "V",
        color: "from-blue-500 to-indigo-700"
    },
    {
        text: "Our corporate event was handled by CheerBucks, and it was a grand success. Their creativity and attention to detail were outstanding. Everything was on time and perfectly executed. Looking forward to working with them again!",
        name: "Harishankar R",
        event: "Corporate Event",
        initials: "H",
        color: "from-emerald-400 to-teal-600"
    },
    {
        text: "If you're looking for a reliable event management company, CheerBucks is the one! They organized our cultural event beautifully. The stage setup, sound, lighting – everything was top-notch. Amazing teamwork and dedication!",
        name: "Lakshmi Priya",
        event: "Cultural Program",
        initials: "L",
        color: "from-purple-500 to-fuchsia-600"
    },
    {
        text: "We trusted CheerBucks for my child's birthday party, and they turned it into a magical celebration. The theme decor and arrangements were fantastic. The kids loved it, and we were stress-free throughout the event!",
        name: "Gayathri Shankar",
        event: "Birthday Party",
        initials: "G",
        color: "from-rose-400 to-red-600"
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
                    <FadeUp className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4">
                        💬 Client Stories
                    </FadeUp>

                    <FadeUp delay={0.1} className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                        What Our <span className="italic text-primary-600">Clients Say</span>
                    </FadeUp>

                    <FadeUp delay={0.2} className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real experiences from real clients who trusted us with their special moments
                    </FadeUp>
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
                                    &quot;{testimonials[current].text}&quot;
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
