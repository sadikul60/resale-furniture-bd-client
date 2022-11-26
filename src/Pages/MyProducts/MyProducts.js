import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const {user} = useContext(AuthContext);
    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey: ['addProducts', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/addProducts/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    // Loader (spinner)
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='mb-12'>
            <h1 className='text-3xl font-bold text-center mb-6 p-4'>My Products: {products?.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
                {
                    products.map(product => <MyProduct
                        key={product._id}
                        product = {product}
                    ></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;