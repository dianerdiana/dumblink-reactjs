import React, { useState, useEffect } from 'react';

// React Bootstrap
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemplate } from '../store';

import { Link } from 'react-router-dom';

const Template = () => {
  const templates = [
    '/images/template_1.png',
    '/images/template_2.png',
    '/images/template_3.png',
    '/images/template_4.png',
  ];

  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(getAllTemplate());
    console.log(store);
  }, [dispatch]);

  return (
    <Row className='mx-0 flex-column flex-md-row'>
      {templates.map((img, idx) => {
        return (
          <Col key={idx} className='mb-3'>
            <Link to='/template/create-link'>
              <img src={img} alt={img} className='img-fluid' />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default Template;
