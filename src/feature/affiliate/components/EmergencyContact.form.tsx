import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Typography, TextField, Button } from '@mui/material';
import textsDomocile from '../constants/TextDomicileForm.ts';
import textsAffiliate from '../constants/TextAffiliateForm.ts';
import SelectedField from '../../../shared/components/SelectedField.tsx';

export default function DomicileForm() {
  const [kinshipStatus, setKinship] = useState('');
  const handleKinshipChange = (event: SelectChangeEvent<string>) =>
    setKinship(event.target.value as string);
  return (
    <Box className='mx-auto w-full p-6 bg-white'>
      <Box className='mb-4'>
        <Typography variant='h5' className='mb-2 font-bold'>
          {textsDomocile.title}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {textsDomocile.details}
        </Typography>
      </Box>

      <Box component='form' noValidate autoComplete='off' className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <TextField label={textsAffiliate.name} variant='outlined' fullWidth />
        <TextField label={textsAffiliate.lastName} variant='outlined' fullWidth />
        <SelectedField
          id='kinship'
          label={textsAffiliate.kinship.title}
          options={textsAffiliate.kinship.options}
          value={kinshipStatus}
          onChange={handleKinshipChange}
          required
        />
        <TextField label={textsDomocile.country} variant='outlined' />
        <TextField label={textsDomocile.state} variant='outlined' fullWidth />
        <TextField label={textsDomocile.municipality} variant='outlined' fullWidth />
        <TextField label={textsDomocile.colony} variant='outlined' fullWidth />
        <TextField label={textsDomocile.zipCode} variant='outlined' fullWidth />
        <TextField label={textsDomocile.numInside} variant='outlined' fullWidth />
        <TextField label={textsDomocile.numOutside} variant='outlined' fullWidth />
        <TextField label={textsDomocile.address} variant='outlined' fullWidth />
      </Box>

      <Box className='mt-4 flex justify-end'>
        <Button variant='contained' color='primary'>
          Continuar
        </Button>
      </Box>
    </Box>
  );
}
