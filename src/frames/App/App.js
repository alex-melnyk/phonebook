import React from 'react';
// import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import ModalService from 'modules/modal/components/ModalService';
import NotifyService from 'modules/notify/components/NotifyService';
import styles from './App.scss';

const App = ({ children }) => (
  <section className={styles.container}>
    <main className={styles.main}>
      {children}
    </main>
    <NotifyService />
    <ModalService />
  </section>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
