import { createContext, useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../store/auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.emailId
  const emailId = email.replace(/[@.]/g, "")

  const [cartItem, setCartItem] = useState([])

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `https://react-http-72ccd-default-rtdb.firebaseio.com/cart${emailId}.json`
        );
        if (!response.ok) {
          throw new Error("Could not fetch cart items");
        }
        const data = await response.json();
        const loadedCartItems = [];
        for (const key in data) {
          loadedCartItems.push({ id: key, ...data[key] });
        }
        setCartItem(loadedCartItems);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, [emailId]);

  const addToCart = async (item) => {
    // find the index if item already exists and store in itemIndex
    const itemIndex = cartItem.findIndex((i) => i.title === item.title)

    if (itemIndex === -1) {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { ...item, quantity: 1, uid: item.id + emailId }  // item is user clicked item, newItem have quantity 1 and unique uid
      // send new cart  item to cartItem
      setCartItem([...cartItem, newItem]) // cart item is collection of user clicked item
      try {
        const response = await fetch(`https://react-http-72ccd-default-rtdb.firebaseio.com/cart${emailId}/${newItem.uid}.json`,
          {
            method: "PUT",
            body: JSON.stringify(newItem),
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        const data = response.json()
      } catch (error) {
        console.error(error)
      }
    }
    else {
      // If the item is already in the cart, update its quantity
      const updatedCartItem = { ...cartItem[itemIndex], quantity: cartItem[itemIndex].quantity + 1 };
      // copy all previous cart items
      const updatedCartItems = [...cartItem];
      // insert updated item in cart
      updatedCartItems[itemIndex] = updatedCartItem;
      // send updated cart to cartItem
      setCartItem(updatedCartItems)
      console.log(updatedCartItem.uid)
      try {
        const response = await fetch(
          `https://react-http-72ccd-default-rtdb.firebaseio.com/cart${emailId}/${updatedCartItem.uid}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updatedCartItem),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.json())

        if (!response.ok) {
          throw new Error("Could not update item in cart");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const removeFromCart = async (itemUid) => {
    const existingItem = cartItem.find(item => item.uid === itemUid)

    const updatedCartItemAfterDeleteItem = cartItem.filter(item => item.uid !== itemUid)
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      updatedCartItemAfterDeleteItem.push(existingItem)
    }

    try {
      const response = await fetch(`https://react-http-72ccd-default-rtdb.firebaseio.com/cart${emailId}/${itemUid}.json`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Could not delete item from cart');
      }
    } catch (error) {
      console.error(error);
    }
    setCartItem(updatedCartItemAfterDeleteItem)
  }
  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export { CartContext }