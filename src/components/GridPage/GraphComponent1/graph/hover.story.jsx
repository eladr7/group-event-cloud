import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Hover from './Hover';

storiesOf('Molecules', module)
  .add('Email', () => (
    <Hover
      id="email"
      label="User Email"
      onChange={e => action('onChange')(e.target.value)}
    />
  ))

  .add('Email With Value', () => (
    <Hover
      id="email"
      label="User Email"
      value="user@email.com"
      onChange={e => action('onChange')(e.target.value)}
    />
  ))

  .add('Password', () => (
    <Hover
      id="password"
      type="password"
      label="Password"
      onChange={e => action('onChange')(e.target.value)}
    />
  ))

  .add('Password With Value', () => (
    <Hover
      id="password"
      type="password"
      label="Password"
      value="1234"
      onChange={e => action('onChange')(e.target.value)}
    />
  ))

  .add('Password With Error', () => (
    <Hover
      id="password"
      type="password"
      label="Password"
      value="1234"
      error="Password Incorrect"
      onChange={e => action('onChange')(e.target.value)}
    />
  ));
