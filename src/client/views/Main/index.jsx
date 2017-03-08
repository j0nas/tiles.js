import React from 'react';
import Row from '../../components/Row';
import Tile from '../../components/Tile';
import './style.scss';

const MainView = () =>
  <div className="tiles-main-contain">
    <Row>
      <Tile>13</Tile>
      <Tile>2324</Tile>
      <Tile>2433</Tile>
      <Tile>4423</Tile>
    </Row>
    <Row>
      <Tile>1</Tile>
      <Tile>2</Tile>
      <Tile>
        <img src="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" alt="cat" />
      </Tile>
      <Tile>4</Tile>
    </Row>
  </div>;


export default MainView;
