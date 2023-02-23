import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


export default function UpdateProfile() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [updateUser, {error}]  = useMutation(UPDATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);
    const mutationResponse = await updateUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phone: formState.phone,
      },
    });
    const token = mutationResponse.data.updateUser.token;
    Auth.login(token);
  } catch (error) {
    console.log(error);
  }
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
        <div>
            <h1>Update Profile</h1>

            <form
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
      </form>  

        </div>
    )
};