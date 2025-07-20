import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

function Country() {
  const [countryinfo, setcountryinfo] = useState([])
  const [query, setQuery] = useState('')

  const filteredCountry = countryinfo.filter((country) => country.name.common.toLowerCase().includes(query) )

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population')
    .then(response => response.json())
    .then(info=>{
      console.log('vikas')
      setcountryinfo(info)
    })
  },[])




  return (
    <main className=' pl-20 pr-20  flex justify-center items-center flex-col'>
      <div className='mt-8'>
        <input type="text" placeholder='Search countries' onChange={(e) => setQuery(e.target.value.toLowerCase()) } className='bg-white p-2 w-160 border-2 border-solid border-gray-300 text-white font-mony outline-0 rounded-md hover:scale-110 transition delay-50 duration-300' style={{backgroundColor:'rgba(39, 38, 38, 0.493)'}} />
      
      </div>

      <div className='grid grid-cols-3 gap-16 mt-8'>
                      {filteredCountry.map((country,id)=>{
                          
                          return(
                      <div key={id} style={{backgroundColor:'rgba(39, 38, 38, 0.493)'}} className='border-2 border-solid border-gray-400 w-80 p-3 rounded-2xl '>
                           <img className='w-full h-40 ' src={country.flags.png}   />
                          <h1 className='text-white mt-3 font-mony text-2xl font-bold'>{country.name.common}</h1>
                          <p className='text-white font-mony mt-4 mb-1'>
                              <span className='text-gray-400 font-mony'>Capital:</span>
                              {country.capital?.[0] || "N/A"}
                          </p>
                          <p className='text-white font-mony'>
                              <span className='text-gray-400 font-mony'>Population:</span>
                              {country.population.toLocaleString()}
                          </p>
                          <NavLink to={`/country/${country.name.common}`}>
                            <button className='p-2 mt-3 text-white font-medium bg-gray-950  border-2 border-solid border-gray-400 w-full font-mony rounded-xl hover:scale-105 transition delay-150 duration-200 '>More Details </button>
                          </NavLink>

                      </div>
                          )
                      })}

      </div>

    </main>
  )
}

export default Country
