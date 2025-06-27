import { useState, useEffect } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {
    const [value, setValue] = useState(0)
    const [success, setSuccess] = useState(false)

    useEffect (()=>{
      setInterval(()=>{
        setValue((val)=> val+1)
      },60)
    },[])

  return (
 <>
     <div className="app">
     <h3 className='pt-2'>Progress Bar</h3>
      <ProgressBar value={value} onComplete={()=> setSuccess(true)}/>
     <span>{success ? "Completed" : "Loading..."}</span>
     </div>
 </>
  )
}

export default App
