import { Box, Typography, TextField } from '@mui/material';
import texts from '../constants/TextDomicileForm.ts';
import { DomicileType } from '../schemes/DomicileSchema.ts';
import { useFormContext } from 'react-hook-form';

export default function DomicileSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<DomicileType>();
  return (
    <Box className='mx-auto w-full p-6 bg-white'>
      <Box className='mb-4'>
        <Typography variant='h5' className='mb-2 font-bold'>
          {texts.title}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {texts.details}
        </Typography>
      </Box>

      <Box className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <TextField
          label={texts.country}
          {...register('country')}
          error={!!errors.country}
          helperText={errors.country?.message}
          variant='outlined'
        />
        <TextField
          label={texts.state}
          {...register('state')}
          error={!!errors.state}
          helperText={errors.state?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={texts.municipality}
          {...register('municipality')}
          error={!!errors.municipality}
          helperText={errors.municipality?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={texts.colony}
          {...register('colony')}
          error={!!errors.colony}
          helperText={errors.colony?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={texts.zipCode}
          {...register('zipCode')}
          error={!!errors.zipCode}
          helperText={errors.zipCode?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={texts.numInside}
          {...register('numInside')}
          error={!!errors.numInside}
          helperText={errors.numInside?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={texts.numOutside}
          {...register('numOutside')}
          error={!!errors.numOutside}
          helperText={errors.numOutside?.message}
          variant='outlined'
          fullWidth
        />
        <TextField
          label={texts.address}
          {...register('address')}
          error={!!errors.address}
          helperText={errors.address?.message}
          variant='outlined'
          fullWidth
        />
      </Box>
    </Box>
  );
}
