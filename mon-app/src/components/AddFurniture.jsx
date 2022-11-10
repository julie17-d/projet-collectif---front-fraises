import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FilterList from "./FilterList";
import axios from "axios";

function AddFurniture() {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [furniture, setFurniture] = useState({});
  const [typeValue, setTypeValue] = useState("");
  const [colorValue, setColorValue] = useState("");

  const typeList = [
    "assise",
    "literie",
    "table",
    "bureau",
    "rangement",
    "linge de maison",
    "décoration",
    "luminaire",
    "art de la table",
    "salle de bain",
    "autre",
  ];

  const colorList = [
    "argent",
    "beige",
    "blanc",
    "bleu",
    "bois",
    "bordeaux",
    "doré",
    "gris",
    "jaune",
    "marron",
    "multicolore",
    "noir",
    "orange",
    "rose",
    "rouge",
    "transparent",
    "vert",
    "violet",
    "autre",
  ];
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getMaterials(stringList) {
    return stringList.split(", ")
      ? stringList.split(", ")
      : stringList.split(",")
      ? stringList.split(",")
      : stringList.split(" ")
      ? stringList.split(" ")
      : stringList;
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const handleChange = (event) => {
    if (event.target.name === "title") {
      furniture["title"] = event.target.value;
    } else if (event.target.name === "type") {
      furniture["type"] = event.target.value;
    } else if (event.target.name === "description") {
      furniture["description"] = event.target.value;
    } else if (event.target.name === "height") {
      furniture["height"] = event.target.value;
    } else if (event.target.name === "width") {
      furniture["width"] = event.target.value;
    } else if (event.target.name === "depth") {
      furniture["depth"] = event.target.value;
    } else if (event.target.name === "colors") {
      furniture["colors"] = event.target.value;
    } else if (event.target.name === "materials") {
      furniture["materials"] = event.target.value;
    } else if (event.target.name === "price") {
      furniture["price"] = event.target.value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let seller = JSON.parse(localStorage.getItem("user-info"));
    furniture["seller"] = `${seller.firstName}_${seller.userId}`;
    furniture["type"] = typeValue;
    furniture["colors"] = colorValue;
    furniture["materials"] = getMaterials(furniture["materials"]);

    axios
      .post("http://localhost:3001/api/addFurniture", {furniture})
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
        Ajouter un meuble
      </Button>

      <Modal show={showSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout réussi !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Vous avez bien ajouté votre meuble, bravo ! ❤️</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseSuccess}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showError} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout échoué ! 😥</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>L'ajout de votre meuble n'a pas réusssi, retentez votre coup !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseError}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un meuble</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Select
                aria-label="Type de meuble"
                onChange={(e) => setTypeValue(e.target.value)}
              >
                <option selected disabled>
                  Tous les types
                </option>
                {typeList.map(function (object) {
                  return <option value={object}>{capitalize(object)}</option>;
                })}
              </Form.Select>
              <br />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Canapé bleu vintage"
                name="title"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Couleur</Form.Label>
              <Form.Select
                aria-label="Couleur du meuble"
                onChange={(e) => setColorValue(e.target.value)}
              >
                <option selected disabled>
                  Choisissez une couleur
                </option>
                {colorList.map(function (object) {
                  return <option value={object}>{capitalize(object)}</option>;
                })}
              </Form.Select>
              <br />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Voici un canapé bleu d'époque victorienne en très bon état."
                name="description"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Hauteur en cm</Form.Label>
              <Form.Control
                type="number"
                placeholder="100"
                name="height"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Largeur en cm</Form.Label>
              <Form.Control
                type="number"
                placeholder="140"
                name="width"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Profondeur en cm</Form.Label>
              <Form.Control
                type="number"
                placeholder="90"
                name="depth"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Matériaux</Form.Label>
              <Form.Control
                type="text"
                placeholder="textile, bois, métal"
                name="materials"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Prix en euros</Form.Label>
              <Form.Control
                type="number"
                placeholder="300"
                name="price"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="primary" type="submit" value="Sign up">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddFurniture;
