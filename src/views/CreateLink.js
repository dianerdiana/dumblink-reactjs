import React, { useRef, Fragment } from 'react';

// React Bootstrap
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

// Custom Components
import Input from '../components/form/Input';
import Label from '../components/form/Label';

// Package
import { useForm, Controller, useFieldArray } from 'react-hook-form';

const defaultValues = {
  titel: '',
  description: '',
  links: [
    {
      name: '',
      url: '',
    },
  ],
};

const CreateLink = () => {
  const inputRef = useRef(null);

  const { control, handleSubmit } = useForm({ defaultValues });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });

  const uploadFile = () => {
    inputRef.current.click();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <div className='mb-4 d-flex justify-content-between fw-bold px-3 fs-4'>
        <span className='me-auto'>Create Link</span>
        <Button variant='warning' size='sm' className='text-white'>
          Publish Link
        </Button>
      </div>
      <Row className='mx-0'>
        <Col sm='12' lg='8'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Card className='border-0'>
              <Card.Body>
                <div className='mb-4 d-flex'>
                  <Col sm='4'>
                    <img
                      src='/images/img_empty.png'
                      alt='Empty'
                      width='124'
                      className='img-thumbnail border-0'
                    />
                  </Col>
                  <Col className='d-flex align-items-center ms-4'>
                    <Form.Control
                      type='file'
                      className='d-none'
                      ref={inputRef}
                    />
                    <Button
                      variant='warning'
                      size='sm'
                      className='text-white px-3'
                      onClick={uploadFile}
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
                      return (
                        <Input
                          type='text'
                          placeholder='ex. Your Description'
                          {...field}
                        />
                      );
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
                                defaultValue={item.name}
                                id={`links.${index}.name`}
                                name={`links.${index}.name`}
                                control={control}
                                render={({ field }) => {
                                  return (
                                    <Input
                                      placeholder='Instagram'
                                      className='bg-light outline-0'
                                      {...field}
                                    />
                                  );
                                }}
                              />
                            </div>
                            <div>
                              <Label>URL</Label>
                              <Controller
                                defaultValue={item.url}
                                id={`links.${index}.url`}
                                name={`links.${index}.url`}
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
          </Form>
        </Col>
        <Col className='py-4'>
          <img
            src='/images/template_1.png'
            alt='Template 1'
            className='img-fluid'
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreateLink;
