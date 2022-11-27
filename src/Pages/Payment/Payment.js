import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const booking = useLoaderData();
    
    const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
    return (
        <div className='mx-6 p-12'>
      <h2 className="text-3xl">Payment for {}</h2>
      <p className="text-xl">
        Please pay <strong>${booking?.price}</strong> for your booking product on <strong>{booking?.productName}</strong>
        
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm
            booking = {booking}
          />
        </Elements>
      </div>
    </div>
    );
};

export default Payment;