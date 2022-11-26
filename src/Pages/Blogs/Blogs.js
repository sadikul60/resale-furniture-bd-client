import React from 'react';

const Blogs = () => {
    return (
        <section className='container mx-auto my-12 py-12 bg-gradient-to-r from-slate-300 to-slate-400'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl text-center underline font-bold mb-8'>Blogs Section</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='bg-base-100 rounded-xl p-12 text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-1</h1>
                        <p className='md:text-xl'><strong></strong> 

                        </p>
                    </div>
                    <div className='bg-base-100 rounded-xl p-12 text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-2</h1>
                        <p className='md:text-xl'><strong></strong>

                        </p>
                    </div>
                    <div className='bg-base-100 rounded-xl p-12 text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-3</h1>
                        <p className='md:text-xl'><strong></strong>
                        
                        </p>
                    </div>
                    <div className='bg-base-100 rounded-xl p-12 shadow-xl text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-4</h1>
                        <p className='md:text-xl'><strong></strong>
                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;