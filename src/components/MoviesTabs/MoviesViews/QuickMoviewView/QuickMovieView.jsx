import React, { Component } from "react";
import { findDOMNode } from "react-dom";
// import YouTube from 'react-youtube';
import Button from '../../../GeneralAtoms/Button';
import IframeView from './IframeView/IframeView';

// const videoIdA = 'XxVg_s8xAms';
// const videoIdB = '-DX3vJiqxm4';
class QuickMovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      player: null,
      opts: null,
    };

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }
  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    if (this.state.player == null) {
      this.setState({
        player: event.target,
      });
    }
  }
  onPlayVideo() {
    this.state.player.playVideo();
  }
  onPauseVideo() {
    if (this.state.player) {
      this.state.player.pauseVideo();
    }

  }
  handleClickOutside(event) {
    const domNode = findDOMNode(this.refs.modal);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeModal();
      this.onPauseVideo();
    }
  }
  handleClose() {
    this.props.closeModal();
    this.onPauseVideo();
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  substringAfterDelimiter = (str, delimiter) => {
    let delimiterIndex = str.lastIndexOf(delimiter);
    let subStrAfterDelimiter = str.substring(delimiterIndex + 1);
    return subStrAfterDelimiter;
  }

  setMovieParams = (movieObject) => {
    let movieUrl = movieObject.image;

    let movieIdWithParams = this.substringAfterDelimiter(movieUrl, '/');
    let startTime = this.substringAfterDelimiter(movieIdWithParams, '=');
    let movieId = movieIdWithParams.substr(0, movieIdWithParams.indexOf('?'));

    if (this.state.videoId === null) {
      this.setState({
        videoId: movieId,
        opts: { playerVars: { start: startTime } }
      });
    }
  }

  render() {
    const movieObject = this.props.obj;

    if (Object.entries(movieObject).length > 0) {
      this.setMovieParams(movieObject);
    }

    return (
      <div className={this.props.openModal ? "modal-wrapper active" : "modal-wrapper"} >
        <div className="modal" ref="modal">
          <Button
            type="button"
            className="close"
            onClick={this.handleClose.bind(this)}
          >
            &times;
          </Button>
          <IframeView
            iframClassName="quick-view"
            title={movieObject.name}
            srcUrl={this.state.videoId}
            opts={this.state.opts}
            onReady={this.onReady}
          >
          </IframeView>
        </div>
      </div>
    );
  }
}

export default QuickMovieView;
{/* <IframeView
            iframClassName="quick-view"
            title={movieObject.name}
            srcUrl={this.state.videoId}
            // frameborder='0'
            // alowRules="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          >
          </IframeView> */}
// _onReady(event) {
//   // access to player in all event handlers via event.target
//   event.target.pauseVideo();
// }
// const opts = {
//   height: '390',
//   width: '640',
//   playerVars: { // https://developers.google.com/youtube/player_parameters
//     autoplay: 1
//   }
// };
{/* <YouTube
                videoId={this.props.obj.image}
                opts={opts}
                onReady={this._onReady}
              /> */}