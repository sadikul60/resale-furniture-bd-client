import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [signUpError, setSingUpError] = useState('');
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();

    const handleSignUP = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const option = data.option;

        const userInfo = {
            name,
            email,
            option,
        }
        
        createUser(email, password)
        .then((result) => {
            const user = result.user;
                toast.success('User Created successfully.')
                setSingUpError('');
                navigate('/')
                // console.log(user);
            const profile = {
                displayName: name,
            }

            updateUser(profile)
            .then(() => {
                
            })
            .catch(err => setSingUpError(err.message))
        })
        .catch(err => setSingUpError(err.message))
    }

    // handle login with google
    const handleLoginWithGoogle = () => {
        signInWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success('SignUp successfully.');
            navigate('/');
            console.log(user);
        })
        .catch(err => console.error(err.message))
    }

    return (
        <section className='container mx-auto my-12 bg-gradient-to-r from-slate-200 to-slate-400'>
            <div className='py-12 justify-center flex items-center'>
                <div className='bg-slate-100 p-5 border rounded-xl w-9/12 md:w-1/2 lg:w-4/12 mx-auto'>
                    <form onSubmit={handleSubmit(handleSignUP)} className='grid grid-cols-1 gap-1'>
                        <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
                        <div className="form-control">
                            <p className='text-red-600'>{signUpError}</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required"})} placeholder="email address" className="input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>} 
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required"})} placeholder="email address" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>} 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Options</span>
                            </label>
                            <select {...register("option", { required: "Option is required"})} name="option" className="select select-bordered w-full">
                                <option>Normal User</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: "Password is required"})} placeholder="password" className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-primary text-white font-bold mt-4' type="submit" value="Sign Up" />
                    </form>
                    <p className='font-bold mt-3 text-center'>Already have an account? <Link to='/login' className='link link-hover text-red-600'>Login Now</Link></p>
                    <div className="divider my-8"><span className='font-bold'>OR</span></div>
                    <div><button onClick={handleLoginWithGoogle} className='btn btn-neutral text-white font-bold w-full'>Continue with Google</button></div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;