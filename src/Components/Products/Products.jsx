import React from 'react'
import "./Product.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartProvider"

const Products = ({ data }) => {

    const { addToCart } = useContext(CartContext)

    return (
        <div className='products'>
            {data.productsArr.map((product) => {
                return <>
                    <div className='product-container'>
                        <img src={product.imageUrl} alt={product.title} className="product-image" />
                        <div className="product-title">{product.title}</div>
                        <div className="product-price">Rs. {product.price}</div>
                        <button className='product-addToCart' onClick={() =>

                            addToCart(product)}> Add To cart</button>
                    </div>
                </>
            })}
        </div >
    )
}

export default Products