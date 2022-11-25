import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product, setProduct}) => {
    const {productName, img, description, resalePrice, originalPrice, location, phone, seller, usedYear} = product;
    return (
        <div className="card mx-4 bg-base-100 shadow-xl">
            <figure><img className='w-10/12 lg:h-96 rounded-lg' src={img} alt="Shoes" /></figure>
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
                <div className="flex justify-center mt-2">
                    <Link to='/' className="w-6/12 mr-2 btn btn-primary btn-outline rounded-3xl text-sm md:text-lg font-bold">
                        <p>Go Back</p>
                    </Link> 
                    <label
                        onClick={() => setProduct(product)}
                        htmlFor="booking-modal" className="w-6/12 btn btn-secondary btn-outline rounded-3xl text-sm md:text-lg font-bold">
                            <p>Book Now</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;