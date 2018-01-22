import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import FormInput from 'components/FormInput';
import FormDatePicker from 'components/FormDatePicker';
import FormError from 'components/FormError';
import FormSubmit from 'components/FormSubmit';

const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) // eslint-disable-line
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const Create = ({ handleSubmit, submitting, error }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="first_name"
      component={FormInput}
      label="Enter first name"
      autoFocus
      required
    />
    <Field
      name="last_name"
      component={FormInput}
      label="Enter last name"
      required
    />
    <Field
      name="birthday"
      component={FormDatePicker}
      label="Choose birthday"
      required
    />
    <Field
      name="phone"
      component={FormInput}
      label="Enter phone"
      type="phone"
      required
      validate={phoneNumber}
    />
    <FormError error={error} />
    <FormSubmit loading={submitting}>
       Create
    </FormSubmit>
  </form>
);

Create.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.node,
};

export default Create;
