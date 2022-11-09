import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ChangeStatus from './ChangeStatus';

const ListFurniture =({ item }) => {
    let furnitureStatus = "";
    let color = "";
    if(item.status.onSale===true){
        furnitureStatus = "En ligne"
        color="success"
    } else if(item.status.pending===true){
        furnitureStatus = "À valider"
        color="warning"
    } else if(item.status.sold===true){
        furnitureStatus = "Vendu"
        color="dark"
    }
    return (
        <Card style={{ width: 'fit-content' }}>
        <ListGroup horizontal>
            <ListGroup.Item><strong>{item.title}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Prix:</strong> {item.price.toLocaleString()} €</ListGroup.Item>
            <ListGroup.Item variant={color}><strong>{furnitureStatus}</strong></ListGroup.Item>
            <ChangeStatus furniture={item} />
        </ListGroup>
        </Card>
    );
};

export default ListFurniture;