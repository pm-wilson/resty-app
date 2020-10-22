import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  const historyList = history.map((historyData) => (
    <HistoryItem 
      key={historyData.key}
      url={historyData.url}
      method={historyData.method}
    />
  ));

  return (
    <div className="history-list">
      {historyList}
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
    })
  ),
};

export default History;
