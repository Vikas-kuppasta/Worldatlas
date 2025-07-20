import React from 'react'
import Logo2 from './Logo2.png'
import logo3 from './logo3.png'
import { Link ,NavLink,} from 'react-router-dom'

export default function Header() {
    return (
        <>
        <header style={{backgroundColor:'rgba(39, 38, 38, 0.6)'}} className=' flex justify-between items-center z-50 pl-20 pr-20 '>
            <div>
                <img className='w-20 h-20' src={logo3} alt="" />
            </div>
            <div>
                <ul className='flex justify-center items-center gap-15'>
                    <li className='hover:scale-120 transition delay-50 duration-300'>
                <NavLink className={({isActive})=>`${isActive ? "text-blue-300":"text-white"} text-xl font-mony font-medium  `} to='/'>
                    Home
                </NavLink>
                    </li>
                    <li className='hover:scale-120 transition delay-50 duration-200'>
                <NavLink className={({isActive})=>`${isActive ? "text-blue-300":"text-white"} text-xl font-mony font-medium `} to='/about'>
                    About
                </NavLink>
                    </li>
                    <li className='hover:scale-120 transition delay-50 duration-300' >
                <NavLink className={({isActive})=>`${isActive ? "text-blue-300":"text-white"} text-xl font-mony font-medium `} to='/country'>
                    Country
                </NavLink>
                    </li>
                    <li className='hover:scale-120 transition delay-50 duration-300' >
                <NavLink className={({isActive})=>`${isActive ? "text-blue-300":"text-white"} text-xl font-mony font-medium `} to='/contact'>
                    Contact
                </NavLink>
                    </li>
                </ul>
            </div>
        </header>
        </>
    )
}

