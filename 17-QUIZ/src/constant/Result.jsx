import React from 'react'

const Result = ({userAnswer, question, resetQuiz = () =>{}}) => {

    const correctAnswers = userAnswer.filter((answer)=>answer).length;

  return (
     <div className="results">
        <h1 className='text-primary'>Results</h1>
        <h4>You answer {correctAnswers} out of {question.length} questions</h4>
        GRADE: {correctAnswers<6 ? correctAnswers<4 ? 'POOR' : 'AVERAGE' : "GOOD"} <br /> <hr />
        <span onClick={resetQuiz}>Click here to retry...⌛</span>
        <br /> <br />
        <ul>
          {question.map((question,index)=>{
          const correctOption = question.answerOption.find(option => option.isCorrect);
          return <li key={index} data-correct={userAnswer[index]}>Q{index+1}. {question.question} <br />
          <span style={{color: 'green'}}>Correct Answer : {correctOption.text} </span> 
          </li>
          })}
        </ul>
    </div>
  )
}

export default Result
