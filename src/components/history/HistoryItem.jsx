import React from 'react';
import PropTypes from 'prop-types';
import styles from './historystyles.css';

const HistoryItem = ({ url, date, method }) => (
  <div key={date} className={styles.historyitem}>
    <span className={styles.methodarea}>{method}</span>
    <span className={styles.urlarea}>{url}</span>
  </div>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default HistoryItem;
