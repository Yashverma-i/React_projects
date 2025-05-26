import './App.css'
import {useState} from 'react'

function App() {
   const v =[
    {
      id:"name",
      label:"Name",
      inputType:"text",
      buttonName:'Next',
      placeholder:'Enter your name'
    },
    {
      id:"email",
      label:"Email",
      inputType:"email",
      buttonName:'Next',
      placeholder:'Enter your e-mail'
    },
    {
      id:"dob",
      label:"DOB",
      inputType:"date",
      buttonName:'Next',
      placeholder:''
    },
    {
      id:"password",
      label:"Password",
      inputType:"password",
      buttonName:'Submit'
    }
   ]
   const [data,setData] = useState(v)
   const [index,setIndex] = useState(0)
   const [formData, setFormdata] = useState(
    {
      name:'',
      email:'',
      dob:'',
      password:''
    }
   )
   const [isSubmit, setIssubmit]= useState(false)

   const handleSubmit = (e) =>{
          e.preventDefault();
          if(index === data.length -1){
            console.log('form submitted');
          setIssubmit(true)
          }
          else
          setIndex((idx)=>idx+1)
   }
   const handleBack = (e) =>{
      e.preventDefault();
      setIndex((idx)=> idx-1)
   }
   const handleInput = (e) => {
       const id =  e.target.id;
       const value = e.target.value;
        const cpyData = {...formData};
        cpyData[id] = value;
        setFormdata(cpyData)
   }

  return (
    <>
    {!isSubmit ? 
    <form action="" onSubmit={handleSubmit}>
    {index>0 ? <a href="" onClick={handleBack}> back</a> : ''}
    <label>{data[index].label}</label>
    <input value={formData[data[index].id]}
     id={data[index].id}
     onChange={handleInput} type={data[index].inputType}
     placeholder={data[index].placeholder} />
    <button >{data[index].buttonName}</button>
  </form>
      :
      <div>
      <h1>Success!</h1>
      <hr />
      <span> Name: { formData.name}</span>
      <br />
      <span> Email: { formData.email}</span>
      <br />
      <span> Dob: { formData.dob}</span>
      <br />
      <span> Password: { formData.password}</span>
    </div>
}
      
     
    </>
  )
}

export default App
