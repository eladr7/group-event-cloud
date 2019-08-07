import React from 'react';
import { TabPanel } from "react-tabs";

import Button from '../../../GeneralAtoms/Button';
import MoviesGallery from "../MoviesGallery/moviesGallery";

const MoviesTab = ({
    genre = 'Comedy',
    ...props
  }) => {
    const addVideo = (moviesContainer) => {
      let url = prompt('Insert a video URL');
      let videoName = prompt('Enter a scene-name');
      if(url === "" || videoName === "" || url === null || videoName === null)
      {
        return;
      }
      let count = moviesContainer.count() + 1;
      let obj = {id: count, name: videoName, image: url };

      moviesContainer.addObject(obj);
    };
    
    const moviesContainer = props.moviesContainer;
    return (
      <TabPanel>
            <h2>{genre} videos</h2>
            <Button title="Add video" className="add-video" onClick={() => addVideo(moviesContainer)}>+</Button>
            <MoviesGallery 
              genre={genre} 
              moviesContainer={moviesContainer}
            />
      </TabPanel>
    );
};
export default MoviesTab;

// class MoviesTab extends React.Component {
//   addVideo = (moviesContainer) => {
//     let url = prompt('Insert a video URL');
//     let videoName = prompt('Enter a scene-name');
//     if (url === "" || videoName === "" || url === null || videoName === null) {
//       return;
//     }
//     let count = moviesContainer.count() + 1;
//     let obj = { id: count, name: videoName, image: url };

//     moviesContainer.addObject(obj);
//   };

//   render() {
//     const moviesContainer = this.props.moviesContainer;
//     const genre = this.props.genre;
//     return (
//       <TabPanel>
//         <h2>{genre} videos</h2>
//         <Button title="Add video" className="add-video" onClick={() => this.addVideo(moviesContainer)}>+</Button>
//         <MoviesGallery
//           genre={genre}
//           moviesContainer={moviesContainer}
//         />
//       </TabPanel>
//     );
//   }
// }
// export default MoviesTab;