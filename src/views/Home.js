import React, { useState } from 'react';

// React Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

// Custom Components
import NavbarLanding from '../components/navbar/NavbarLanding';
import ModalLogin from '../components/authentication/Login';
import ModalRegister from '../components/authentication/Register';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const user = JSON.parse(localStorage.getItem('userData'));

  if (user) {
    return <Navigate replace to='/template' />;
  }

  return (
    <Row className='flex-column px-0 mx-0'>
      <header className='col px-0'>
        <NavbarLanding
          toggleLogin={toggleLogin}
          toggleRegister={toggleRegister}
        />
      </header>
      <main
        className='px-0 hero-section d-lg-flex align-items-center'
        style={{ minHeight: '92vh' }}
      >
        <Container>
          <Row className='flex-lg-row-reverse justify-content-center align-items-center g-5 py-5'>
            <Col xs='10' sm='8' lg='6'>
              <img
                src='/images/hero-image.png'
                className='d-block mx-lg-auto img-fluid'
                alt='Dumblink Hero'
                width='700'
                height='500'
                loading='lazy'
              />
            </Col>
            <Col lg='6' className='text-center text-md-start'>
              <h1 className='display-5 fw-bold lh-4 mb-3 text-white'>
                The Only Link <br /> You’ll Ever Need
              </h1>
              <p className='lead text-white pb-md-3'>
                Add a link for your Social Bio and optimize your social media
                traffic.
                <br />
                <br />
                safe, fast and easy to use
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start mt-3'>
                <Button
                  type='button'
                  variant='dark'
                  size='lg'
                  className='px-5 me-md-2'
                  onClick={toggleLogin}
                >
                  Get Started for Free
                </Button>
              </div>
            </Col>
          </Row>

          <ModalLogin show={showLogin} onHide={toggleLogin} />
          <ModalRegister show={showRegister} onHide={toggleRegister} />
        </Container>
      </main>
    </Row>
  );
};

export default Home;
