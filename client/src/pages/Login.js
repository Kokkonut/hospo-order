import React from 'react'
import LoginLinks from '../components/Login/LoginLinks';
import '../assets/App.css';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#598f78',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#d4a4a4',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#598f78',
};

const Login = () => {
  return (

    <div className="container">
      <Layout>
        <Header style={headerStyle}>Cafe Title</Header>
        <Content style={contentStyle} className="loginContent">
          <LoginLinks />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

    </div>
  )
};

export default Login;