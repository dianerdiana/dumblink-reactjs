import React from 'react';

// React Bootstrap
import { Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Template = () => {
  const templates = [
    '/images/template_1.png',
    '/images/template_2.png',
    '/images/template_3.png',
    '/images/template_4.png',
  ];

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
