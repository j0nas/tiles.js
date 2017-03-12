import React from 'react';
import Row from '../../components/Row';
import Tile from '../../components/Tile';
import './style.scss';

const MainView = () =>
  <div className="tiles-main-contain">
    <Row>
      <Tile>
        <div>
          <div>onsdag</div>
          <div style={{ fontSize: 44 }}>8</div>
        </div>
      </Tile>
      <Tile columnCount={2} centerText={false}>
        <div className="tiles-tile-content-header">Smashing Magazine</div>
        <div>Smasing Newsletter #177: Sketch On Windows, CSS and Chatbots</div>
      </Tile>
    </Row>
    <Row>
      <Tile
        columnCount={2}
        centerText={false}
        bottomText="Microsoft Edge"
      >
        <div>
          <div className="tiles-tile-center-image">
            <img src="https://maxcdn.icons8.com/Share/icon/win8/Logos//ms_edge1600.png" alt="edge" />
          </div>
        </div>
      </Tile>
      <Tile
        padText={false}
        imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg"
        bottomText="Bilder"
      />
    </Row>
    <Row>
      <Tile centerText={false}>
        <span className="tiles-tile-content-header">-4</span>
        <span className="tiles-tile-align-bottom">Oslo</span>
      </Tile>
      <Tile bottomText="Telefonassistent" />
      <Tile bottomText="Twitter" colorName="#4099FF" />
    </Row>
    <Row>
      <Tile bottomText="Store" />
      <Tile bottomText="Skype Preview" colorName="#12A5F4" />
      <Tile padText={false} imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" />
    </Row>
  </div>;


export default MainView;
