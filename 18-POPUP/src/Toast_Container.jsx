import React from 'react'
import {useState} from 'react'
const Toast_Container = () => {
    const [toasts,setToasts] = useState([])

    const handleClose = (id)=>{
       setToasts((prev)=>{
        const filterArr = prev.filter((toast) =>{
        return toast.id !== id
       })
       return filterArr;
       })
    }
    const handleAdd = (message, type) =>{
        const id = new Date().getTime();
        const newToast = [...toasts,{id, message, type}]
        setToasts(newToast)
        setTimeout(()=>handleClose(id),5000)
    }
  return (
    <>
    <div className="con">
        <div className="toast_container">
       {toasts.map(({id, message, type} )=>{
        return (
            <div key={id} className={`toasts bg-${type}`}>
                {message} <span onClick={()=>handleClose(id)}> X</span>
            </div>
        )
       })}
        </div>

    <div className="btn_cont">
        <button onClick={()=>handleAdd("Success","sucess")}>Success</button>
        <button onClick={()=>handleAdd("Info","info")}>Info</button>
        <button onClick={()=>handleAdd("Warning","warning")}>Warning</button>
        <button onClick={()=>handleAdd("Error","danger")}>Error</button>
    </div>
    </div>
    </>
  )
}

export default Toast_Container
