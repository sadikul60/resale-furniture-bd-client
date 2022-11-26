import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader'

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const {data: bookings = [], isLoading, refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
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
            <h1 className='text-3xl font-bold text-center p-4'>My Orders: {bookings?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((bookingsInfo, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className='w-24 h-24 rounded-full' src={bookingsInfo?.img} alt="" /></td>
                                    <td>{bookingsInfo?.productName}</td>
                                    <td>${bookingsInfo?.price}</td>
                                    <td><button className='btn btn-secondary btn-outline rounded-3xl btn-sm'>Pay</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;