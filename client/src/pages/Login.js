import React from 'react'
import LoginLinks from '../components/Login/LoginLinks';
// import LoginMain from '../components/Login/LoginMain';
// import LoginCreate from '../components/Login/LoginCreate';
import '../assets/App.css';
import wallpaper from '../assets/wallpaper.jpg'

// import { Button } from 'antd';

const Login = () => {
  return (
    <div className="container">

        <div >
             <LoginLinks />
            <img className='background' src={wallpaper} alt="Wallpaper"  />
            {/* <h1 className='header'>INSERT LOGO</h1> */}

  
      </div>
      </div>
 )
 };

 export default Login;