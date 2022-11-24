import React from 'react';

const MyOrder = ({bookingInfo, index}) => {
    const {img, productName, price} = bookingInfo;
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Payment</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>{index + 1}</th>
                    <td><img className='w-20 h-20 rounded-full' src={img} alt="" /></td>
                    <td>{productName}</td>
                    <td>${price}</td>
                    <td><button className='btn btn-primary btn-sm'>Pay</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;