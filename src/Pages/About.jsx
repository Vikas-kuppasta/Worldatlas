import React from 'react'
import Countrydata from './data.json'

export default function About() {
    return (
        <main className='pl-20 pr-20 mt-15 flex flex-col justify-center items-center'>
            <h1 className='text-white text-center  font-mony text-3xl leading-11 font-bold mb-8'>
                Here are the Interesting Facts
                <br />
                we're proud of
            </h1>
            <div className='grid grid-cols-3  gap-16  '>
                {Countrydata.map((vikas)=>{
                    const {id,country,capital,population,fact} = vikas
                    return(
                <div key={id} style={{backgroundColor:'rgba(39, 38, 38, 0.493)'}} className='border-2 border-solid border-gray-400 w-80 p-3 rounded-2xl brightness-50 hover:scale-120 hover:brightness-110  transition delay-150 duration-300 '>
                    <h1 className='text-white font-mony text-2xl font-bold'>{country}</h1>
                    <p className='text-white font-mony mt-4 mb-1'>
                        <span className='text-gray-400 font-mony'>Capital:</span>
                        {capital}
                    </p>
                    <p className='text-white font-mony'>
                        <span className='text-gray-400 font-mony'>Population:</span>
                        {population}
                    </p>
                    <p className='text-white font-mony text-left mt-1'>
                        <span className='text-gray-400 font-mony '>Interesting Fact:</span>
                        {fact}

                    </p>
                </div>
                    )
                })}





                </div>



        </main>

    )
}

