import React from 'react'
import { Button, Card } from "react-bootstrap"


function Product(props) {

    return (
        <Card className='w-30 m-3'>
            <Card.Img variant='top' src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product