import React from 'react';
import Tile from '../../components/Tile';
import Row from '../../components/Row';
import Tileset from '../../components/Tileset';

import DateTile from '../../components/hocTiles/DateTile';
import MailTile from '../../components/hocTiles/MailTile';
import WeatherTile from '../../components/hocTiles/WeatherTile';
import './style.scss';

const MainView = () =>
  <div className="tiles-main-contain">
    <Tileset>
      <Row>
        <DateTile />
        <MailTile />
      </Row>
      <Row>
        <Tile columnCount={2} bottomText="Microsoft Edge">
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
        <WeatherTile />
        <Tile bottomText="Telefonassistent" />
        <Tile bottomText="Twitter" colorName="#4099FF" />
      </Row>
      <Row>
        <Tile bottomText="Store" />
        <Tile bottomText="Skype Preview" colorName="#12A5F4" />
        <Tile padText={false} imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" />
      </Row>
    </Tileset>
    <Tileset>
      <Row>
        <Tile bottomText="Xbox" colorName="green" />
        <Tile bottomText="Groove Musikk" />
        <Tile bottomText="Film og TV" />
      </Row>
      <Row>
        <Tile padText={false} imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" />
        <Tile padText={false} imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" />
        <Tile padText={false} imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" />
      </Row>
      <Row>
        <Tile
          padText={false}
          imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg"
          bottomText="Økonomi"
        />
        <Tile
          padText={false}
          imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg"
          columnCount={2}
          bottomText="Nyheter "
        />
      </Row>
      <Row>
        <Tile
          padText={false}
          imgSrc="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg"
          bottomText="Økonomi"
        />
        <Tile bottomText="OneNote" colorName="rebeccapurple" />
        <Tile bottomText="Skaff deg Offi..." colorName="#EC4818" />
      </Row>
    </Tileset>
  </div>;


export default MainView;
