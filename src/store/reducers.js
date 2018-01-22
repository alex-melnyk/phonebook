import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';

import modal from 'modules/modal';
import notify from 'modules/notify';

import records from 'services/records/modules/core';

export default combineReducers({
  reduxAsyncConnect,
  form,
  modal,
  notify,
  records,
});
