import React, { useState } from 'react';

// React Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from '../authentication/Login';

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
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

      <Login show={showLogin} onHide={toggleLogin} />
    </Container>
  );
};

export default Hero;
