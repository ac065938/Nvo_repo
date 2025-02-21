import SelectField from './SelectField';
import { personalData } from '../../constants/personalDataText';

export default function CivilStatusField() {
  const options = Object.values(personalData.options.civilStatus);
  return (
    <SelectField name='civilStatus' label={personalData.texts.field.civilStatus} options={options} />
  );
}
