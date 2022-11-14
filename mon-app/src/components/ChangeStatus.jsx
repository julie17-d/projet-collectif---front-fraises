import React, {useState} from "react";
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
        action = "Vous ne pouvez pas modifier le statut";
    }

    const arrayToString = (array) =>{
        let arrToStr = "";
        for (let i =0; i<array.length; i++){
            arrToStr += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
        }
            return arrToStr;
    };

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
        <Button variant="outline-dark" onClick={handleShow}>
        Changer le statut
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Changer le statut</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Êtes-vous sûr·e de vouloir changer le statut de l'élément suivant ?</h3>
                <img class="img-fluid" src={furniture.pictureUrl} alt={furniture.title}/>
                <p> <strong>Type : </strong>{furniture.type}</p>
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
                <Button variant="outline-dark" onClick={changeStatus}>
                {action}
                </Button>
            </Modal.Footer>  
        </Modal>
        </> )
};

export default ChangeStatus;
