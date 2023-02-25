import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Success() {
  const [cart, setCart] = useLocalStorage('shopping-cart', []);
    console.log(cart);
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const products = cart.map((item) => item.id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        // productData.forEach((item) => {
        //   const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        //   setCart(updatedCart);
        // });
      }

    //   setTimeout(() => {
    //     window.location.assign('/Home');
    //   }, 3000);
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
