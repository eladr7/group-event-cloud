import React from 'react';

import Input from '../GeneralAtoms/Input';

import GenresContainer from "../MoviesTabs/MoviesContainers/genresContainer";
import CurrTab from "../MoviesTabs/currTab";

const ShoppingSiteHeader = ({
    title = 'Find a scene',
    placeholder = 'Find a video',
    value = '',
    ...props
  }) => {
    const searchItems = event => {
      let activeTabName = CurrTab.getTabName();

      GenresContainer.getMoviesContainer(activeTabName).setSearchPhrase(
        event.target.value
      );
    };

    return (
      <div className="header">
        <h1>{title}</h1>
        <Input
          className="searchBox"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={searchItems}
          {...props}
        />
      </div>
    );
};
export default ShoppingSiteHeader;
