import React, { useEffect, useState } from "react"
import axios from "axios"
import { Form, Button } from "react-bootstrap"

const Bloglist = () => {
  const [blogs, setBlogs] = useState("")

  function getData() {
    axios.get(`http://localhost:4000/blog`).then((res) => setBlogs(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

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
        <div>
          <section class='cards-wrapper'>
            <div class='card-grid-space'>
              <div class='num'>01</div>
              <a
                style={{
                  backgroundImage: `url(${blog.i1})`,
                }}
                class='card'
                href='https://codetheweb.blog/2017/10/06/html-syntax/'
              >
                <div>
                  <h1>{blog.title}</h1>
                  <p>{blog.body}</p>
                  <div class='date'>{blog.createdAt.substring(0, 10)}</div>
                  <div class='tags'>
                    <div class='tag'>HTML</div>
                    <div class='tag'>Tu Sang</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      ))}
    </>
  )
}

export default Bloglist
