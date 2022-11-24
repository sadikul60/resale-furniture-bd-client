import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <section className='container mx-auto my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product = {product}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default Products;