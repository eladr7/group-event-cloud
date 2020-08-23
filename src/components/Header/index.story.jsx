import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ShoppingSiteHeader from './Header2';

storiesOf('Header Molecules', module)
  .add('Header', () => (
    <ShoppingSiteHeader
      title = 'Find a scene'
      placeholder = 'Find a video'
      value = ''
      onChange={e => action('onChange')(e.target.value)}
    />
  ));
