import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../utils/queries';
import OrderItem from '../components/Admin/OrderItem';
import { getTimeSinceOrderPlaced } from '../utils/helpers';
import { Row, Col, Button } from 'antd';

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
        const { _id, purchaseDate, status, orderBy, products } = order;
        console.log ('status', status, orderBy)
        const timeSinceOrderPlaced = getTimeSinceOrderPlaced(purchaseDate);

        return (

          <Row gutter={[16, 16]}>
            <Col span={4}>{orderBy.firstName}</Col>
            <Col span={6}>
              
                {products.map((product) => (
                  <OrderItem key={product._id} product={product} />
                ))}
              
              </Col>
            <Col span={4}>{ timeSinceOrderPlaced }</Col>
            <Col span={4}><Button type='link'>Reject</Button></Col>
            <Col span={4}><Button type='primary'>Accept</Button></Col>
            </Row>
        );
      })}
    </div>
  );
};

export default Admin;
