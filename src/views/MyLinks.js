import React, { Fragment, useEffect, useState } from 'react';

// Redux & Store
import { useDispatch, useSelector } from 'react-redux';
import { getAllLinktree } from '../store';

// React Bootstrap
import { Button, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';

// React Bootstrap
import Modal from 'react-bootstrap/Modal';

// Custom Components
import Input from '../components/form/Input';
import { Link } from 'react-router-dom';

const ModalDelete = (props) => {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-delete' contentClassName='py-4 px-2' centered>
      <Modal.Body>
        <div className='mb-4'>
          <h5 className='text-success'>Are you sure want to delete this link?</h5>
        </div>
        <div className='d-flex justify-content-end gap-3'>
          <Button variant='danger' size='md' className='text-white px-5'>
            Yes
          </Button>
          <Button variant='secondary' size='md' className='px-5' onClick={props.onHide}>
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const MyLinks = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const dispatch = useDispatch();
  const linktrees = useSelector((state) => state.store.linktrees);

  const handleDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  console.log(linktrees);
  useEffect(() => {
    dispatch(getAllLinktree());
  }, [dispatch, linktrees.length]);

  return (
    <Fragment>
      <Row className='mb-5 justify-content-between fw-bold px-3 fs-4'>
        <Col className='col-auto'>All Links</Col>
        <Col className='mx-auto'>
          <Form>
            <Form.Group>
              <InputGroup>
                <InputGroup.Text className='border-0 border-2 border-bottom rounded-0 bg-light'>
                  <img src='/icons/ic_search.svg' alt='Search' />
                </InputGroup.Text>
                <Input className='bg-light' placeholder='Find your link . . .' />
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
          {linktrees.length > 0 ? (
            linktrees.map((linktree) => {
              return (
                <tr className='py-2' key={linktree.id_linktree}>
                  <td style={{ width: '100px', height: '100px' }}>
                    <img
                      src={linktree.image}
                      alt={linktree.image}
                      className='img-fluid border-0'
                      width='100px'
                      height='100px'
                    />
                  </td>
                  <td className='align-middle'>
                    <h5 className='fw-bold'>{linktree.title}</h5>
                    <Link to={'/' + linktree.unique_link}>
                      {process.env.REACT_APP_BASE_URL + '/' + linktree.unique_link}
                    </Link>
                  </td>
                  <td className='align-middle'>
                    <h5 className='fw-bold fs-5'>{linktree.view_count}</h5>
                    <span>Visit</span>
                  </td>
                  <td className='align-middle text-end'>
                    <Dropdown className='d-md-none'>
                      <Dropdown.Toggle variant='transparent' size='sm'>
                        <img
                          src='/icons/ic_menu.png'
                          alt='View'
                          className='img-thumbnail border-0 bg-transparent'
                          width='50px'
                        />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as='button'>
                          <img
                            src='/icons/ic_view.svg'
                            alt='View'
                            className='img-thumbnail border-0 bg-transparent'
                            width='15px'
                          />
                          <span>View</span>
                        </Dropdown.Item>
                        <Dropdown.Item as='button'>
                          <img src='/icons/ic_edit.svg' alt='Edit' className='img-thumbnail border-0 bg-transparent' />
                          <span>Edit</span>
                        </Dropdown.Item>
                        <Dropdown.Item as='button' onClick={handleDelete}>
                          <img
                            src='/icons/ic_delete.svg'
                            alt='Delete'
                            className='img-thumbnail border-0 bg-transparent'
                          />
                          <span>Delete</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className='d-md-flex justify-content-end gap-2 d-none'>
                      <Button variant='transparent' size='sm' className='p-0'>
                        <img
                          src='/icons/ic_view.svg'
                          alt='View'
                          className='img-thumbnail border-0 bg-transparent'
                          width='50px'
                        />
                      </Button>
                      <Button variant='transparent' size='sm' className='p-0'>
                        <img
                          src='/icons/ic_edit.svg'
                          alt='Edit'
                          className='img-thumbnail border-0 bg-transparent'
                          width='50px'
                        />
                      </Button>
                      <Button variant='transparent' size='sm' onClick={handleDelete} className='p-0'>
                        <img
                          src='/icons/ic_delete.svg'
                          alt='Delete'
                          className='img-thumbnail border-0 bg-transparent'
                          width='50px'
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className='py-2'>
              <td>Data is Empty</td>
            </tr>
          )}
        </tbody>
      </Table>
      <ModalDelete show={showModalDelete} onHide={handleDelete} />
    </Fragment>
  );
};

export default MyLinks;
