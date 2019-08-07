import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NoResults from './NoResults';

storiesOf('NoResults view', module)
  .add('NoResults', () => (
    <NoResults
      imgSrc="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
      imgAlt="Empty Tree"
      title="Sorry, no objects matched your search!"
      suggestionMsg="Enter a different keyword and try."
    />
  ));
