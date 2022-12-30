import React from 'react';

// react bootstrap
import { Container, Row, Col, Image, Card, Spinner } from 'react-bootstrap';

const BlueSea = ({ store }) => {
  if (!store) {
    return <Spinner variant='warning' />;
  }

  return (
    <Container
      className='px-0 mx-0 d-flex align-items-center justify-content-center'
      fluid='xxl'
      style={{ minHeight: '100vh', background: '#8CB2BE' }}
    >
      <Card className='border-0 py-5 px-3' style={{ width: 'clamp(250px, 474px, 100%)', background: '#C8D4CE' }}>
        <Row className='mx-0 flex-column rounded-3'>
          <Col className='text-center align-middle mb-3'>
            <div className='text-center'>
              <Image
                src={store.image ? store.image : '/images/img_empty.png'}
                alt='empty'
                width='100px'
                height='100px'
                roundedCircle
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
                  href={link.url}
                  target='_blank'
                  rel='noreferrer'
                  className='d-block mb-3 bg-light text-center text-dark p-2 text-decoration-none rounded-5'
                  style={{ border: '2px solid #A6C0C4' }}
                >
                  <span className='w-100'>{link.title}</span>
                </a>
              );
            })}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BlueSea;
