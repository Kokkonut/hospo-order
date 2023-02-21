import React from 'react';

const Order = ({ order }) => {
  const { name, qty, createdAt } = order;

  return (
    <div>
      <h3>{name}</h3>
      <p>Quantity: {qty}</p>
      <p>Ordered At: {createdAt}</p>
    </div>
  );
};

export default Order;
