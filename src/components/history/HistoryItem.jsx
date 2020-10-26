import React from 'react';
import PropTypes from 'prop-types';
import styles from './historystyles.css';

const HistoryItem = ({ url, date, method, historyClick }) => (
  <div id={date} className={styles.historyitem} onClick={historyClick}>
    <span className={styles.datearea}>{date}</span>
    <span className={styles.methodarea}>{method}</span>
    <span className={styles.urlarea}>{url}</span>
  </div>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  historyClick: PropTypes.func.isRequired,
};

export default HistoryItem;
