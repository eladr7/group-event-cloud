import React from 'react';

import { storiesOf } from '@storybook/react';

import Logout from './Logout';


storiesOf('Footer molecules', module)
  .add('Logout ', () => (
    <Logout />
  ));
