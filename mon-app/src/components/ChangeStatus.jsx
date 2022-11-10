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
    } else if(furniture.status.pending===true){
        action = "Passer en ligne";
    } else if(furniture.status.sold===true){
        action = "Vous ne pouvez pas modifier le status";
    }

    const changeStatus = (event) => {
        if(furniture.status.onSale===true){
            body = {id: furniture._id, onSale: false, sold: true};
            console.log(body);
        } else if(furniture.status.pending===true){
            body = {id: furniture._id, onSale: true, pending: false};
            console.log(body);
        } else {
            console.log("error");
        }

        axios
        .put("http://localhost:3001/api/updatestatus", body)
        .then((res) => {
            handleClose();
            window.location.reload();
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
                <img class="img-fluid" src={furniture.pictureUrl}/>
                <p><strong>Type : </strong>{furniture.type}</p>
                <p><strong>Description : </strong>{furniture.description}</p>
                <p><strong>Couleur : </strong>{furniture.colors}</p>
                <p><strong>Prix : </strong>{furniture.price} €</p>
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
