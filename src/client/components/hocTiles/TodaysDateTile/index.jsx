import React from 'react';
import Tile from '../../Tile';
import './style.scss';

const today = new Date();
const dayName =
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][today.getDay()];

const DateTile = () =>
  <Tile>
    <div>
      <div>{dayName}</div>
      <div className="tiles-date-day">{today.getDate()}</div>
    </div>
  </Tile>;

export default DateTile;
