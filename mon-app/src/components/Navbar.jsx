import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Signin from "./Signin";
import Signup from "./Signup";
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  /*     const [furnitures, cartContent] = Furnitures(); */
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="./Logo.png"
            alt=""
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav.Link href="/">Anciens meubles pour une nouvelle vie</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Item className="me-auto">
          </Nav.Item>
          <Nav>
              <Nav.Link href="/admin"><Button variant="outline-light">Page admin</Button></Nav.Link>
            {/* <Cart cart={JSON.stringify(cartContent)} /> */}
            <Nav.Link>
              <Signin />
            </Nav.Link>
            <Nav.Link>
              <Signup />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default CollapsibleExample;
