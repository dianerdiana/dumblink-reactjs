import React from 'react';

// React Bootstrap
import { Col, Row } from 'react-bootstrap';

// Custom Components
import Navigation from '../components/navbar';

const Profile = () => {
  const templates = [
    '/images/template_1.png',
    '/images/template_2.png',
    '/images/template_3.png',
    '/images/template_4.png',
  ];

  return (
    <Navigation>
      <main className='bg-light' style={{ minHeight: '90.6%' }}>
        <Row className='mx-0 py-5 flex-column flex-md-row'>
          {templates.map((img, idx) => {
            return (
              <Col key={idx} className='mb-3'>
                <img src={img} alt={img} className='img-fluid' />
              </Col>
            );
          })}
        </Row>
      </main>
    </Navigation>
  );
};

export default Profile;
