import React, { useEffect } from 'react';

// react bootstrap
import { Row, Container, Col, Button, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getViewLinktree } from '../store';

// Components
import BasicLinktree from '../components/view/Basic';

const ViewLinktree = () => {
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
      <BasicLinktree />
    </Container>
  );
};

export default ViewLinktree;
