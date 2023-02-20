
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import { Form, Button,  Input } from 'antd';

function LoginCreate(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
          phone: formState.phone,
        },
      });
      const token = mutationResponse.data.addUser.token;
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
    <div className="container">

      <h2 className='header' >Signup</h2>
      <Form labelCol={{ span: 10 }} wrapperCol={{ span: 5 }} autoComplete="off" onSubmit={handleFormSubmit} onChange={handleChange} 
      onFinish={(values)=> {
        console.log(({ values }));
      }}>
        <Form.Item

          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name'
            },
            {
              min: 3,
              message: 'Must be more than 3 Characters'
            },
            {
              whitespace: true
            }
          ]}
          hasFeedback
        >
          <Input
            placeholder="Enter your first name "
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please enter your last name'
            },
            {
              whitespace: true
            }
          ]}
          hasFeedback
        >
          <Input
            placeholder="Enter your last name"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item name="email" label="Email"
          rules={[
            {
              required: true,
              message: 'Please enter your email'
            },
            {
              type: 'email',
              message: 'Email is not valid'
            },

          ]}
          hasFeedback
        >
          <Input
            placeholder="Enter your email"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item name="password" label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter your email'
            },
            {
              min: 8,
              message: 'Must be more than 8 Characters'
            },
            // {
            //   validator:(_, value) =>
            //   value && value.includes('A') ? Promise.resolve():Promise.reject("Password doesn't match criteria"),
            // }

          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Enter a secure password"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input
            placeholder="Enter your phone number eg: XXX-XXX-XXXX"
            name="phone"
            type="text"
            id="phone"
            // onChange={handleChange}
          />
        </Form.Item>
        {/* <Form.Item name="agreement" wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value === true  ? Promise.resolve() : Promise.reject("To proceed, you need to agree with our Terms & Conditions"),
            }
          ]}>
          <Checkbox > {""} Agree to out <a href='example.com'>Terms & Conditions</a></Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      <>
      <Link className="back" to="/">← Go back to Login</Link></>
    </div>
  );
}

export default LoginCreate;
