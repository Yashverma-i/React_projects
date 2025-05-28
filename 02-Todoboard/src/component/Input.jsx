import {useState } from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({task, setTask}) => {
   const [input,setInput] = useState('')
   JSON.parse(localStorage.getItem('task'))

   const handleAddtask =(e)=>{
    e.preventDefault();
    if(input)
    setTask([...task ,input]);
    setInput('')
   }
   
  return (
    <>
      <form action=""> 
        <input type="text" placeholder='Add a task'
         value={input} 
         onChange={(e)=> setInput(e.target.value)}/>
         <button onClick={handleAddtask}>Add</button>
      </form>
    </>
  )
}

export default Input
