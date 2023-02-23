import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OurStats = () => {

    // all users
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://resale-furniture-server-kappa.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    // all sellers
    const {data: sellers = []} = useQuery({
        queryKey: ['seller'],
        queryFn: async() => {
            const res = await fetch('https://resale-furniture-server-kappa.vercel.app/users/seller');
            const data = await res.json();
            return data;
        }
    });

    // all buyers
    const {data: buyers = []} = useQuery({
        queryKey: ['user'],
        queryFn: async() => {
            const res = await fetch('https://resale-furniture-server-kappa.vercel.app/users/user');
            const data = await res.json();
            return data;
        }
    });
    return (
        <section className='w-full mx-auto my-12 p-12 bg-gradient-to-r from-slate-400 to-slate-300'>
            <div>
                <h2 className='text-3xl text-primary font-bold text-center'>Our Stats</h2>
                <div className='border-2 border-red-500 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center'>
                <div className='bg-slate-100 p-8 shadow-2xl rounded-lg hover:bg-gradient-to-r from-primary to-neutral hover:text-white'>
                    <h3 className='text-4xl font-semibold'>All Users</h3>
                    <h1 className='text-7xl font-bold mt-4' >{users.length}</h1>
                </div>
                <div className='bg-slate-100 p-8 shadow-2xl rounded-lg hover:bg-gradient-to-r from-neutral to-primary hover:text-white'>
                    <h3 className='text-4xl font-semibold'>All Buyers</h3>
                    <h1 className='text-7xl font-bold mt-4'>{buyers.length}</h1>
                </div>
                <div className='bg-slate-100 p-8 shadow-2xl rounded-lg hover:bg-gradient-to-r from-primary to-neutral hover:text-white'>
                    <h3 className='text-4xl font-semibold'>All Sellers</h3>
                    <h1 className='text-7xl font-bold mt-4'>{sellers.length}</h1>
                </div>
            </div>
        </section>
        
    );
};

export default OurStats;