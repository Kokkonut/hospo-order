import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import heroImage from "../assets/hero.jpg";
import Nav from "../components/Nav/Nav";
import { InfoCircleFilled } from '@ant-design/icons';
import { Button } from "antd";

const Home = () => {


  const [showHours, setShowHours] = useState(false);
  const handleClick = () => setShowHours(!showHours);


  return (

    <div className="container">

      <Nav />
      <div>
      <div className="homeWrap"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: 5,

          height: "200px",
          
        }}
      >
        <div >
          {/* this will need to be a css type effect  */}
          <Button  onClick={handleClick} className="infoButton"><InfoCircleFilled /></Button>
        </div>
      </div></div>


      {showHours ? (
        <div className="hours">
          <p>I am a blurb</p>
          <p>Our Hours:</p>
          <p>Mon - Fri: 6:00am to 2:00pm</p>
          <p>Sat - Sun: 8:00am to 1:00pm</p>
          <br></br>
          <p>Temp Cafe address</p>
        </div>) :
        (
          < Menu />
        )}

    </div>

  );
};

export default Home;
