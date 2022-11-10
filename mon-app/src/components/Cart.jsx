import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import ValidCart from "./ValidCart";


function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let cartContent;
  if(localStorage.getItem("cart")){
    cartContent = JSON.parse(localStorage.getItem("cart"));
  }
  // const cartContent = JSON.parse(localStorage.getItem("cart"));

  return (
    <>
<<<<<<< HEAD

      <Button variant="secondary" onClick={handleShow}>
        Voir mon panier
=======
      <Button variant="outline-dark" onClick={handleShow}>
        Panier
>>>>>>> main
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <div>
      {cartContent.map((item) => (
      <div><h6>{item.title} : {item.price} €</h6></div>
      ))}
      </div>
      <div>
      <Button variant="secondary">Valider mon panier et payer</Button>
      </div>
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
