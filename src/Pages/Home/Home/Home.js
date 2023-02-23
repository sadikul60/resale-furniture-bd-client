import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ContactUs from '../ContactUs/ContactUs';
import OurStats from '../OurStats/OurStats';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <section className='container mx-auto my-12'>
            <Banner></Banner>
            <Categories></Categories>
            <OurStats></OurStats>
            <About></About>
            <Testimonials />
            <ContactUs></ContactUs>
        </section>
    );
};

export default Home;