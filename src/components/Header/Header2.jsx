import React from 'react';

import Input from '../GeneralAtoms/Input';
import CurrTab from "../MoviesTabs/currTab";
import "../scss/style.scss";

const ShoppingSiteHeader = ({
    title = 'Find a scene',
    placeholder = 'Find a video',
    value = '',
    ...props
  }) => {
    const searchItems = event => {
        const genresContainer = props.genresContainer;
        let activeTabName = CurrTab.getTabName();

        genresContainer[activeTabName].setSearchPhrase(event.target.value);
    };

    return (
      <div className="header">
        <h3>{title}</h3>
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
