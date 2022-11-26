import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UseSeller from '../../hooks/UseSeller';


const Product = ({product, setProduct}) => {
  
    const [users, setUsers] = useState([]);
    
    const {productName, img, description, resalePrice, originalPrice, location, phone, seller, usedYear, type} = product;
    
    // used axios
    useEffect( () => {
        axios.get('http://localhost:5000/users')
        .then(data => {
            const users = data.data;
            setUsers(users);
        });
    }, [])

    return (
        <div className="card mx-4 bg-base-100 shadow-xl">
            <figure><img className='w-10/12 lg:h-96 rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {productName}
                <div className="badge badge-secondary">{type}</div>
                </h2>
                <p>{description}</p>
                <p className='font-bold'>Resale Price: ${resalePrice}</p>
                <p className='font-bold'>Original Price: ${originalPrice}</p>
                <p className='font-bold'>Used year: {usedYear}</p>
                <p className='font-bold'>Location: {location}</p>
                <div className='flex justify-start items-center'>
                    <p className='font-bold'>Seller: {seller}</p>
                    {/* {
                        users.map((user, index) => <div key={index}>{
                            user?.verify ? <div className="form-control">
                        <label className="cursor-pointer label">
                            <input type="checkbox" checked className="checkbox checkbox-success" />
                        </label>
                      </div>
                      :
                      <p></p>
                        }</div>)
                    } */}
                </div>
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