import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t-4 border-primary-500">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">

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
                        
                        {/* Social Media Links */}
                        <div className="flex gap-3 mb-6">
                            <a 
                                href="https://www.facebook.com/cheerbucks" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a 
                                href="https://www.instagram.com/cheerbucks" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a 
                                href="https://www.twitter.com/cheerbucks" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a 
                                href="https://www.youtube.com/cheerbucks" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                        
                        {/* Working Hours */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock size={16} className="text-primary-500" />
                            <span>Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</span>
                        </div>
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
                            <li><Link to="/services#corporate" className="hover:text-primary-400 transition-colors">Corporate Events</Link></li>
                            <li><Link to="/services#birthday" className="hover:text-primary-400 transition-colors">Birthday Celebrations</Link></li>
                            <li><Link to="/services#anniversary" className="hover:text-primary-400 transition-colors">Anniversary Celebrations</Link></li>
                            <li><Link to="/services#baby-photoshoot" className="hover:text-primary-400 transition-colors">Baby Photoshoot</Link></li>
                            <li><Link to="/services#sports" className="hover:text-primary-400 transition-colors">Sports Events</Link></li>
                            <li><Link to="/services#wedding-decor-baby-shower" className="hover:text-primary-400 transition-colors">Wedding Decor & Baby Shower</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-xl font-semibold mb-6">Get in Touch</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex gap-3">
                                <Phone size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="tel:+919176468656" className="block hover:text-white transition-colors font-medium">+91 91764 68656</a>
                                    <a href="tel:+916380070721" className="block hover:text-white transition-colors">+91 63800 70721</a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                                <a href="mailto:cheerbucks21@gmail.com" className="hover:text-white transition-colors">cheerbucks21@gmail.com</a>
                            </li>
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">No 7, Guru Krupa, Usha Nagar Second Street, Ullagaram, Chennai - 600091</span>
                            </li>
                            <li className="flex gap-3">
                                <Clock size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Business Hours</div>
                                    <div className="text-gray-400">Mon-Sat: 9AM-8PM</div>
                                    <div className="text-gray-400">Sunday: 10AM-6PM</div>
                                </div>
                            </li>
                        </ul>
                        
                        {/* Quick Contact Buttons */}
                        <div className="mt-6 space-y-2">
                            <a
                                href="https://wa.me/919176468656"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.497.099-.198-.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085.1.758-.719 2.006-1.413-.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 012.893 6.994c-.003 5.45 4.436-9.884 9.888-9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                            >
                                <Mail size={16} />
                                Send Message
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col gap-4 text-sm text-gray-500">
                    <p className="text-center">© 2025 Cheerbucks™. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="hidden sm:inline">|</span>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <p className="text-center">Powered by <a href="https://www.technosprint.net" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Technosprint Info Solutions</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
