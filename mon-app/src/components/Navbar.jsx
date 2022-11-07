import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
/*     const [furnitures, cartContent] = Furnitures(); */
  return (
    
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand  href="#home">
                <img src="./Logo.png" alt="" 
                width="70"
                height="70"
                className='d-inline-block align-top'
                />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#About us">A propos de nous</Nav.Link>
                <Nav.Link href="#Nos nouveautés">Nos nouveautés</Nav.Link>
                <NavDropdown title="Recherche" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Meubles anciens</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Art de la table
                </NavDropdown.Item>
                <NavDropdown.Item href="#Contact"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Linge de maison
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
            {/* <Cart cart={JSON.stringify(cartContent)} /> */}
                <Nav.Link href="#deets">Contacts</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                
                Connexion
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
      </Container>
  );
}

export default CollapsibleExample;