import React,{useState} from 'react'

const Events = () => {
   const purple = '#8e44ad';
   const [bg, setBg] = useState(purple)
   const [name, setName] = useState('Click Me');

   const bgChange = () => {
      let newBg = '#34495e';
      setBg(newBg);
      setName('Ouch!! 😻');
   }

   const bgBack = () => {
      let backBg = '#8e44ad';
      setBg(backBg);
      setName('Wooooo!! 😄');
   }

   return (
      <>
      <div style={{ backgroundColor : bg }}>
   <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
      </div>  
      </>
   )
}

export default Events;