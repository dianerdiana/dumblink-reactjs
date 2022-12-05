import React, { Fragment, useState } from 'react';

// React Bootstrap
import { Button, Card, Form } from 'react-bootstrap';

// Custom Components
import Input from '../components/form/Input';

// Package
import { useForm, Controller } from 'react-hook-form';

const defaultValues = {
  name: '',
  email: '',
};

const Profile = () => {
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <h4 className='mb-4 fw-bold px-3'>My Information</h4>
      <Form onSubmit={handleSubmit(onSubmit)} className='px-3'>
        <Card className='border-0'>
          <Card.Body>
            <div className='mb-4'>
              <Form.Label className='text-secondary'>Name</Form.Label>
              <Controller
                name='name'
                control={control}
                render={({ field }) => {
                  return <Input placeholder='Name' {...field} />;
                }}
              />
            </div>
            <div className='mb-3 py-2'>
              <Form.Label className='text-secondary'>Email</Form.Label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      type='mail'
                      placeholder='example@mail.com'
                      {...field}
                    />
                  );
                }}
              />
            </div>
          </Card.Body>
        </Card>
        <div className='mt-5 d-flex flex-column flex-sm-row justify-content-end gap-3 pe-4'>
          <Button
            type='submit'
            size='sm'
            variant='warning'
            className='text-white px-4 py-1 fw-bold'
          >
            Save Account
          </Button>
          <Button
            size='sm'
            variant='danger'
            className='text-white px-4 py-1 fw-bold'
          >
            Delete Account
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Profile;
