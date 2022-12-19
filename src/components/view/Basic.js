import React from 'react';

// react bootstrap
import { Row, Col, Image, Card, Spinner } from 'react-bootstrap';

const Basic = ({ store }) => {
  if (!store) {
    return <Spinner variant='warning' />;
  }

  return (
    <Card className='border-0 py-5 px-3 bg-light' style={{ width: 'clamp(250px, 474px, 100%)' }}>
      <Row className='mx-0 flex-column rounded-3'>
        <Col className='text-center align-middle mb-3'>
          <div className='text-center'>
            <Image
              src={store.image ? store.image : '/images/img_empty.png'}
              alt='empty'
              width='100px'
              roundedCircle
              fluid
            />
          </div>
        </Col>
        <Col className='text-center mb-2'>
          <h5 className='fw-bold'>{store.title}</h5>
          <p className='text-center align-middle' style={{ maxWidth: '450px' }}>
            {store.description}
          </p>
        </Col>
        <Col>
          {store.links.map((link) => {
            return (
              <a
                key={link.id_link}
                href='#'
                className='d-block mb-3 bg-dark text-center text-white p-2 position-relative text-decoration-none'
              >
                <span className='me-auto position-absolute top-50 start-5 translate-middle'>
                  <Image src='/images/img_empty.png' alt='empty' width='20px' roundedCircle fluid />
                </span>
                <span className='w-100'>{link.title}</span>
              </a>
            );
          })}
        </Col>
      </Row>
    </Card>
  );
};

export default Basic;
