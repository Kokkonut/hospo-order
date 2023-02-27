import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import { Link } from 'react-router-dom';
import { Result, Button, Spin } from 'antd';

function Success() {
  const [cart, setCart] = useLocalStorage("shopping-cart", {});

  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      //create arrays of product ids and quantities
      const productQty = Object.values(cart);

      //creaste new ararys where each product id is repeated the number of times of its quantity
      const products = productQty.flatMap(({ id, quantity }) =>
        Array(quantity).fill(id)
      );

      if (products.length) {
        //saving order to database
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        //updating local storage
        // productData.forEach((item) => {
        //   const updatedCart = { ...cart };
        //   delete updatedCart[item.id];
        //   setCart(updatedCart);
        // });
        localStorage.removeItem("shopping-cart");
      }

      setTimeout(() => {
        window.location.assign("/home");
      }, 3000);
    }

    saveOrder();
  }, [addOrder, cart, setCart]);



  return (
    <div>
      <Result
        status="success"
        title="Your payment was successful!"
        subTitle="Thank you for your purchase. Your order will be processed shortly."
      // extra={[
      //   <Button fkey="backToShop">
      //     Back to Shop
      //   </Button>,
      //    <Link to="/history">
      //   <Button key="orderHistory">View Order History</Button></Link>,
      // ]}

      />
      <div style={{ textAlign: 'center', marginTop: '20px'}}>
        <Spin size="large" />
        <p style={{ marginTop: '10px'  }}>Please wait while we redirect you back to home...</p>
      </div>
    </div>
  );
}

export default Success;
