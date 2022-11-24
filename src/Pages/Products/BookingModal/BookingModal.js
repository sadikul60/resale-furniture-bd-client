import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({product, setProduct}) => {
    const { user } = useContext(AuthContext);
    const { productName, img, resalePrice, } = product;

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const userName = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            productName,
            userName,
            img,
            price,
            email,
            phone
        }

        setProduct(null);
        console.log(booking)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        {productName}
                    </h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                        <input type="text" name='img' disabled defaultValue={img} className="input input-bordered w-full" />
                        <input type="text" name='productName' disabled defaultValue={productName} className="input input-bordered w-full" />
                        <input type="text" name='price' defaultValue={resalePrice} className="input input-bordered w-full" />
                        <input type="text" name="name" placeholder="Your Name" disabled defaultValue={user?.displayName} className="input input-bordered w-full" />
                        <input type="email" name="email" placeholder="Email Address" disabled defaultValue={user?.email} className="input input-bordered w-full" required />
                        <input type="text" name="phone" placeholder="Phone No" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-neutral w-full" />
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default BookingModal;