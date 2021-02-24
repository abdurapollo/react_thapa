import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Corona = () => {
    const [num, setNum] = useState('')
    const [country, setCountry] = useState('')

   useEffect((num) => {
       async function getData()
       {
           const res = await axios.get(`https://api.covid19api.com/summary`)
           const countries = res.data.countries;
           console.log(countries)
       }
       getData()
   })
  

    return (
        <>
          <h1>You have selected {country} country</h1>
           <select value={num} onChange={(event) =>{
               setNum(event.target.value)
           }}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
           </select>
        </>
    )
}

export default Corona