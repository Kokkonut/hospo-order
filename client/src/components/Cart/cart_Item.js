import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { Button } from 'antd';

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart()

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error loading products.</p>;
  }

  //got to check this
  const item = data.products.find(i => i._id === id)
  if (item == null) return null

  return (
    <stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item._id)}
      >
        &times;
      </Button>
    </stack>
  )
}
