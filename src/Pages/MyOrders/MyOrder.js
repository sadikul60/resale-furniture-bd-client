import React from 'react';
import { Link } from 'react-router-dom';
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
            <td>
                      {
                        bookingsInfo?.price && !bookingsInfo?.paid && <Link
                        to={`/dashboard/payment/${bookingsInfo?._id}`}
                        ><button 
                        className="btn btn-primary btn-sm">Pay</button></Link>
                      }
                      {
                        bookingsInfo?.price && bookingsInfo?.paid && <span className="text-green-600 font-bold">Paid</span>
                      }
                    </td>
        </tr>
    );
};

export default MyOrder;