import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MovieView from './movieView';


const emptyMovie = {};
const movie = { id: 0, name: "Djungo-bar-scene Comedy", image: "https://www.youtube.com/embed/xRnUyVUJR_E?start=76" };

storiesOf('Movie View ', module)
  .add('Movie View - empty', () => (
    <MovieView
      key="0"
      obj={emptyMovie}
      openModal={e => action('openModal')(e)}
      removeVideo={e => action('removeVideo')(e)}
    />
  ))
  
  .add('Movie View', () => (
    <MovieView
      key="0"
      obj={movie}
      openModal={e => action('openModal')(e)}
      removeVideo={e => action('removeVideo')(e)}
    />
  ));
