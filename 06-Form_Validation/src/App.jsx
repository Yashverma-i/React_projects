import './App.css'
import {useState} from 'react';

function App() {
  const [add,setAdd] = useState({
    name:"",
    email:"",
    password:"",
  })
  const [error,setError] =useState({
    name:false,
    email:false,
    password:false,
  })

  const onSubmit = (e) => {
    e.preventDefault();
    let isValid= true;
                               // name
    const name1= add.name
    if(name1.length < 1){
      setError((prev)=>({
        ...prev,
        name: true
      }))
      isValid= false;
    }
    
                                    // email
    const email1= add.email
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(email1)) {
      setError((prev)=>({
        ...prev,
        email: true
      }))
      isValid= false;
    }
                                    //password
    const password1= add.password
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password1)) {
        setError((prev)=>({
          ...prev,
          password: true
        }))
        isValid= false;
      }
   if(isValid)
     console.log(add);
  }

  const handleChange = (e) => {
    setAdd({ 
      ...add,
      [e.target.name]: e.target.value
    });
    setError((prev)=>({ 
      ...prev,
      [e.target.name]: false
    }));
  };

  return(
    <>
    <form noValidate style={{ display:'flex', flexDirection:'column', width:'50%', gap:'10px',margin:'auto' , marginTop:'40px'}}>
      <input type="text" onChange={handleChange} placeholder='Enter Your Name' name='name' />
      <span style={{color:'red'}}>{error.name && "please enter the name"}</span>
      <input type="email" onChange={handleChange} placeholder='Enter Your Email' name='email'/>
      <span style={{color:'red'}}>{error.email && "please enter the email"}</span>
      <input type="password" onChange={handleChange} placeholder='Enter Your Password' name='password' />
      <span style={{color:'red'}}>{error.password && "Please enter correct password"}</span>
      <button onClick={onSubmit} type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App;
