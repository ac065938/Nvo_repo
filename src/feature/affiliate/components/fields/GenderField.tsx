import SelectField from './SelectField';
import { personalData } from '../../constants/personalDataText';

export default function GenderField() {
  const options = Object.values(personalData.options.gender);
  return (
    <SelectField name='gender' label={personalData.texts.field.gender} options={options} />
  );
}
