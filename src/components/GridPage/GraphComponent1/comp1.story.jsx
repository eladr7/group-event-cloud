import React from 'react';

import { storiesOf } from '@storybook/react';

import Comp1 from './Comp1';

const headProps = {
  className : 'item2 head',
  divCN : 'mb-12',
  h4CN : 'inline mr12',
  data : 'All sessions',
  title : '1,698',
  pCN : 'paragraph inline',
  pInfo : '100% of total'
};

storiesOf('Comp1', module)
  .add('Comp1', () => (
    <Comp1
      headProps={headProps}
    />
  ));
