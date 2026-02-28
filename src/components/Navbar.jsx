import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Reset mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine active link style
    const getLinkStyle = ({ isActive }) => {
        const baseStyle = "text-sm font-medium transition-colors ";

        if (isActive) {
            return baseStyle + "text-primary-500 font-bold border-b-2 border-primary-500 pb-1";
        }

        return baseStyle + (isScrolled
            ? 'text-gray-700 hover:text-primary-600'
            : 'text-gray-200 hover:text-white');
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/assets/logo.jpeg" alt="Cheerbucks Logo" className="h-10 w-10 rounded-full object-cover border-2 border-primary-400" />
                    <div className="flex flex-col">
                        <h1 className={`font-serif text-2xl font-bold leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Cheerbucks</h1>
                        <span className={`text-xs font-medium tracking-wide ${isScrolled ? 'text-primary-600' : 'text-white/80'}`}>Creating Memorable Occasions</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" className={getLinkStyle}>Home</NavLink>
                    <NavLink to="/about" className={getLinkStyle}>About</NavLink>
                    <NavLink to="/services" className={getLinkStyle}>Services</NavLink>
                    <NavLink to="/gallery" className={getLinkStyle}>Gallery</NavLink>
                    <Link to="/contact" className="btn btn-primary text-sm px-6 py-2">Plan Your Event</Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-card border-t border-gray-200 py-4 px-4 flex flex-col gap-2 shadow-xl">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => `text-lg font-medium py-3 px-4 rounded-lg transition-colors ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => `text-lg font-medium py-3 px-4 rounded-lg transition-colors ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/services" 
                        className={({ isActive }) => `text-lg font-medium py-3 px-4 rounded-lg transition-colors ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to="/gallery" 
                        className={({ isActive }) => `text-lg font-medium py-3 px-4 rounded-lg transition-colors ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        Gallery
                    </NavLink>
                    <Link to="/contact" className="btn btn-primary text-center mt-2 py-3">Plan Your Event</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
