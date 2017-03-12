import React, { Component } from 'react';
import Tile from '../../Tile';

export default class WeatherTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
  }

  componentWillMount() {
    const osloWeatherEndpoint = 'https://api.apixu.com/v1/current.json?key=9bd24308fa264ec5b86144908171203&q=Oslo';
    fetch(osloWeatherEndpoint)
      .then(res => res.json())
      .then(weatherData => this.setState({ weatherData }));
  }

  render() {
    const { weatherData } = this.state;
    const {
      location = {},
      current = {},
    } = weatherData;
    return (
      <Tile centerText={false} imgSrc={current.condition && current.condition.icon} topText={`${current.temp_c}°`}>
        <span className="tiles-tile-align-bottom">{location.name}</span>
      </Tile>
    );
  }
}
