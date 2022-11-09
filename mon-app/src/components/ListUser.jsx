import React from 'react';
import Card from 'react-bootstrap/Card';

const ListUser =({ user }) => {
    return (
        <Card bg="dark" border="secondary" text="light">
        <Card.Body><strong> Nom:</strong> {user.lastName} <strong> Prénom:</strong> {user.firstName} <strong> Email:</strong> {user.email} </Card.Body>
        </Card>
    );
};

export default ListUser;