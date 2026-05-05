import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container m-5'>
      <h3 className='text-center'>Employee Register</h3>
      <form>
        <div>
          <label className='form-label'>Name</label>
          <input type='text' name="name" placeholder='Enter name' className='form-control'/>
        </div>
        <div>
          <label className='form-label'>Email</label>
          <input type='text' name="email" placeholder='Enter email' className='form-control'/>
        </div>
        <div>
          <label className='form-label'>Password</label>
          <input type='password' name="password" placeholder='*****' className='form-control'/>
        </div>
        <div>
          <label className='form-label'>City</label>
          <select className='form-control'>
            <option>select city</option>
            <option>Ujjain</option>
            <option>Dewas</option>
            <option>Bhopla</option>
            <option>Indore</option>
          </select>
        </div>
        <div>
          <label className='form-label'>State</label>
          <select className='form-control'>
            <option>Select state</option>
            <option>MP</option>
            <option>UP</option>
            <option>Delhi</option>
          </select>
        </div>
        <div>
          <label className='form-label'>Country</label>
          <select className='form-control'>
            <option>select country</option>
            <option>India</option>
            <option>Japan</option>
            <option>Canada</option>
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



