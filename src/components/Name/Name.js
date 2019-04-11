import React from 'react';
import PropTypes from 'prop-types';
import './Name.css';

const Name = (props) => {
  const { type, name } = props;
  return (
    <div className={`name ${type}`}>
      {name}
    </div>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['highlight', 'disabled'])
};

Name.defaultProps = {
  type: ''
};

export default Name;
