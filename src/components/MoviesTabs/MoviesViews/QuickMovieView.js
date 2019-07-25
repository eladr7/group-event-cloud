import React, { Component } from "react";
import { findDOMNode } from "react-dom";
// import YouTube from 'react-youtube';

class QuickMovieView extends Component {
  constructor(props) {
    super(props);
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

  handleClickOutside(event) {
    const domNode = findDOMNode(this.refs.modal);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeModal();
    }
  }

  handleClose() {
    this.props.closeModal();
  }

  render() {
    return (
      <div
        className={
          this.props.openModal ? "modal-wrapper active" : "modal-wrapper"
        }
      >
        <div className="modal" ref="modal">
          <button
            type="button"
            className="close"
            onClick={this.handleClose.bind(this)}
          >
            &times;
          </button>
          <div className="quick-view">
            <div className="quick-view-details">
              <span className="object-name">{this.props.obj.name}</span>
            </div>
            <div className="quick-view-image">
              <iframe src={this.props.obj.image} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickMovieView;
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