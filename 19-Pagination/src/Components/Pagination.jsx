import React from 'react'

const Pagination = ({page, setPage}) => {
    const handlePage = (prop) =>{
         if(prop === 'next' )
            setPage(page + 1)
         else 
        setPage(page - 1)
    }

    const prevThree= Array.from(
        {length:3},
        (_,index)=> page -1 -index)
        .filter((val)=> val>0).reverse()

    const nextthree= Array.from(
        {length:4},
        (_,index)=> page + index)
       
        
    const paginationArray = [...prevThree,...nextthree]
        

  return (
    <div className='pagination__container'>
       <div className={`page-btnn ${page <= 1 ? 'disabled' : ''}`}
        onClick={()=>handlePage('prev')}>{'<'}</div>


        {paginationArray.map((val)=>{
        return <div onClick={()=>setPage(val)} className={val == page ? `page-btnn active` : `page-btnn`}>{val}</div> 
        })}


       <div className="page-btnn" onClick={()=>handlePage('next')}>{'>'}</div>
       </div>
  )
}

export default Pagination
