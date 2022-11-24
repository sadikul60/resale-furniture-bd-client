import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div className='w-1/2 h-10 mx-auto mt-4 '>
            <Link to={`/category/${category?.categoryId}`}>
                <button  className='btn btn-primary w-full'>{category?.name}
                </button>
            </Link>
        </div>
    );
};

export default Category;