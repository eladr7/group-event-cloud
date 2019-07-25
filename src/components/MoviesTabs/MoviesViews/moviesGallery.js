import React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";

import MoviesViewLoader from "./moviesViewLoader";
import QuickMovieView from "./QuickMovieView";
import CurrTab from "../currTab";

@observer
class MoviesGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quickViewMovie: {},
      modalActive: false
    };
  }

  // Open Modal
  openModal(obj) {
    this.setState({
      quickViewMovie: obj,
      modalActive: true
    });
  }

  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  @action zeroSearchPhrase = () => {
    let genreName = this.props.genre;
    MoviesViewLoader.zeroSearchPhrase(genreName);
  };
  
  clearSearchBox = () => {
    var list = document.getElementsByClassName("searchBox");
    for (var item of list) {
      item.value = "";
    }

    this.zeroSearchPhrase();
  };


  render() {
    let genreName = this.props.genre;
    if (genreName != CurrTab.getTabName()) {
      this.clearSearchBox();
      CurrTab.setTabName(genreName);
    }

    let moviesView = MoviesViewLoader.getMoviesViewsByPhrase(
      genreName,
      this.openModal.bind(this)
    );

    return (
      <div className="clear-fix">
        {moviesView}
        <QuickMovieView
          obj={this.state.quickViewMovie}
          openModal={this.state.modalActive}
          closeModal={this.closeModal.bind(this)}
        />
      </div>
    );
  }
}

export default MoviesGallery;
