import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/Error-message.png'
const ErrorHandlePage = () => {
    return (
        <div className='py-12 text-center'>
            <div>
                <img className='w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 rounded-full' src={image} alt="" />
            </div>
            <h2 className='text-6xl text-cyan-700 font-bold animate-bounce'>404</h2>
            <p className='text-3xl font-bold'>Sorry, Page not found.</p>
            <Link to='/'><button className='btn btn-primary mt-4'>Go To Home</button></Link>
        </div>
    );
};

export default ErrorHandlePage;