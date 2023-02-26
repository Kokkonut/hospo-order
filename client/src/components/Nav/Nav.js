import React, { useState } from 'react';
import { Layout, Avatar, Badge } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useShoppingCart } from "../../context/ShoppingCartContext";
import ShoppingCartModal from "../Cart/shopping_Cart";
import { Link } from 'react-router-dom';

const { Header } = Layout;

export function Nav() {
  const { cartQuantity } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header style={{ background: 'transparent' }}>
        <Row justify="space-between" align="middle">
          <Col flex="100px"><Link to ="/profile">
               {/* this need to open as model */}
            <Avatar size={40} icon={<UserOutlined />} />
            </Link>
          </Col>
          <Col flex="auto" style={{ textAlign: 'center' }}>
            <h2>Cafe Name</h2>
          </Col>
          <Col flex="100px">
            <Badge count={cartQuantity}>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} onClick={openCart}/>
            </Badge>
          </Col>
        </Row>
      </Header>
      <ShoppingCartModal isOpen={isOpen} onClose={closeCart} />
    </>
  );
}

export default Nav;