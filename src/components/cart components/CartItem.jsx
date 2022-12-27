import React from 'react'
import "./Cart.css"
const cartItems = [{
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
},
{
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
},
{
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
},
{
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
},
]

const CartItem = () => {
    return (
        <div className='cart-row'>{cartItems.map((item) => {
            return <>
                <div className="cart-item cart-column">{item.title}</div>
                <div className="cart-price cart-column">{item.price}</div>
                <div className="cart-qty cart-column">{item.quantity}
                    <button>REMOVE</button>
                </div>
            </>
        })}

        </div>
    )
}

export default CartItem