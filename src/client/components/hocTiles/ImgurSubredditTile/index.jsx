import React, { Component } from 'react';
import Tile from '../../Tile';


class ImgurSubredditTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      images: [],
    };

    this.fetchImages = this.fetchImages.bind(this);
  }

  componentWillMount() {
    this.fetchImages();
  }

  fetchImages() {
    fetch(`https://api.imgur.com/3/gallery/r/${this.props.subreddit}/top`, {
      Authorization: 'Client-ID 04c2fb7859a68ba',
    })
    .then(res => res.json())
    .then(res => this.setState({
      images: res.data.filter(data => !data.is_album && !data.link.includes('gif')),
    }));
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

ImgurSubredditTile.propTypes = {
  subreddit: React.PropTypes.string.isRequired,
};

export default ImgurSubredditTile;
