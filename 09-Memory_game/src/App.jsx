import { useState , useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


const getNums = () => {
  const list =[];
  for(let i =1; i<=8;i++){
    list.push(i)
    list.push(i)
 }   
 return list;
}

function App() {
   const [stage, setStage] = useState('init');
    const [nums, setNums] = useState(getNums());
    const [opened, setOpened] =  useState([])
    const [solve, setSolve] =  useState([])

    const random = () =>{
      const cpynum= [...nums];
      return cpynum.sort(()=>Math.random()-0.5)
    }

   const handleStart =()=>{
    setStage('start')
    setNums(random())
    setSolve([]);
   }
// console.log(nums);

const handleClick = (num, index) =>{
  if(opened.length === 2) return 
      setOpened((prev) => [...prev, index]);
}

useEffect (() =>{
   if(opened.length === 2){
      setTimeout(()=>{
          const id1 = opened[0];
          const id2 = opened[1];
          if(nums[id1] === nums[id2] && id1!=id2){
            setSolve((prev) => [...prev, nums[id1]])
            setOpened([])
            }else{
            setOpened([])
          } 
      },1000)
   }
},[opened])

useEffect(()=>{
  if(solve.length=== 8){
    setStage('win')
  }
},[solve])

const getClassName = (num, index)=>{
  if(solve.includes(num)) return 'remove';
  else if(opened.includes(index)) return 'show'
  else return 'hide'
}
// console.log(nums)
  return (
    <>
    <div className='text-center pt-4'>
      <h1>Memory game</h1>

      {stage === 'init' && <button onClick={handleStart}>Start the game</button>}

      {stage === 'start' && 
      <div className='game'> 
      <div className='cards'>
        {nums.map((num,i)=>(
        <div
        onClick={()=>handleClick(num,i)}
         className={`card ${getClassName(num,i)}`}
       key={i}>{num}</div>
      ))} </div>
      </div>
}

      {stage === 'win' && <div>
        <br />
        <h2 className='text-danger'>You won the game, WOW !!</h2>
        <img src="./samay.jpg" alt="error" /> <br /> 
        <button onClick={handleStart}> Fir Khelega ☠️</button>
        </div>}
    </div>
  </>
    )
}

export default App
