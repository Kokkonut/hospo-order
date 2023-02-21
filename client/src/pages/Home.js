import React, { useState } from "react";
import { Link } from "react-router-dom";
// import MenuMain from "../components/Menu/MenuMain";
// import MenuCategory from "../components/MenuCategory/MenuCategory";
import { IdcardOutlined, InfoCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Menu  } from 'antd';
const { Header, Content, Footer} = Layout;



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
            width: '100%',
          }}
        > <div
            style={{
              float: 'left',
              width: 120,
              height: 31,
              margin: '16px 24px 16px 0',
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>
        <div>
        {/* <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/> */}
        <p>Temp Cafe Name</p>
        <p>Temp Cafe address</p>
      </div>
        <Content
          className="site-layout"
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item><Link to="/profile"><Link to ="/profile"><IdcardOutlined /></Link></Link></Breadcrumb.Item>
            <Breadcrumb.Item><button onClick={handleClick}><InfoCircleFilled /></button></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/cart"><ShoppingCartOutlined /></Link></Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            
          </Breadcrumb>
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
        < Menu />
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
