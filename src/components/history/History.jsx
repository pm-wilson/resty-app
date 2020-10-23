import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './historystyles.css';

const History = ({ history }) => {
  const historyList = history.map((historyData) => (
    <HistoryItem 
      key={historyData.date}
      date={historyData.date}
      url={historyData.url}
      method={historyData.method}
    />
  ));

  return (
    <div className={styles.historylist}>
      {historyList}
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
    })
  ),
};

export default History;
