/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from './middleware/redux-promise-act';

import reducers from './reducers';

export default (initialState, client) => {

  const middlewares = [
    thunk,
    promiseMiddleware(client),
    logger,
  ];

  const composeEnhancers =
    (IS_DEVELOPMENT && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;

};

/* eslint-enable */
