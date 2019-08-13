import React from 'react';

import { storiesOf } from '@storybook/react';

import FooterLinks from './FooterLinks';

const footerLinks = [
  { link: "https://www.youtube.com/watch?v=4vIMg4tTIrc", title: "View Deadpool wisdom" },
  { link: "mailto:eladr@gmail.com", title: "Need any help?" },
  { link: "https://www.facebook.com/elad.rapaport", title: "Say Hi on facebook" },
  { link: "https://sivadass.in", title: "Read My Blog" }
];

storiesOf('Footer molecules', module)
  .add('Footer links', () => (
    <FooterLinks
      footerLinks={footerLinks}
    />
  ));
