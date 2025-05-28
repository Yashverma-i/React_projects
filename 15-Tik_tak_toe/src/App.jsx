import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [matrix, setmatrix] = useState(Array(9).fill(null))
  const [isXturn,setisXturn] = useState(true)
  const [won, setWon] = useState(null)


  const handleClick=(e)=>{
      if(won) return; // disable clicks if game won
      const pos = e.target.id
      const cpymatrix = [...matrix];
      cpymatrix[pos] = isXturn ? 'X' : 'O';
      setmatrix(cpymatrix)
      setisXturn((prevturn) => !prevturn)
  }

  const decideWinner = () =>{
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]){
        setWon(matrix[a])
      }
    }
  }
  useEffect(() =>{
   decideWinner()
  },[matrix])

  const handlereset = () =>{
    setmatrix(Array(9).fill(null))
    setWon(null)
    setisXturn(true)
  }
  return (
  <>
      <div className='main'>
        <h1 className="text-center pt-4 b-3 text-primary fw-bold">TIC TOC TOE</h1>
        <div className={"board " + (won ? "disabled" : "")} onClick={(e)=>handleClick(e)}>
            {matrix.map((item,key) =>(
               <div key={key} id={key} className='box'>{item}</div>
            ))}
        </div>    

        <div className="game_info">
          <button className='bg-danger border-0 rounded-2 px-3 py-2 text-light' onClick={handlereset}>Reset</button>
         {won ? '' :  <div className='fw-bold fs-3'>Next Player: {isXturn ? 'X' : 'O'}</div>}
         {won ? <div className='text-success fw-bold fs-3'> <span className='text-danger fw-bold fs-2'>Player {won}</span> won the game</div> : ''}  
        </div>
      </div>


  </>
  )
}

export default App
