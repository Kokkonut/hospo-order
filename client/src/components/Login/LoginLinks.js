import React from 'react'
import { Link } from 'react-router-dom';

const linkStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#874402',
  
};

const LoginLinks = () => {
  return (
    <div className="container">
        <div>
            <Link to="/login" style={linkStyle}>Login</Link>
            <br/>
            <Link to="/signup" style={linkStyle}>Create Account</Link>
        </div>
      </div>
 )
 };

 export default LoginLinks;