import React from "react";
import { observer } from "mobx-react";

import Button from '../../../GeneralAtoms/Button';
import Iframe from '../../../GeneralAtoms/Iframe';


@observer
class MovieView extends React.Component {
  render() {
    let obj = this.props.obj;
    return (
      <div>
        <p className="object-name">{obj.name}</p>
        <div className="object">
          <Button className="remove-video" onClick={() => this.props.removeVideo(obj.id)}>-</Button>
          <Button className="open-modal-btn" onClick={() => this.props.openModal(obj)}>
            <Iframe src={obj.image} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
          </Button>
        </div>
      </div>
    );
  }
}

export default MovieView;
