import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([])

  const addToCart = (item) => {
    const itemIndex = cartItem.findIndex((i) => i.title === item.title)

    if (itemIndex === -1) {
      setCartItem([...cartItem, { ...item, quantity: 1 }])
    }

    else {
      const updatedCartItem = [...cartItem]
      updatedCartItem[itemIndex].quantity++
      setCartItem(updatedCartItem)
    }
  }
  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export { CartContext }