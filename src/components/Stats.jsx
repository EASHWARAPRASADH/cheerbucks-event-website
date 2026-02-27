import React, { useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Star, Users, MapPin, CheckCircle } from 'lucide-react';

const StatCounter = ({ value, duration = 2, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration,
                onUpdate(value) {
                    setCount(Math.floor(value));
                },
                ease: "easeOut"
            });
            return () => controls.stop();
        }
    }, [value, duration, isInView]);

    return (
        <div ref={ref} className="font-serif text-5xl font-bold text-gray-900 mb-2">
            {count}{suffix}
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:items-start items-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                            <CheckCircle size={32} />
                        </div>
                        <StatCounter value={3500} />
                        <div className="text-lg font-semibold text-gray-800">Events Executed</div>
                        <div className="text-gray-500 mt-1">Across South India</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col lg:items-start items-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                            <Users size={32} />
                        </div>
                        <StatCounter value={30} suffix="K+" />
                        <div className="text-lg font-semibold text-gray-800">Happy Guests</div>
                        <div className="text-gray-500 mt-1">And counting!</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col lg:items-start items-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                            <MapPin size={32} />
                        </div>
                        <StatCounter value={11} />
                        <div className="text-lg font-semibold text-gray-800">Years Experience</div>
                        <div className="text-gray-500 mt-1">Since 2009</div>
                    </motion.div>



                </div>
            </div>
        </section>
    );
};

export default Stats;
