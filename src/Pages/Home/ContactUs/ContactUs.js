import React from 'react';
import { toast } from 'react-toastify';

const AboutUs = () => {

    const handleSubmit = event => {
        event.preventDefault();
        toast.success('Submited successful.')
    }
    return (
        <section className='container mx-auto my-12 bg-gradient-to-r from-slate-400 to-slate-300'>
            <div className="card-body w-11/12 lg:w-5/12 mx-auto">
                <h4 className='text-2xl text-primary font-bold text-center'>Contact Us</h4>
                <h1 className=" text-white text-3xl font-bold text-center mb-3">Stay connected with us</h1>
                <div className="form-control mt-5">
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered" required />
                </div>
                <div className="form-control mt-5">
                    <input type="text" name='subject' placeholder="Product" className="input input-bordered" required />
                </div>
                <div className="form-control mt-5">
                <textarea name='message' placeholder="Your message" className="textarea " required />
                </div>
                <div className="mt-6 mx-auto">
                <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;