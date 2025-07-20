import React from 'react'

export default function Contact() {
    return (
        <main className='pl-20 pr-20 flex justify-center items-center '>
            <div className='p-4 mt-10 border-2 border-solid border-gray-400 flex flex-col items-center gap-5 rounded-xl '>
                <h1 className='text-white text-6xl font-mony font-medium'>Contact us</h1>
                <input className=' w-150 p-2 border-1 border-solid border-gray-800 font-mony text-gray-600 rounded-sm' type="text" placeholder='Enter your name' />
                <input className=' mt-2 w-150 p-2 border-1 border-solid border-gray-800 font-mony text-gray-600 rounded-sm' type="email" placeholder='Enter your email' />
                <textarea  className=' mt-2 h-50 w-150 p-2 border-1 border-solid border-gray-800 font-mony text-gray-600 rounded-sm' name="" id="" placeholder='Enter your message'></textarea>

                <button className='text-white  text-2xl w-150 mt-2 font-mony font-medium border-1 border-solid border-gray-600 rounded-2xl' type='submit'>Send</button>
                

            </div>
        </main>
    )
}

