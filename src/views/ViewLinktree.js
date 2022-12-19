import React, { useEffect } from 'react';

// react bootstrap
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewLinktree } from '../store';

// Components
import BasicLinktree from '../components/view/Basic';

const ViewLinktree = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store.selectedLinktree);
  const { unique_link } = useParams();

  useEffect(() => {
    dispatch(viewLinktree(unique_link));
  }, [dispatch]);
  return (
    <Container
      className='px-0 mx-0 d-flex align-items-center justify-content-center'
      fluid='xxl'
      style={{ minHeight: '100vh' }}
    >
      <BasicLinktree store={store} />
    </Container>
  );
};

export default ViewLinktree;
