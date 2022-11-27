import React from 'react';
import AboutUs from '../ContactUs/ContactUs';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <section className='container mx-auto my-12'>
            <Banner></Banner>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </section>
    );
};

export default Home;