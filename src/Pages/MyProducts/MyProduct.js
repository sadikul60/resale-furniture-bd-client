import React from 'react';
import { Link } from 'react-router-dom';

const MyProduct = ({product}) => {
    const {productName, img, description, resalePrice, originalPrice, location, phone, seller, usedYear} = product;
    

    // handleDeleteProduct

    return (
        <div className="card w-10/12 lg:w-8/12 mx-auto bg-base-100 shadow-xl">
            <figure><img className='w-full lg:h-96 rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {productName}
                <div className="badge badge-secondary">GOOD</div>
                </h2>
                <p>{description}</p>
                <p className='font-bold'>Resale Price: ${resalePrice}</p>
                <p className='font-bold'>Original Price: ${originalPrice}</p>
                <p className='font-bold'>Used year: {usedYear}</p>
                <p className='font-bold'>Location: {location}</p>
                <p className='font-bold'>Seller: {seller}</p>
                <p className='font-bold'>Phone no: {phone}</p>
                <div className="flex justify-end mt-2"> 
                    <label
                       className="w-6/12 btn btn-secondary btn-outline rounded-3xl text-sm md:text-lg font-bold">
                    <p>Delete</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;