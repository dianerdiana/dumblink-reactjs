import React, { useState } from 'react';

// React Bootstrap
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Row,
  Table,
} from 'react-bootstrap';

// React Bootstrap
import Modal from 'react-bootstrap/Modal';

// Custom Components
import Navigation from '../components/navbar';
import Input from '../components/form/Input';

const ModalDelete = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-delete'
      contentClassName='py-4 px-2'
      centered
    >
      <Modal.Body>
        <div className='mb-4'>
          <h5 className='text-success'>
            Are you sure want to delete this link?
          </h5>
        </div>
        <div className='d-flex justify-content-end gap-3'>
          <Button variant='danger' size='md' className='text-white px-5'>
            Yes
          </Button>
          <Button
            variant='secondary'
            size='md'
            className='px-5'
            onClick={props.onHide}
          >
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const MyLinks = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  return (
    <Navigation title='My Links'>
      <main className='bg-light py-5 px-4' style={{ minHeight: '90.6%' }}>
        <Row className='mb-5 justify-content-between fw-bold px-3 fs-4'>
          <Col className='col-auto'>All Links</Col>
          <Col className='mx-auto'>
            <Form>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Text className='border-0 border-2 border-bottom rounded-0 bg-light'>
                    <img src='/images/ic_search.svg' alt='Search' />
                  </InputGroup.Text>
                  <Input
                    className='bg-light'
                    placeholder='Find your link . . .'
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>
          <Col className='col-auto'>
            <Button variant='warning' size='sm' className='text-white px-3'>
              Search
            </Button>
          </Col>
        </Row>
        <Table className='px-3 mt-3' responsive borderless>
          <tbody>
            <tr className='py-2'>
              <td style={{ width: '125px' }}>
                <img
                  src='/images/img_default.png'
                  alt='Empty'
                  className='img-fluid border-0'
                  width='100px'
                  style={{ minWidth: '30px' }}
                />
              </td>
              <td className='align-middle'>
                <h5 className='fw-bold'>Waysfood</h5>
                <span>localhost:3000/waysfood</span>
              </td>
              <td className='align-middle'>
                <h5 className='fw-bold fs-5'>10</h5>
                <span>Visit</span>
              </td>
              <td className='align-middle text-end'>
                <Dropdown className='d-md-none'>
                  <Dropdown.Toggle variant='transparent' size='sm'>
                    <img
                      src='/images/ic_menu.png'
                      alt='View'
                      className='img-thumbnail border-0 bg-transparent'
                      style={{ minWidth: '50px' }}
                      width='50px'
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as='button'>
                      <div>
                        <img
                          src='/images/ic_view.svg'
                          alt='View'
                          className='img-thumbnail border-0 bg-transparent'
                          width='15px'
                        />
                        <span>View</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item as='button'>
                      <div>
                        <img
                          src='/images/ic_edit.svg'
                          alt='Edit'
                          className='img-thumbnail border-0 bg-transparent'
                          width='15px'
                        />
                        <span>Edit</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item as='button' onClick={handleDelete}>
                      <div>
                        <img
                          src='/images/ic_delete.svg'
                          alt='Delete'
                          className='img-thumbnail border-0 bg-transparent'
                          width='15px'
                        />
                        <span>Delete</span>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className='d-md-flex justify-content-end gap-2 d-none'>
                  <img
                    src='/images/ic_view.svg'
                    alt='View'
                    className='img-thumbnail border-0 bg-transparent'
                    width='50px'
                  />
                  <img
                    src='/images/ic_edit.svg'
                    alt='Edit'
                    className='img-thumbnail border-0 bg-transparent'
                    width='50px'
                  />
                  <Button
                    variant='transparent'
                    size='sm'
                    onClick={handleDelete}
                    className='p-0'
                  >
                    <img
                      src='/images/ic_delete.svg'
                      alt='Delete'
                      className='img-thumbnail border-0 bg-transparent'
                      width='50px'
                    />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </main>
      <ModalDelete show={showModalDelete} onHide={handleDelete} />
    </Navigation>
  );
};

export default MyLinks;
