import React, { useState } from "react";
import { Link } from "react-router-dom";
// import MenuMain from "../components/Menu/MenuMain";
// import MenuCategory from "../components/MenuCategory/MenuCategory";
import { IdcardOutlined, InfoCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Menu } from 'antd';
import MenuMain from "../components/Menu/MenuMain";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
const { Header, Content, Footer } = Layout;



const Home = () => {


  const [showHours, setShowHours] = useState(false);
  const handleClick = () => setShowHours(!showHours);

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (


    <Layout>
      <Header
        breakpoint="lg"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,

        }}
       >
       {/* <div
          style={{
            width: '100%',
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        /> */}
        {/* <Menu
          style={{
            width: '100%',
            top: 0,
            zIndex: 1,

          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: "insert nav options"
          }))}


        /> */}
      </Header>
      <div>
        {/* <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/> */}
        <h2>Temp Cafe Name</h2>
        <p>Temp Cafe address</p>
      </div>        
      <Breadcrumb
          style={{
            margin: '30px',
            alignContent: 'center'
          }}
        >
          <Breadcrumb.Item><Link to="/profile"><IdcardOutlined /></Link></Breadcrumb.Item>
          <Breadcrumb.Item> <InfoCircleFilled onClick={handleClick} /></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/cart"><ShoppingCartOutlined /></Link></Breadcrumb.Item>

        
        </Breadcrumb>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >

        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >




          {showHours && (
            <div className="hours">
              <p>I am a blurb</p>
              <p>Our Hours:</p>
              <p>Mon - Fri: 6:00am to 2:00pm</p>
              <p>Sat - Sun: 8:00am to 1:00pm</p>
            </div>
          )}

          {!showHours && (
            < MenuMain />
          )}



        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Created by Nic, Lara & Rickelle
      </Footer>
    </Layout>


  );
};

export default Home;
