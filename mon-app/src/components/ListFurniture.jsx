import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ChangeStatus from './ChangeStatus';

const ListFurniture =({ item }) => {
    let furnitureStatus = "";
    if(item.status.onSale===true){
        furnitureStatus = "En ligne ✅"
    } else if(item.status.pending===true){
        furnitureStatus = "À valider"
    } else if(item.status.sold===true){
        furnitureStatus = "Vendu";
    }
    return (
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item><strong>Titre:</strong> {item.title}</ListGroup.Item>
            <ListGroup.Item><strong>Prix:</strong> {item.price} €</ListGroup.Item>
            </ListGroup>
        </Card.Body>
        <Card.Footer>
        <ListGroup.Item><strong>{furnitureStatus}</strong></ListGroup.Item>
        <ChangeStatus furniture={item} />
        </Card.Footer>
    </Card>
    );
};

export default ListFurniture;