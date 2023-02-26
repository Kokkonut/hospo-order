import { createContext, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])

  //has started throwing an error
  // const cartQuantity = cartItems.reduce(
  //   (quantity, item) => item.quantity + quantity,
  //   0
  // )
  //so I changed it to this
  const cartQuantity = Array.isArray(cartItems)
  ? cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  : 0;


//   const openCart = () => setIsOpen(true)
//   const closeCart = () => setIsOpen(false)
  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}

    </ShoppingCartContext.Provider>
  )
}
