import React, { useEffect } from 'react';

// react bootstrap
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewLinktree } from '../store';

// Components
import Basic from '../components/view/Basic';
import BlueSea from '../components/view/BlueSea';

const ViewLinktree = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store.selectedLinktree);
  const { unique_link } = useParams();

  useEffect(() => {
    document.title = 'Dumblink';

    dispatch(viewLinktree(unique_link));
  }, [dispatch, unique_link]);

  if (store === null) {
    return (
      <Container
        className='px-0 mx-0 d-flex align-items-center justify-content-center'
        fluid='xxl'
        style={{ minHeight: '100vh' }}
      >
        <Spinner variant='warning' />
      </Container>
    );
  }

  if (store.template_id === 1) {
    return <Basic store={store} />;
  } else if (store.template_id === 2) {
    return <BlueSea store={store} />;
  }
};

export default ViewLinktree;
