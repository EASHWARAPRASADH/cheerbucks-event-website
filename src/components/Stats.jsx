import { useState, useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import { Users, CheckCircle, MapPin } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './ScrollReveal';

const StatCounter = ({ value, duration = 2, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration,
                onUpdate(value) {
                    setCount(Math.floor(value));
                },
                ease: "easeOut"
            });
            return () => controls.stop();
        }
    }, [value, duration, isInView]);

    return (
        <div ref={ref} className="font-serif text-5xl font-bold text-gray-900 mb-2">
            {count}{suffix}
        </div>
    );
};

import PropTypes from 'prop-types';

StatCounter.propTypes = {
  value: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string
};

const Stats = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">

                    <StaggerItem delay={0.1} className="flex flex-col lg:items-start items-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                            <CheckCircle size={32} />
                        </div>
                        <StatCounter value={5000} />
                        <div className="text-lg font-semibold text-gray-800">Events Celebrated</div>
                        <div className="text-gray-500 mt-1">Across Chennai & Beyond</div>
                    </StaggerItem>

                    <StaggerItem delay={0.2} className="flex flex-col lg:items-start items-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                            <Users size={32} />
                        </div>
                        <StatCounter value={3500} />
                        <div className="text-lg font-semibold text-gray-800">Happy Clients</div>
                        <div className="text-gray-500 mt-1">Trusted by thousands</div>
                    </StaggerItem>

                    <StaggerItem delay={0.3} className="flex flex-col lg:items-start items-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                            <MapPin size={32} />
                        </div>
                        <StatCounter value={25} />
                        <div className="text-lg font-semibold text-gray-800">Cities Covered</div>
                        <div className="text-gray-500 mt-1">Across South India</div>
                    </StaggerItem>

                </StaggerContainer>
            </div>
        </section>
    );
};

export default Stats;
