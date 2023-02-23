import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import AuthService from '../../utils/auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';



function LoginMain(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    try {
      
      const mutationResponse = await login({
        variables: {
           email: formState.email, 
           password: formState.password 
          },
      });
      const token = mutationResponse.data.login.token;
      AuthService.login(token);
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
      <h2 className='header' >Login</h2>
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        onSubmit={handleFormSubmit}
        onFinish={handleFormSubmit} 
        >


        <Form.Item
          name="email"
          label="Email:"
          rules={[
            {
              required: true,
              message: 'Please enter your email'
            },
            {
              type: 'email',
              message: 'Email is not valid'
            },
          ]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Email" 
          onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          name="password"
          label='Password:'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <Form.Item wrapperCol={{ span: 24 }}>

          <Button htmlType="submit" className="login-form-button">
            Log in
          </Button>

        </Form.Item>
      </Form>

      <div>
        <Link className="back" to="/">← Go back to Signup</Link>
      </div>

    </div>
  );
}

export default LoginMain;
