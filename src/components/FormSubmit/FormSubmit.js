import React from 'react';
import Button from 'material-uikit/lib/buttons/Button';
import styles from './FormSubmit.scss';

const FormSubmit = props => (
  <Button
    {...props}
    size="l"
    mod="primary"
    type="submit"
    round="big"
    className={styles.button}
  />
);

export default FormSubmit;
