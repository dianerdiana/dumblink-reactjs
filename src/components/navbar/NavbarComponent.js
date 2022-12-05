import React from 'react';

// React Bootstrap
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// data
import navigation from '../../navigation';

const NavbarComponent = () => {
  const location = useLocation();

  const dataNav = navigation.find((data) =>
    location.pathname.includes(data.path)
  );

  return (
    <Navbar bg='white' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to={dataNav.path} className='fw-bold fs-4'>
          {dataNav.name || 'Title'}
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
          <Offcanvas.Body className='d-lg-none d-flex flex-column justify-content-between'>
            <Nav className='nav-pills flex-column mb-auto p-4 gap-3 fw-bold fs-5'>
              {navigation.map((linkData, index) => {
                return (
                  <Nav.Link
                    as={Link}
                    to={linkData.path}
                    className='link-dark'
                    key={index}
                  >
                    <img
                      src={
                        location.pathname.includes(linkData.path)
                          ? linkData.icon.active
                          : linkData.icon.unactive
                      }
                      alt={linkData.name}
                    />
                    <span
                      className={classnames(
                        'ms-3',
                        location.pathname.includes(linkData.path)
                          ? 'text-warning'
                          : ''
                      )}
                    >
                      {linkData.name}
                    </span>
                  </Nav.Link>
                );
              })}
            </Nav>
            <div className='p-4'>
              <Link
                to='/landing'
                className='link-dark text-decoration-none fs-5 fw-bold px-2'
              >
                <img src='/icons/ic_logout.svg' alt='My Link' />
                <span className='ms-3'>Logout</span>
              </Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
