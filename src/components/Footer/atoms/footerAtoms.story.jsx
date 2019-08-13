import React from 'react';
import { storiesOf } from '@storybook/react';

import DelimitedAlink from './DelimitedAlink';
import FooterSignature from './FooterSignature';

storiesOf('Footer Atoms', module)
  .add("Delimited 'a' link", () => (
    <DelimitedAlink
      href="https://www.youtube.com/watch?v=4vIMg4tTIrc"
      target="_blank"
    >View Deadpool wisdom</DelimitedAlink>
  ))

  .add('Footer signature', () => (
    <FooterSignature
      year="2019"
      stronged="Group event"
      phrase="Acting class"
    />
  ));
