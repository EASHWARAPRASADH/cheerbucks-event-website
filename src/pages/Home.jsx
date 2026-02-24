import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <Services />
            <Testimonials />
        </>
    );
};

export default Home;
