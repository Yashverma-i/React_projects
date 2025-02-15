import './App.css'
import {useEffect, useState} from 'react'

function App() {
  const [user,setUser] = useState(null);
  const api= 'http://jsonplaceholder.typicode.com/users';
  useEffect(()=>{
     setTimeout(()=>{
      fetch(api).then((res) => res.json())
      .then((data)=>setUser(data))
     }, 2000)
  },[])
 return (
    <>
     <h1>API CALL</h1>
     <ul> {user ? 
      (user.map((item)=>
      <li key={item.id}>{item.name} <br/>
            {item.email}</li> )
     ) : (
      <h1>Loading...</h1>) }
     </ul>
    </>
  )
}
export default App