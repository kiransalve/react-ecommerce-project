import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import "./Header.css"
import { CartContext } from '../../Context/CartProvider'
import { AiOutlineShoppingCart } from "react-icons/ai"
import AuthContext from '../../store/auth-context'

const Header = () => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandlar = () => {
    authCtx.logout()
  }

  const { cartItem } = useContext(CartContext)

  return (
    <header className='header' >
      <div>
        <h1>
          <NavLink to="/" className='logo' activeClassName="active">
            The Generic
          </NavLink>
        </h1>
      </div>
      <div className="header_link">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active">Store</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
          </li>
          {/* <li>
            <NavLink to="/movie" activeClassName="active">Movie</NavLink>
          </li> */}
          <li>
            <NavLink to="/cart" className='header-cart-icon'>
              <AiOutlineShoppingCart />
              <sup>{cartItem.length} </sup>
            </NavLink>
          </li>

          {/* Auth */}

          {!isLoggedIn && (
            <li>
              <NavLink to='/auth'>Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button className='btn-logout' onClick={logoutHandlar}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header