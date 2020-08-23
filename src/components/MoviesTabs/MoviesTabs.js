import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.css";

import Button from '../GeneralAtoms/Button';
import MoviesGallery from "./MoviesViews/MoviesGallery/moviesGallery";

class MoviesTabs extends React.Component {
  
  render() {
    const genresContainer = this.props.genresContainer;
    const genres = Object.keys(genresContainer);

    return (
      <div>
        <Tabs>
          <TabList>
            {genres.map(genre => <Tab>{genre}</Tab>)}
          </TabList>

          <TabPanel>
            <h2>Comedy videos</h2>
            <MoviesGallery
              genre="Comedy"
              moviesContainer={genresContainer["Comedy"]}
            />
          </TabPanel>
          <TabPanel>
            <h2>Drama videos</h2>
            <MoviesGallery
              genre="Drama"
              moviesContainer={genresContainer["Drama"]}
            />
          </TabPanel>
          <TabPanel>
            <h2>Fantasy videos</h2>
            <MoviesGallery
              genre="Fantasy"
              moviesContainer={genresContainer["Fantasy"]}
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default MoviesTabs;