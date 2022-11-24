import React from 'react';
import bedroom from '../../../assets/banner/bedroom.png';
import dining from '../../../assets/banner/diningroom.png';
import kitchen from '../../../assets/banner/kitchen.png';
import corridor from '../../../assets/banner/corridor.png';
import logo from '../../../assets/banner/logo.png';

const Banner = () => {
    return (
        <section className='p-5 bg-gradient-to-r from-primary to-neutral'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                <div className='hidden lg:block relative'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-white text-center font-bold mt-12'>
                        <span>Welcome!!</span> <br />
                        <span>To</span> <br />  
                        <span>Resale Furniture BD</span>
                    </h1>
                    <img className='absolute w-48 h-32 bottom-0' src={logo} alt="" />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    <figure>
                        <img className='w-full h-28 md:h-48 rounded-lg' src={bedroom} alt="" />
                    </figure>
                    <figure>
                        <img className='w-full h-28 md:h-48 rounded-lg' src={dining} alt="" />
                    </figure>
                    <figure>
                        <img className='w-full h-28 md:h-48 rounded-lg' src={kitchen} alt="" />
                    </figure>
                    <figure>
                        <img className='w-full h-28 md:h-48 rounded-lg' src={corridor} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Banner;