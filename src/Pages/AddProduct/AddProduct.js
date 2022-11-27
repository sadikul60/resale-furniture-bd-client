import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [AddDoctorError, setAddDoctorError] = useState('');
    
    const navigate = useNavigate()

    const {data : categories = [], isLoading , refetch} = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await fetch('https://resale-furniture-server-kappa.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = data => {

        const productName = data.productName;
        const categoryName = data.categoryName;
        const categoryId = data.categoryId;
        const resalePrice = data.resalePrice;
        const originalPrice = data.originalPrice;
        const phone = data.phone;
        const seller = data.seller;
        const email = data.email;
        const usedYear = data.usedYear;
        const location = data?.location;
        const description = data.description;
        const img = data.img;
        const type = data.type;

        const product = {
            productName,
            categoryName, 
            categoryId, 
            resalePrice, 
            originalPrice,
            location, 
            phone, 
            seller,
            email, 
            usedYear,
            img,
            description,
            type
        }

         //save doctor information to the database
         fetch('https://resale-furniture-server-kappa.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Product Uploaded successfully.');
            navigate('/dashboard/myProducts');
        }) 
    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='w-10/12 mx-6 p-5'>
            <h2 className='text-3xl text-center font-bold mb-6'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="form-control">
                <p className='text-red-600'>{AddDoctorError}</p>
                    <span className="label-text">ProductName</span>
                    <input type="text" {...register("productName", { required: "ProductName is required"})} placeholder="Product Name" className="input input-bordered" />
                    {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div>
                    <span className="label-text">Category name</span>
                    <select {...register('categoryName')} className="select select-bordered w-full">
                            {
                                categories.map((category, index) => <option key={index}>{category?.name}</option>)
                            }
                    </select>
                </div>
                <div>
                    <span className="label-text">CategoryId</span>
                    <select {...register('categoryId')} className="select select-bordered w-full">
                            {
                                categories.map((category, index) => <option key={index}>{category?.categoryId}</option>)
                            }
                    </select>
                </div>
                
                <div className="form-control">
                    <span className="label-text">Resale Price</span>
                    <input type="text" {...register("resalePrice", { required: "resalePrice is required"})} placeholder="Resale Price" className="input input-bordered" />
                    {errors.resalePrice && <p role="alert" className='text-red-600'>{errors.resalePrice?.message}</p>}
                </div>
                <div className="form-control">
                    <span className="label-text">Original Price</span>
                    <input type="text" {...register("originalPrice", { required: "originalPrice is required"})} placeholder="Original Price" className="input input-bordered" />
                    {errors.originalPrice && <p role="alert" className='text-red-600'>{errors.originalPrice?.message}</p>}
                </div>
                <div>
                    <span className="label-text">Product Type</span>
                    <select {...register('type')} className="select select-bordered w-full">
                             <option>Exellent</option>
                             <option>Good</option>
                             <option>Fair</option>
                    </select>
                </div>
                <div className="form-control">
                    <span className="label-text">Used years</span>
                    <input type="text" {...register("usedYear", { required: "usedYear is required"})} placeholder="Used Year" className="input input-bordered" />
                    {errors.userYear && <p role="alert" className='text-red-600'>{errors.usedYear?.message}</p>}
                </div>
                <div className="form-control">
                    <span className="label-text">Location</span>
                    <input type="text" {...register("location", { required: "Location is required"})} placeholder="Location" className="input input-bordered" />
                    {errors.location && <p role="alert" className='text-red-600'>{errors.location?.message}</p>}
                </div>
                <div className="form-control">
                    <span className="label-text">Seller</span>
                    <input defaultValue={user?.displayName} type="text" {...register("seller", { required: "Seller is required"})} placeholder="Seller name" className="input input-bordered" />
                    {errors.seller && <p role="alert" className='text-red-600'>{errors.seller?.message}</p>}
                </div>
                <div className="form-control">
                    <span className="label-text">Email</span>
                    <input defaultValue={user?.email} type="email" {...register("email", { required: "Email is required"})} placeholder="Seller name" className="input input-bordered" />
                    {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <span className="label-text">Phone no</span>
                    <input type="text" {...register("phone", { required: "phone is required"})} placeholder="Phone No" className="input input-bordered" />
                    {errors.phone && <p role="alert" className='text-red-600'>{errors.phone?.message}</p>}
                </div>
                <div className="form-control">
                <p className='text-red-600'>{AddDoctorError}</p>
                    <span className="label-text">PhotoURL</span>
                    <input type="text" {...register("img", { required: "photoURL is required"})} placeholder="Input PhotoURL" className="input input-bordered" />
                    {errors.img && <p role="alert" className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <div className="form-control">
                    <span className="label-text">Description</span>
                    <textarea {...register("description", { required: "Description is required"})} className="textarea textarea-bordered" placeholder="Description"></textarea>
                    {errors.description && <p role="alert" className='text-red-600'>{errors.description?.message}</p>}
                </div>
                <input className='btn btn-primary text-white font-bold mt-4' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddProduct;