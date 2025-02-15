import { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunnning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime +10);
    },10);
  } else if(!running){
    clearInterval(interval);
  } 
  return ()=> clearInterval(interval);
  },[running]);

  return (
    <>
      <h1 className='heading'>StopWatch</h1>
      <div className='subhead1'>
      <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time/10) % 100)).slice(-2)}</span>
      </div>
      <div className='subhead2'>
        {running ? (<button onClick={ () => {setRunnning(false)}}>Stop</button>) : (  <button onClick= {() => { setRunnning(true)}}>Start</button>)}
        <button className='reset' onClick={()=>{
          setTime(0);
          setRunnning(false)}}
          >Reset</button>
      </div>
    </>
  );
}

export default App;