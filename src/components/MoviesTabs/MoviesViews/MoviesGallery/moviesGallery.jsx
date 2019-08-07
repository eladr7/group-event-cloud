import React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";

import MoviesViewLoader from "../../moviesViewLoader";
import QuickMovieView from "../QuickMoviewView/QuickMovieView";
import CurrTab from "../../currTab";

@observer
class MoviesGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quickViewMovie: {},
      modalActive: false,
      moviesContainer: this.props.moviesContainer,
      genre: this.props.genre
    };
  }

  @action zeroSearchPhrase = () => {
    this.state.moviesContainer.setSearchPhrase("");
  };
  
  clearSearchBox = () => {
    var list = document.getElementsByClassName("searchBox");
    for (var item of list) {
      item.value = "";
    }

    this.zeroSearchPhrase();
  };
  
  componentDidMount() {
    this.clearSearchBox();
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

  render() {
    let genre = this.props.genre;
    if (genre != CurrTab.getTabName()) {
      CurrTab.setTabName(genre);
    }

    let moviesView = MoviesViewLoader.getFilteredMoviesView(
      this.state.moviesContainer,
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
