import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VotingModalPreview from './VotingModalPreview';
import votingForm from './voting.form';

const onSubmit = form => e =>
  form.onSubmit(e, {
    onSuccess(form) {
      action('Submit')(form.values());
    },

    onError(form) {
      action('Error')(form.errors());
    },
});

storiesOf('VotingModalPreview -', module)
  .add('VotingModalPreview', () => (
    <VotingModalPreview
      form={votingForm} onSubmit={onSubmit(votingForm)}
    />
  ));