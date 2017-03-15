import React from 'react';
import classNames from 'classnames';
import './style.scss';


const Tile = ({
  children,
  columnCount,
  rowCount,
  centerText,
  padText,
  imgSrc,
  imgAlt,
  imgTitle,
  bottomText,
  colorName,
  topText,
}) => {
  const classes = classNames({
    'tiles-tile': true,
    [`tiles-tile-col-${columnCount}`]: true,
    [`tiles-tile-row-${rowCount}`]: true,
    'tiles-tile-center-text': centerText,
    'tiles-tile-pad-text': padText,
    'tiles-tile-default-color': !colorName,
  });
  return (
    <div className={classes} style={colorName ? { backgroundColor: colorName } : {}}>
      {topText && <span className="tiles-tile-top-text">{topText}</span>}
      {children}
      {imgSrc && <img src={imgSrc} alt={imgAlt} title={imgTitle} />}
      {bottomText && <span className="tiles-tile-align-bottom">{bottomText}</span>}
    </div>
  );
};

Tile.propTypes = {
  children: React.PropTypes.node,
  columnCount: React.PropTypes.number,
  rowCount: React.PropTypes.number,
  centerText: React.PropTypes.bool,
  padText: React.PropTypes.bool,
  imgSrc: React.PropTypes.string,
  imgAlt: React.PropTypes.string,
  imgTitle: React.PropTypes.string,
  bottomText: React.PropTypes.string,
  colorName: React.PropTypes.string,
  topText: React.PropTypes.string,
};

Tile.defaultProps = {
  columnCount: 1,
  rowCount: 1,
  centerText: true,
  padText: true,
  imgSrc: '',
  imgAlt: '',
  imgTitle: '',
  bottomText: '',
  children: '',
  colorName: '',
  topText: '',
};

export default Tile;
