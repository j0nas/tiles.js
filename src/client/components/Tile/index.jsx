import React from 'react';
import classNames from 'classnames';
import './style.scss';


const Tile = ({ children, columnCount, centerText, padText }) => {
  const classes = classNames({
    'tiles-tile': true,
    [`tiles-tile-col-${columnCount}`]: true,
    'tiles-tile-center-text': centerText,
    'tiles-tile-pad-text': padText,
  });
  return <div className={classes}>{children}</div>;
};

Tile.propTypes = {
  children: React.PropTypes.node.isRequired,
  columnCount: React.PropTypes.number,
  centerText: React.PropTypes.bool,
  padText: React.PropTypes.bool,
};

Tile.defaultProps = {
  columnCount: 1,
  centerText: true,
  padText: true,
};

export default Tile;
