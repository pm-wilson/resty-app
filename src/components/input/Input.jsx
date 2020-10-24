import React from 'react';
import PropTypes from 'prop-types';
import styles from './inputstyles.css';

const Input = ({ url, body, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} >
      <div className={styles.methodradio}>
        <label>
          <span>GET</span>
          <input
            selected
            type="radio"
            name="method"
            id="get"
            value="GET"
            onChange={onChange}
          />
        </label>
        <label>
          <span>POST</span>
          <input
            type="radio"
            name="method"
            id="post"
            value="POST"
            onChange={onChange}
          />
        </label>
        <label>
          <span>PUT</span>
          <input
            type="radio"
            name="method"
            id="put"
            value="PUT"
            onChange={onChange}
          />
        </label>
        <label>
          <span>PATCH</span>
          <input
            type="radio"
            name="method"
            id="patch"
            value="PATCH"
            onChange={onChange}
          />
        </label>
        <label>
          <span>DELETE</span>
          <input
            type="radio"
            name="method"
            id="delete"
            value="DELETE"
            onChange={onChange}
          />
        </label>
      </div>
      <label className={styles.addresssearch}>Address Search
        <input
          id="url"
          type="text"
          name="url"
          value={url}
          onChange={onChange}
        />
      </label>
      <label className={styles.jsonbody}>JSON Body
        <input
          id="body"
          type="text"
          name="body"
          value={body}
          onChange={onChange}
        />
      </label>
      <button className={styles.submitbutton}>Submit</button>
    </form>
  </div>
);

Input.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
