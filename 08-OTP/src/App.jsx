import './App.css';
import {useState,useEffect,useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const emptArr = ['','','',''];
    const [input, setInput] = useState(emptArr)
    const [missing, setMissing] = useState(emptArr)
    const CODE= '1234'

    const refs= [useRef(),useRef(),useRef(),useRef()];
    
     useEffect(()=>{
         refs[0].current.focus();
     },[])

     const handleInputChange=(e, index)=>{
        const val = e.target.value;
        if(!Number(val)) return

        if(index < input.length -1){
            refs[index+1].current.focus()
        }
                                           
        const cpyInput = [...input];
        cpyInput[index] = val;
        setInput(cpyInput);
     }
    const handleOnKeyDown = (e,index) => {
        if(e.keyCode === 8){
          const cpyInput = [...input]
          cpyInput[index] ='';
          setInput(cpyInput);
          if(index>0){
            refs[index-1].current.focus();
          }
        }
    }
    const handlePaste= (e) =>{
      const data = e.clipboardData.getData('text');
      if(!Number(data) || data.length != input.length) return

      const pasteCode = data.split('');
      setInput(pasteCode)
      refs[input.length-1].current.focus()
    }

    const handleSubmit = ()=>{
      const missed = input.map((item, i)=>{
        if(item === '')
          return i;
      }).filter((item) =>(item || item === 0));
      setMissing(missed)
      if(missed.length){
        return ;
      }

      const userInput = input.join('')
      const isMatch = userInput === CODE;
      if(!isMatch) {
        setInput(['','','',''])
        refs[0].current.focus()
      }

     const msg= isMatch ? 'code is valid' : 'code is invalid';
     alert(msg)
    }
   
     return (
    <>
    <div className="app">
        <h1 className='p-4'>Two Factor Code Input</h1>
        <div>
          {emptArr.map((item ,i)=>{
            return <input
            value={input[i]}
             key={i}
            ref={refs[i]}
            type="text" maxLength='1' 
            onChange={(e)=> handleInputChange(e,i)}
            onKeyDown={(e)=> handleOnKeyDown(e,i)} 
            onPaste={handlePaste}
            className={missing.includes(i) ? "error" : ""}
            />
          })}
        </div>
          <br />
          <button
            type="submit"
            onClick= {handleSubmit}
            className="btn btn-success mt-3 px-3"
          >
            Submit
          </button>
        </div>
         
    </>
  )              
}

export default App

