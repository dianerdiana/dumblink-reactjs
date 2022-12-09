import React, { useState } from 'react';

// React Bootstrap
import { Modal, Form, Button, Alert } from 'react-bootstrap';

// Package
import { useForm, Controller } from 'react-hook-form';
import { handleLogin } from '../../redux/authentication';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../auth/useAuth';

const defaultValues = {
  email: '',
  password: '',
};

const Login = (props) => {
  const [message, setMessage] = useState(null);
  const { auth } = useAuth({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    // setError,
    handleSubmit,
    // formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    auth
      .login({ email: data.email, password: data.password })
      .then((res) => {
        console.log(res.data);
        const data = {
          ...res.data.data,
          token: res.data.data.token,
        };
        dispatch(handleLogin(data));
        navigate('/template');
      })
      .catch(({ response }) => {
        setMessage(response.data.message);
      });
  };

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
        {message && (
          <Alert variant='danger' className='py-2'>
            {message}
          </Alert>
        )}
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
