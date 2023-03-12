import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.emailId
  const emailId = email.replace(/[@.]/g, "")

  const [cartItem, setCartItem] = useState([])

  const addToCart = async (item) => {
    const itemIndex = cartItem.findIndex((i) => i.title === item.title)

    if (itemIndex === -1) {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { ...item, quantity: 1 }
      setCartItem([...cartItem, newItem])
      // Call the backend API to add the item to the user's cart
      const response = await fetch(`https://crudcrud.com/api/714b2c7933da41aba5d81df3ae8684b0/cart${emailId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({ newItem })
        })
      const data = await response.json()
      console.log(data)
    }
    else {
      // If the item is already in the cart, update its quantity
      const updatedCartItem = { ...cartItem[itemIndex], quantity: cartItem[itemIndex].quantity + 1 };
      const updatedCartItems = [...cartItem];
      updatedCartItems[itemIndex] = updatedCartItem;

      const response = await fetch(`https://crudcrud.com/api/714b2c7933da41aba5d81df3ae8684b0/cart${emailId}/${updatedCartItem.title}`,
        {
          method: 'PUT', headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ quantity: updatedCartItem.quantity })
        })
      const data = await response.json()
      console.log(data)
      setCartItem(data);
    }

  }
  useEffect(() => {
    const fetchCartItem = async () => {
      const response = await fetch(`https://crudcrud.com/api/714b2c7933da41aba5d81df3ae8684b0/cart${emailId}`)
      const data = await response.json()
      setCartItem(data)
      console.log(data)
    }
    fetchCartItem()
  }, [emailId,])

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export { CartContext }