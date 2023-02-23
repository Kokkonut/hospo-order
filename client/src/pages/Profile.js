import React from 'react'
import { Link } from 'react-router-dom';
// import Account from '../components/Profile/Account';

export default function Profile() {

  return (
    <div>
      <h1>My Profile</h1>
        <Link to ="/editprofile">Edit Profile</Link>
          <br/>
        <Link to ="/history">History</Link>
    </div>
  )
}
