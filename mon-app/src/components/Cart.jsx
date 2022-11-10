import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import ValidCart from "./ValidCart";


function Cart() {
  const [cartContent, setCartContent] = useState([]);
  useEffect( () => {
    if(localStorage.getItem("cart")){
      setCartContent(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // const cartContent = JSON.parse(localStorage.getItem("cart"));

  return (
    <>

      <Button variant="outline-dark" onClick={handleShow}>
      Voir mon panier
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <div>
      {cartContent ? (
            cartContent.map((item) => (
              <div><h6>{item.title} : {item.price} €</h6></div>
              ))
          ) : null}
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
