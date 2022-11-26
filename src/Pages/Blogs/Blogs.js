import React from 'react';

const Blogs = () => {
    return (
        <section className='container mx-auto my-12 py-12 bg-gradient-to-r from-slate-300 to-slate-400'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl text-center underline font-bold mb-8'>Blogs Section</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='bg-base-100 rounded-xl p-12 shadow-xl text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-1</h1>
                        <p className='md:text-xl'><strong>The different ways to manage a state in a React application: </strong> 
                        Beau Carnes. React state management is a process for managing the data that React 
                        components need in order to render themselves. This data is typically stored in the 
                        component's state object. When the state object changes, the component will re-render 
                        itself. React state management is basically half of a React app. <br /> <br />
                        Which state management is best in React? React's useState is the best option for local 
                        state management. If you need a global state solution, the most popular ones are Redux, MobX,
                        and the built-in Context API. Your choice will depend on the size of your project, your 
                        needs, and your engineers' expertise.
                        </p>
                    </div>
                    <div className='bg-base-100 rounded-xl p-12 shadow-xl text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-2</h1>
                        <p className='md:text-xl'><strong>Prototypical is inheritance work: </strong>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. 
                        It is a method by which an object can inherit the properties and methods of another object. Traditionally, 
                        in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. <br /> <br />
                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property 
                        which holds a link to another object called its prototype. That prototype object has a prototype of its own, and 
                        so on until an object is reached with null as its prototype.
                        </p>
                    </div>
                    <div className='bg-base-100 rounded-xl p-12 shadow-xl text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-3</h1>
                        <p className='md:text-xl'><strong>Unit test is and we should write unit tests: </strong>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. 
                        Unit testing is an important step in the development process, because if done correctly, it can help detect 
                        early flaws in code which may be more difficult to find in later testing stages. <br /> <br />
                        The key is: when you write test you take the perspective of the one that will consume your code. It forces you 
                        to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become 
                        obvious and are immediately taken account when code is written the first time.
                        </p>
                    </div>
                    <div className='bg-base-100 rounded-xl p-12 shadow-xl text-start'>
                        <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-4</h1>
                        <p className='md:text-xl'><strong> React vs Angular vs Veu: </strong>
                        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an 
                        overlap with Angular and React with respect to their functionality like the use of components. Hence, the 
                        transition to Vue from either of the two is an easy option. <br /> <br />
                        One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also 
                        uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, 
                        Vue and React's performance difference is subtle since it is only a few milliseconds. <br /> <br />
                        Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly 
                        used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;