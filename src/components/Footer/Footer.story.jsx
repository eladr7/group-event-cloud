import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Footer from './Footer';

const footerLinks = [
  { link: "https://www.youtube.com/watch?v=4vIMg4tTIrc", title: "View Deadpool wisdom" },
  { link: "mailto:eladr@gmail.com", title: "Need any help?" },
  { link: "https://www.facebook.com/elad.rapaport", title: "Say Hi on facebook" },
  { link: "https://sivadass.in", title: "Read My Blog" }
];

storiesOf('Footer', module)
  .add('Footer with nothing', () => (
    <Footer
      footerLinks={footerLinks}
    />
  ));
