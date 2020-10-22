import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ url, key, method }) => (
  <div key={key} className="history-item">
    <span className="method-area">{method}</span>
    <span className="url-area">{url}</span>
  </div>
);

Input.propTypes = {
  url: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default Input;
