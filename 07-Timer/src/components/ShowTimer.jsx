
const ShowTimer = (props) => {
    const {hours, minutes, seconds , isPaused, handleResume, handlePause, handleReset} = props
  return ( 
  <>
    <div className='showContainer'>
            <div>{hours< 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes< 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds<10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className='text-center'>
            {isPaused ? (<button onClick= {handleResume} className='bg-primary'>Resume</button>) : (<button onClick= {handlePause}>Pause</button>)}
            <button onClick={handleReset}>Reset</button>
            </div>
            </>
  )
}

export default ShowTimer
