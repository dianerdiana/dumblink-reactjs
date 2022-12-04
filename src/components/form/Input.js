import React from 'react';

import Form from 'react-bootstrap/Form';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Form.Control
      ref={ref}
      className={`rounded-0 border-0 border-2 border-bottom shadow-none ${className}`}
      {...props}
    />
  );
});

export default Input;
