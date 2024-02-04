import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './Components.css';

const WhatIDo = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-3'>

<h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What I Do</h2>
        {/* <h1 className='text-3xl mt-10 lg:mt-0 lg:text-5xl text-center underline dark:text-slate-50'>What I Do</h1> */}
        <div className="grid_whatido mt-10 text-gray-900 bg:text-slate-50 text-xl">
            <div className='flex items-center shadow-lg bg-white dark:bg-gray-800 dark:text-slate-300 p-3 rounded-lg gap-3 hover:bg-slate-100 dark:hover:bg-slate-600'><span><FiCheck/></span> Prepare variety of different designs, layouts and websites</div>
            <div className='flex items-center shadow-lg bg-white dark:bg-gray-800 dark:text-slate-300 p-3 rounded-lg gap-3 hover:bg-slate-100 dark:hover:bg-slate-600'><span><FiCheck/></span> Actively listen to customers' requests, confirming full understanding before addressing concerns</div>
            <div className='flex items-center shadow-lg bg-white dark:bg-gray-800 dark:text-slate-300 p-3 rounded-lg gap-3 hover:bg-slate-100 dark:hover:bg-slate-600'><span><FiCheck/></span> Use Seo Optimization and other software tools to create to grow their business</div>
            <div className='flex ite    ms-center shadow-lg bg-white dark:bg-gray-800 dark:text-slate-300 p-3 rounded-lg gap-3 hover:bg-slate-100 dark:hover:bg-slate-600'><span><FiCheck/></span> Identify issues, analyzed information and provided solutions to problems</div>
            <div className='flex items-center shadow-lg bg-white dark:bg-gray-800 dark:text-slate-300 p-3 rounded-lg gap-3 hover:bg-slate-100 dark:hover:bg-slate-600'><span><FiCheck/></span> Convert graphic designs to usable web images using React JS</div>
        </div>

    </div>
  )
}

export default WhatIDo