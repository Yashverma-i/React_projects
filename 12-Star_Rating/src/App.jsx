import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
   const [rating, setRating] = useState(0)
   const [hover, setHover]= useState(0)

  return (
    <>
      <div className='pt-4'>
        <h1>Star rating</h1>
        <div>
         { [1,2,3,4,5].map((num,key) =>(
           <button 
           onClick={()=> setRating(num)} 
            onMouseOver={()=> setHover(num)}
            onMouseLeave={()=> setHover(rating)}
            key={key}>
              <span className={`${num<=((rating && hover) || hover) ? 'on' : 'off'}`}>&#9733;</span>
             </button>
        ))
        }
        </div>
      </div>
    </>
  )
}

export default App
