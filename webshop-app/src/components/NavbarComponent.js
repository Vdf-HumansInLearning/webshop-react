import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarComponent(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <LinkContainer to="/"><Navbar.Brand className="text-danger">WEBSTORE</Navbar.Brand></LinkContainer>
      {props.style !== 'simple' && (
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/"><Button variant="link" className="nav-item">Home</Button></LinkContainer>
              <LinkContainer to="/phones"><Button variant="link" className="nav-item">Phones</Button></LinkContainer>
              {props.admin && <LinkContainer to="/users"><Button variant="link" className="nav-item">Users</Button></LinkContainer>}
            </Nav>
            <Nav>
            <LinkContainer to="/cart">
              <Button variant="link" className="nav-item">Cart <Badge bg="secondary">0</Badge>{' '}</Button>
            </LinkContainer>
              {props.loggedIn ? (
                <Button variant="link" className="nav-item">
                  <NavDropdown title="Account" id="basic-nav-dropdown">
                    <LinkContainer to="/profile"><NavDropdown.Item>Profile Settings</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/orders"><NavDropdown.Item>Order History</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/login"><NavDropdown.Item>Logout</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </Button>
              ) : (
                <LinkContainer to="/login"><Button variant="outline-danger">Login</Button></LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      )}
      
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
