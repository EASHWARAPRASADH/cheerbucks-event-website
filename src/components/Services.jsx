import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Gift, Award, BookOpen, Music } from 'lucide-react';

const services = [
    {
        title: 'Wedding Events',
        desc: 'Magical ceremonies & elaborate receptions',
        icon: <Heart size={32} />,
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
        color: 'from-pink-500/20 to-rose-500/20'
    },
    {
        title: 'Corporate Events',
        desc: 'Professional meets, conferences & seminars',
        icon: <Briefcase size={32} />,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
        title: 'Birthday Celebrations',
        desc: 'Milestone birthdays made spectacular',
        icon: <Gift size={32} />,
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
        color: 'from-yellow-500/20 to-amber-500/20'
    },
    {
        title: 'Anniversary Parties',
        desc: 'Celebrating love milestones in style',
        icon: <Award size={32} />,
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
        color: 'from-purple-500/20 to-fuchsia-500/20'
    },
    {
        title: 'School & College',
        desc: 'Annual days, fests & graduations',
        icon: <BookOpen size={32} />,
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
        color: 'from-green-500/20 to-emerald-500/20'
    },
    {
        title: 'Cultural Programs',
        desc: 'Traditional celebrations & functions',
        icon: <Music size={32} />,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
        color: 'from-orange-500/20 to-red-500/20'
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Services = () => {
    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4"
                    >
                        🎉 Our Services
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
                    >
                        Events We <span className="italic text-primary-600">Specialize In</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600"
                    >
                        From intimate family gatherings to massive corporate affairs, we handle every type of event with equal passion and professionalism.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-60`} />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-8 relative z-20 bg-white">
                                <div className="w-10 h-10 mb-4 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 line-clamp-2">{service.desc}</p>

                                <div className="mt-6 flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all cursor-pointer">
                                    <span>Learn more</span>
                                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Banner integrated into services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 rounded-full bg-primary-400/20 blur-2xl"></div>

                    <div className="max-w-2xl text-center md:text-left relative z-10 mb-8 md:mb-0">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Dream Event?</h3>
                        <p className="text-primary-100 text-lg">Let us turn your vision into a spectacular reality. Contact us today!</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                        <a href="tel:+919176468656" className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-full flex gap-2 items-center justify-center whitespace-nowrap">
                            <span className="text-xl">📞</span> Call Now
                        </a>
                        <a href="#contact" className="btn border border-white/30 hover:border-white text-white px-8 py-3 rounded-full flex items-center justify-center whitespace-nowrap">
                            View All Services →
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
