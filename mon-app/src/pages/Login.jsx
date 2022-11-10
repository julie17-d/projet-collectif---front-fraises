import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Login() {
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
    if (event.target.name === "email") {
      user["email"] = event.target.value;
    } else if (event.target.name === "password") {
      user["password"] = event.target.value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/login", {user})
      .then((res) => {
        // On stocke le firstName, l'userId et le token dans le localStorage
        localStorage.setItem("user-info", JSON.stringify(res.data));
        handleClose();
        // handleShowSuccess();
        window.location.reload();
      })
      .catch((error) => {
        handleShowError();
        console.log(error);
      });
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Sign in
      </Button>
      <Modal show={showSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion réussie !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Vous êtes bien connecté.e, bravo ! ❤️</p>
          <p>Vous pouvez désormais naviguer dans le site.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseSuccess}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showError} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion échouée ! 😥</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>La connexion n'a pas réusssi, retentez votre coup !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseError}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Se connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adresse mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Control">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="motdepasse"
                name="password"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Button variant="outline-dark" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="outline-dark" type="submit" value="Sign in">
              Se connecter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
