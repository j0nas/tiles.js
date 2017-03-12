import React from 'react';
import './style.scss';

const Tileset = ({ children }) =>
  <div className="tiles-tileset">{children}</div>;

Tileset.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Tileset;
