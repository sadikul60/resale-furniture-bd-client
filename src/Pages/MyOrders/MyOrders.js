import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const {data: bookings = []} = useQuery({
        queryKey: ['bookings'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/bookings');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl font-bold text-center p-4'>My Orders: {bookings.length}</h1>
            <div>
                {
                    bookings.map((bookingInfo, index) => <MyOrder
                        key={bookingInfo._id}
                        bookingInfo = {bookingInfo}
                        index = {index}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;