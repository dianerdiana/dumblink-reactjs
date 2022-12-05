// React Bootstrap
import { Row } from 'react-bootstrap';

// Custom Components
import NavbarLanding from '../components/navbar/NavbarLanding';
import Hero from '../components/contents/Hero';

const Landing = () => {
  return (
    <Row className='flex-column px-0 mx-0'>
      <header className='col px-0'>
        <NavbarLanding />
      </header>
      <main
        className='px-0 hero-section d-lg-flex align-items-center'
        style={{ minHeight: '92vh' }}
      >
        <Hero />
      </main>
    </Row>
  );
};

export default Landing;
