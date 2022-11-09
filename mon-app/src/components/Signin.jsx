import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Signin() {
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
    // console.log(event);
    axios
      .post("http://localhost:3001/api/auth/login", {user})
      .then((res) => {
        // On stocke le userId et le token dans le localStorage
        // {
        //    "userId": "63652721127d875bcd0ab07e",
        //    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY1MjcyMTEyN2Q4NzViY2QwYWIwN2UiLCJpYXQiOjE2Njc1NzM5NzYsImV4cCI6MTY2NzY2MDM3Nn0.SgVfVoG-O7CLRVdFYdkr5iv8EleOeMb1J4RaE_k1e-I"
        // }
        localStorage.setItem("user-info", JSON.stringify(res.data));
        handleClose();
        handleShowSuccess();
      })
      .catch((error) => {
        handleShowError();
        console.log(error);
      });
  };

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
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
          <Button variant="success" onClick={handleCloseSuccess}>
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
          <Button variant="warning" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Control">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" value="Sign in">
              Sign in
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signin;
