import React,{useState} from 'react'
import './currenttime.css'
const CurrentTime = () => {
   
   
    let newTime = new Date().toLocaleTimeString();
      
    const [ctime, setCtime] = useState(newTime)
 
    const UpdateTime = () =>{
 
       newTime = new Date().toLocaleTimeString();
      setCtime(newTime)
    }
 
    return (
      <> 
       <h1>{ctime}</h1>
       <button onClick={UpdateTime}>Get Time</button>
      </> 
    )
 }
 export default CurrentTime;