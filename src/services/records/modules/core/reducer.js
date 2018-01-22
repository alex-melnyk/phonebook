import { createReducer } from 'redux-act';
import {
  createSuccess,
  editSuccess,
  remove,
} from './actions';

// default state
export const defaultState = {
  records: [],
};

const handlerCreate = (state, record) => ({
  ...state,
  records: [...state.records, { ...record, id: new Date().getTime() }], // no like random id
});

const handlerEdit = (state, record) => ({
  ...state,
  records: [...state.records.filter(r => record.id !== r.id), record],
});

const handlerRemove = (state, id) => ({
  ...state,
  records: state.records.filter(record => record.id !== id),
});

// reducer
export default createReducer({
  [createSuccess]: handlerCreate,
  [editSuccess]: handlerEdit,
  [remove]: handlerRemove,
}, defaultState);
