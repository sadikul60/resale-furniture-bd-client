import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';
import Category from './Category';

const Categories = () => {
    
    const {data: categoris = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch('https://resale-furniture-server-kappa.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <section className='w-full mx-auto my-12 p-12 bg-gradient-to-r from-slate-300 to-slate-400'>
            <div>
                <h2 className='text-3xl text-primary font-bold text-center'>Product Categories</h2>
                <div className='border-2 border-red-500 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12'>
                {
                    categoris.map(category => <Category
                        key={category._id}
                        category = {category}
                    ></Category>)
                }
            </div>
        </section>
    );
};

export default Categories;