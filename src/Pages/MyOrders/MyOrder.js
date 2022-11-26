import React from 'react';
import Loader from '../Shared/Loader/Loader';

const MyOrder = ({bookingsInfo, index, refetch, isLoading}) => {
    refetch();
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-24 h-24 rounded-full' src={bookingsInfo?.img} alt="" /></td>
            <td>{bookingsInfo?.productName}</td>
            <td>${bookingsInfo?.price}</td>
            <td><button className='btn btn-secondary btn-outline rounded-3xl btn-sm'>Pay</button></td>
        </tr>
    );
};

export default MyOrder;