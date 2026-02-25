import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-50/50 blur-3xl opacity-60" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-100/30 blur-3xl opacity-60" />
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative lg:order-2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                                alt="About Cheerbucks"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass-card p-6 pr-10 border-l-4 border-l-primary-500"
                        >
                            <div className="font-serif text-5xl font-bold text-gray-900 leading-none">11+</div>
                            <div className="text-sm font-medium text-gray-600 mt-2 tracking-widest uppercase">Years of<br />Excellence</div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6"
                        >
                            ⭐ About Us
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight"
                        >
                            Creating Magic for <br />
                            <span className="italic text-primary-600">Every Occasion</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 mb-6 leading-relaxed"
                        >
                            Cheerbucks is Chennai's premier event planning company, dedicated to transforming your special moments into extraordinary celebrations. With over 11 years of experience, we've had the privilege of orchestrating thousands of unforgettable events.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                        >
                            Our passionate team of event specialists combines creativity, meticulous planning, and flawless execution to deliver experiences that exceed expectations.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                                    <Wand2 size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Creative Design</h4>
                                <p className="text-sm text-gray-500">Unique concepts for every event</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                                    <Clock size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Timely Delivery</h4>
                                <p className="text-sm text-gray-500">Always on schedule, every time</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                                    <Users size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Dedicated Team</h4>
                                <p className="text-sm text-gray-500">Professionals committed to you</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link
                                to="/about"
                                className="btn btn-outline px-8 rounded-full inline-flex items-center gap-2"
                            >
                                Learn Our Story <span>→</span>
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
