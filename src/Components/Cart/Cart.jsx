import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartProvider"
import "./Cart.css"

const Cart = () => {
  const { cartItem, removeFromCart } = useContext(CartContext)
  const hasitem = cartItem.length > 0
  const handleRemoveItem = (uid) => {
    removeFromCart(uid);
  };

  console.log(cartItem)
  return (
    <div className="Container">
      {!hasitem ? <h1 className="cart-header">Cart is Empty</h1> : <h1 className="cart-header">Cart</h1>}

      {hasitem &&
        <>
          <ul className="cart">
            {cartItem.map((item) => (
              <li key={item.uid} className="cart-container">
                <img src={item.imageUrl} alt={item.title} className="cart-image" />
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">Rs. {item.price}</div>
                <div className="cart-item-quantity">Quantity : {item.quantity}</div>
                <div className="cart-item-quantity">Total : {item.quantity * item.price}</div>
                <button className="cart-button" onClick={() => handleRemoveItem(item.uid)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      }
    </div >
  )
}

export default Cart