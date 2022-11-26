import React from 'react';
import img from '../../assets/cool.png'

const Dashboard = () => {
    return (
        <div className='w-11/12 mx-auto mt-48'>
            <img className='w-56 h-56 mx-auto rounded-full' src={img} alt="" />
            <h1 className='text-center text-4xl font-bold'>Please! Go to any Route of your choice.</h1>
        </div>
    );
};

export default Dashboard;