import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/esm/Button';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


const ChangeStatus = ({ furniture }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let action = "";
    let body;
    if(furniture.status.onSale===true){
        action = "Indiquer comme vendu";
        body = {id: furniture._id, onSale: false, sold: true};
    } else if(furniture.status.pending===true){
        action = "Passer en ligne";
        body = {id: furniture._id, onSale: true, pending: false};
    } else if(furniture.status.sold===true){
        action = "Vous ne pouvez pas modifier le status";
    }

    const changeStatus = (event) => {
        event.preventDefault();
        axios
        .put("http://localhost:3001/api/updatestatus", {body})
        .then((res) => {
            handleClose();
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        Changer le statut
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Changer le statut</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Êtes-vous sûr·e de vouloir changer le statut de l'élément suivant ?</h3>
                <img className="item-img" src={furniture.pictureUrl}/>
                <p> Type : {furniture.type}</p>
                <p>Description : {furniture.description}</p>
                <p>Color : {furniture.colors}</p>
                <p>Materials : {furniture.materials}</p>
                <p>Prix : {furniture.price} €</p>
            </Modal.Body>   
            <Modal.Footer>
                <Button variant="success" onClick={changeStatus}>
                {action}
                </Button>
            </Modal.Footer>  
        </Modal>
        </> )
};

export default ChangeStatus;
