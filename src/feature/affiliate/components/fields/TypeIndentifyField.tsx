import SelectField from './SelectField';
import { personalData } from '../../constants/personalDataText';

export default function TypeIndentifyField() {
  const options = Object.values(personalData.options.typeIndentify);
  return (
    <SelectField name='typeIndentify' label={personalData.texts.field.typeIndentify} options={options} />
  );
}
