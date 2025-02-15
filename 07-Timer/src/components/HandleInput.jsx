
const HandleInput = ({handleInput, handleStart}) => {
  return (
    <div className='text-center box p-4'>
          <input id='hours' onChange={handleInput}  type="number" placeholder='HH' className='inp'/>
          <input id='minutes' onChange={handleInput}  type="number" placeholder='MM' className='inp'/>
          <input id='seconds' onChange={handleInput}  type="number" placeholder='SS' className='inp'/> 
          <br />
          <button onClick={handleStart} >Start</button>
        </div>
  )
}

export default HandleInput
