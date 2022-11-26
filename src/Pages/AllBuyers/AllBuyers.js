import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../Shared/Loader/Loader';

const AllBuyers = () => {
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users/user');
            const data = await res.json();
            return data;
        }
    });

    // handle delete user
    const handleDeleteUser = id => {

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Deleted user successful.');
            refetch();
        })
    }

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
                                    <td><button onClick={() => handleDeleteUser(usr._id)} className='btn btn-primary btn-outline rounded-3xl btn-xs'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;