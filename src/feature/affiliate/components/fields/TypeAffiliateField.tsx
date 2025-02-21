import SelectField from './SelectField';
import { personalData } from '../../constants/personalDataText';

export default function TypeAffiliateField() {
  const options = Object.values(personalData.options.typeAffiliate);
  return (
    <SelectField name='typeAffiliate' label={personalData.texts.field.typeAffiliate} options={options} />
  );
}
