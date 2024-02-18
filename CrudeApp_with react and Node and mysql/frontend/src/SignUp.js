import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUpValidation from './SignUpValidation'

function SignUp() {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })

    const [errors,setErrors]=useState({});

    const handleInput = (event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))}
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(SignUpValidation(values));
    }



  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' >
        <div className='bg-white p-3 rounded w-25'>
            <form action='' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className='mb-3'>
                    <label htmlFor='Name'><strong>Name</strong></label>
                    <input type='text' onChange={handleInput} name="name" placeholder='Enter Your Name ' className='form-control rounded-0'></input>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' onChange={handleInput} name="email" placeholder='Enter Email' className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor='password' ><strong>Password</strong></label>
                    <input type='password' onChange={handleInput} name="password" placeholder="Enter Password" className='form-control rounded-0'></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}

                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                <p>You agree to our terms and policies</p>
                <Link to='/' className='btn btn-default border w-100 bg-light rext-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp