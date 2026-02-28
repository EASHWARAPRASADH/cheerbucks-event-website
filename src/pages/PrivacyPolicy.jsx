import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
                        Privacy <span className="text-primary-400 italic">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                                    <Shield size={24} className="text-primary-600" />
                                    Our Commitment to Privacy
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    At Cheerbucks Events, we are committed to protecting your personal information and respecting your privacy. 
                                    This Privacy Policy outlines how we collect, use, store, and protect your data when you use our 
                                    event planning services in Chennai and across India.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Eye size={24} className="text-primary-600" />
                                    Information We Collect
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Personal Information</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                            <li>Name and contact details</li>
                                            <li>Phone number and email address</li>
                                            <li>Event preferences and requirements</li>
                                            <li>Communication preferences</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Event Details</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                            <li>Event type and date</li>
                                            <li>Venue location and capacity</li>
                                            <li>Budget range and special requirements</li>
                                            <li>Guest count and demographics</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Technical Information</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                            <li>IP address and device information</li>
                                            <li>Browser type and access times</li>
                                            <li>Pages visited and time spent</li>
                                            <li>Referral source and location data</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* How We Use Your Information */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <UserCheck size={24} className="text-primary-600" />
                                    How We Use Your Information
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Service Provision</h4>
                                            <p className="text-gray-600">To plan and execute your events according to your requirements</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Communication</h4>
                                            <p className="text-gray-600">To respond to inquiries, send quotes, and provide event updates</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Service Improvement</h4>
                                            <p className="text-gray-600">To analyze usage patterns and improve our event planning services</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary-600 text-sm font-bold">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Marketing</h4>
                                            <p className="text-gray-600">To send promotional offers (with your consent)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Data Protection */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lock size={24} className="text-primary-600" />
                                    Data Protection & Security
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-gray-600">
                                        We implement appropriate technical and organizational measures to protect your personal information:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li><strong>Secure Storage:</strong> Your data is stored on secure servers with restricted access</li>
                                        <li><strong>Encryption:</strong> Sensitive information is encrypted during transmission</li>
                                        <li><strong>Access Control:</strong> Only authorized personnel can access your information</li>
                                        <li><strong>Regular Updates:</strong> We regularly update our security measures</li>
                                        <li><strong>Data Minimization:</strong> We collect only information necessary for our services</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Your Rights */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800">Access & Correction</h4>
                                        <p className="text-gray-600">You can request access to or correction of your personal data</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Data Deletion</h4>
                                        <p className="text-gray-600">You can request deletion of your personal information</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Marketing Preferences</h4>
                                        <p className="text-gray-600">You can opt out of marketing communications at any time</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Complaints</h4>
                                        <p className="text-gray-600">You can file complaints about data handling with relevant authorities</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Privacy?</h3>
                                <p className="text-gray-600 mb-4">
                                    If you have any questions about this Privacy Policy or how we handle your data, 
                                    please contact us:
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-700"><strong>Email:</strong> cheerbucks21@gmail.com</p>
                                    <p className="text-gray-700"><strong>Phone:</strong> +91 91764 68656</p>
                                    <p className="text-gray-700"><strong>Address:</strong> N05/1st Floor, Nellayapar 1st Cross Street, 
                                    Bharathipuram, Chrompet, Chennai - 600044</p>
                                </div>
                            </div>

                            {/* Policy Updates */}
                            <div className="border-t pt-8">
                                <p className="text-sm text-gray-500 text-center">
                                    This Privacy Policy was last updated on {new Date().toLocaleDateString('en-IN', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}. We may update this policy periodically to reflect changes 
                                    in our practices or legal requirements.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
