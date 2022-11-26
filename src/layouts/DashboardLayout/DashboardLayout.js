import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/UseAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    return (
        <section className=''>
            <Navbar></Navbar>
            <div className='container mx-auto my-12 bg-gradient-to-r from-slate-300 to-slate-400'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-gradient-to-r from-primary to-neutral text-white font-bold">
                            
                            {
                                user && <li><Link to='/dashboard'>My Orders</Link></li>
                            }
                            {
                                user && <li><Link to='/dashboard/myProducts'>My Product</Link></li>
                            }
                            
                            {
                                user && isAdmin && <>
                                    <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                    <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                    <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                    <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;