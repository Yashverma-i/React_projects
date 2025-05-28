import { useState, useEffect } from 'react'
import './App.css'
import Input from './component/Input'
import Board from './component/Board';

function App() {
  const  getLocalItem = ()=>{
    let list= localStorage.getItem('lists')
    if(list)
      return JSON.parse(localStorage.getItem('lists'))
    else
     return []
  }

  const [task, setTask] = useState(getLocalItem());

  const handleDelete = (index) => {
    const newTasks = task.filter((task, i) => i !== index);
    setTask(newTasks);
  };

  useEffect (() =>{
       localStorage.setItem('lists', JSON.stringify(task))
  },[task])
  

  return (
    <> 
      <h1 className='heading'>Todo Board</h1>
      <div className='subhead'>
      <Input task={task} setTask={setTask}/>
      <div className='content'>
      {task.map((task, index) => (
        <Board key={index} task={task} handleDelete={() => handleDelete(index)} />
      ))}
      </div>
      </div>
    </>
  )
}

export default App;
