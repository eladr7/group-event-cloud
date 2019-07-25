import React from "react";
import { observer } from "mobx-react";

@observer
class MovieView extends React.Component {
  render() {
    let obj = this.props.obj;
    return (
      <div>
        <p className="object-name">{obj.name}</p>
        <div className="object">
          <button className="remove-video" onClick={() => this.props.removeVideo(obj.id, this.props.genre)}>-</button>
          <button className="open-modal-btn" onClick={() => this.props.openModal(obj)}>
            <iframe src={obj.image} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieView;
