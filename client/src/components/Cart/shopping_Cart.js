import React, { useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { useLazyQuery } from "@apollo/client"
import { QUERY_CHECKOUT } from "../../utils/queries"
import Auth from "../../utils/auth"
import { useQuery } from "@apollo/client"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { CartItem } from "./cart_Item"
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { Modal, Button } from 'antd';

// Load Stripe API and get a Promise object representing the Stripe object
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

export function ShoppingCartModal({ isOpen, onClose }) {
  // Get the cart items from the ShoppingCartContext
  const { cartItems } = useShoppingCart()
  // Use a lazy query to fetch the checkout session from the server when the "Checkout" button is clicked
  const [getCheckout, { loading, data, error }] = useLazyQuery(QUERY_CHECKOUT);
  console.log('lazydata', loading, data, error)


  // Redirect to Stripe checkout page when a checkout session is returned from the server
  useEffect(() => {
    if (data?.checkout) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
      })
    }
  }, [data])
  

  // Query all products and handle loading and error states
  const { loading: productsLoading, error: productsError, data: productsData } = useQuery(QUERY_ALL_PRODUCTS);
  if (productsLoading) {
    return <p>Loading products...</p>;
  }
  if (productsError) {
    return <p>Error loading products.</p>;
  } 

  // Destructure the products from the productsData object
  const { products } = productsData;

  // When the "Checkout" button is clicked, get a checkout session from the server using a lazy query
  
  //this is fucked. i need to pass an array of ids, i am doing that
  //however it is asking for a name argument, which i am not passing
  function submitCheckout() {
    console.log('data', data)
    console.log("submit checkout")
    // Get an array of product IDs from the cart items
    const productIds = []
    cartItems.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        productIds.push(item.id)
      }
    })

    // const productIds = cartItems.map(({ id }) => id)
    // console.log('productIds', productIds)

    // Call the getCheckout function from the useLazyQuery hook with the product IDs as variables
    getCheckout({
      variables: { products: productIds, }
    });
  }

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
        {/* Render each cart item */}
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        {/* Display the total cost of all items in the cart */}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              // Find the product that matches the cart item by ID
              const item = products.find(i => i._id === cartItem.id);
              // Calculate the total cost of the cart items by multiplying the quantity by the product's price (or 0 if the product can't be found)
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </stack>
      {/* Render the "Checkout" button */}
      <button onClick={submitCheckout}>Checkout</button>
    </Modal>
  )
}

export default ShoppingCartModal
