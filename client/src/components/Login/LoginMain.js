import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


function LoginMain(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
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

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="container">
      <h2 className='header' >Login</h2>
      <Form name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onSubmit={handleFormSubmit}>

        <Form.Item
          name="email" label="Email"
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
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
        />
      </Form.Item>
      <Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>

      </Form.Item>
    </Form>

      {/* <div> 
  <Link className="back" to="/">← Go back to Signup</Link>
  </div> */}
    </div>
  );
}

export default LoginMain;
