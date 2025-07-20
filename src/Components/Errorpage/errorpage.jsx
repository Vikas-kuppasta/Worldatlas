import React from 'react'
import { NavLink } from 'react-router-dom'
function Errorpage() {
    return (
        <div >
            <h1 className='text-white text-8xl font-black mb-8'>Error</h1>
                <NavLink className='' to=''>
            <button className=' w-50 h-15  text-white text-2xl border-2 border-solid border-amber-50 '>Go Home</button>
                </NavLink>
        </div>
    )
}

export default Errorpage
