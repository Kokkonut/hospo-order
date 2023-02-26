import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import heroImage from "../assets/hero.jpg";
import Nav from "../components/Nav/Nav";
// import MenuCategory from "../components/MenuCategory/MenuCategory";

import { IdcardOutlined, InfoCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';

const profileIconStyle = {
  top: 0,
  left: 0,
  color: 'white',
  height: 64,
  paddingInline: 20,
  lineHeight: '50px',
};


const Home = () => {


  const [showHours, setShowHours] = useState(false);
  const handleClick = () => setShowHours(!showHours);


  return (

    <div className="container">

    <Nav />
          <div className="homeWrap"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "200px",
      }}
    >
      {/* this need to open as model */}
      <Link to ="/profile" className="homeProfileIcon" style={profileIconStyle}><IdcardOutlined /></Link>
      
{/* this will need to be a css type effect  */}
      <button onClick={handleClick}><InfoCircleFilled /></button>

{/* this needs to open as model */}
      <Link to="/cart"><ShoppingCartOutlined /></Link>

      <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/>
        
{/* 
        <p>Temp Cafe Name</p>
        <p>Temp Cafe address</p> */}
        
     
      </div>
      

      {showHours ? ( 
      <div className="hours">
        <p>I am a blurb</p>
        <p>Our Hours:</p>
        <p>Mon - Fri: 6:00am to 2:00pm</p>
        <p>Sat - Sun: 8:00am to 1:00pm</p>
      </div>) : 
      (
     < Menu />
      )}

       


    </div>

  );
};

export default Home;
