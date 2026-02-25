import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t-4 border-primary-500">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src="/assets/logo.jpeg" alt="Cheerbucks Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary-500" />
                            <div className="flex flex-col">
                                <h2 className="font-serif text-2xl font-bold text-white leading-none">Cheerbucks</h2>
                                <span className="text-xs text-primary-400 font-medium tracking-wide">Creating Memorable Occasions</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Premier event planning company in Chennai with 11+ years of experience creating unforgettable celebrations.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-serif text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-serif text-xl font-semibold mb-6">Our Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Wedding Events</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Corporate Events</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Birthday Parties</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Sports Events</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">School & College Events</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-xl font-semibold mb-6">Contact Info</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex gap-3">
                                <span className="text-primary-500 text-lg">📞</span>
                                <div>
                                    <a href="tel:+919176468656" className="block hover:text-white transition-colors">+91 9176468656</a>
                                    <a href="tel:+916380070721" className="block hover:text-white transition-colors">+91 6380070721</a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary-500 text-lg">✉️</span>
                                <a href="mailto:cheerbucks21@gmail.com" className="hover:text-white transition-colors">cheerbucks21@gmail.com</a>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary-500 text-lg">📍</span>
                                <span>N05/1st Floor, Nellayapar 1st Cross Street, Bharathipuram, Chrompet, Chennai - 600044</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2025 Cheerbucks™. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <p>Made with ❤️ in Chennai</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
