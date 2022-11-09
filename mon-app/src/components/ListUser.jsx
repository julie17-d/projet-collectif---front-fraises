import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ListUser =({ user }) => {
    return (
        <Card style={{ width: '20rem' }}>
            <ListGroup variant="flush">
            <ListGroup.Item variant="secondary">id: {user._id}</ListGroup.Item>
            <ListGroup.Item><strong>Nom:</strong> {user.lastName}</ListGroup.Item>
            <ListGroup.Item><strong>Prénom:</strong> {user.firstName}</ListGroup.Item>
            <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default ListUser;