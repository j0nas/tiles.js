import React from 'react';
import './style.scss';

const Tile = ({ children }) =>
  <div className="tiles-tile">{children}</div>;

Tile.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Tile;
