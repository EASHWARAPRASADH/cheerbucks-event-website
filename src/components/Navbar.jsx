import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="/" className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="Cheerbucks Logo" className="h-10 w-10 rounded-full object-cover border-2 border-primary-400" />
                    <div className="flex flex-col">
                        <h1 className={`font-serif text-2xl font-bold leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Cheerbucks</h1>
                        <span className={`text-xs font-medium tracking-wide ${isScrolled ? 'text-primary-600' : 'text-primary-300'}`}>Creating Memorable Occasions</span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="/" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-200 hover:text-white'}`}>Home</a>
                    <a href="#about" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-200 hover:text-white'}`}>About</a>
                    <a href="#services" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-200 hover:text-white'}`}>Services</a>
                    <a href="#gallery" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-200 hover:text-white'}`}>Gallery</a>
                    <a href="#contact" className="btn btn-primary text-sm px-6 py-2">Plan Your Event</a>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-card border-t border-gray-200 py-4 px-4 flex flex-col gap-4 shadow-xl">
                    <a href="/" className="text-lg font-medium py-2 border-b border-gray-100">Home</a>
                    <a href="#about" className="text-lg font-medium py-2 border-b border-gray-100">About</a>
                    <a href="#services" className="text-lg font-medium py-2 border-b border-gray-100">Services</a>
                    <a href="#gallery" className="text-lg font-medium py-2 border-b border-gray-100">Gallery</a>
                    <a href="#contact" className="btn btn-primary text-center mt-2">Plan Your Event</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
