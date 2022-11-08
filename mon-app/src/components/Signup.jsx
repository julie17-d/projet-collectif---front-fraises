import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Signup() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    // console.log("user : ");
    // console.log(user);

    axios.post("http://localhost:3001/api/auth/signup", {user}).then((res) => {
      // console.log("res : ");
      // console.log(res);
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Your Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control
                type="number"
                placeholder="xx xx xx xx xx"
                name="phoneNumber"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
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
            <Button variant="primary" type="submit" value="Sign up">
              Sign up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
