import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";


// import MenuCategory from "../components/MenuCategory/MenuCategory";

import { IdcardOutlined, InfoCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';

const Home = () => {


  const [showHours, setShowHours] = useState(false);
  const handleClick = () => setShowHours(!showHours);




  return (
    <div className="container">
      {/* this need to open as model */}
      <Link to ="/profile"><IdcardOutlined /></Link>
      
{/* this will need to be a css type effect  */}
      <button onClick={handleClick}><InfoCircleFilled /></button>

{/* this needs to open as model */}
      <Link to="/cart"><ShoppingCartOutlined /></Link>

      <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/>
        
      <div>
        <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/>
        <p>Temp Cafe Name</p>
        <p>Temp Cafe address</p>
      </div>

      {showHours && (
      <div className="hours">
        <p>I am a blurb</p>
        <p>Our Hours:</p>
        <p>Mon - Fri: 6:00am to 2:00pm</p>
        <p>Sat - Sun: 8:00am to 1:00pm</p>
      </div>
      )}

       {!showHours &&(
        < Menu />
       )}

    </div>

  );
};

export default Home;
