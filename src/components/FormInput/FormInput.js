import React from 'react';
import Input from 'material-uikit/lib/inputs/Input';

const FormInput = ({ input, meta: { touched, error }, ...rest }) => (
  <Input type="text" {...input} {...rest} error={touched && error} style={{ width: 350 }} />
);

export default FormInput;
