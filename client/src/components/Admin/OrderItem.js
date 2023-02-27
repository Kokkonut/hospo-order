import React from 'react';
import { Row, Col } from 'antd';
import './Admin.css';

const OrderItem = ({ product }) => {
  return (

    <Row gutter={[16, 16]}>

    <Col span={24} className='items'>{product.name}</Col>
    <Col span={24} className='items'></Col>

  </Row>
  );
};

export default OrderItem;
