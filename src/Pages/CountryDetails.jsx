import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function CountryDetails() {
    const { countryid } = useParams();
    const [countryinfo, setcountryinfo] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryid}?fullText=true`)
            .then(response => response.json())
            .then(infomat => {
                setcountryinfo(infomat[0])
            })

    }, [countryid])

    if (!countryinfo) {
        return <p className="text-center text-white text-xl p-4">Loading country details...</p>;
    }

    return (
        <main className='pt-24.5 pb-24.5 pl-20 pr-20  flex justify-around items-center'>
            <div >
                <img className='w-100 h-60 ' src={countryinfo.flags.png} />

            </div>

            <div>
                <h1 className='text-white mt-3 font-mony text-2xl font-bold'>{countryinfo.name.common}</h1>
                <p className='text-white font-mony mt-4 mb-1'>
                    <span className='text-gray-400 font-mony'>Capital:</span>
                    {countryinfo.capital?.[0] || "N/A"}
                </p>
                <p className='text-white font-mony'>
                    <span className='text-gray-400 font-mony'>Population:</span>
                    {countryinfo.population.toLocaleString()}
                </p>
                <NavLink to={'/country'} >
                    <button className='text-white font-mony font-medium mt-4 font bg-gray-950 border-2 border-solid border-gray-400 p-2 w-60 rounded-xl '>Go back</button>
                </NavLink>

            </div>

        </main>
    )
}

export default CountryDetails
