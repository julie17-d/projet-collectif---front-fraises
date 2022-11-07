import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Cart(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Panier
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* propriété cart, qui stockera le contenu du panier */}
          {props.cart}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
