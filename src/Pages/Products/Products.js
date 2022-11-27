import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);
     
    return (
        <section className='container mx-auto my-12 py-12 px-5 bg-gradient-to-r from-slate-300 to-slate-500'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product = {product}
                        setProduct = {setProduct}
                    ></Product>)
                }
            </div>
            {
                product && 
                <BookingModal 
                product = {product}
                setProduct = {setProduct}
            ></BookingModal>
            }
        </section>
    );
};

export default Products;