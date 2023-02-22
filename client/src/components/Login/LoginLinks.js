import React from 'react'
import { Link } from 'react-router-dom';

const LoginLinks = () => {
  return (
    <div className="container">
        <div >
            <Link to="/login" className='links'>Login</Link>
            <br/>
            <Link to="/signup" className='links'>Create Account</Link>
        </div>
      </div>
 )
 };

 export default LoginLinks;