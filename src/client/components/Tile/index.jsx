import React from 'react';
import classNames from 'classnames';
import './style.scss';


const Tile = ({
  children,
  columnCount,
  centerText,
  padText,
  imgSrc,
  bottomText,
  colorName,
}) => {
  const classes = classNames({
    'tiles-tile': true,
    [`tiles-tile-col-${columnCount}`]: true,
    'tiles-tile-center-text': centerText,
    'tiles-tile-pad-text': padText,
    'tiles-tile-default-color': !colorName,
  });
  return (
    <div className={classes} style={colorName ? { backgroundColor: colorName } : {}}>
      {children}
      {imgSrc && <img src={imgSrc} alt="" />}
      {bottomText && <span className="tiles-tile-align-bottom">{bottomText}</span>}
    </div>
  );
};

Tile.propTypes = {
  children: React.PropTypes.node,
  columnCount: React.PropTypes.number,
  centerText: React.PropTypes.bool,
  padText: React.PropTypes.bool,
  imgSrc: React.PropTypes.string,
  bottomText: React.PropTypes.string,
  colorName: React.PropTypes.string,
};

Tile.defaultProps = {
  columnCount: 1,
  centerText: true,
  padText: true,
  imgSrc: '',
  bottomText: '',
  children: '',
  colorName: '',
};

export default Tile;
