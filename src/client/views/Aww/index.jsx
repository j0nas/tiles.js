import shortId from 'shortid';
import React, { Component } from 'react';
import Tile from '../../components/Tile';
// import Tileset from '../../components/Tileset';

class Aww extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div>
        {this.state.images.map(image =>
          <Tile columnCount={3} rowCount={3} padText={false} imgSrc={image.link} key={shortId.generate()} />,
        )}
      </div>
    );
  }
}

Aww.propTypes = {
  subreddit: React.PropTypes.string.isRequired,
};

export default Aww;
