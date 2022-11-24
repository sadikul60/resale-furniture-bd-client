import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    
    const {data: categoris = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='w-5/12 mx-auto my-12 p-5 bg-gradient-to-r from-slate-300 to-slate-400'>
            <h1 className='text-2xl font-bold text-center'>Products Category</h1>
            <div>
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