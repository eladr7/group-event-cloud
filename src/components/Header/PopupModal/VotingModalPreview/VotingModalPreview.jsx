import React from 'react';
import { observer } from 'mobx-react';

import Form from '../../../GeneralAtoms/Form';
import Field from '../../../Login/molecules/Field';
import Button from '../../../GeneralAtoms/Button';

const VotingModalPreview = ({ form, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {form.map(field => (
      <Field
        key={field.id}
        label={field.label}
        error={field.error}
        {...field.bind()}
      />
    ))}

    <Button>Submit vote</Button>
  </Form>
);

export default observer(VotingModalPreview);
