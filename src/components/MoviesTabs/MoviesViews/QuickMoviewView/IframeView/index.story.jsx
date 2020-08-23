import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import IframeView from './IframeView';

storiesOf('Molecules', module)
  .add('IframeView', () => (
    <IframeView
      iframClassName="quick-view"
      title="Bar scene"
      srcUrl="https://www.youtube.com/embed/xRnUyVUJR_E?start=76"
      frameborder='0'
      alowRules="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  ));