import React from 'react';

import Form from 'react-bootstrap/Form';

const Label = ({ className, children, ...props }) => {
  return (
    <Form.Label
      className='text-secondary'
      style={{ fontSize: '0.865rem' }}
      {...props}
    >
      {children}
    </Form.Label>
  );
};

export default Label;
