import SelectField from './SelectField';
import { personalData } from '../../constants/personalDataText';

export default function NacionalityField() {
  const options = Object.values(personalData.options.nationality);
  return (
    <SelectField name='nationality' label={personalData.texts.field.nationality} options={options} />
  );
}
