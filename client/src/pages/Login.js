import React from 'react'
import LoginLinks from '../components/Login/LoginLinks';
import LoginMain from '../components/Login/LoginMain';
import LoginCreate from '../components/Login/LoginCreate';

const Login = () => {
  return (
    <div className="container">

        <div>
            <h1>INSERT LOGO</h1>
        </div>
 
      {/* <LoginLinks /> */}

      {/* Need logic behind these two components to show them once clicked on a button/something */}
      <LoginMain />

      <LoginCreate /> 

      </div>
 )
 };

 export default Login;