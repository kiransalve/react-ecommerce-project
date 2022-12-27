import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartItem from './CartItem'
import "./Cart.css"

const Cart = () => {
    return (
        <Container id="cart">
            <h2>Cart</h2>
            <button className="cancel"> X </button>
            <Row className="cart-header">
                <Col className="cart-item cart-column">ITEM</Col>
                <Col className="cart-price cart-column">PRICE</Col>
                <Col className="cart-qty cart-column">QUANTITY</Col>
            </Row>
            <CartItem />
            <div className="cart-total">
                <span>
                    <span className='total-title'>
                        <strong>Total</strong>
                    </span>$<span id="total-value">19.99</span>
                </span>
            </div>
            <button className="purchase-btn">
                PURCHASE
            </button>
        </Container>
    )
}

export default Cart;