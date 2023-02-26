import React, { useState, useEffect, useRef } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { Link } from "react-router-dom";
import { CaretLeftOutlined } from '@ant-design/icons';

import {  Alert, Form, Input, Button  } from 'antd';

export default function UpdateProfile() {

  const { loading, data } = useQuery(QUERY_ME);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [updateUser, {error}]  = useMutation(UPDATE_USER);
    // const form = useRef(null);

    useEffect(() => { 
      console.log(data);
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

    // useEffect(() => {
    //   form.current.resetFields();
    // }, [formState]);

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

    window.location.assign('/myprofile');
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

  console.log(formState);

  // if (loading && !formState.firstName.length) {
  //   return <div>Loading...</div>;
  // }

    return (
        <div className="container">
          <div className="profileContainer">


          <div className="profileHeader">
            <Link to="/profile" ><CaretLeftOutlined /></Link>
            <h1>Update Profile</h1>
          </div>

        {/* <Form
          ref={form}
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 5 }}
          initialValues= {formState}
          onSubmit={handleFormSubmit}
          onFinish={handleFormSubmit} 
        >
          <Form.Item
            name="firstName"
            label="First Name:"
          >
            <Input
              onSubmit={handleChange} 
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name:"
          >
            <Input
              onSubmit={handleChange} 
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email:"
          >
            <Input
              onSubmit={handleChange} 
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone:"
          >
            <Input
              onSubmit={handleChange} 
            />
          </Form.Item>

            {error ? (
            <div>
              <Alert
                message="Error"
                description="Something went wrong with the credentials you provided."
                type="error"
                showIcon
              />
            </div>
          ) : null}

        <Form.Item wrapperCol={{ span: 24 }}>

          <Button htmlType="submit" className="login-form-button">
            Update Profile
          </Button>

        </Form.Item>

        </Form> */}

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

    </div>
    )
};