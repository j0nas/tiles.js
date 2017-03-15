import React from 'react';
import './style.scss';

const Row = ({ children }) =>
  <div className="tiles-row">{children}</div>;

Row.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
};

export default Row;
