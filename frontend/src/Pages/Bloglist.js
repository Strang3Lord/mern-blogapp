import React, { useEffect, useState } from "react"
import axios from "axios"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Bloglist = () => {
  const [blogs, setBlogs] = useState("")

  function getData() {
    axios.get(`http://localhost:4000/blog`).then((res) => setBlogs(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteHandler = async (id) => {
    if (window.confirm("THINK BEFORE DELETING IT BRUH")) {
      await axios.delete(`http://localhost:4000/blog/${id}`)
    }
    getData()
  }

  if (!blogs) return null

  return (
    <>
      <pre>
        {`      
    #include<stdio.h>

    int main() {
        printf("Hello Geeks");
    }
     `}
      </pre>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <section className='cards-wrapper'>
            <div className='card-grid-space'>
              <div className='num'>01</div>
              <a
                style={{
                  backgroundImage: `url(${blog.i1})`,
                }}
                className='card'
                href='https://codetheweb.blog/2017/10/06/html-syntax/'
              >
                <div>
                  <Link to={`/${blog._id}`}>
                    <h1>{blog.title}</h1>
                  </Link>
                  /<p>{blog.body}</p>
                  <div className='date'>{blog.createdAt.substring(0, 10)}</div>
                  <div className='tags'>
                    <div className='tag'>HTML</div>
                    <div className='tag'>Tu Sang</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
          <Button onClick={() => deleteHandler(blog._id)}>Delete</Button>
        </div>
      ))}
    </>
  )
}

export default Bloglist
