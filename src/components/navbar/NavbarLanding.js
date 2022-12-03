import React, { useState } from 'react';

// React Bootstrap
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';

// Custom Components
import Login from '../authentication/Login';
import Register from '../authentication/Register';

function NavbarLanding() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <Navbar expand='md' bg='light'>
      <Container>
        <Navbar.Brand href='#'>
          <img src='/images/logo.svg' alt='brand' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='NavbarLanding' />
        <Navbar.Offcanvas
          id='NavbarLanding'
          aria-labelledby='NavbarLanding'
          placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src='/images/logo.svg' alt='brand' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Item className='d-grid pe-md-3 pb-3 pb-md-0'>
                <Button
                  size='md'
                  variant='light'
                  className='fw-bold'
                  onClick={toggleLogin}>
                  Login
                </Button>
              </Nav.Item>
              <Nav.Item className='d-grid'>
                <Button
                  size='md'
                  variant='warning'
                  className='text-white fw-bold px-4'
                  onClick={toggleRegister}>
                  Register
                </Button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

      <Login show={showLogin} onHide={toggleLogin} />
      <Register show={showRegister} onHide={toggleRegister} />
    </Navbar>
  );
}

export default NavbarLanding;
