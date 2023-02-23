import React from "react";
import { Link } from 'react-router-dom';

export default function Account() {
  
    return (
      <div>
        <h1>My Account</h1>
        <div>
            <Link to ="/editprofile">Edit Profile</Link>
            <br/>
            <Link to ="/history">History</Link>
        </div>
      </div>
    )
  }