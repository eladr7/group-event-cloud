// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

// import votingForm from './VotingModalPreview/voting.form';
// import VotingModalPreview from './VotingModalPreview/VotingModalPreview';

// import PopupModal from './PopupModal';

// class Store {
//   form = votingForm;
// }

// const votingModalStore = new Store();
// votingModalStore.onSubmit = e =>
//   votingModalStore.form.onSubmit(e, {
//     onSuccess(form) {
//       action('Submit')(form.values());
//     },

//     onError(form) {
//       action('Error')(form.errors());
//     },
//   });

// const votingModalPreview = new VotingModalPreview(votingModalStore);

// storiesOf('PopupModal - Molecule', module)
//   .add('PopupModal', () => (
//     <PopupModal
//       src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
//       alt="Empty Tree"
//       view={votingModalPreview}
//     />
//   ));