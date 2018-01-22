import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import ErrorIcon from 'material-uikit/lib/icons/ErrorMedium';
import styles from './FormError.scss';

const FormError = ({ error }) => (error ? (
  <Collapse
    isOpened={!!error}
    forceInitialAnimation
    springConfig={{ stiffness: 300 }}
    style={{ marginTop: 40 }}
  >
    <div className={styles.error}>
      <ErrorIcon className={styles.icon} />
      {error}
    </div>
  </Collapse>
) : null);

FormError.propTypes = {
  error: PropTypes.node,
};

export default FormError;
