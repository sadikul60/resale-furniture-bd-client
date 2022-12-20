import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/UseToken';

const Login = () => {

    const { logIn, signInWithGoogle } = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    // handle login with email & password
    const handleLogin = data => {
        
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            setLoginError('')
            toast.success('Login successfully.');
            navigate(from, {replace: true});
            setLoginUserEmail(data.email);
            
        })
        .catch(err => setLoginError(err.message))
    };

    // handle login with google
    const handleLoginWithGoogle = () => {
        signInWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success('Login successfully.');
            navigate(from, {replace: true});
            setLoginUserEmail(user?.email);
            
        })
        .catch(err => console.error(err.message))
    }

    return (
        <section className='container mx-auto my-12 bg-gradient-to-r from-slate-300 to-slate-400'>
            <div className='py-12 justify-center flex items-center'>
                <div className='bg-slate-100 p-5 border rounded-xl w-9/12 md:w-1/2 lg:w-4/12 mx-auto'>
                    <form onSubmit={handleSubmit(handleLogin)} className='grid grid-cols-1 gap-1'>
                        <h1 className='text-4xl text-center font-bold'>Login</h1>
                        <div className="form-control">
                            <p className='text-red-600'>{loginError}</p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required"})} placeholder="email address" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>} 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: "Password is required"})} placeholder="password" className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-primary text-white font-bold mt-4' type="submit" value="Login" />
                    </form>
                    <p className='font-bold text-center mt-4 hidden md:block'>New to our Site? <Link to='/signup' className='link link-hover text-red-600'>Create New Account</Link></p>
                    <p className='font-bold text-center mt-4 md:hidden'>New to our Site? <Link to='/signup' className='link link-hover text-red-600'>Sign Up</Link></p>
                    <div className="divider my-8"><span className='font-bold'>OR</span></div>
                    <div><button onClick={handleLoginWithGoogle} className='btn btn-secondary text-white font-bold w-full'>Continue with Google</button></div>
                </div>
            </div>
        </section>
    );
};

export default Login;