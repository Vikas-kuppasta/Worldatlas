import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import banner from './banner.jpg'

export default function Herosection() {
    return (
                <main className=' flex  pl-20 pr-20 pt-5 pb-5 mt-15 items-center justify-between'>
                    <div className='w-1/2'>
                        <h1 className='text-white font-mony font-bold text-5xl leading-13 '>Explore the World, One country at a Time. </h1>
                        <p className='text-white text-left font-mony mt-6 mb-9 '>"Explore the world and discover breathtaking landscapes, diverse cultures, and unforgettable experiences that open your mind, spark curiosity, and enrich your soul with endless wonder."
        </p>
                        <button className=' bg-gray-950 hover:bg-black  hover:scale-110  transition-transform duration-900    text-white font-mony flex items-center border-2 border-solid border-gray-500 gap-4 pt-1 pb-1 pl-8 pr-8 rounded-xl '>Start Exploring <FaCircleArrowRight className='mt-0.5 text-gray-500 text-xl' /></button>
                    </div>
                    <div>
                        <img className='w-xl h-xl rounded-2xl' src={banner} alt="" />
        
                    </div>
        
                </main>
    )
}


