import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/esm/Button';
import Modal from "react-bootstrap/Modal";
import Cart from "./Cart";


const ViewDetails = ({ furniture }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
       <Button variant="primary" onClick={handleShow}>
        View Details
       </Button>
       <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Détails du produit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                 <h3>{furniture.title}</h3>
                <img className="item-img" src={furniture.pictureUrl}/> 
                </div>
                <p> Type : {furniture.type}</p>
                <p>Description : {furniture.description}</p>
                <p>Couleur: {furniture.colors}</p>
                <p>Matériaux : {furniture.materials}</p>
                <p><ul> Dimensions : 
                    <li>Hauteur (cm) : {furniture.dimensions_cm.height}</li>
                    <li>Largeur (cm) : {furniture.dimensions_cm.width}</li>
                    <li>Profondeur (cm) : {furniture.dimensions_cm.depth}</li>

                </ul></p>
            </Modal.Body>   
            <Modal.Footer>
                {furniture.price.toLocaleString()} € <br />
                <Cart> Panier </Cart>

            </Modal.Footer>  
        </Modal>
        </> )
};

export default ViewDetails; 
