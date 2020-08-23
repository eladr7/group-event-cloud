import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MoviesGallery from './moviesGallery';

const emptyMoviesContainer = new MoviesContainer("Comedy");

const moviesContainer = new MoviesContainer("Comedy");
const movie = { id: 0, name: "Djungo-bar-scene Comedy", image: "https://www.youtube.com/embed/xRnUyVUJR_E?start=76" };
moviesContainer.addObjectTest(movie);


storiesOf('Movies Gallery', module)
  .add('Movies Gallery - empty', () => (
    <MoviesGallery
      genre="Comedy"
      moviesContainer={emptyMoviesContainer}
    />
  ))
  
  .add('Movies Gallery - with a movie', () => (
    <MoviesGallery
      genre="Comedy"
      moviesContainer={moviesContainer}
    />
  ));
