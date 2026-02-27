import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateStructuredData } from '../utils/structuredData';

const categories = [
    {
        id: 'corporate',
        title: 'Corporate Events',
        coverImage: '/assets/Star/star%205.jpeg',
        images: [
            '/assets/Star/star%205.jpeg',
            '/assets/Star/star%207.jpeg',
            '/assets/Star/star%209.jpeg',
            '/assets/Star/star%2011.jpeg',
            '/assets/ad/card%20cheerbucks.jpeg',
            '/assets/ad/event%20cb.jpeg',
            '/assets/ad/event%20manager%20cb.jpeg',
            'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80',
            'https://images.unsplash.com/photo-1497366214043-9ec1a84c71f5?w=800&q=80'
        ]
    },
    {
        id: 'birthday',
        title: 'Birthday Celebrations',
        coverImage: '/assets/Birthday_decor/birthday-decor-1.jpg',
        images: [
            '/assets/Birthday_decor/birthday-decor-1.jpg',
            '/assets/Birthday_decor/birthday-decor-2.jpg',
            '/assets/Birthday_decor/birthday-decor-3.jpg',
            '/assets/Birthday_decor/birthday-decor-4.jpg',
            '/assets/Birthday_decor/birthday-decor-5.jpg',
            '/assets/Birthday_decor/birthday-decor-6.jpg',
            '/assets/Birthday_decor/birthday-decor-7.jpg',
            '/assets/Birthday_decor/birthday-decor-8.jpg',
            '/assets/Birthday_decor/birthday-decor-9.jpg',
            '/assets/Birthday_decor/birthday-decor-10.jpg',
            '/assets/Birthday_decor/birthday-decor-11.jpg',
            '/assets/Birthday_decor/birthday-decor-12.jpg',
            '/assets/Birthday_decor/birthday-decor-13.jpg',
            '/assets/Birthday_decor/birthday-decor-14.jpg',
            '/assets/Birthday_decor/birthday-decor-15.jpg'
        ]
    },
    {
        id: 'anniversary',
        title: 'Anniversary Celebrations',
        coverImage: '/assets/anniversary/anniversary-1.jpeg',
        images: [
            '/assets/anniversary/anniversary-1.jpeg',
            '/assets/anniversary/anniversary-2.jpeg',
            '/assets/anniversary/anniversary-3.jpeg',
            '/assets/anniversary/anniversary-4.jpeg',
            '/assets/anniversary/anniversary-5.jpeg',
            '/assets/anniversary/anniversary-6.jpeg',
            '/assets/anniversary/anniversary-7.jpeg',
            '/assets/anniversary/anniversary-8.jpeg',
            '/assets/anniversary/anniversary-9.jpeg',
            '/assets/anniversary/anniversary-10.jpeg',
            '/assets/anniversary/anniversary-11.jpeg',
            '/assets/anniversary/anniversary-12.jpeg',
            '/assets/anniversary/anniversary-13.jpeg',
            '/assets/anniversary/anniversary-14.jpeg',
            '/assets/anniversary/anniversary-15.jpeg',
            '/assets/anniversary/anniversary-16.jpeg',
            '/assets/anniversary/anniversary-17.jpeg',
            '/assets/anniversary/anniversary-18.jpeg'
        ]
    },
    {
        id: 'baby-photoshoot',
        title: 'Baby Photoshoot',
        coverImage: '/assets/Baby_Photoshoot/baby-photoshoot-1.jpg',
        images: [
            '/assets/Baby_Photoshoot/baby-photoshoot-1.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-2.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-3.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-4.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-5.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-6.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-7.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-8.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-9.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-10.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-11.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-12.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-13.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-14.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-15.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-16.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-17.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-18.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-19.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-20.jpg'
        ]
    },
    {
        id: 'sports',
        title: 'Sports Events',
        coverImage: '/assets/Sports/sports.jpeg',
        images: [
            '/assets/Sports/sports.jpeg',
            '/assets/Sports/sports1.jpeg',
            '/assets/Sports/sports2.jpeg',
            '/assets/Sports/sports3.jpeg',
            '/assets/Sports/sports4.jpeg',
            '/assets/Sports/sports5.jpeg',
            '/assets/Sports/sports6.jpeg',
            '/assets/Sports/sports7.jpeg',
            '/assets/Sports/sports8.jpeg',
            '/assets/Sports/sports9.jpeg',
            '/assets/Sports/sports10.jpeg',
            '/assets/Sports/sports11.jpeg'
        ]
    },
    {
        id: 'wedding-decor-baby-shower',
        title: 'Wedding Decor and Baby shower',
        coverImage: '/assets/Wedding Decor and Baby shower/wedding-baby-1.jpg',
        images: [
            '/assets/Wedding Decor and Baby shower/wedding-baby-1.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-2.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-3.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-4.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-5.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-6.jpg'
        ]
    }
];

