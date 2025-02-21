import { Box, TextField, Typography } from '@mui/material';
import { personalData } from '../../constants/personalDataText';
import { useFormContext } from 'react-hook-form';
import CivilStatusField from '../fields/CivilStatusField';
import TypeIndentifyField from '../fields/TypeIndentifyField';
import TypeAffiliateField from '../fields/TypeAffiliateField';
import GenderField from '../fields/GenderField';
import NationalityField from '../fields/NacionalityField';
import OccupationField from '../fields/OccupationField';
const {
  texts: { title, description, field },
} = personalData;

export default function PersonalInfoSection() {
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
          label={field.firstName}
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.lastName}
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.rfc}
          {...register('rfc')}
          error={!!errors.rfc}
          helperText={errors.rfc?.message}
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label={field.curp}
          {...register('curp')}
          error={!!errors.curp}
          helperText={errors.curp?.message}
          variant='outlined'
          fullWidth
          required
        />
        <CivilStatusField />
        <TypeAffiliateField />
        <GenderField />
        <NationalityField />
        <TypeIndentifyField />
        <OccupationField />
      </Box>
    </Box>
  );
}
