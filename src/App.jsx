
// import './App.css'

import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Register"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>

  
    </>
  )
}

export default App
