import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../Shared/Loader/Loader';

const AllSeller = () => {

    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://resale-furniture-server-kappa.vercel.app/users/seller');
            const data = await res.json();
            return data;
        }
    });


     // handle make admin
     const handleSellerVerify = id =>{
        fetch(`https://resale-furniture-server-kappa.vercel.app/users/verify/admin/${id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Seller verified successful.');
                refetch();
            }
        })
    };

    

    // handle delete user
    const handleDeleteUser = id => {

        fetch(`https://resale-furniture-server-kappa.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Deleted user successful.');
            refetch();
        })
    };

    // loader (spinner)
    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div className='mb-12'>
            <h1 className='text-3xl font-bold text-center p-4'>All Sellers: {users?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((usr, index) => <tr key={usr?._id}>
                                    <th>{index + 1}</th>
                                    <td>{usr?.name}</td>
                                    <td>{usr?.email}</td>
                                    <td>{usr?.option}</td>
                                    <td>
                                        {
                                            usr?.verify ? <div className="form-control">
                                                <label className="cursor-pointer label">
                                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                                </label>
                                            </div>
                                            :
                                            usr?.verify !== 'verified' && <button onClick={() => handleSellerVerify(usr._id)} className='btn btn-primary btn-outline rounded-3xl btn-xs'>Verify</button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDeleteUser(usr._id)} className='btn btn-secondary btn-outline rounded-3xl btn-xs'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;