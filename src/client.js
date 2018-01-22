import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import Root from 'frames/Root';
import ApiClient from 'helpers/ApiClient';
import createStore from 'store/create';

const client = ApiClient();

const dest = document.getElementById('react-root');

// eslint-disable-next-line
const store = createStore(JSON.parse(window.localStorage.store || "{}"), client);

global.client = client;
global.store = store;
global.BUILD_TIME = process.env.BUILD_TIME;

window.onbeforeunload = () => {

  window.localStorage.store = JSON.stringify({ records: store.getState().records });

};

const renderApp = () => {

  render(
    <AppContainer>
      <Root store={store} history={browserHistory} />
    </AppContainer>,
    dest,
  );

};

renderApp();

if (module.hot) {

  module.hot.accept('./frames/Root', () => {

    // eslint-disable-next-line
    require('./frames/Root');
    renderApp();

  });

}
