import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Briefcase, Gift, Trophy, BookOpen, Music, X, ArrowRight, Phone, MessageCircle, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'corporate',
        title: 'Corporate Events',
        desc: 'Professional meets, conferences & seminars',
        icon: <Briefcase size={32} />,
        image: '/assets/Star/star%205.jpeg',
        color: 'from-blue-500/20 to-indigo-500/20',
        gallery: [
            '/assets/Star/star%205.jpeg',
            '/assets/Star/star%207.jpeg',
            '/assets/Star/star%209.jpeg',
            '/assets/Star/star%2011.jpeg'
        ]
    },
    {
        id: 'birthday',
        title: 'Birthday Celebrations',
        desc: 'Milestone birthdays made spectacular',
        icon: <Gift size={32} />,
        image: '/assets/Birthday_decor/birthday-decor-1.jpg',
        color: 'from-yellow-500/20 to-amber-500/20',
        gallery: [
            '/assets/Birthday_decor/birthday-decor-1.jpg',
            '/assets/Birthday_decor/birthday-decor-2.jpg',
            '/assets/Birthday_decor/birthday-decor-3.jpg',
            '/assets/Birthday_decor/birthday-decor-4.jpg'
        ]
    },
    {
        id: 'anniversary',
        title: 'Anniversary Celebrations',
        desc: 'Romantic milestones & memorable celebrations',
        icon: <Heart size={32} />,
        image: '/assets/anniversary/anniversary-1.jpeg',
        color: 'from-red-500/20 to-pink-500/20',
        gallery: [
            '/assets/anniversary/anniversary-1.jpeg',
            '/assets/anniversary/anniversary-2.jpeg',
            '/assets/anniversary/anniversary-3.jpeg',
            '/assets/anniversary/anniversary-4.jpeg'
        ]
    },
    {
        id: 'baby-photoshoot',
        title: 'Baby Photoshoot',
        desc: 'Capturing precious moments of your little ones',
        icon: <Gift size={32} />,
        image: '/assets/Baby_Photoshoot/baby-photoshoot-1.jpg',
        color: 'from-purple-500/20 to-fuchsia-500/20',
        gallery: [
            '/assets/Baby_Photoshoot/baby-photoshoot-1.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-2.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-3.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-4.jpg'
        ]
    },
    {
        id: 'sports',
        title: 'Sports Events',
        desc: 'Tournaments, marathons & sports days',
        icon: <Trophy size={32} />,
        image: '/assets/Sports/sports.jpeg',
        color: 'from-green-500/20 to-emerald-500/20',
        gallery: [
            '/assets/Sports/sports.jpeg',
            '/assets/Sports/sports1.jpeg',
            '/assets/Sports/sports2.jpeg',
            '/assets/Sports/sports3.jpeg'
        ]
    },
    {
        id: 'wedding-decor-baby-shower',
        title: 'Wedding Decor and Baby shower',
        desc: 'Elegant decorations & special celebrations',
        icon: <Heart size={32} />,
        image: '/assets/Wedding Decor and Baby shower/wedding-baby-1.jpg',
        color: 'from-orange-500/20 to-amber-500/20',
        gallery: [
            '/assets/Wedding Decor and Baby shower/wedding-baby-1.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-2.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-3.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-4.jpg'
        ]
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
    const [selectedService, setSelectedService] = useState(null);

    const openServiceModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <>
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

                                    <div 
                                        onClick={() => openServiceModal(service)}
                                        className="mt-6 flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all cursor-pointer"
                                    >
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
                            <a href="https://wa.me/919176468656" target="_blank" rel="noreferrer" className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-full flex gap-2 items-center justify-center whitespace-nowrap">
                                <span className="text-xl">💬</span> Contact Us
                            </a>
                            <Link to="/contact" className="btn border border-white/30 hover:border-white text-white px-8 py-3 rounded-full flex items-center justify-center whitespace-nowrap">
                                Plan Your Event →
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-600 to-primary-800 p-8">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                        {selectedService.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-serif font-bold">{selectedService.title}</h2>
                                        <p className="text-primary-100 mt-1">{selectedService.desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
                                {/* Gallery Section */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                                            <ImageIcon size={24} className="text-primary-600" />
                                            Gallery
                                        </h3>
                                        <Link
                                            to="/gallery"
                                            state={{ category: selectedService.id }}
                                            className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition-colors group"
                                        >
                                            <span>See more</span>
                                            <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {selectedService.gallery.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="aspect-square rounded-xl overflow-hidden shadow-md group"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${selectedService.title} ${index + 1}`}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Section */}
                                <div className="border-t pt-8">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MessageCircle size={24} className="text-primary-600" />
                                        Get in Touch
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Interested in this service? Contact us to discuss your requirements and get a personalized quote.
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <a
                                            href="https://wa.me/919176468656"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600 transition-colors group"
                                        >
                                            <MessageCircle size={24} />
                                            <div className="text-left">
                                                <div className="font-semibold">WhatsApp</div>
                                                <div className="text-sm opacity-90">Chat with us instantly</div>
                                            </div>
                                            <ArrowRight size={20} className="ml-auto transform group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        
                                        <a
                                            href="tel:+919176468656"
                                            className="flex items-center gap-3 bg-primary-600 text-white px-6 py-4 rounded-xl hover:bg-primary-700 transition-colors group"
                                        >
                                            <Phone size={24} />
                                            <div className="text-left">
                                                <div className="font-semibold">Call Us</div>
                                                <div className="text-sm opacity-90">+91 91764 68656</div>
                                            </div>
                                            <ArrowRight size={20} className="ml-auto transform group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Services;
