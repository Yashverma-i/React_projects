import React from 'react'
import {useEffect, useState} from 'react'

const ProgressBar = ({value , onComplete = () =>{}}) => {
 const [percent, setPercent] = useState(0);

 useEffect(()=>{
     setPercent(Math.min(100,Math.max(value,0)))
     if(value>=100){
        onComplete()
    }
 },[value])

  return (
    <div className='progres'>
        <span style=
        {{color: percent > 50 ? 'white' : 'black'}}
        >{percent.toFixed()}%</span>  
        <div style={{width:`${percent}%`}}/>   
    </div>
  )
}

export default ProgressBar
