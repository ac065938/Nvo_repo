import { Box, TextField, Typography } from '@mui/material';
import { domicileText } from '../../constants/domicileText';
import { useFormContext } from 'react-hook-form';
const {
  texts: { title, description, field },
} = domicileText;

export default function DomicileSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Box className='mx-auto w-full max-w-sm'>
      <Box>
        <Typography variant='h5' className='mb-4 font-bold'>
          {title}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {description}
        </Typography>
      </Box>
      <Box className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <TextField
          label={field.country}
          {...register('domicile.country')}
          error={!!errors.domicile?.country}
          helperText={errors.domicile?.country?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.state}
          {...register('domicile.state')}
          error={!!errors.domicile?.state}
          helperText={errors.domicile?.state?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.municipality}
          {...register('domicile.municipality')}
          error={!!errors.domicile?.municipality}
          helperText={errors.domicile?.municipality?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.colony}
          {...register('domicile.colony')}
          error={!!errors.domicile?.colony}
          helperText={errors.domicile?.colony?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.zipCode}
          {...register('domicile.zipCode')}
          error={!!errors.domicile?.zipCode}
          helperText={errors.domicile?.zipCode?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.numInside}
          {...register('domicile.numInside')}
          error={!!errors.domicile?.numInside}
          helperText={errors.domicile?.numInside?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.numOutside}
          {...register('domicile.numOutside')}
          error={!!errors.domicile?.numOutside}
          helperText={errors.domicile?.numOutside?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.address}
          {...register('domicile.address')}
          error={!!errors.domicile?.address}
          helperText={errors.domicile?.address?.message}
          variant='outlined'
          fullWidth
          required
        />
      </Box>
    </Box>
  );
}
