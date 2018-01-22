import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { create, edit } from 'services/records/modules/core';
import Create from './Create';

const onSubmit = isEdit => (values, dispatch) =>
dispatch(isEdit ? edit(values) : create(values)).catch((error) => {

  throw new SubmissionError({ _error: error });

});

const mapStateToProps = (state, props) => ({
  onSubmit: onSubmit(!!props.initialValues),
});

export default connect(mapStateToProps)(reduxForm({ form: 'create', onSubmit })(Create));
