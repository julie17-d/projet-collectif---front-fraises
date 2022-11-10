import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Button from "react-bootstrap/Button";
import Cart from "../components/Cart";
// import CartContent from "./CartContent";

function Header() {
  let user = "";
  if(JSON.parse(localStorage.getItem("user-info"))!==null){
    user = JSON.parse(localStorage.getItem("user-info"));
  };
  // console.log(user.firstName);
  function logOut() {
    localStorage.clear();
    window.location.href = "/home";
  }

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
          <Nav className="me-auto">
          </Nav>
          <Nav.Link>
          <Cart />
          </Nav.Link>
          {/* <Nav.Link>
            <CartContent />
          </Nav.Link> */}
          {user.userId === "636cc8e2eef732132cc57a9a" ? (
          <Nav>
            <Nav>
              <Nav.Link href="/admin">
              <Button variant="outline-light">Page admin</Button>
            </Nav.Link>
          </Nav>
          </Nav>
          ) : null}
          {!localStorage.getItem("user-info") ? (
            <Nav>
              {Login()}
              {Signup()}
            </Nav>
          ) : null}
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user.firstName}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
