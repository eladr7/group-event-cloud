import React from 'react';
import { TabPanel } from "react-tabs";

import Button from '../../../GeneralAtoms/Button';
import MoviesGallery from "../MoviesGallery/moviesGallery";

const MoviesTab = ({
    genre = 'Comedy',
    ...props
  }) => {
    const moviesContainer = props.moviesContainer;
    return (
      <TabPanel>
            <h2>{genre} videos</h2>
            <MoviesGallery 
              genre={genre} 
              moviesContainer={moviesContainer}
            />
      </TabPanel>
    );
};
export default MoviesTab;
