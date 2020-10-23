import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ url, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} onChange={onChange}>
      <label>
        <span>GET</span>
        <input
          type="radio"
          name="method"
          id="get"
          value="GET"
        />
      </label>
      <label>
        <span>POST</span>
        <input
          type="radio"
          name="method"
          id="post"
          value="POST"
        />
      </label>
      <label>
        <span>PUT</span>
        <input
          type="radio"
          name="method"
          id="put"
          value="PUT"
        />
      </label>
      <label>
        <span>PATCH</span>
        <input
          type="radio"
          name="method"
          id="patch"
          value="PATCH"
        />
      </label>
      <label>
        <span>DELETE</span>
        <input
          type="radio"
          name="method"
          id="delete"
          value="DELETE"
        />
      </label>
      <label>Address Search</label>
      <input
        id="text"
        type="text"
        name="text"
        value={url}
      />
    </form>
  </div>
);

Input.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
