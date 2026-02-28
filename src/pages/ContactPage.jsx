import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        eventType: 'Wedding',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        
        // Phone validation
        const phoneRegex = /^[+]?[\d\s\-)]+$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        } else if (formData.phone.replace(/\D/g, '').length < 10) {
            newErrors.phone = 'Phone number must be at least 10 digits';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const { name, phone, email, eventType, message } = formData;
            const phoneNumber = "919176468656";
            
            const text = `Hello Cheerbucks! I would like to plan an event.
            
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Event Type:* ${eventType}
*Message:* ${message}

Looking forward to hearing from you!`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            // Simulate a small delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            setSubmitStatus('success');
            
            // Reset form after successful submission
            setFormData({
                name: '',
                phone: '',
                email: '',
                eventType: 'Wedding',
                message: ''
            });
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            
            // Clear status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
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
                        className="text-5xl md:text-6xl font-serif text-white font-bold mb-4"
                    >
                        Contact <span className="text-primary-400 italic">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Let&apos;s start planning your dream event today.
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
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Ready to discuss your event?</h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                                            errors.name 
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                                : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                                        }`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle size={14} />
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                                            errors.phone 
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                                : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                                        }`}
                                        placeholder="+91 9876543210"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle size={14} />
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                                            errors.email 
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                                : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                                        }`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle size={14} />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                                    <select
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                                    >
                                        <option value="Wedding">Wedding</option>
                                        <option value="Corporate Event">Corporate Event</option>
                                        <option value="Birthday Party">Birthday Party</option>
                                        <option value="Sports Events">Sports Events</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className={`w-full px-4 py-3 rounded-lg border transition-all outline-none resize-none ${
                                        errors.message 
                                            ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                            : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                                    }`}
                                    placeholder="Tell us about your event vision..."
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                                >
                                    <CheckCircle size={20} className="text-green-600" />
                                    <div>
                                        <p className="font-semibold text-green-800">Message sent successfully!</p>
                                        <p className="text-sm text-green-600">WhatsApp should open shortly with your message.</p>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
                                >
                                    <AlertCircle size={20} className="text-red-600" />
                                    <div>
                                        <p className="font-semibold text-red-800">Something went wrong</p>
                                        <p className="text-sm text-red-600">Please try again or contact us directly.</p>
                                    </div>
                                </motion.div>
                            )}

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full btn btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send via WhatsApp'
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
