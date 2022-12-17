import React, { useEffect } from 'react';

// react bootstrap
import { Row, Container, Col, Button, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getViewLinktree } from '../store';

const Basic = () => {
  const dispatch = useDispatch();
  const { unique_link } = useParams();

  useEffect(() => {
    dispatch(getViewLinktree(unique_link));
  }, [dispatch]);
  return (
    <Container
      className='px-0 mx-0 d-flex align-items-center justify-content-center'
      fluid='xxl'
      style={{ minHeight: '100vh' }}
    >
      <Row className='mx-0 py-5 px-3 flex-column card rounded-3 bg-light border-0'>
        <Col className='text-center align-middle mb-3'>
          <div className='text-center'>
            <Image src='/images/img_empty.png' alt='empty' width='100px' roundedCircle fluid />
          </div>
        </Col>
        <Col className='text-center mb-2'>
          <h5 className='fw-bold'>Title of title</h5>
          <p className='text-center align-middle' style={{ maxWidth: '450px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.
          </p>
        </Col>
        <Col>
          <div className='mb-3 bg-dark text-center text-white p-2 position-relative'>
            <span className='me-auto position-absolute top-50 start-5 translate-middle'>
              <Image src='/images/img_empty.png' alt='empty' width='20px' roundedCircle fluid />
            </span>
            <span className='w-100'>Facebook</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Basic;
