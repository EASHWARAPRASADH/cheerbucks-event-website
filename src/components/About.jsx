import { Wand2, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp, FadeRight, StaggerContainer, StaggerItem } from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-50/50 blur-3xl opacity-60" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-100/30 blur-3xl opacity-60" />
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <FadeRight className="relative lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                                alt="Professional event planning team coordinating a beautiful wedding reception with elegant decorations"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <FadeUp delay={0.4} className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass-card p-6 pr-10 border-l-4 border-l-primary-500">
                            <div className="font-serif text-5xl font-bold text-gray-900 leading-none">11+</div>
                            <div className="text-sm font-medium text-gray-600 mt-2 tracking-widest uppercase">Years of<br />Excellence</div>
                        </FadeUp>
                    </FadeRight>

                    {/* Content Side */}
                    <div className="lg:order-1">
                        <FadeUp delay={0.1} className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6">
                            ⭐ About Us
                        </FadeUp>

                        <FadeUp delay={0.2} className="text-4xl md:text-5xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            Creating Magic for <br />
                            <span className="italic text-primary-600">Every Occasion</span>
                        </FadeUp>

                        <FadeUp delay={0.3} className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Cheerbucks is Chennai&apos;s premier event planning company, dedicated to transforming your special moments into extraordinary celebrations. With over 11 years of experience, we&apos;ve had the privilege of orchestrating thousands of unforgettable events.
                        </FadeUp>

                        <FadeUp delay={0.4} className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Our passionate team of event specialists combines creativity, meticulous planning, and flawless execution to deliver experiences that exceed expectations.
                        </FadeUp>

                        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            <StaggerItem delay={0.4}>
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                                    <Wand2 size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Creative Design</h4>
                                <p className="text-sm text-gray-500">Unique concepts for every event</p>
                            </StaggerItem>

                            <StaggerItem delay={0.5}>
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                                    <Clock size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Timely Delivery</h4>
                                <p className="text-sm text-gray-500">Always on schedule, every time</p>
                            </StaggerItem>

                            <StaggerItem delay={0.6}>
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                                    <Users size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Dedicated Team</h4>
                                <p className="text-sm text-gray-500">Professionals committed to you</p>
                            </StaggerItem>
                        </StaggerContainer>

                        <FadeUp delay={0.7}>
                            <Link
                                to="/about"
                                className="btn btn-outline px-8 rounded-full inline-flex items-center gap-2"
                            >
                                Learn Our Story <span>→</span>
                            </Link>
                        </FadeUp>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
