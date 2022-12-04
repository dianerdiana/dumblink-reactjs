import React from 'react';

// React Bootstrap
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#' className='fw-bold fs-4'>
          Template
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-lg'
          aria-labelledby='offcanvasNavbarLabel-expand-lg'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
              <img src='/images/logo.svg' alt='brand' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='d-lg-none'>
            <Nav className='nav-pills flex-column mb-auto p-4 gap-3 fw-bold fs-5'>
              <Nav.Link className='link-dark'>
                <img src='/images/ic_template.svg' alt='Template' />
                <span className='ms-3 text-warning'>Template</span>
              </Nav.Link>
              <Nav.Link className='link-dark'>
                <img src='/images/ic_profile.svg' alt='Profile' />
                <span className='ms-3'>Profile</span>
              </Nav.Link>
              <Nav.Link className='link-dark'>
                <img src='/images/ic_link.svg' alt='My Link' />
                <span className='ms-3'>My Link</span>
              </Nav.Link>
            </Nav>
            <hr className='border-white' />
            <div className='p-4'>
              <a
                href='#'
                className='link-dark text-decoration-none fs-5 fw-bold'
              >
                <img src='/images/ic_logout.svg' alt='My Link' />
                <span className='ms-3'>Logout</span>
              </a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
