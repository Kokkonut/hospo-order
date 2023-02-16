import React from "react";
import { Link } from "react-router-dom";

// import MenuCategory from "../components/MenuCategory/MenuCategory";

import { IdcardOutlined, InfoCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <div className="container">
      
      <Link to ="/profile"><IdcardOutlined /></Link>
      

      <InfoCircleFilled />
      <Link to="/cart"><ShoppingCartOutlined /></Link>

      <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/>
        
      <div>
        <img href="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="default"/>
        <p>Temp Cafe Name</p>
        <p>Temp Cafe address</p>
      </div>

        {/* <MenuCategory /> */}

    </div>
  );
};

export default Home;
