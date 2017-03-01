import React from 'react';
import Row from '../../components/Row';
import Tile from '../../components/Tile';
import './style.scss';

const MainView = () =>
  <div className="tiles-main-contain">
    <Row>
      <Tile>1</Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
      <Tile>4</Tile>
    </Row>
    <Row>
      <Tile>1</Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
      <Tile>4</Tile>
    </Row>
  </div>;


export default MainView;
