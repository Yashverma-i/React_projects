import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react'
import './App.css'

function App() {
  const [data, setData]= useState('')
  const [shoppingList, setShoppingList]= useState([])
  const [bucket,setbucket]= useState([])

  const handleChange = (e)=>{
       const val = e.target.value
       setData(val)
  }
  // console.log(data);
  const fetchItem = async (data) =>{
    const API = `https://api.frontendeval.com/fake/food/${data}`;
   const result = await fetch(API)
   const out = await result.json()
   setShoppingList(out)
  }
  console.log(shoppingList);
  
  useEffect(()=>{
      if(data.length >= 2)
        fetchItem(data)
  },[data])

  const handleShoppingList =(e)=>{
    const idx = (e.target.getAttribute('data-id'));
    if(idx){
    const obj={
      id: Date.now(),
      data: shoppingList[idx],
      isDone: false
    }
    const cpybucket = [...bucket];
    cpybucket.push(obj)
    setbucket(cpybucket)
   }
   setData('')
  }

  const handleright = ((id)=>{
    const cpybucket = [...bucket];
    const idx = cpybucket.findIndex((item)=>item.id === id)
    cpybucket[idx].isDone = !cpybucket[idx].isDone;
    setbucket(cpybucket)
  })
  const handleDelete = (id) =>{
    const cpybucket = [...bucket];
    const idx = cpybucket.findIndex((item)=>item.id === id)
    cpybucket.splice(idx,1)
    setbucket(cpybucket)
  }
  
  return (
    <>
      <div className='text-center pt-3'>
         <h1> My Shopping List</h1>
          <div className='my-list pt-3'>
              <input type="text" 
              value={data}
              onChange={handleChange}
              />
          </div>
         {data && data.length>=2 && <div className='text-center shoppingList'
            onClick={handleShoppingList}>
            {shoppingList.length>0 ? shoppingList.map((val,key)=>(
                <h5
                data-id={key}
                 className='product' 
                 key={key}>{val}</h5>
            )) : <h5 className='pt-3 fs-3 text-danger'>Item not found</h5>}
          </div>}

          <div className='bucket'>
            {bucket.map((item,key)=>(
              <div key={key} 
              className='shopping_item'> 
              <button onClick={()=>handleright(item.id)}>✅</button>
              <div className={item.isDone ? 'strike' : ''}>{item.data}</div>
              <button onClick={()=>handleDelete(item.id)}>❌</button>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default App
