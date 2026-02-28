import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ArrowLeft, Image as ImageIcon, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateStructuredData } from '../utils/structuredData';

const categories = [
    {
        id: 'corporate',
        title: 'Corporate Events',
        coverImage: '/assets/Corporate_Events/corporate event 2.jpeg',
        images: [
            '/assets/Corporate_Events/corporate event 2.jpeg',
            '/assets/Corporate_Events/corporate event 3.jpeg',
            '/assets/Corporate_Events/corporate event 4.jpeg',
            '/assets/Corporate_Events/corporate event 5.jpeg',
            '/assets/Corporate_Events/corporate event 6.jpeg',
            '/assets/Corporate_Events/corporate event 7.jpeg',
            '/assets/Corporate_Events/corporate event 8.jpeg',
            '/assets/Corporate_Events/corporate event 9.jpeg',
            '/assets/Corporate_Events/corporate event 10.jpeg',
            '/assets/Corporate_Events/corporate event 11.jpeg',
            '/assets/Corporate_Events/corporate event 12.jpeg',
            '/assets/Corporate_Events/corporate event 13.jpeg',
            '/assets/Corporate_Events/corporate event 14.jpeg',
            '/assets/Corporate_Events/corporate event 15.jpeg'
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
            '/assets/Birthday_decor/birthday-decor-15.jpg',
            '/assets/Birthday_decor/birthday-decor-16.jpg',
            '/assets/Birthday_decor/birthday-decor-17.jpg',
            '/assets/Birthday_decor/birthday-decor-18.jpg',
            '/assets/Birthday_decor/birthday-decor-19.jpg',
            '/assets/Birthday_decor/birthday-decor-20.jpg',
            '/assets/Birthday_decor/birthday-decor-21.jpg',
            '/assets/Birthday_decor/birthday-decor-22.jpg',
            '/assets/Birthday_decor/birthday-decor-23.jpg',
            '/assets/Birthday_decor/birthday-decor-24.jpg',
            '/assets/Birthday_decor/birthday-decor-25.jpg',
            '/assets/Birthday_decor/birthday-decor-26.jpg',
            '/assets/Birthday_decor/birthday-decor-27.jpg',
            '/assets/Birthday_decor/birthday-decor-28.jpg',
            '/assets/Birthday_decor/birthday-decor-29.jpg',
            '/assets/Birthday_decor/birthday-decor-30.jpg',
            '/assets/Birthday_decor/birthday-decor-31.jpg',
            '/assets/Birthday_decor/birthday-decor-32.png',
            '/assets/Birthday_decor/birthday-decor-33.jpg',
            '/assets/Birthday_decor/birthday-decor-34.jpg',
            '/assets/Birthday_decor/birthday-decor-35.jpg',
            '/assets/Birthday_decor/birthday-decor-36.jpg',
            '/assets/Birthday_decor/birthday-decor-37.jpg',
            '/assets/Birthday_decor/birthday-decor-38.jpg'
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
            '/assets/anniversary/anniversary-18.jpeg',
            '/assets/anniversary/anniversary-19.jpg',
            '/assets/anniversary/anniversary-20.jpg'
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
            '/assets/Baby_Photoshoot/baby-photoshoot-20.jpg',
            '/assets/Baby_Photoshoot/baby-photoshoot-21.jpeg'
        ]
    },
    {
        id: 'sports',
        title: 'Sports Events',
        coverImage: '/assets/Sports/sports1.jpeg',
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
            '/assets/Sports/sports11.jpeg',
            '/assets/Sports/sports12.jpeg',
            '/assets/Sports/sports13.jpeg',
            '/assets/Sports/sports14.jpeg',
            '/assets/Sports/sports15.jpeg',
            '/assets/Sports/sports16.jpeg',
            '/assets/Sports/sports17.jpeg',
            '/assets/Sports/sports18.jpeg',
            '/assets/Sports/sports19.jpeg',
            '/assets/Sports/sports20.jpeg'
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
            '/assets/Wedding Decor and Baby shower/wedding-baby-6.jpg',
            '/assets/Wedding Decor and Baby shower/wedding-baby-7.png'
        ]
    }
];

const GalleryPage = () => {
    const [activeFolder, setActiveFolder] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(categories);
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

    useEffect(() => {
        // Filter categories based on search term
        if (searchTerm.trim() === '') {
            setFilteredCategories(categories);
        } else {
            const filtered = categories.filter(category =>
                category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                category.id.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCategories(filtered);
        }
    }, [searchTerm]);

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
                ogImage="/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.25%20PM.jpeg"
                ogUrl="/gallery"
                canonicalUrl="/gallery"
                structuredData={structuredData}
            />
            <div className="min-h-screen bg-white flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-500 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-90" />
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
                    {/* Search Bar */}
                    {!activeFolder && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 sm:mb-12"
                        >
                            <div className="max-w-2xl mx-auto px-4">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search events by name or type..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 text-gray-900 placeholder-gray-500 bg-white shadow-sm text-base sm:text-lg"
                                    />
                                </div>
                                {searchTerm && (
                                    <div className="mt-3 sm:mt-4 text-center text-gray-600 text-sm sm:text-base">
                                        Found {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} matching &quot;{searchTerm}&quot;
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    <AnimatePresence mode="wait">
                        {!activeFolder ? (
                            <motion.div
                                key="folders"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                            >
                                {filteredCategories.map((category) => (
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
                                                className="w-full h-full object-cover object-[20%_0] scale-110 transform group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
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

                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
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
                                                className="w-full h-auto object-cover object-[20%_0] transform group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
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