const GalleryPage = () => {
    const [activeFolder, setActiveFolder] = useState(null);
    const location = useLocation();
    const structuredData = generateStructuredData('gallery');

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Check if we have a category from navigation state
        if (location.state?.category) {
            const category = categories.find(cat => cat.id === location.state.category);
            if (category) {
                setActiveFolder(category);
            }
        }
    }, [location.state]);

    const handleFolderClick = (category) => {
        setActiveFolder(category);
    };

    const handleBackClick = () => {
        setActiveFolder(null);
    };

    return (
        <>
            <SEO 
                title="Event Gallery - Wedding & Corporate Event Photos | Cheerbucks Events"
                description="Browse our extensive gallery of successful events including weddings, corporate events, birthdays, and celebrations across Chennai. See our event planning expertise."
                keywords="event gallery Chennai, wedding photos, corporate event photos, birthday celebration photos, event planning portfolio, Cheerbucks events gallery"
                ogImage="https://cheerbucks.com/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.25%20PM.jpeg"
                ogUrl="https://cheerbucks.com/gallery"
                canonicalUrl="https://cheerbucks.com/gallery"
                structuredData={structuredData}
            />
            <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-900 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-gray-900 opacity-80" />
                <div className="container relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={activeFolder ? 'album-title' : 'gallery-title'}
                        className="text-5xl md:text-6xl font-serif text-white font-bold mb-4"
                    >
                        {activeFolder ? (
                            <>
                                {activeFolder.title.split(' ')[0]} <span className="text-primary-400 italic">{activeFolder.title.split(' ').slice(1).join(' ')}</span>
                            </>
                        ) : (
                            <>
                                Event <span className="text-primary-400 italic">Gallery</span>
                            </>
                        )}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        {activeFolder ? `Browse our magnificent ${activeFolder.title.toLowerCase()} moments.` : "Explore our categorized event folders."}
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 flex-grow">
                <div className="container max-w-6xl">
                    <AnimatePresence mode="wait">
                        {!activeFolder ? (
                            <motion.div
                                key="folders"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {categories.map((category) => (
                                    <motion.div
                                        key={category.id}
                                        whileHover={{ y: -8 }}
                                        onClick={() => handleFolderClick(category)}
                                        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/30 transition-colors duration-300 z-10" />
                                            <img
                                                src={category.coverImage}
                                                alt={category.title}
                                                className="w-full h-full object-cover object-center scale-110 transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Folder Tab Visual Effect */}
                                            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 text-primary-700 font-medium shadow-md">
                                                <Folder size={20} className="fill-primary-200" />
                                                <span>{category.images.length} Photos</span>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white relative">
                                            <div className="absolute right-6 -top-6 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-20">
                                                <ImageIcon size={20} />
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{category.title}</h3>
                                            <p className="text-primary-600 font-medium group-hover:text-primary-800 flex items-center gap-2 transition-colors">
                                                Open Folder <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="album"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <button
                                    onClick={handleBackClick}
                                    className="mb-8 flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition-colors group px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md border border-primary-100 inline-flex"
                                >
                                    <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                                    Back to Folders
                                </button>

                                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                    {activeFolder.images.map((src, index) => (
                                        <motion.div
                                            key={`${activeFolder.id}-${index}`}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className="break-inside-avoid overflow-hidden rounded-2xl shadow-md group relative"
                                        >
                                            <img
                                                src={src}
                                                alt={`${activeFolder.title} Image ${index + 1}`}
                                                className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300 pointer-events-none" />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
        </>
    );
};

export default GalleryPage;
