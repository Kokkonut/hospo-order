import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
      } , 3000);
    }

    saveOrder();
  }, [addOrder, cart, setCart]);

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page</h2>
    </div>
  );
}

export default Success;
