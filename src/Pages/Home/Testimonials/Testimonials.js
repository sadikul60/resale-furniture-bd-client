import React from 'react';
import { HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';
import person1 from "../../../assets/image/person1.jpg"
import person2 from "../../../assets/image/person2.avif"
import person3 from "../../../assets/image/person3.jpg"

const Testimonials = () => {
    const data = [
        {
            id: 1,
            img: person1,
            name: "Alina",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 2,
            img: person2,
            name: "Kowsik Roy",
            title: "Bussinessman",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 3,
            img: person3,
            name: "Jamal Vuwa",
            title: "Doctor",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 4,
            img: person1,
            name: "Alina",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 5,
            img: person2,
            name: "Kowsik Roy",
            title: "Bussinessman",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 6,
            img: person3,
            name: "Jamal Vuwa",
            title: "Doctor",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
    ]
    return (
        <section className='my-20'>
            <div>
                <h2 className='text-3xl text-primary font-bold text-center'>Testimonial</h2>
                <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-8 gap-8'>
                {
                    data.map(item => <div className='bg-primary rounded-xl'  key={item?.id}>
                        <img className='w-full h-48 mx-auto rounded-t-xl mb-6' src={item?.img} alt="" />
                        <div className='p-1 text-center'>
                            <h3 className='text-[21px] font-semibold mb-1'>{item?.name}</h3>
                            <h4 className='text-[18px] mb-2'>{item?.title}</h4>
                            <div className='flex justify-center mb-6 '>
                                <HiStar className='w-7 h-7 text-yellow-500'></HiStar>
                                <HiStar className='w-7 h-7 text-yellow-500'></HiStar>
                                <HiStar className='w-7 h-7 text-yellow-500'></HiStar>
                                <HiStar className='w-7 h-7 text-yellow-500'></HiStar>
                                <HiStar className='w-7 h-7 text-yellow-500'></HiStar>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Link className='flex items-center justify-center text-center'>
                <button className='btn btn-secondary btn-outline rounded-3xl text-sm md:text-lg font-bold'>See More</button>
            </Link>
        </section>
    );
};

export default Testimonials;