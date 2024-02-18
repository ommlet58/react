import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './LoginValidation'; 


function Login() {
    const [values,setValues]=useState({
        email:"",
        password:""
    })

    const [errors,setErrors]=useState({});

    const handleInput = (event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))}
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' >
        <div className='bg-white p-3 rounded w-25'>
            <form action='' onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' name='email' placeholder='Enter Email'
                    onChange={handleInput} className='form-control rounded-0'></input>
                {errors.email && <span  className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' ><strong>Password</strong></label>
                    <input type='password' name='password' placeholder="Enter Password" onChange={handleInput}  className='form-control rounded-0'></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}

                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                <p>You agree to our terms and policies</p>
                <Link to='/signup' className='btn btn-default border w-100 bg-light rext-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login