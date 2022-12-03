import React from 'react';

// React Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
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
        <Col lg='6'>
          <h1 className='display-5 fw-bold lh-4 mb-3 text-white'>
            The Only Link <br /> You’ll Ever Need
          </h1>
          <p className='lead text-white'>
            Add a link for your Social Bio and optimize your social media
            traffic.
            <br />
            <br />
            safe, fast and easy to use
          </p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <Button
              type='button'
              variant='dark'
              size='md'
              className='px-4 me-md-2'>
              Get Started for Free
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
