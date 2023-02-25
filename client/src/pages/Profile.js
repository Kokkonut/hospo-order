import React from 'react'
import { Link } from 'react-router-dom';
import { CaretLeftOutlined } from '@ant-design/icons';

export default function Profile() {

  return (
    <div>
      <Link to="/home" ><CaretLeftOutlined /></Link>

      <h1>My Profile</h1>
        <Link to ="/myprofile">My Profile</Link>
          <br/>
        <Link to ="/history">History</Link>
        <br/>
        <button>Sign Out</button>
    </div>
  )
}
