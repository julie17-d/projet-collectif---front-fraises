import React from 'react';
import Card from 'react-bootstrap/Card';

const ListFurniture =({ item }) => {
    return (
        <Card bg="dark" border="secondary" text="light">
        <Card.Body>{item.title}</Card.Body>
        </Card>
    );
};

export default ListFurniture;