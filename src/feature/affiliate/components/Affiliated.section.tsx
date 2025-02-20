import { Box, Typography, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import SelectedField from '../../../shared/components/SelectedField.tsx';
import texts from '../constants/TextAffiliateForm.ts';
import { DataPersonalType } from '../schemes/DataPersonalSchema.ts';

export default function PrincipalAffiliateSection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<DataPersonalType>();

  return (
    <Box className="mx-auto w-full p-6 bg-white">
      <Box className="mb-4">
        <Typography variant="h5" className="mb-2 font-bold">
          {texts.info}
        </Typography>
        <Typography variant="body2" className="mb-4">
          {texts.details}
        </Typography>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label={texts.name}
          variant="outlined"
          fullWidth
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message as string}
        />

        <TextField
          label={texts.lastName}
          variant="outlined"
          fullWidth
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message as string}
        />

        <TextField
          label={texts.date}
          variant="outlined"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          {...register('dateOfBirth')}
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth?.message as string}
        />

        <TextField
          label={texts.curp}
          variant="outlined"
          fullWidth
          {...register('curp')}
          error={!!errors.curp}
          helperText={errors.curp?.message as string}
        />

        <TextField
          label={texts.rfc}
          variant="outlined"
          fullWidth
          {...register('rfc')}
          error={!!errors.rfc}
          helperText={errors.rfc?.message as string}
        />

        <Controller
          name="civilStatus"
          control={control}
          render={({ field, fieldState }) => (
            <SelectedField
              id="civilStatus"
              label={texts.civilStatus.title}
              options={texts.civilStatus.options}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              
            />
          )}
        />

        <Controller
          name="affiliate.occupation"
          control={control}
          render={({ field, fieldState }) => (
            <SelectedField
              id="occupation"
              label={texts.ocupation.title}
              options={texts.ocupation.options}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message as string}
            />
          )}
        />

        <Controller
          name="affiliate.gender"
          control={control}
          render={({ field, fieldState }) => (
            <SelectedField
              id="gender"
              label={texts.gender.title}
              options={texts.gender.options}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message as string}
            />
          )}
        />

        <Controller
          name="affiliate.nationality"
          control={control}
          render={({ field, fieldState }) => (
            <SelectedField
              id="nationality"
              label={texts.nationality.title}
              options={texts.nationality.options}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message as string}
            />
          )}
        />

        <Controller
          name="affiliate.typeAffiliation"
          control={control}
          render={({ field, fieldState }) => (
            <SelectedField
              id="typeAffiliation"
              label={texts.typeAffiliation.title}
              options={texts.typeAffiliation.options}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message as string}
            />
          )}
        />

        <Controller
          name="affiliate.typeIdentification"
          control={control}
          render={({ field, fieldState }) => (
            <SelectedField
              id="typeIdentification"
              label={texts.typeIdentification.title}
              options={texts.typeIdentification.options}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message as string}
            />
          )}
        />

        <TextField
          label={texts.numberIdentification}
          variant="outlined"
          fullWidth
          {...register('numIdentification')}
          error={!!errors.numIdentification}
          helperText={errors.numIdentification?.message as string}
        />
      </Box>
    </Box>
  );
}
