import { Box, Typography, TextField, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import SelectedField from '../../../shared/components/SelectedField.tsx';
import texts from '../constants/TextAffiliateForm.ts';
import { useState } from 'react';

export default function PrincipalAffiliateForm() {
  const [nacionality, setNacionality] = useState('');
  const [gender, setGender] = useState('');
  const [ocupation, setOcupation] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [affiliateType, setAffiliateType] = useState('');
  const [identificationType, setIdentificationType] = useState('');

  const handleNacionalityChange = (event: SelectChangeEvent<string>) =>
    setNacionality(event.target.value as string);

  const handleGenderChange = (event: SelectChangeEvent<string>) => setGender(event.target.value as string);

  const handleOcupationChange = (event: SelectChangeEvent<string>) =>
    setOcupation(event.target.value as string);

  const handleCivilStatusChange = (event: SelectChangeEvent<string>) =>
    setCivilStatus(event.target.value as string);

  const handleAffiliateTypeChange = (event: SelectChangeEvent<string>) =>
    setAffiliateType(event.target.value as string);

  const handleIdentificationTypeChange = (event: SelectChangeEvent<string>) =>
    setIdentificationType(event.target.value as string);

  return (
    <Box className='mx-auto w-full p-6 bg-white'>
      <Box className='mb-4'>
        <Typography variant='h5' className='mb-2 font-bold'>
          {texts.info}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {texts.details}
        </Typography>
      </Box>

      <Box component='form' noValidate autoComplete='off' className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <TextField label={texts.name} variant='outlined' />
        <TextField label={texts.lastName} variant='outlined' fullWidth />

        <TextField
          label={texts.date}
          variant='outlined'
          type='date'
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField label={texts.curp} variant='outlined' fullWidth />

        <TextField label={texts.rfc} variant='outlined' fullWidth />

        <SelectedField
          id='civilStatus'
          label={texts.civilStatus.title}
          options={texts.civilStatus.options}
          value={civilStatus}
          onChange={handleCivilStatusChange}
          required
        />

        <SelectedField
          id='ocupation'
          label={texts.ocupation.title}
          options={texts.ocupation.options}
          value={ocupation}
          onChange={handleOcupationChange}
          required
        />

        <SelectedField
          id='gender'
          label={texts.gender.title}
          options={texts.gender.options}
          value={gender}
          onChange={handleGenderChange}
          required
        />

        <SelectedField
          id='nationality'
          label={texts.nationality.title}
          options={texts.nationality.options}
          onChange={handleNacionalityChange}
          value={nacionality}
          required
        />

        <SelectedField
          id='typeAffiliation'
          label={texts.typeAffiliation.title}
          options={texts.typeAffiliation.options}
          onChange={handleAffiliateTypeChange}
          value={affiliateType}
          required
        />
        <SelectedField
          id='typeIdentification'
          label={texts.typeIdentification.title}
          options={texts.typeIdentification.options}
          onChange={handleIdentificationTypeChange}
          value={identificationType}
          required
        />
        <TextField label={texts.numberIdentification} variant='outlined' fullWidth />
      </Box>

      <Box className='mt-4 flex justify-end'>
        <Button variant='contained' color='primary'>
          Continuar
        </Button>
      </Box>
    </Box>
  );
}
