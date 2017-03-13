import React, { Component } from 'react';
import Tile from '../../Tile';

export default class ImgurTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      images: [],
    };

    this.refreshImage = this.refreshImage.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentWillMount() {
    setTimeout(this.refreshImage, 3000);
  }

  fetchImages() {
    fetch('https://api.imgur.com/3/gallery/hot/viral/0.json', {
      Authorization: 'Client-ID 04c2fb7859a68ba',
    })
    .then(res => res.json())
    .then(res => this.setState({
      images: res.data.filter(data => data.link.includes('i.') && !data.link.includes('gif')),
    }));
  }

  refreshImage() {
    if (this.state.imageIndex + 1 < this.state.images.length) {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    } else {
      this.setState({
        imageIndex: 0,
      }, () => this.fetchImages());
    }

    setTimeout(this.refreshImage, 1000 * 30);
  }

  render() {
    return (<Tile
      columnCount={3}
      rowCount={3}
      padText={false}
      imgSrc={this.state.images[this.state.imageIndex] && this.state.images[this.state.imageIndex].link}
    />);
  }
}
