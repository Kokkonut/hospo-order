import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

import { CaretLeftOutlined } from '@ant-design/icons';


export default function EditProfile() {

    // const user = Auth.getProfile().data;

    // console.log('The user data:',user);

    const { loading, data } = useQuery(QUERY_ME);

    console.log('The Login:', data);

    const user = data?.me || {};

  return (
    <div>

      <Link to="/profile" ><CaretLeftOutlined /></Link>

      <h1>My Account</h1>
        
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>

        <Link to="/updateprofile">Update Profile</Link>

    </div>
  )
}