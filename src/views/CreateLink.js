import React, { useRef, Fragment, useEffect, useState } from 'react';

// React Bootstrap
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';

// Custom Components
import Input from '../components/form/Input';
import Label from '../components/form/Label';

// Package
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { toast } from 'react-hot-toast';

// Store & Redux
import { useDispatch, useSelector } from 'react-redux';
import { addLinktree, getTemplate } from '../store';
import { useParams } from 'react-router-dom';

const defaultValues = {
  title: '',
  description: '',
  link_group: [
    {
      title: '',
      url: '',
    },
  ],
};

const CreateLink = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((state) => state.store.selectedTemplate);

  // State
  const [image, setImage] = useState(null);

  const { control, handleSubmit } = useForm({ defaultValues });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'link_group',
  });

  const onSubmit = (data) => {
    if (image != null || image != undefined) {
      dispatch(
        addLinktree({
          image: image[0],
          ...data,
        })
      ).then((res) => {
        if (res.payload) {
          const { status, message } = res.payload;
          if (status) {
            toast.success(message);
          } else {
            message.map((m, i) => {
              setTimeout(() => {
                toast.error(m);
              }, 1300 * i);
            });
          }
        }
      });
    } else {
      toast.error('Please select your image to upload');
    }
  };

  useEffect(() => {
    dispatch(getTemplate(id));
  }, [dispatch]);

  if (store === null || store === undefined) {
    return (
      <div className='text-center'>
        <Spinner variant='warning' />
      </div>
    );
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 d-flex justify-content-between fw-bold px-3 fs-4'>
          <span className='me-auto'>Create Link</span>
          <Button variant='warning' type='submit' size='sm' className='text-white'>
            Publish Link
          </Button>
        </div>
        <Row className='mx-0'>
          <Col sm='12' lg='8'>
            <Card className='border-0'>
              <Card.Body>
                <div>
                  <Controller
                    defaultValue={store.id_template}
                    name='template_id'
                    control={control}
                    render={({ field }) => {
                      return <Input placeholder='ex. Your Title' className='d-none' {...field} />;
                    }}
                  />
                </div>
                <div className='mb-4 d-flex'>
                  <Col sm='4'>
                    {image ? (
                      <img
                        src={URL.createObjectURL(image[0])}
                        alt='Empty'
                        width='124'
                        className='img-thumbnail border-0'
                      />
                    ) : (
                      <img src='/images/img_empty.png' alt='Empty' width='124' className='img-thumbnail border-0' />
                    )}
                  </Col>
                  <Col className='d-flex align-items-center ms-4'>
                    <Form.Control
                      type='file'
                      name='image'
                      className='d-none'
                      ref={inputRef}
                      onChange={(e) => setImage(e.target.files)}
                    />
                    <Button
                      variant='warning'
                      size='sm'
                      className='text-white px-3'
                      onClick={() => inputRef.current.click()}
                    >
                      Upload
                    </Button>
                  </Col>
                </div>
                <div className='mb-4'>
                  <Label>Title</Label>
                  <Controller
                    name='title'
                    control={control}
                    render={({ field }) => {
                      return <Input placeholder='ex. Your Title' {...field} />;
                    }}
                  />
                </div>
                <div className='mb-3 py-2'>
                  <Label>Description</Label>
                  <Controller
                    name='description'
                    control={control}
                    render={({ field }) => {
                      return <Input type='text' placeholder='ex. Your Description' {...field} />;
                    }}
                  />
                </div>
                <div className='text-end d-flex justify-content-sm-start justify-content-between gap-3 mb-3'>
                  <Button
                    type='submit'
                    size='sm'
                    variant='danger'
                    className='text-white px-4 py-1 fw-bold'
                    onClick={() => remove(fields.length - 1)}
                  >
                    Delete Link
                  </Button>
                  <Button
                    type='submit'
                    size='sm'
                    variant='warning'
                    className='text-white px-4 py-1 fw-bold'
                    onClick={() =>
                      append({
                        name: '',
                        url: '',
                      })
                    }
                  >
                    Add Link
                  </Button>
                </div>
                {fields.map((item, index) => {
                  return (
                    <div className='mb-4' key={item.id}>
                      <Card bg='light' className='border-0'>
                        <Card.Body className='d-flex flex-column flex-sm-row'>
                          <Col sm='4' className='mb-3 mb-md-0'>
                            <img
                              src='/images/img_empty.png'
                              alt='Empty'
                              width='124'
                              className='img-thumbnail border-0'
                            />
                          </Col>
                          <Col sm='8' className='px-2'>
                            <div className='mb-3'>
                              <Label>Title Link</Label>
                              <Controller
                                defaultValue={item.title}
                                id={`link_group.${index}.title`}
                                name={`link_group.${index}.title`}
                                control={control}
                                render={({ field }) => {
                                  return <Input placeholder='Instagram' className='bg-light outline-0' {...field} />;
                                }}
                              />
                            </div>
                            <div>
                              <Label>URL</Label>
                              <Controller
                                defaultValue={item.url}
                                id={`link_group.${index}.url`}
                                name={`link_group.${index}.url`}
                                control={control}
                                render={({ field }) => {
                                  return (
                                    <Input
                                      placeholder='http://www.instagram.com'
                                      className='bg-light outline-0'
                                      {...field}
                                    />
                                  );
                                }}
                              />
                            </div>
                          </Col>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
          <Col className='py-4'>
            <img src={store.image} alt={store.template_name} className='img-fluid' />
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default CreateLink;
