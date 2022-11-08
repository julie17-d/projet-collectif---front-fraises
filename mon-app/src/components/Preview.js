import React from "react";
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';

const Preview = ({ furniture }) => {
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
                    {/* Ajouter ici Add To Cart */}
                </Card.Footer>
            </Card>
    );
};

export default Preview;