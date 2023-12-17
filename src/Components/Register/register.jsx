import React from 'react';
import './register.css';
import { Link } from 'react-router-dom'; 

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Register = () => {

    return (

<div className='container'>
    <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
    </div>
<div className='inputs'>
    <div className='input'>
        <img src={user_icon} alt="" />    
        <input type='text' />
         </div>

    <div className='input'>
        <img src={email_icon} alt="" />    
        <input type='email' />
         </div>


    <div className='input'>
        <img src={password_icon} alt="" />    
        <input type='password' />
         </div>
         <div className="forgot-password">Lost Password?&nbsp; <span>Click Here</span></div>
<div className='submit-container'>
<button className="button">Sign Up</button>
    <Link to="/loginSignup">
          <button className="button">Login</button>
        </Link>
    </div>
</div>
</div>

    )

}

export default Register