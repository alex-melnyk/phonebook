import { createAction } from 'redux-act';
import { getRecords } from './selectors';

export const createSuccess = createAction(
  'RECORDS_CORE_CREATE_SUCCESS',
);

export const create = createAction(
  'RECORDS_CORE_CREATE',
  record => (dispatch, getState) => new Promise((resolve, reject) => {

    if (getRecords(getState()).find(r => r.phone === record.phone)) {

      reject('Phone number already exist');

    } else {

      dispatch(createSuccess(record));
      resolve(record);

    }

  }),
);

export const editSuccess = createAction(
  'RECORDS_CORE_EDIT_SUCCESS',
);

export const edit = createAction(
  'RECORDS_CORE_EDIT',
  record => (dispatch, getState) => new Promise((resolve, reject) => {

    const find = getRecords(getState()).find(r => r.phone === record.phone);

    if (find && find.id !== record.id) {

      reject('Phone number already exist');

    } else {

      dispatch(editSuccess(record));
      resolve(record);

    }

  }),
);

export const remove = createAction(
  'RECORDS_CORE_REMOVE',
);
