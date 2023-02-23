import React from 'react';
import aboutImage from '../../../assets/about.png'

const About = () => {
    return (
        <section className='w-full mx-auto my-12 p-12 bg-gradient-to-r from-slate-300 to-slate-400'>
            <div>
                <h2 className='text-3xl text-primary font-bold text-center'>About Us</h2>
                <div className='border-2 border-red-500 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12'>
                <div>
                    <img className='w-full' src={aboutImage} alt="" />
                </div>
                <div>
                    <h1 className='text-xl mb-4'>About Us</h1>
                    <p className='md:text-xl'>Resale Furniture BD is the combination of first ever e-commerce and re-commerce marketplace in Bangladesh where customers can purchase anything by personalized orders as well as sell their unneeded/surplus products such as Kitchen, Bedroom, Dining Room anny things etc. and exchange also.
                        <br /> <br />
                        Resale Furniture BD arranges personalized orders for customers and delivers at their door steps. Hence, customers need not to worry about buying daily groceries or shopping some high-end gadgets, etc. Resale Furniture BD works as one-stop solution for its valuable customers whether it is about buying, selling or exchanging with whatever products they want.
                        </p>
                </div>
            </div>
        </section>
    );
};

export default About;