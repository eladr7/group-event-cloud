import React from 'react';

import { storiesOf } from '@storybook/react';
import Head from './Head';

storiesOf('Head', module)
  .add('Head', () => (
    <Head
      className='head'
      divCN='mb-12'
      h4CN='inline mr12'
      data='All sessions'
      title='1,698'
      pCN='paragraph inline'
      pInfo='100% of total'
    />
  ));
