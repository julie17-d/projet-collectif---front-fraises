import React from "react";
import Card from 'react-bootstrap/Card';
import ViewDetails from "./ViewDetails";
import AddToCart from "./AddToCart";

const Preview = ({ furniture }, { cart }) => {
    return (
            <Card style={{ width: '24rem' }} className='card' border="dark" bg="dark" text="light">
                <Card.Header>
                    <Card.Title>
                        <h3>{furniture.title}</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Img className="card-img" src={furniture.pictureUrl} variant="top" />
                <Card.Body>
                    <Card.Text>
                        {furniture.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {furniture.price.toLocaleString()} € <br />
                    <ViewDetails furniture={furniture} />
                    <AddToCart furniture={furniture} cart={cart} />
                </Card.Footer>
            </Card>
    );
};

export default Preview;