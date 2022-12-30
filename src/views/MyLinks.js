import React, { Fragment, useEffect, useState } from 'react';

// Redux & Store
import { useDispatch, useSelector } from 'react-redux';
import { getAllLinktree, deleteLinktree } from '../store';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// React Bootstrap
import { Button, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';

// React Bootstrap
import Modal from 'react-bootstrap/Modal';

// Custom Components
import Input from '../components/form/Input';

const ModalDelete = (props) => {
  const dispatch = useDispatch();
  const toggleConfirm = (id) => {
    dispatch(deleteLinktree(id)).then((res) => {
      const { status, message } = res.payload;

      if (status) {
        toast.success(message);
        props.onHide();
      } else {
        toast.error(message);
      }
    });
  };
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-delete' contentClassName='py-4 px-2' centered>
      <Modal.Body>
        <div className='mb-4'>
          <h5 className='text-success'>Are you sure want to delete this link?</h5>
        </div>
        <div className='d-flex justify-content-end gap-3'>
          <Button variant='danger' size='md' className='text-white px-5' onClick={() => toggleConfirm(props.id)}>
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
  const [id_linktree, setIdLinktree] = useState(null);
  const dispatch = useDispatch();
  const linktrees = useSelector((state) => state.store.linktrees);

  const handleDelete = (id = null) => {
    setIdLinktree(id);
    setShowModalDelete(!showModalDelete);
  };

  useEffect(() => {
    document.title = 'My Links | Dumblink';

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
                    <a href={'/' + linktree.unique_link} target='_blank' rel='noreferrer'>
                      {process.env.REACT_APP_BASE_URL + '/' + linktree.unique_link}
                    </a>
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
                        <Dropdown.Item
                          href={'/' + linktree.unique_link}
                          target='_blank'
                          rel='noreferrer'
                          className='btn btn-sm btn-transparent'
                        >
                          <img
                            src='/icons/ic_view.svg'
                            alt='View'
                            className='img-thumbnail border-0 bg-transparent'
                            width='30px'
                          />
                          <span>View</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to={`/template/${linktree.template_id}/edit/${linktree.id_linktree}`}
                          className='btn btn-sm btn-transparent'
                        >
                          <img
                            src='/icons/ic_edit.svg'
                            alt='Edit'
                            className='img-thumbnail border-0 bg-transparent'
                            width='30px'
                          />
                          <span>Edit</span>
                        </Dropdown.Item>
                        <Dropdown.Item as='button' onClick={() => handleDelete(linktree.id_linktree)}>
                          <img
                            src='/icons/ic_delete.svg'
                            alt='Delete'
                            className='img-thumbnail border-0 bg-transparent'
                            width='30px'
                          />
                          <span>Delete</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className='d-md-flex justify-content-end gap-2 d-none'>
                      <a href={'/' + linktree.unique_link} target='_blank' className='btn btn-sm btn-transparent p-0'>
                        <img
                          src='/icons/ic_view.svg'
                          alt='View'
                          className='img-thumbnail border-0 bg-transparent'
                          width='50px'
                        />
                      </a>
                      <Link
                        to={`/template/${linktree.template_id}/edit/${linktree.id_linktree}`}
                        className='btn btn-sm btn-transparent p-0'
                      >
                        <img
                          src='/icons/ic_edit.svg'
                          alt='Edit'
                          className='img-thumbnail border-0 bg-transparent'
                          width='50px'
                        />
                      </Link>
                      <Button
                        variant='transparent'
                        size='sm'
                        onClick={() => handleDelete(linktree.id_linktree)}
                        className='p-0'
                      >
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
              <td className='text-center bg-warning text-white rounded-3'>Data is empty ...</td>
            </tr>
          )}
        </tbody>
      </Table>
      <ModalDelete show={showModalDelete} onHide={handleDelete} id={id_linktree} />
    </Fragment>
  );
};

export default MyLinks;
