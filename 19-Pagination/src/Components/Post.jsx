import React from 'react'
import Pagination from './Pagination'
import {useState,useEffect} from 'react'

const Post = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    async function fetchApi(){
        setIsLoading(true)
        const data = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
        const response = await data.json();
        setPosts(response)
        setIsLoading(false)
    }

    useEffect(()=>{
      fetchApi();
    },[page])

  return (
    <div className='contain'>
        <div className="post-container">
            {isLoading ? (<p>loading...</p>) : (
                posts.map((item,index)=>{
                    return <img key={index} src={item.download_url} alt="" />
                })
            )}
        </div>
        <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default Post
