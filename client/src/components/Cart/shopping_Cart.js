import { useQuery } from "@apollo/client"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { CartItem } from "./cart_Item"
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { Modal, Button } from 'antd';

export function ShoppingCartModal({ isOpen, onClose }) {
  const { cartItems } = useShoppingCart()

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error loading products.</p>;
  }

  const { products } = data;

  return (
    <Modal
      title="Cart"
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>
      ]}
    >
      <stack gap={3}>
        {cartItems.map(item => (
          <CartItem key={item._id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = products.find(i => i._id === cartItem._id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </stack>
    </Modal>
  )
}

export default ShoppingCartModal