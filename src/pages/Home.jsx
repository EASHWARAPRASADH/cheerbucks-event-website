import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { generateStructuredData } from '../utils/structuredData';

const Home = () => {
    const structuredData = generateStructuredData('home');
    
    return (
        <>
            <SEO 
                title="Premier Event Planning in Chennai | Wedding & Corporate Events"
                description="Cheerbucks Events - Chennai's premier event planning company with 11+ years of experience creating unforgettable weddings, corporate events, birthdays, and special celebrations."
                keywords="event planning Chennai, wedding planners Chennai, birthday organizers, corporate events Chennai, event management, Cheerbucks, wedding decorations, anniversary celebrations"
                ogImage="/assets/logo.jpeg"
                ogUrl=""
                canonicalUrl=""
                structuredData={structuredData}
            />
            <Hero />
            <About />
            <Stats />
            <Services />
            <Testimonials />
            <FAQ />
        </>
    );
};

export default Home;
