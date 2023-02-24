import { Offcanvas, Stack } from "react-bootstrap"
import { useQuery } from "@apollo/client"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { CartItem } from "./cart_Item"
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart()

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error loading products.</p>;
  }

  const { products } = data;

  return (




    <div>
      <Stack gap={3}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              //need to check this path
              const item = products.find(i => i._id === cartItem._id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Stack>
    </div>


  )
}
