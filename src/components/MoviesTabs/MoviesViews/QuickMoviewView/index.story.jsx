import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuickMovieView from './QuickMovieView';

const movie = { id: 0, name: "Djungo-bar-scene Comedy", image: "https://www.youtube.com/embed/xRnUyVUJR_E?start=76" };


storiesOf('QuickMovieView', module)
  .add('QuickMovieView hidden', () => (
    <QuickMovieView
      obj={movie}
      openModal={false}
      closeModal={e => action('closeModal')(e)}
    />
  ))
  
  .add('QuickMovieView visible', () => (
    <QuickMovieView
      obj={movie}
      openModal={true}
      closeModal={e => action('closeModal')(e)}
    />
  ));
