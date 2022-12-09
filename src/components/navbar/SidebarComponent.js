import React from 'react';

// React Bootstrap
import { Nav } from 'react-bootstrap';

// Router Dom
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// data
import navigation from '../../navigation';

const SidebarComponent = () => {
  const location = useLocation();

  return (
    <div
      className='d-none d-lg-flex flex-column p-3 bg-white h-100'
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
      <hr className='border-white' />
      <div className='p-4'>
        <Link
          to='/home'
          className='link-dark text-decoration-none px-3 fs-5 fw-bold'
        >
          <img src='/icons/ic_logout.svg' alt='My Link' />
          <span className='ms-3'>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarComponent;
