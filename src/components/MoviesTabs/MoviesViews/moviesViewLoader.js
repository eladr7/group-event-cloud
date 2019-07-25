import React from "react";

import GenresContainer from "../MoviesContainers/genresContainer";

import MovieView from "./movieView";

import NoResults from "./NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

const MoviesViewLoader = {
  zeroSearchPhrase(genre) {
    const moviesContainer = GenresContainer.getMoviesContainer(genre);
    moviesContainer.setSearchPhrase("");
  },
  removeVideo(id, genre) {
    const moviesContainer = GenresContainer.getMoviesContainer(genre);
    moviesContainer.removeVideo(id);
  },


  // @private!
  // Gets a list of objects and returns a CSSTransitionGroup object that contains an
  // array of ObjectView objects; or a NoResults object in case the input list of
  // objects is empty.
  getMoviesView(objects, openModalFunction, genre) {
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
              removeVideo={(id, genre) => this.removeVideo(id, genre)}
              genre={genre}
            />
          ))}
        </CSSTransitionGroup>
      );
    }
    return view;
  },

  // Retrieves an CSSTransitionGroup object with a list of items whith 'searchPhrase' in their
  // 'name:' property; or a NoResults object in case the searchPhrase doesn't match any.
  // Notice that if an empty searchPhrase is supplied, all items from ObjectsContainer will be
  // returned.
  getMoviesViewsByPhrase(genre, openModalFunction) {
    const moviesContainer = GenresContainer.getMoviesContainer(genre);
    const searchPhrase = moviesContainer.getSearchPhrase();

    function searchingFor(searchPhrase) {
      return function(obj) {
        return (
          obj.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
          !searchPhrase
        );
      };
    }
    const filterredMovies = moviesContainer
      .all()
      .filter(searchingFor(searchPhrase));

    const objectsViews = this.getMoviesView(filterredMovies, openModalFunction, genre);

    return objectsViews;
  }
};

export default MoviesViewLoader;
