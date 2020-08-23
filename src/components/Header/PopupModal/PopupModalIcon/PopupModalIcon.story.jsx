import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PopupModalIcon from './PopupModalIcon';

const onSubmit = form => e =>
  form.onSubmit(e, {
    onSuccess(form) {
      action('Submit')(form.values());
    },

    onError(form) {
      action('Error')(form.errors());
    },
});

storiesOf('Popup Modal Icon', module)
  .add('PopupModalIcon', () => (
    <PopupModalIcon
      onClick={e => {e.preventDefault(); action('onClick')(e);}}
      src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
      alt="Empty Tree"
      width="100px"
      height="100px"
    />
  ));