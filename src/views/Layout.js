import React from 'react';

// React Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';

// Custom Components
import NavbarComponent from '../components/navbar/NavbarComponent';
import SidebarComponent from '../components/navbar/SidebarComponent';

function Layout() {
  const user = JSON.parse(localStorage.getItem('userData'));

  if (!user) {
    return <Navigate replace to='landing' />;
  }

  return (
    <Container className='px-0 d-grid' style={{ minHeight: '100vh' }} fluid>
      <Row className='px-0 mx-0'>
        <Col className='col-auto px-0'>
          <SidebarComponent />
        </Col>
        <Col className='px-0'>
          <NavbarComponent />
          <main className='bg-light py-5 px-4' style={{ minHeight: '90.6%' }}>
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
