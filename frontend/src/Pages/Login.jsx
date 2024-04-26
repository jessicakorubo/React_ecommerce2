import React from 'react'
import './CSS/Login.css'

export const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Your email'/>
          <input type="password" placeholder='Your password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here.</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to use the terms of use and privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}
