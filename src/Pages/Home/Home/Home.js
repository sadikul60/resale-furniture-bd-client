import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <section className='container mx-auto my-12'>
            <Banner></Banner>
            <Categories></Categories>
        </section>
    );
};

export default Home;