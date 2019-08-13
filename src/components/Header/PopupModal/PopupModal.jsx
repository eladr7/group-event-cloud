import React from "react";
import { findDOMNode } from "react-dom";
import PopupModalIcon from './PopupModalIcon/PopupModalIcon';

class PopupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopupModal: false
    };
  }

  handlePopupModal(e) {
    e.preventDefault();
    this.setState({
      showPopupModal: !this.state.showPopupModal
    });
  }

  handleClickOutside(event) {
    const popupModalNode = findDOMNode(this.refs.popupModalPreview);
    if (popupModalNode.classList.contains("active")) {
      if (!popupModalNode || !popupModalNode.contains(event.target)) {
        this.setState({
          showPopupModal: false
        });
        event.stopPropagation();
      }
    }
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

  render() {
    return (
      <div className="popup-modal">
        <PopupModalIcon
          onClick={this.handlePopupModal.bind(this)}
          imgSrc={this.props.imgSrc}
          imgAlt={this.props.imgAlt}
          {...this.props}
        />
        <div
          className={this.state.showPopupModal ? "popupModal-preview active" : "popupModal-preview"}
          ref="popupModalPreview"
        >
          {this.props.modalView}
        </div>
      </div>
    );
  }
}

export default PopupModal;
