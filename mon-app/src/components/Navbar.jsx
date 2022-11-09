import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Signin from "./Signin";
import Signup from "./Signup";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user.firstName);
  function logOut() {
    localStorage.clear();
  }

  /*const [furnitures, cartContent] = Furnitures();*/
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Anciens meubles pour une nouvelle vie</Nav.Link>
          </Nav>
          <Nav>
            {/* <Cart cart={JSON.stringify(cartContent)} /> */}
            {/* <Nav.Link>
              <Signin />
            </Nav.Link>
            <Nav.Link>
              <Signup />
            </Nav.Link> */}
            {/* <Cart cart={JSON.stringify(cartContent)} />  */}
            {Signin()}
            {Signup()}
          </Nav>
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
