import React from 'react'
import LoginLinks from '../components/Login/LoginLinks';
import '../assets/App.css';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: 'white',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#874402',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',

};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#874402',
};

const Login = () => {
  return (

    <div className="container">
      <Layout className='layoutContainer'>
        <Header style={headerStyle}>Cafe Title</Header>
        <Content style={contentStyle} className="loginContent">
          <LoginLinks />
        </Content>
        <Footer style={footerStyle}></Footer>
      </Layout>

    </div>
  )
};

export default Login;