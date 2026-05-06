
// import './App.css'

import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Register"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <BrowserRouter>
    <h3>Hello</h3>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

  
    </>
  )
}

export default App
