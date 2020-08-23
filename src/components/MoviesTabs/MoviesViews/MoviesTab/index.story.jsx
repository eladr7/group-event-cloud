import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MoviesTab from './MoviesTab';

storiesOf('Movies tab', module)
  .add('Movies tab - Comedy', () => (
    <MoviesTab
      genre="Comedy"
    />
  ));
