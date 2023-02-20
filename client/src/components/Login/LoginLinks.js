import React from 'react'
import { Link } from 'react-router-dom';

const LoginLinks = () => {
  return (
    <div className="container">
        <div >
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Create Account</Link>
        </div>
      </div>
 )
 };

 export default LoginLinks;