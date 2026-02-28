import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Calendar, Users, CreditCard, MapPin, Star, Shield } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from './ScrollReveal';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How far in advance should I book your services?",
            answer: "We recommend booking our services at least 2-3 months in advance for weddings and large events. For smaller events like birthdays, 1 month notice is usually sufficient. However, we can accommodate urgent requests based on availability.",
            icon: <Calendar size={20} />
        },
        {
            question: "What areas do you serve?",
            answer: "We are based in Chennai and provide event planning services across Tamil Nadu including Chennai, Coimbatore, Madurai, Trichy, Salem, and other major cities. We also handle destination events across South India. Please contact us to discuss your specific location requirements.",
            icon: <MapPin size={20} />
        },
        {
            question: "What is included in your event planning packages?",
            answer: "Our comprehensive packages include venue coordination, decoration and theme design, catering arrangements, photography/videography coordination, entertainment management, guest management, and on-site event supervision. We customize packages based on your specific needs and budget.",
            icon: <Star size={20} />
        },
        {
            question: "How do you price your services?",
            answer: "Our pricing is customized based on event type, guest count, complexity, and specific requirements. We offer transparent pricing with no hidden charges. After understanding your needs and budget, we provide a detailed proposal with all inclusions. We work within your budget to create the perfect event experience.",
            icon: <CreditCard size={20} />
        },
        {
            question: "Do you handle both indoor and outdoor events?",
            answer: "Absolutely! We have extensive experience with both indoor and outdoor events. For outdoor events, we provide weather contingency planning, appropriate tenting, lighting, and power backup. We ensure your event runs smoothly regardless of the venue type.",
            icon: <MapPin size={20} />
        },
        {
            question: "How many events do you handle simultaneously?",
            answer: "To ensure quality service, we typically handle 2-3 events per weekend, depending on size and complexity. Each event is assigned a dedicated team led by a senior event manager. We never compromise on attention to detail, regardless of how many events we're managing.",
            icon: <Users size={20} />
        },
        {
            question: "What makes Cheerbucks different from other event planners?",
            answer: "With 11+ years of experience and 3500+ successful events, we bring unmatched expertise. Our difference lies in personalized attention, creative designs, transparent pricing, extensive vendor network, and 24/7 support. We treat every event as our own and ensure perfection in every detail.",
            icon: <Star size={20} />
        },
        {
            question: "Do you provide event insurance?",
            answer: "While we don't directly provide insurance, we strongly recommend event insurance and can help you connect with insurance providers. Our contracts include liability coverage, and we maintain all necessary business licenses and insurance coverage for our operations.",
            icon: <Shield size={20} />
        },
        {
            question: "How do I get started with your services?",
            answer: "Getting started is easy! Contact us through our website, WhatsApp at +91 91764 68656, or call us. We'll schedule a consultation to understand your requirements, followed by a detailed proposal. Once you approve, we'll begin planning your dream event!",
            icon: <HelpCircle size={20} />
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-padding bg-white">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeUp className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4">
                        ❓ Frequently Asked Questions
                    </FadeUp>

                    <FadeUp delay={0.1} className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                        Got Questions? <span className="italic text-primary-600">We Have Answers</span>
                    </FadeUp>

                    <FadeUp delay={0.2} className="text-lg text-gray-600">
                        Find answers to common questions about our event planning services. 
                        Can&apos;t find what you&apos;re looking for? Feel free to contact us directly!
                    </FadeUp>
                </div>

                {/* FAQ Items */}
                <StaggerContainer staggerDelay={0.1} className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <StaggerItem key={index} delay={index * 0.1} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-50 transition-colors duration-200"
                            >
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                                        {faq.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                                </div>
                                <div className="flex-shrink-0">
                                    {activeIndex === index ? (
                                        <ChevronUp size={20} className="text-primary-600" />
                                    ) : (
                                        <ChevronDown size={20} className="text-gray-400" />
                                    )}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pl-17">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Contact CTA */}
                <FadeUp delay={0.5} className="text-center mt-16">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-primary-100 mb-6 text-lg">
                            Our team is here to help you plan the perfect event. 
                            Reach out to us for personalized assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919176468656"
                                className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors inline-flex items-center gap-2"
                            >
                                <span>Call Us</span>
                            </a>
                            <a
                                href="https://wa.me/919176468656"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2"
                            >
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default FAQ;
