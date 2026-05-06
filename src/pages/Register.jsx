import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
const [formData, setFormData] = useState({
  name:'',email:'',password:'',city:'',state:'',country:''
})
const handleInputs =(e)=>{
const {name, value} = e.target;
setFormData((prev)=>({...prev,[name]:value}))
}

const handleSubmitBtn =async(e)=>{
  e.preventDefault()
  if(formData.name =='' || formData.email == '' || formData.password==''||formData.city ==''){
    return setMessage("Invalid information")
  }
  try{
    const res = await axios.post('http://localhost:4001/register',formData)
    if(res.status){
      navigate("/home")
    }
    

  }catch(error){
    console.log(error)
  }
}

  return (
    <div className='container m-5'>
      <h3 className='text-center'>Employee Register</h3>
      <form onSubmit={handleSubmitBtn}>
        {message && <p>{message}</p>}
        <div>
          <label className='form-label'>Name</label>
          <input type='text' name="name" placeholder='Enter name' className='form-control' onChange={handleInputs}/>
        </div>
        <div>
          <label className='form-label'>Email</label>
          <input type='text' name="email" placeholder='Enter email' className='form-control' onChange={handleInputs}/>
        </div>
        <div>
          <label className='form-label'>Password</label>
          <input type='password' name="password" placeholder='*****' className='form-control' onChange={handleInputs}/>
        </div>
        <div>
          <label className='form-label'>City</label>
          <select className='form-control' onChange={handleInputs} name='city'>
            <option value=''>select city</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Dewas">Dewas</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
          </select>
        </div>
        <div>
          <label className='form-label'>State</label>
          <select className='form-control' onChange={handleInputs} name='state'>
            <option value=''>Select state</option>
            <option value='MP'>MP</option>
            <option value='UP'>UP</option>
            <option value='Delhi'>Delhi</option>
          </select>
        </div>
        <div>
          <label className='form-label'>Country</label>
          <select className='form-control' onChange={handleInputs} name='country'>
            <option value=''>select country</option>
            <option value='India'>India</option>
            <option value='Japan'>Japan</option>
            <option value='Canada'>Canada</option>
          </select>
        </div>
        <div>
          <button type='submit' className='btn btn-primary m-2'>Register</button>
          <Link to="/" className='btn btn-secondary m-2'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register



