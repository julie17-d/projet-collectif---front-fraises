import React, {useState} from "react";
import Button from 'react-bootstrap/esm/Button';
import Modal from "react-bootstrap/Modal";
import AddToCart from "./AddToCart";

const arrayToString = (array) =>{
    let arrToStr = "";
    for (let i =0; i<array.length; i++){
        arrToStr += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
    }
        return arrToStr;
};

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
                <div>
                    <img src={furniture.pictureUrl} class="img-fluid" alt={furniture.title}/> </div>
                </div>
                <p> <strong>Type : </strong>Type : {furniture.type}</p>
                <p><strong>Description : </strong>{furniture.description}</p>
                <p><strong>Couleur: </strong>{furniture.colors}</p>
                <p><strong>Matériaux : </strong>{arrayToString(furniture.materials)}</p>
                <p><strong>Dimensions : </strong>
                <ul> <li>Hauteur (cm) : {furniture.dimensions_cm.height}</li>
                    <li>Largeur (cm) : {furniture.dimensions_cm.width}</li>
                    <li>Profondeur (cm) : {furniture.dimensions_cm.depth}</li>

                </ul></p>
            </Modal.Body>   
            <Modal.Footer>
              <strong>  {furniture.price.toLocaleString()} € </strong> <br />
                <AddToCart>Ajouter au panier</AddToCart>

            </Modal.Footer>  
        </Modal>
        </> )
};

export default ViewDetails; 
