import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from "react";

function NavbarComponent(props) {

  const [show, setShow] = useState(false);
  let loggedIn = false;
  let admin = false;
    
  if(localStorage.getItem("user_id")){
      loggedIn = true;
  }

  if(localStorage.getItem("user_role") === "admin"){
    admin = true;
  }

  function handleLogout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_role");
    setShow(true);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/"><Navbar.Brand className="text-danger">WEBSTORE</Navbar.Brand></LinkContainer>
        {props.navStyle !== 'simple' && (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/"><Button variant="link" className="nav-item">Home</Button></LinkContainer>
                <LinkContainer to="/phones"><Button variant="link" className="nav-item">Phones</Button></LinkContainer>
                {admin && <LinkContainer to="/users"><Button variant="link" className="nav-item">Users</Button></LinkContainer>}
              </Nav>
              <Nav>
              <LinkContainer to="/cart">
                <Button variant="link" className="nav-item">Cart <Badge bg="secondary">0</Badge>{' '}</Button>
              </LinkContainer>
                {loggedIn ? (
                  <Button variant="link" className="nav-item">
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                      <LinkContainer to="/profile"><NavDropdown.Item>Profile Settings</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/orders"><NavDropdown.Item>Order History</NavDropdown.Item></LinkContainer>
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Button>
                ) : (
                  <LinkContainer to="/auth/login"><Button variant="outline-danger">Login</Button></LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </>
        )}
        
        </Container>
      </Navbar>
      <ToastContainer className="p-3" position='top-end'>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>You've been logged out!</Toast.Body>      
        </Toast>
      </ToastContainer>
    </>
  );
}

export default NavbarComponent;
