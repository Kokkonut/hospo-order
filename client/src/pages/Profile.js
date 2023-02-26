import React from 'react'
import { Link } from 'react-router-dom';
import { CaretLeftOutlined } from '@ant-design/icons';

export default function Profile() {

  return (
    <div className="container">
      <div className="profileContainer">

      <div className="profileHeader">
        <Link to="/home" ><CaretLeftOutlined /></Link>

        <h1>My Profile</h1>
      </div>


        <Link to ="/myprofile" className="profileItem">My Profile</Link>
        <br/>
        <Link to ="/history" className="profileItem">History</Link>
        <br/>
        <Link to="/"><button className="profileItem">Sign Out</button></Link>
        
      </div>
    </div>
  )
}
