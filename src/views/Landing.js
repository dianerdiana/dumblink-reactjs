import { Container, Row, Col } from 'react-bootstrap';
import NavbarLanding from '../components/navbar/NavbarLanding';

const Landing = () => {
  return (
    <>
      <NavbarLanding />

      <section className='hero-section'>
        <Container>
          <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
            <Col xs='10' sm='8' lg='6'>
              <img
                src='/images/hero-image.png'
                className='d-block mx-lg-auto img-fluid'
                alt='Dumblink Hero'
                width='700'
                height='500'
                loading='lazy'
              />
            </Col>
            <Col lg='6'>
              <h1 className='display-5 fw-bold lh-1 mb-3'>
                Responsive left-aligned hero with image
              </h1>
              <p className='lead'>
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button
                  type='button'
                  className='btn btn-primary btn-lg px-4 me-md-2'>
                  Primary
                </button>
                <button
                  type='button'
                  className='btn btn-outline-secondary btn-lg px-4'>
                  Default
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Landing;
