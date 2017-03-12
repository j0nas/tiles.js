// https://api.apixu.com/v1/current.json?key=9bd24308fa264ec5b86144908171203&q=Oslo

import React from 'react';
import Tile from '../../Tile';

const MailTile = () =>
  <Tile columnCount={2} centerText={false}>
    <div className="tiles-tile-content-header">Smashing Magazine</div>
    <div>Smasing Newsletter #177: Sketch On Windows, CSS and Chatbots</div>
  </Tile>;

export default MailTile;
