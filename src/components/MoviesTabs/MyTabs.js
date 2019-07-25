import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../node_modules/react-tabs/style/react-tabs.css";

import MoviesGallery from "./MoviesViews/moviesGallery";
import Genres from "./Genres";

import GenresContainer from "./MoviesContainers/genresContainer";

class MyTabs extends React.Component {
  addVideo(genre)
  {
    const moviesContainer = GenresContainer.getMoviesContainer(genre);
    
    let url = prompt('Insert a video URL');
    let videoName = prompt('Enter a scene-name');
    if(url === "" || videoName === "" || url === null || videoName === null)
    {
      return;
    }
    let count = moviesContainer.count() + 1;
    let obj = {id: count, name: videoName, image: url };

    moviesContainer.addObject(obj);
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Comedy</Tab>
            <Tab>Drama</Tab>
            <Tab>Fantasy</Tab>
          </TabList>

          <TabPanel>
            <h2>Comic scenes</h2>
            <button title="Add video" className="add-video" onClick={() => this.addVideo(Genres.Comedy)}>+</button>
            <MoviesGallery genre={Genres.Comedy}/>
          </TabPanel>
          <TabPanel>
            <h2>Drama videos</h2>
            <button title="Add video" className="add-video" onClick={() => this.addVideo(Genres.Drama)}>+</button>
            <MoviesGallery genre={Genres.Drama}/>
          </TabPanel>
          <TabPanel>
            <h2>Fantasy videos</h2>
            <button title="Add video" className="add-video" onClick={() => this.addVideo(Genres.Fantasy)}>+</button>
            <MoviesGallery genre={Genres.Fantasy}/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default MyTabs;