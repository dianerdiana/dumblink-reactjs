import React from 'react';

import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';

function NavbarLanding() {
  return (
    <Navbar expand='md' bg='light' className='mb-3'>
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
            <Offcanvas.Title>Off Canvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Item>
                <Button variant='light' className='fw-bold me-3'>
                  Login
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button variant='warning' className='text-white fw-bold px-4'>
                  Register
                </Button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;
