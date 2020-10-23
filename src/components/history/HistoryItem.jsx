import React from 'react';
import PropTypes from 'prop-types';
import styles from './historystyles.css';

const Input = ({ url, key, method }) => (
  <div key={key} className={styles.historyitem}>
    <span className={styles.methodarea}>{method}</span>
    <span className={styles.urlarea}>{url}</span>
  </div>
);

Input.propTypes = {
  url: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default Input;
