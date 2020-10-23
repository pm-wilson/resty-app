import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Output = ({ text }) => (
  <div><ReactJson src={text} /></div>
);

Output.propTypes = {
  text: PropTypes.object.isRequired,
};

export default Output;
