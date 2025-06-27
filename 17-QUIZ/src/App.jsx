import { useState } from 'react'
import './App.css'
import Questions from "./constant/Questions.jsx"
import question from "./constant/question.json"
import Result from './constant/Result'

function App() {
  const [currques, setcurrques] = useState(0)
  const [userAnswer, setUseranswer] = useState([])

   const handleNextQues = (isCorrect)=>{
      setcurrques(currques+1)
      setUseranswer([...userAnswer, isCorrect])
   }
  
   const resetQuiz = () =>{
        setcurrques(0)
        setUseranswer([])
   }
  return (
 <>
   <div className='text-center'>
    <h2 className=' pt-3'>PLAY THE QUIZ</h2>

      {/* questionn */}
      {currques < question.length && <Questions question={question[currques]} onAnswerClick={handleNextQues}/>}
      {/* result */}
      {currques === question.length && <Result userAnswer={userAnswer} question={question} resetQuiz = {resetQuiz} /> }
   </div>
 </>
  )
}

export default App
