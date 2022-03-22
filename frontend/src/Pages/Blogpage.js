import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Blogpage = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState("")
  useEffect(() => {
    getDetails()
  }, [])

  const getDetails = async () => {
    const { data } = await axios.get(`http://localhost:4000/blog/${id}`)
    setBlog(data)
  }

  if (!blog) return null

  return (
    <>
      <div className='py-5'>
        <h1>{blog.title}</h1>
        <img src={blog.i1} />
        <h2>{blog.body}</h2>
      </div>
    </>
  )
}

export default Blogpage
