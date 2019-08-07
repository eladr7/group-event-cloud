import React, { Component } from "react";
import { findDOMNode } from "react-dom";
// import YouTube from 'react-youtube';
import Button from '../../../GeneralAtoms/Button';
import IframeView from './IframeView/IframeView';


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
            title={this.props.obj.name}
            srcUrl={this.props.obj.image}
            frameborder='0'
            alowRules="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </IframeView>
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