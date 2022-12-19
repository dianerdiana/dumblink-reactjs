import React, { useEffect } from 'react';

// React Bootstrap
import { Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemplate } from '../store';

import { Link } from 'react-router-dom';

const Template = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.store.templates);

  useEffect(() => {
    document.title = 'Templates | Dumblink';

    dispatch(getAllTemplate());
  }, [dispatch, templates.length]);

  if (templates.length < 1) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
        className='ms-lg-5'
      >
        <Spinner variant='warning' />
      </div>
    );
  }

  return (
    <Row className='mx-0 flex-column flex-md-row'>
      {templates.map((template) => {
        return (
          <Col key={template.id_template} className='mb-3'>
            <Link to={`/template/create-link/${template.id_template}`}>
              <img src={template.image} alt={template.template_name} className='img-fluid' />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default Template;
