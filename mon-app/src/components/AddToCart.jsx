import React, {useState} from "react";
import Button from 'react-bootstrap/esm/Button';
import Modal from "react-bootstrap/Modal";
import Cart from "./Cart";

const AddToCart = ({ furniture }) => {
    let user = "";
    if(JSON.parse(localStorage.getItem("user-info"))!==null){
        user = JSON.parse(localStorage.getItem("user-info"));
    };
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    localStorage.setItem("cart", JSON.stringify(cart))

    return (
        <div>
        <Button variant="outline-dark" onClick={() => {
              //onclick, crée un object avec infos du meuble...
            const object = {
                userId: user.id,
                id: furniture._id,
                title: furniture.title,
                price: furniture.price
            };

              //...et mets à jour "cart" en rajoutant à la fin de la liste le dernier object cliqué
            setCart((cart) => [...cart, object]);
            handleShow();
            }}>Ajouter au panier</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h2>Vous avez bien ajouté l'élément <strong>{furniture.title}</strong> au panier.</h2>
                <Cart>Voir mon panier</Cart>
            </Modal.Body>
        </Modal>
        </div>
)};

export default AddToCart; 
