import React from 'react';

// React Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// Custom Components
import NavbarComponent from './NavbarComponent';
import SidebarComponent from './SidebarComponent';

const Navigation = ({ children }) => {
  return (
    <Container className='px-0 d-grid' style={{ minHeight: '100vh' }} fluid>
      <Row className='px-0 mx-0'>
        <Col className='col-auto px-0'>
          <SidebarComponent />
        </Col>
        <Col className='px-0'>
          <NavbarComponent />
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
