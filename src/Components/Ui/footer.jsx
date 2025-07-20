import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

export default function Footer() {
    return (
        <main style={{backgroundColor:'rgba(39, 38, 38, 0.719)'}} className='mt-15 pl-20 pr-20 flex justify-center items-center'>
          <div className='grid grid-cols-3 gap-30 p-4'>

            <div className='flex items-center gap-4'>
                <FaMapMarkerAlt className='text-blue-400 text-2xl' />
                <div>
                    <h1 className='text-white font-mony text-xl font-semibold'>Find us</h1>
                <h1 className=' font-mony text-gray-400'>Pune Maharashtra</h1>
                </div>
                
                </div>

            <div className='flex items-center gap-4'>
                <IoCall className='text-blue-400 text-2xl' />
                <div>
                    <h1 className='text-white font-mony text-xl font-semibold'>Contact us</h1>
                <h1 className=' font-mony text-gray-400'>+ 6969696969</h1>
                </div>
                
                </div>

            <div className='flex items-center gap-4'>
                <IoMail className='text-blue-400 text-2xl' />
                <div>
                    <h1 className='text-white font-mony text-xl font-semibold'>Mail us</h1>
                <h1 className=' font-mony text-gray-400'>worldatlas@gmail.com</h1>
                </div>
                
                </div>
                

          
          </div>

        </main>

    )
}
