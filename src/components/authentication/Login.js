import React from 'react';

// React Bootstrap
import { Modal, Form, Button } from 'react-bootstrap';

// Package
import { useForm, Controller } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
};

const Login = ({ onSubmit, ...props }) => {
  const {
    control,
    // setError,
    handleSubmit,
    // formState: { errors },
  } = useForm({ defaultValues });

  const submitData = (data) => onSubmit(data);

  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      contentClassName='py-4 px-2'
      centered
    >
      <Modal.Header className='border-0 pt-3'>
        <h1 className='fw-bold'>Login</h1>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(submitData)}>
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
          <Form.Group className='mb-5'>
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
          <Button type='submit' variant='warning' size='lg' className='w-100'>
            <span className='text-white'>Login</span>
          </Button>
        </Form>
        <div className='text-center mt-3'>
          Don't have an account ? Klik{' '}
          <span className='fw-bold cursor-pointer'>Here</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
