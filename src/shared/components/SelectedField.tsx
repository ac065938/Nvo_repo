import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
interface SelectedFieldProps {
  id: string;
  label: string;
  options: Record<string, string>;
  value: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  required?: boolean;
}

export default function SelectedField({ id, label, options, value, onChange, required }: SelectedFieldProps) {
  return (
    <FormControl fullWidth required={required}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select labelId={`${id}-label`} id={id} label={label} value={value} onChange={onChange}>
        {Object.entries(options).map(([key, optionLabel]) => (
          <MenuItem key={key} value={key}>
            {optionLabel}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
