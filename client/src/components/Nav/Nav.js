import  React  from "react";
import { Layout, Avatar, Badge } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useShoppingCart } from "../../context/ShoppingCartContext";
const { Header } = Layout;

export function Nav() {
    const { openCart, cartQuantity } = useShoppingCart();
  return (

    <Header style={{ background: 'transparent' }}>
    {/* <Header style={{ background: 'white', opacity: 0.5 }}> */}
      <Row justify="space-between" align="middle">
        <Col flex="100px">
          <Avatar size={40} icon={<UserOutlined />} />
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
  );
}

export default Nav;
