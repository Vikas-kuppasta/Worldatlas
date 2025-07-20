import React, { useEffect } from 'react'

function Postaapi() {
    useEffect(async() => {
       const country = await fetch('https://restcountries.com/v3.1/all')
       .then(res => res.json())
       .then(data => console.log(data))

    })


}

export default Postaapi


