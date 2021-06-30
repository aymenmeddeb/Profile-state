import React, { Component,useEffect,useTimer,useState } from 'react'

function Chrono() {
        
    const [Timer,setTimer]=useState(1); 
    useEffect(()=>{
    setInterval(()=>{
    setTimer(Timer=>Timer+1);},1000)
    },[])
  return (
    
    <div>
      <chronometre style={{color:'red',fontSize:'30px'}}>Chrono:{Timer}</chronometre>
    </div>
  )
}

export default Chrono;
