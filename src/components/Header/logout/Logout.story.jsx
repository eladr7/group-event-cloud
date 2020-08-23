import React from 'react';

import { storiesOf } from '@storybook/react';

import Logout from './Logout';


let users = [
  {
      id: 1,
      username: 'test',
      password: '123'
  },
  {
      id: 2,
      username: 'test2',
      password: '456'
  }
];

let user = {id: 1,
  username: 'SukaMan',
  password: '123'};

storiesOf('Header logout', module)
  .add('Logout ', () => (
    <Logout 
      user={user}
      logo="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
    />
  ));
