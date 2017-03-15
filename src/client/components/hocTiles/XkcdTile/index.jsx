import React, { Component } from 'react';
import Tile from '../../Tile';

export default class ImgurTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      imgWidth: 1,
      imgHeight: 1,
    };

    this.fetchImage = this.fetchImage.bind(this);
  }

  componentWillMount() {
    this.fetchImage();
  }

  fetchImage() {
    const img = new Image();
    fetch('/api/xkcd')
      .then(res => res.json())
      .then((res) => {
        img.src = res.img;
        img.title = res.alt;
        img.onload = imgData =>
          this.setState({
            imgWidth: imgData.path[0].width,
            imgHeight: imgData.path[0].height,
          });
        this.setState({ img });
      });
  }

  render() {
    if (!this.state.img) { // TODO extract "is loading" detection to tile component
      return <Tile>Loading ..</Tile>;
    }

    const { img: { src, title, width, height } } = this.state;
    return (<Tile
      columnCount={3 + Math.round(width / height)}
      rowCount={3 + Math.round((width / height))}
      padText={false}
      imgSrc={src}
      imgTitle={title}
    />);
  }
}
