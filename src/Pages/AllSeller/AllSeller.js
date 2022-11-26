import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const AllSeller = () => {
    const {user} = useContext(AuthContext);

    const {data: users = [], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users/seller');
            const data = await res.json();
            return data;
        }
    });

    // loader (spinner)
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
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
                            <th>Action</th>
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
                                    <td><button className='btn btn-primary btn-outline rounded-3xl btn-xs'>Add Admin</button></td>
                                    <td><button className='btn btn-primary btn-outline rounded-3xl btn-xs'>Delete</button></td>
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