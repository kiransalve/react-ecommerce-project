import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../ProductData"
import { Col, Container, Row } from "react-bootstrap"

const ProductDetail = () => {
    const { id } = useParams();
    // converting to a number using toString() before comparing it with the product id.
    const product = data.productsArr.find((p) => p.id.toString() === id);
    console.log(product)
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <Container>
            <Row>
                <Col md={6} >
                    <img src={product.imageUrl} alt={product.title} fluid />
                </Col>
                <Col>
                    {product.title}</Col>
                <Col>
                    Rs. {product.price}</Col>
            </Row>
        </Container>
    )
}

export default ProductDetail