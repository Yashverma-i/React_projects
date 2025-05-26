import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [images, setImages]= useState([])
  const [index, setIndex] = useState(0)
  const fetchImages = async()=>{
    const url = `https://www.reddit.com/r/aww/top/.json?t=all`;
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    const list = data.filter((item)=> item.data.url_overridden_by_dest.includes('.jpg')).map((item)=> item.data.url_overridden_by_dest)
    setImages(list)   
  }

  useEffect (() =>{
       fetchImages();
  },[]);

  const handleClick = (dir) =>{
     const lastIdx = images.length - 1;
     if(dir === 'left'){
        if(index === 0)
          setIndex(lastIdx)
        else
           setIndex((idx) => idx -1)
     }
     else{
      if(index === lastIdx){
        setIndex(0)
     }else
       setIndex((idx) => idx + 1)
  }
}
 
useEffect(()=>{
  const tid = setInterval(()=>{
    handleClick('right');
  },1800);

  return () =>{
    clearInterval(tid);
  }

},[index])

  return (
   <>
     <div className="app">
     <button onClick={()=> handleClick('left')}
      >{"<"}</button>
     <img src={images[index]} alt="Loading..." />
     <button onClick={()=> handleClick('right')}
       className='right'> {">"}</button>
     </div>
   </>
  )
}

export default App
