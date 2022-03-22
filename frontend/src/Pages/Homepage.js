import React, { useEffect, useState } from "react"
import axios from "axios"
import { Form, Button } from "react-bootstrap"

const Homepage = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [i1, setI1] = useState("")
  const [i2, setI2] = useState("")
  const [i3, setI3] = useState("")
  //   function submitHandler() {
  //     axios.get(`blog/`).then((response) => setBlogs(response.data))
  //   }

  const uploadFileHandler = async (e, setLol) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("file", file)

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

      const { data } = await axios.post(
        "http://localhost:4000/blog/upload",
        formData,
        config
      )
      alert("hey")

      setLol(data)
    } catch (error) {
      console.error(error)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      `http://localhost:4000/blog`,
      { title: title, body: body, category: "Tech", i1: i1, i2: i2, i3: i3 },
      config
    )

    console.log(data)
  }

  return (
    <>
      <h1>Create Blog</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='body'>
          <Form.Label>Body</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <input
            type='file'
            id='myfile'
            name={i1}
            onChange={(e) => uploadFileHandler(e, setI1)}
          />
          <Form.Control
            type='text'
            placeholder='image url'
            value={i1}
          ></Form.Control>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <input
            type='file'
            id='myfile'
            name='myfile'
            onChange={(e) => uploadFileHandler(e, setI2)}
          />
          <Form.Control
            type='text'
            placeholder='image url'
            value={i2}
          ></Form.Control>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <input
            type='file'
            id='myfile'
            name='myfile'
            onChange={(e) => uploadFileHandler(e, setI3)}
          />
          <Form.Control
            type='text'
            placeholder='image url'
            value={i3}
          ></Form.Control>
        </div>
        <Button type='submit' variant='primary'>
          Post
        </Button>
      </Form>
    </>
  )
}

export default Homepage
