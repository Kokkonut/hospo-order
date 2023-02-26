import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../utils/queries';
import OrderItem from '../components/Admin/OrderItem';
import { getTimeSinceOrderPlaced } from '../utils/helpers';

const Admin = () => {
  const { loading, data } = useQuery(GET_ORDERS);
  console.log('1st', data);

  if (loading) {
    return <p>Loading...</p>;
  }

  const { getOrders } = data;

  if (getOrders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div>
      <h1>Admin</h1>
      {getOrders.map((order) => {
        const { _id, purchaseDate, status, products } = order;
        const timeSinceOrderPlaced = getTimeSinceOrderPlaced(purchaseDate);

        return (
          <div key={_id}>
            <p>Order Time: {timeSinceOrderPlaced}</p>
            <p>Status: {status}</p>
            <ul>
              {products.map((product) => (
                <OrderItem key={product._id} product={product} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
