import './App.css'
import {useState , useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import HandleInput from './components/HandleInput';
import ShowTimer from './components/ShowTimer';

function App() {

   const [hours,setHours] = useState(0)
   const [minutes,setMinutes] = useState(0)
   const [seconds,setSeconds] = useState(0)

   const [isStart, setIsStart] = useState(false)
   const [timerID, setTimerId] = useState(0)
   const [isPaused, setIsPaused] = useState(false)


 const handleInput = (e)=>{
   const value= parseInt(e.target.value)
   const id = e.target.id;
   if(id === 'hours') setHours(value)
   else if(id === 'minutes') setMinutes(value)
   else setSeconds(value)
 }

 const handleStart = () =>{
       if(hours<0 || minutes<0  || seconds<=0) {
        alert('invalid input')
       }
       else 
       setIsStart(true)
 }
 const handleReset = () =>{
     setIsStart(false)
     setHours(0)
     setMinutes(0)
     setSeconds(0)
     clearInterval(timerID)
 }
 const handlePause= () =>{
  setIsPaused(true)
  clearInterval(timerID)
 }
 const handleResume = () =>{
  setIsPaused(false)
  runTimer(seconds, minutes , hours)
 }

 const runTimer = (sec, min, hr, tid) =>{
      if(sec>0){
        setSeconds((s) => s-1)
      } else if(sec === 0 && min>0){
          setMinutes((m) => m-1)
          setSeconds(59)
      }
      else {
        setHours((h)=> h-1)
        setMinutes(59)
        setSeconds(59)
      }

      if(sec === 0 && min===0 && hr=== 0){
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        clearInterval(tid)
        alert('time up')
         return
      }
 }

 useEffect (() =>{
  let tid
    if(isStart){
      tid =  setInterval(()=>{
         runTimer(seconds, minutes, hours,tid)
      }, 1000)
      setTimerId(tid)
    }

    return()=>{
      clearInterval(tid)
    }
 },[isStart, hours, minutes , seconds])

  return (
       <>
       <h1 className='text-center pt-5 fw-bold'>Auto Timer </h1>

        {!isStart && <HandleInput  handleInput={handleInput} handleStart={handleStart}/>}

        {isStart &&  <ShowTimer hours={hours} minutes={minutes} seconds={seconds} isPaused={isPaused} handleResume={handleResume} handlePause={handlePause} handleReset={handleReset}/>}
       </>
  )
}

export default App
