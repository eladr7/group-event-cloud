import Form from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

const plugins = { dvr: dvr(validatorjs) };

const fields = [
  {
    name: 'name',
    label: 'Performer name',
    type: 'text',
    rules: 'required|string|string|between:5,25',
  },
  {
    name: 'score',
    label: 'Score',
    type: 'number',
    rules: 'required|number|between:5,25',
  },
];

const options = {
  validateOnChange: true,
  validateOnBlur: false,
  validateOnInit: false,
};

export default new Form({ fields }, { plugins, options });
