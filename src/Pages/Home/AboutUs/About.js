import React from 'react';
import aboutImage from '../../../assets/about.png'

const About = () => {
    return (
        <section className='w-full mx-auto my-12 p-12 bg-gradient-to-r from-slate-300 to-slate-400'>
            <h1 className='text-2xl text-primary font-bold text-center mb-8'>About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12'>
                <div>
                    <img className='w-full' src={aboutImage} alt="" />
                </div>
                <div>
                    <h1 className='text-xl mb-4'>About Us</h1>
                    <p className='md:text-xl'>Resale Furniture BD is the combination of first ever e-commerce and re-commerce marketplace in Bangladesh where customers can purchase anything by personalized orders as well as sell their unneeded/surplus products such as Kitchen, Bedroom, Dining Room anny things etc. and exchange also.
                        <br /> <br />
                        Resale Furniture BD arranges personalized orders for customers and delivers at their door steps. Hence, customers need not to worry about buying daily groceries or shopping some high-end gadgets, etc. Resale Furniture BD works as one-stop solution for its valuable customers whether it is about buying, selling or exchanging with whatever products they want.
                        <br /> <br />
                        Resale Furniture BD offers a seller to sell unneeded items at any convenient location and time, and accepts various payment methods either digitally or by cash. SWAP’s goal is to give endless options to consumers - when a consumer gets money by selling his/her unneeded stuffs, it automatically increases his/her purchasing power at that moment.</p>
                </div>
            </div>
        </section>
    );
};

export default About;