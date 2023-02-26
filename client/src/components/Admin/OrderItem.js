import React from 'react';
import { Row, Col } from 'antd';

const OrderItem = ({ product }) => {
  return (

    <Row gutter={[16, 16]}>

    <Col span={24}>{product.name}</Col>

  </Row>
  );
};

export default OrderItem;
