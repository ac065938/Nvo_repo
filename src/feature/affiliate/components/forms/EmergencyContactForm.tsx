import { Box, TextField, Typography } from '@mui/material';
import { domicileText } from '../../constants/domicileText.ts';
import { personalData } from '../../constants/personalDataText.ts';
import { useFormContext } from 'react-hook-form';
const {
  texts: { titleEmergency, descriptionEmergency, field: emergencyField },
} = domicileText;

const {
  texts: { field: personalField },
} = personalData;

export default function EmergencyContactForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box className='mx-auto w-full max-w-sm'>
      <Box>
        <Typography variant='h5' className='mb-4 font-bold'>
          {titleEmergency}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {descriptionEmergency}
        </Typography>
      </Box>
      <Box className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <TextField
          label={personalField.emergencyContactName}
          {...register('emergencyContact.name')}
          error={!!errors.emergencyContact?.name}
          helperText={errors.emergencyContact?.name?.message}
          fullWidth
          required
        />
        <TextField
          label={personalField.emergencyContactLastName}
          {...register('emergencyContact.lastName')}
          error={!!errors.emergencyContact?.lastName}
          helperText={errors.emergencyContact?.lastName?.message}
          fullWidth
          required
        />
        <TextField
          label={personalField.emergencyContactPhone}
          {...register('emergencyContact.phone')}
          error={!!errors.emergencyContact?.phone}
          helperText={errors.emergencyContact?.phone?.message}
          fullWidth
          required
        />
        <TextField
          label={personalField.emergencyContactEmail}
          {...register('emergencyContact.email')}
          error={!!errors.emergencyContact?.email}
          helperText={errors.emergencyContact?.email?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.state}
          {...register('emergencyContact.state')}
          error={!!errors.emergencyContact?.state}
          helperText={errors.emergencyContact?.state?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.municipality}
          {...register('emergencyContact.municipality')}
          error={!!errors.emergencyContact?.municipality}
          helperText={errors.emergencyContact?.municipality?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.colony}
          {...register('emergencyContact.colony')}
          error={!!errors.emergencyContact?.colony}
          helperText={errors.emergencyContact?.colony?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.zipCode}
          {...register('emergencyContact.zipCode')}
          error={!!errors.emergencyContact?.zipCode}
          helperText={errors.emergencyContact?.zipCode?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.numInside}
          {...register('emergencyContact.numInside')}
          error={!!errors.emergencyContact?.numInside}
          helperText={errors.emergencyContact?.numInside?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.numOutside}
          {...register('emergencyContact.numOutside')}
          error={!!errors.emergencyContact?.numOutside}
          helperText={errors.emergencyContact?.numOutside?.message}
          fullWidth
          required
        />
        <TextField
          label={emergencyField.country}
          {...register('emergencyContact.country')}
          error={!!errors.emergencyContact?.country}
          helperText={errors.emergencyContact?.country?.message}
          fullWidth
          required
        />
      </Box>
    </Box>
  );
}
