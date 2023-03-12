import { useContext } from "react"
import { CartContext } from "../../Context/CartProvider"
import "./Cart.css"

const Cart = () => {
  const { cartItem } = useContext(CartContext)

  return (
    <div className="Container">
      <h1 className="cart-header">Cart</h1>
      <ul className="cart">
        {cartItem.map((item, index) => (
          <li key={index} className="cart-container">
            <img src={item.imageUrl} alt={item.title} className="cart-image" />
            <div className="cart-item-title">{item.title}</div>
            <div className="cart-item-price">Rs. {item.price}</div>
            <div className="cart-item-quantity">Quantity : {item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart