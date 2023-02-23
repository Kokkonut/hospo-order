import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';


export default function EditProfile() {

    // const user = Auth.getProfile().data;

    // console.log('The user data:',user);

    const { loading, data } = useQuery(QUERY_ME);

    console.log('The Login:', data);

    const user = data?.me || {};

  return (
    <div>
      <h1>My Account</h1>
        
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>

        <Link to="/updateProfile">Update Profile</Link>


        {/* <form
      onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Phone:</label>
          <input
            placeholder="******"
            name="phone"
            type="text"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>   */}

    </div>
  )
}