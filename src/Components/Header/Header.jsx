import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import "./Header.css"
import { CartContext } from '../../Context/CartProvider'
import { AiOutlineShoppingCart } from "react-icons/ai"

const Header = () => {
  const { cartItem } = useContext(CartContext)
  return (
    <header className='header' >
      <div>
        <h1>
          <NavLink exact activeClassName="active" to="/" className='logo'>
            The Generic
          </NavLink>
        </h1>
      </div>
      <div className="header_link">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/movie">Movie</NavLink>
            
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/cart" className='header-cart-icon'>
              <AiOutlineShoppingCart />
              <sup>{cartItem.length} </sup>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header