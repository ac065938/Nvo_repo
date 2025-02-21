import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

export interface Option {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  name: string;
  label: string;
  options: Option[];
  defaultValue?: string;
  fullWidth?: boolean;
}

export default function SelectField({
  name,
  label,
  options,
  defaultValue = '',
  fullWidth = true,
}: SelectFieldProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <FormControl fullWidth={fullWidth} variant='outlined' error={!!fieldState.error}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={name}
            label={label}
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
          >
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
