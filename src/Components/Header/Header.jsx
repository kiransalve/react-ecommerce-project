import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import "./Header.css"
import { CartContext } from '../../Context/CartProvider'
import { AiOutlineShoppingCart } from "react-icons/ai"

const Header = () => {
  const { cartItem } = useContext(CartContext)
  return (
    <header className='header' >
      <div>
        <h1>
          <Link to="/" className='logo'>
            The Generic
          </Link>
        </h1>
      </div>
      <div className="header_link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart" className='header-cart-icon'><AiOutlineShoppingCart />  <sup>{cartItem.length} </sup></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header