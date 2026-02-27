import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Shield, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Page Header */}
            <section className="bg-primary-900 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-gray-900 opacity-80" />
                <div className="container relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-white font-bold mb-4"
                    >
                        Terms of <span className="text-primary-400 italic">Service</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Please read these terms carefully before using our event planning services.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 flex-grow">
                <div className="container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FileText size={24} className="text-primary-600" />
                                    Agreement to Terms
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Welcome to Cheerbucks Events! These Terms of Service ("Terms") govern your use of our 
                                    event planning services, website, and communications. By accessing or using our services, 
                                    you agree to be bound by these Terms.
                                </p>
                                <p className="text-gray-600 mt-3">
                                    <strong>Cheerbucks Events</strong> is a premier event planning company based in Chennai, 
                                    Tamil Nadu, India, providing wedding planning, corporate events, birthday celebrations, 
                                    and special occasion management services across South India.
                                </p>
                            </div>

                            {/* Services */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Calendar size={24} className="text-primary-600" />
                                    Our Services
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-gray-600">
                                        Cheerbucks Events provides the following event planning services:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li><strong>Wedding Planning:</strong> Complete wedding coordination from engagement to reception</li>
                                        <li><strong>Corporate Events:</strong> Business meetings, conferences, seminars, and corporate functions</li>
                                        <li><strong>Birthday Celebrations:</strong> Milestone birthday parties and themed celebrations</li>
                                        <li><strong>Sports Events:</strong> Tournaments, marathons, and sports day organization</li>
                                        <li><strong>School & College Events:</strong> Annual days, cultural fests, and graduation ceremonies</li>
                                        <li><strong>Cultural Programs:</strong> Traditional celebrations and cultural event management</li>
                                        <li><strong>Custom Events:</strong> Special occasion planning tailored to your requirements</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Client Responsibilities */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Accurate Information</h4>
                                            <p className="text-gray-600">Provide complete and accurate information about your event requirements</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Timely Payments</h4>
                                            <p className="text-gray-600">Make payments as per the agreed schedule and terms</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Cooperation</h4>
                                            <p className="text-gray-600">Provide necessary cooperation for smooth event execution</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Venue Access</h4>
                                            <p className="text-gray-600">Ensure timely access to event venue for setup and execution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Terms */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Payment Terms</h2>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Booking Amount</h4>
                                        <p className="text-gray-600">50% advance payment required to confirm booking</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Balance Payment</h4>
                                        <p className="text-gray-600">Remaining 50% payable 7 days before event date</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Payment Methods</h4>
                                        <p className="text-gray-600">Accept cash, bank transfer, UPI, and digital payments</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Refund Policy</h4>
                                        <p className="text-gray-600">
                                            Cancellation up to 30 days: 80% refund<br/>
                                            Cancellation 15-29 days: 50% refund<br/>
                                            Cancellation less than 15 days: No refund
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitation of Liability */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Shield size={24} className="text-primary-600" />
                                    Limitation of Liability
                                </h2>
                                <div className="space-y-3">
                                    <p className="text-gray-600">
                                        While we strive for perfection in event execution, please note:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li>We are not liable for circumstances beyond our control (weather, natural disasters)</li>
                                        <li>We are not responsible for vendor delays or third-party service failures</li>
                                        <li>Our liability is limited to the service fee paid for the specific event</li>
                                        <li>We recommend clients obtain appropriate event insurance</li>
                                        <li>We are not responsible for personal belongings or guest injuries</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Intellectual Property</h2>
                                <div className="space-y-3">
                                    <p className="text-gray-600">
                                        All content on our website, including designs, concepts, and materials, 
                                        is the intellectual property of Cheerbucks Events and protected by copyright laws.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li>You may not use our content without written permission</li>
                                        <li>Event photos and videos may be used for promotional purposes with your consent</li>
                                        <li>Custom designs remain our property until full payment is received</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Important Notices */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <AlertCircle size={24} className="text-primary-600" />
                                    Important Notices
                                </h2>
                                <div className="space-y-3">
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <h4 className="font-bold text-yellow-800 mb-2">Force Majeure</h4>
                                        <p className="text-yellow-700">
                                            We are not liable for delays or failures to perform due to circumstances 
                                            beyond our reasonable control, including but not limited to: natural disasters, 
                                            government actions, strikes, or pandemics.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-blue-800 mb-2">Service Modifications</h4>
                                        <p className="text-blue-700">
                                            We reserve the right to modify or discontinue services with prior notice. 
                                            Material changes will be communicated to affected clients.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Terms?</h3>
                                <p className="text-gray-600 mb-4">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-700"><strong>Email:</strong> cheerbucks21@gmail.com</p>
                                    <p className="text-gray-700"><strong>Phone:</strong> +91 91764 68656</p>
                                    <p className="text-gray-700"><strong>Address:</strong> N05/1st Floor, Nellayapar 1st Cross Street, 
                                    Bharathipuram, Chrompet, Chennai - 600044</p>
                                </div>
                            </div>

                            {/* Terms Updates */}
                            <div className="border-t pt-8">
                                <p className="text-sm text-gray-500 text-center">
                                    These Terms of Service were last updated on {new Date().toLocaleDateString('en-IN', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}. We reserve the right to update these terms at any time. 
                                    Continued use of our services constitutes acceptance of any changes.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
