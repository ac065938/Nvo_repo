import SelectField from './SelectField';
import { personalData } from '../../constants/personalDataText';

export default function OccupationField() {
  const options = Object.values(personalData.options.occupation);
  return (
    <SelectField name='occupation' label={personalData.texts.field.occupation} options={options} />
  );
}
