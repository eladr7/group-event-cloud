import React from "react";

import GenresContainer from "../MoviesTabs/MoviesContainers/genresContainer";
import CurrTab from "../MoviesTabs/currTab";


class ShoppingSiteHeader extends React.Component {
  searchItems = event => {
    let activeTabName = CurrTab.getTabName();

    GenresContainer.getMoviesContainer(activeTabName).setSearchPhrase(
      event.target.value
    );
  };

  render() {
    return (
      <div className="header">
        <h1>Find a scene</h1>
        <input
          className="searchBox"
          type="search"
          placeholder="Find a video"
          onChange={this.searchItems}
        />
      </div>
    );
  }
}

export default ShoppingSiteHeader;
