import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Signup() {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const handleChange = (event) => {
    if (event.target.name === "firstName") {
      user["firstName"] = event.target.value;
    } else if (event.target.name === "lastName") {
      user["lastName"] = event.target.value;
    } else if (event.target.name === "address") {
      user["address"] = event.target.value;
    } else if (event.target.name === "email") {
      user["email"] = event.target.value;
    } else if (event.target.name === "phoneNumber") {
      user["phoneNumber"] = event.target.value;
    } else if (event.target.name === "password") {
      user["password"] = event.target.value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/signup", {user})
      .then((res) => {
        handleClose();
        handleShowSuccess();
        return res;
      })
      .catch((error) => {
        handleShowError();
        console.log(error);
      });
  };

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        S'inscrire
      </Button>

      <Modal show={showSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Inscription réussie !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Vous êtes bien inscit.e, bravo ! ❤️</p>
          <p>Vous pouvez désormais vous connecter au site.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseSuccess}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showError} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Inscription échouée ! 😥</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>L'inscription n'a pas réusssi, retentez votre coup !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseError}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'inscrire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                name="firstName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                name="lastName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Adresse postale</Form.Label>
              <Form.Control
                type="text"
                placeholder="116 rue du Faubourg St Martin, 75010 Paris"
                name="address"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="xx xx xx xx xx"
                name="phoneNumber"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Adresse mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="johndoe@example.com"
                name="email"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="votremotdepasse"
                name="password"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="primary" type="submit" value="Sign up">
              S'inscrire
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
