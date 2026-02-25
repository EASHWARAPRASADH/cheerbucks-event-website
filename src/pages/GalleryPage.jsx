import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const categories = [
    {
        id: 'wedding',
        title: 'Wedding Events',
        coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
        images: [
            '/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.25%20PM.jpeg',
            '/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.26%20PM.jpeg',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80'
        ]
    },
    {
        id: 'corporate',
        title: 'Corporate Events',
        coverImage: '/assets/Star/star%2012.jpeg',
        images: [
            '/assets/Star/star%2012.jpeg',
            '/assets/Star/star%203.jpeg',
            '/assets/Star/star%2021.jpeg',
            'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80'
        ]
    },
    {
        id: 'birthday',
        title: 'Birthday Celebrations',
        coverImage: '/assets/Bithday/decoration/m%20birthday.jpeg',
        images: [
            '/assets/Bithday/decoration/m%20birthday.jpeg',
            '/assets/Bithday/baby%201/2.jpg.jpeg',
            '/assets/Bithday/baby%203/b%20birthday.jpeg',
            '/assets/Bithday/baby%201/cake/1.jpg.jpeg',
            '/assets/Bithday/baby%202/6b.jpg.jpeg',
            '/assets/Bithday/baby%201/decoration/3.jpg.jpeg',
            '/assets/Bithday/cake/cake%202.jpeg'
        ]
    },
    {
        id: 'sports',
        title: 'Sports Events',
        coverImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
            'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80',
            'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80'
        ]
    },
    {
        id: 'school',
        title: 'School & College',
        coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
        ]
    },
    {
        id: 'cultural',
        title: 'Cultural Programs',
        coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'
        ]
    }
];

const GalleryPage = () => {
    const [activeFolder, setActiveFolder] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeFolder]);

    const handleFolderClick = (category) => {
        setActiveFolder(category);
    };

    const handleBackClick = () => {
        setActiveFolder(null);
    };

    return (
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
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
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
    );
};

export default GalleryPage;
