import React from 'react';

const OrderItem = ({ product }) => {
  return (
    <li>
      {product.name} - {product.quantity}
    </li>
  );
};

export default OrderItem;
