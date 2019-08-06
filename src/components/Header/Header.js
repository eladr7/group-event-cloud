import React from "react";

import GenresContainer from "../MoviesTabs/MoviesContainers/genresContainer";
import CurrTab from "../MoviesTabs/currTab";
import Input from '../GeneralAtoms/Input';

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
        <Input
          className="searchBox"
          type="search"
          placeholder="Find a video"
          value=''
          onChange={this.searchItems}
        />
      </div>
    );
  }
}

export default ShoppingSiteHeader;
