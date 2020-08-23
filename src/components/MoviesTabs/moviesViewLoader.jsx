import React from "react";

import MovieView from "./MoviesViews/MovieView/movieView";
import NoResults from "./MoviesViews/NoResultsView/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

const MoviesViewLoader = {
  // @private
  // Gets a list of objects and returns a CSSTransitionGroup object that contains an
  // array of ObjectView objects; or a NoResults object in case the input list of
  // objects is empty.
  getMoviesView(objects, openModalFunction, removeVideo) {
    let view;
    if (objects.length <= 0) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="objects"
        >
          {objects.map((obj, index) => (
            <MovieView
              key={index}
              obj={obj}
              openModal={openModalFunction}
              removeVideo={removeVideo}
            />
          ))}
        </CSSTransitionGroup>
      );
    }
    return view;
  },

  // Returns a CSSTransitionGroup object with a list of items whith 'searchPhrase' in their
  // 'name:' property; or a NoResults object in case the searchPhrase doesn't match any.
  // Notice that if an empty searchPhrase is supplied, all items from ObjectsContainer will be
  // returned.
  getFilteredMoviesView(moviesContainer, openModalFunction) {
    const filterredMovies = moviesContainer.getFilteredMovies();

    const removeVideo = (moviesContainer) => {
      return (id) => moviesContainer.removeVideo(id);
    }

    const objectsViews = this.getMoviesView(filterredMovies, openModalFunction, removeVideo(moviesContainer));
    return objectsViews;
  }
};

export default MoviesViewLoader;
