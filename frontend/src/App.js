import logo from "./logo.svg"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"
import Homepage from "./Pages/Homepage"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import Bloglist from "./Pages/Bloglist"
import Blogpage from "./Pages/Blogpage"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/:id' element={<Blogpage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/list' element={<Bloglist />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
