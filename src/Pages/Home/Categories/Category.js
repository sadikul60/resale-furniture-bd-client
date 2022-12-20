import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const { name, img } = category;
    return (
        <div className='lg:w-full bg-gradient-to-r from-primary to-neutral mx-auto mt-4'>
            <Link to={`/category/${category?.categoryId}`}>
                <div className='text-center p-14 hover:animate-pulse'>
                    <img className='w-full rounded-lg' src={img} alt="" />
                    <p className='text-3xl font-semibold text-white mt-4'>{name}</p>
                </div>
            </Link>
        </div>
    );
};

export default Category;