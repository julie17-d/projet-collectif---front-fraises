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
                <Modal.Title>Item Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{furniture.title}</h3>
                <img className="item-img" src={furniture.pictureUrl}/>
                <p> Type : {furniture.type}</p>
                <p>Description : {furniture.description}</p>
                <p>Color : {furniture.colors}</p>
                <p>Materials : {furniture.materials}</p>
            </Modal.Body>   
            <Modal.Footer>
                {furniture.price.toLocaleString()} € <br />
                <Cart > Add to Cart</Cart>

            </Modal.Footer>  
        </Modal>
        </> )
};

export default ViewDetails; 
