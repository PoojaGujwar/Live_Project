import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [formData, setFormData] = useState({email:'',password:''});
    const [message,setMessage] = useState('')
    const navigate = useNavigate()

    const getData =(e)=>{
        const {name,value} = e.target;
        console.log(name,value)
        setFormData((prev)=>({...prev,[name]:value}))
    }
    const handleLoginForm =async(e)=>{
        e.preventDefault();
        if(formData.email ==='' || formData.password ===""){
            setMessage("Please enter all fields")
        }
        try {
            const res = await axios.post("http://localhost:4001/login",formData)
            if(res.data.status){
                navigate('/register')
            }else{
                console.log(res);
            }
            
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message)
    console.log(err.response.data.message);
  } else {
    console.log("Server not responding");
  }
        }
    }
  return (
    <div className='container mt-5'>
      <h3>Login </h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleLoginForm} className='form-control'>
        <div>
            <label className='form-label'>Email</label>
            <input type='email' name="email" placeholder='Enter email' onChange={getData} className='form-control'/>
        </div>
        <div>
            <label className='form-label'>Password</label>
            <input type='password' name="password" placeholder='****' onChange={getData} className='form-control'/>
        </div>
        <button type='submit' className='btn btn-primary m-2'>Login</button>
        <Link to="/register" className='btn btn-secondary m-2'>Register</Link>
      </form>
    </div>
  )
}

export default Login




