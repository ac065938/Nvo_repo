import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Typography, TextField } from '@mui/material';
import textsDomocile from '../constants/TextDomicileForm.ts';
import textsAffiliate from '../constants/TextAffiliateForm.ts';
import SelectedField from '../../../shared/components/SelectedField.tsx';
import { useFormContext } from 'react-hook-form';
import { ContactEmergencyType } from '../schemes/ContactEmergencySchema.ts';

export default function EmergencyContactForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactEmergencyType>();
  const [kinshipStatus, setKinship] = useState('');
  const handleKinshipChange = (event: SelectChangeEvent<string>) => setKinship(event.target.value as string);
  return (
    <Box className='max-w-screen-lg mx-auto p-6 bg-white'>
      <Box className='mb-4'>
        <Typography variant='h5' className='mb-2 font-bold'>
          {textsDomocile.title}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {textsAffiliate.details}
        </Typography>
      </Box>

      <Box className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <TextField
          label={textsAffiliate.name}
          {...register('contactEmergencyName')}
          error={!!errors.contactEmergencyName}
          helperText={errors.contactEmergencyName?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsAffiliate.lastName}
          {...register('contactEmergencyLastName')}
          error={!!errors.contactEmergencyLastName}
          helperText={errors.contactEmergencyLastName?.message}
          variant='outlined'
          fullWidth
        />
        <SelectedField
          id='kinship'
          label={textsAffiliate.kinship.title}
          options={textsAffiliate.kinship.options}
          value={kinshipStatus}
          onChange={handleKinshipChange}
          required
        />
        <TextField
          label={textsDomocile.country}
          {...register('contactEmergencyCountry')}
          error={!!errors.contactEmergencyCountry}
          helperText={errors.contactEmergencyCountry?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.state}
          {...register('contactEmergencyState')}
          error={!!errors.contactEmergencyState}
          helperText={errors.contactEmergencyState?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.municipality}
          {...register('contactEmergencyMunicipality')}
          error={!!errors.contactEmergencyMunicipality}
          helperText={errors.contactEmergencyMunicipality?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.colony}
          {...register('contactEmergencyColony')}
          error={!!errors.contactEmergencyColony}
          helperText={errors.contactEmergencyColony?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.zipCode}
          {...register('contactEmergencyZipCode')}
          error={!!errors.contactEmergencyZipCode}
          helperText={errors.contactEmergencyZipCode?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.numInside}
          {...register('contactEmergencyNumInside')}
          error={!!errors.contactEmergencyNumInside}
          helperText={errors.contactEmergencyNumInside?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.numOutside}
          {...register('contactEmergencyNumOutside')}
          error={!!errors.contactEmergencyNumOutside}
          helperText={errors.contactEmergencyNumOutside?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={textsDomocile.address}
          {...register('contactEmergencyAddress')}
          error={!!errors.contactEmergencyAddress}
          helperText={errors.contactEmergencyAddress?.message}
          variant='outlined'
          fullWidth
        />
      </Box>
    </Box>
  );
}
