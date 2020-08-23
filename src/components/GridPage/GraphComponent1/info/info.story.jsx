import React from 'react';

import { storiesOf } from '@storybook/react';

import Info from './Info';

storiesOf('Info', module)
  .add('Info', () => (
    <Info
      className='info'
      divCN='mb-12'
      h4CN='inline mr12'
      data='All sessions'
      title='1,698'
    />
  ));
