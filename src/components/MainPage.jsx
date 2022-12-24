import React from 'react'
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Product from './Product';

const ProductList = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
]

function MainPage() {
    const products = ProductList.map(product =>
        <Product title={product.title} img={product.imageUrl} price={product.price} />)

    return (
        <>
            <Container>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand>The Generics</Navbar.Brand>
                    </Container>
                    <Container>
                        <Row>
                            <Col>Home</Col>
                            <Col>Store</Col>
                            <Col>About</Col>
                        </Row>
                        <Row>
                            <Col>Cart</Col>
                        </Row>
                    </Container>
                </Navbar>
            </Container>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center align-item-center flex-wrap">
                        {products}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainPage