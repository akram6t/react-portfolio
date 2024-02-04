import React from 'react';
import './Components.css';
import {BiLogoLinkedin} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='mx-5'>
        <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get In Touch</h2>
        <div className='mt-10 grid_contacts max-w-screen-xl mx-auto'>

            <div className='flex dark:bg-gray-800 items-center gap-4 transition duration-300 ease-in-out cursor-pointer p-5 rounded-lg bg-white hover:shadow-lg active:shadow-2xl shadow'>
                <div className='p-3 bg-indigo-800 text-white rounded-full'>
                <BiLogoLinkedin size={25}/>
                </div>
                <div>
                    <h3 className='text-2xl font-bold dark:text-gray-200'>LinkedIn</h3>
                    <p className='text-lg dark:text-gray-400'>https://linkedin.com/akram6t</p>
                </div>
            </div>

            <div className='flex dark:bg-gray-800 items-center gap-4 transition duration-300 ease-in-out cursor-pointer p-5 rounded-lg bg-white hover:shadow-lg active:shadow-2xl shadow'>
                <div className='p-3 bg-indigo-800 text-white rounded-full'>
                <AiOutlineMail size={25}/>
                </div>
                <div>
                    <h3 className='text-2xl font-bold dark:text-gray-200'>Email</h3>
                    <p className='text-lg dark:text-gray-400'>khanakram8435@gmail.com</p>
                </div>
            </div>
            <div className='flex dark:bg-gray-800 items-center gap-4 transition duration-300 ease-in-out cursor-pointer p-5 rounded-lg bg-white hover:shadow-lg active:shadow-2xl shadow'>
                <div className='p-3 bg-indigo-800 text-white rounded-full'>
                <AiOutlineMail size={25}/>
                </div>
                <div>
                    <h3 className='text-2xl font-bold dark:text-gray-200'>Email</h3>
                    <p className='text-lg dark:text-gray-400'>khanakram8435@gmail.com</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact