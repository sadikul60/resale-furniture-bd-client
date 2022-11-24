import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
        .then( () => {toast.success('Log Out successful.')})
        .catch(err => console.log(err.message))
    }

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        {
            user ? 
            <>
            <li><button onClick={handleLogOut} className='btn btn-secondary btn-outline rounded-3xl' to='/login'><span className='text-white'>Log Out</span></button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <section>
            <div className=" w-full bg-primary ">
                <div className='container mx-auto navbar flex justify-between'>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-white rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-white normal-case md:text-xl md:font-bold">Resale Furniture BD</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-white font-bold p-0">
                    {menuItems}
                    </ul>
                </div>
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        Menu
                    </label>
                    {/* <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul> */}
                </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;