import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { Button, Row, Col, Typography, Divider } from "antd";

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error loading products.</p>;
  }

  //got to check this
  const item = data.products.find((i) => i._id === id);
  if (item == null) return null;

  return (
<div style={{ position: "relative" }}>
  <div>
    <Row gutter={[16, 16]} className="align-items-center">
      <Col span={8}>
        <Typography.Text strong>{item.name}</Typography.Text>
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
      </Col>
      <Col span={6} className="text-end">
        <Typography.Text>{formatCurrency(item.price)}</Typography.Text>
      </Col>
      <Col span={6} className="text-end">
        <Typography.Text>{formatCurrency(item.price * quantity)}</Typography.Text>
      </Col>
    </Row>
    <Divider className="mt-2 mb-2" />
  </div>
  <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "16px" }}>
    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item._id)}>
      &times;
    </Button>
  </div>
</div>



  );
}

export default CartItem;
