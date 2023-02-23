import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';

export default function UpdateProfile() {

  const { loading, data } = useQuery(QUERY_ME);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [updateUser, {error}]  = useMutation(UPDATE_USER);

    useEffect(() => { 
        if (data) {
            console.log(data.me.password);
            setFormState({
                email: data.me.email,
                password: data.me.password,
                firstName: data.me.firstName,
                lastName: data.me.lastName,
                phone: data.me.phone,
            });
        } 
    }, [data]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);
    const mutationResponse = await updateUser({
      variables: {
        email: formState.email,
        password: data.me.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phone: formState.phone,
      },
    });

    window.location.assign('/editprofile');
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
            value={formState.firstName}
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            value={formState.lastName}
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={formState.email}
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Phone:</label>
          <input
            value={formState.phone}
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