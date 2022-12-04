import React from 'react';

// React Bootstrap
import { Nav } from 'react-bootstrap';

const SidebarComponent = () => {
  return (
    <div
      className='d-none d-lg-flex flex-column p-3 bg-light h-100'
      style={{ width: '280px' }}
    >
      <a
        href='/'
        className='d-flex align-items-center justify-content-center mb-3 mb-md-0 link-dark text-decoration-none'
      >
        <img src='/images/logo.svg' alt='brand' />
      </a>
      <hr className='border-white' />
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
          className='link-dark text-decoration-none px-3 fs-5 fw-bold'
        >
          <img src='/images/ic_logout.svg' alt='My Link' />
          <span className='ms-3'>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default SidebarComponent;
