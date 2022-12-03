import React from 'react';

// React Bootstrap
import { Modal, Form, Button } from 'react-bootstrap';

// Package
import { useForm, Controller } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
  fullname: '',
};

const Register = (props) => {
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      contentClassName='py-4 px-2'
      centered>
      <Modal.Header className='border-0 pt-3'>
        <h1 className='fw-bold'>Register</h1>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-4'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => {
                return (
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className='border border-2 border-dark border-opacity-25 bg-secondary bg-opacity-10 py-2'
                    {...field}
                  />
                );
              }}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Controller
              name='password'
              control={control}
              render={({ field }) => {
                return (
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    className='border border-2 border-dark border-opacity-25 bg-secondary bg-opacity-10 py-2'
                    {...field}
                  />
                );
              }}
            />
          </Form.Group>
          <Form.Group className='mb-5'>
            <Controller
              name='fullname'
              control={control}
              render={({ field }) => {
                return (
                  <Form.Control
                    type='text'
                    placeholder='Full Name'
                    className='border border-2 border-dark border-opacity-25 bg-secondary bg-opacity-10 py-2'
                    {...field}
                  />
                );
              }}
            />
          </Form.Group>
          <Button variant='warning' size='lg' className='w-100'>
            <span className='text-white'>Register</span>
          </Button>
        </Form>
        <div className='text-center mt-3'>
          Already have an account ? Klik{' '}
          <span className='fw-bold cursor-pointer'>Here</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
