function createPromiseMiddleware() {

  return ({ dispatch, getState }) => next => (action) => {

    if (typeof action.payload === 'function') {

      return action.payload(dispatch, getState);

    }

    return next(action);

  };

}

export default createPromiseMiddleware;
