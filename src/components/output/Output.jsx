import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './outputstyles.css';

const Output = ({ text }) => (
  <div className={styles.outputtext} data-testid="displayoutput"><ReactJson src={text} /></div>
);

Output.propTypes = {
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Output;
