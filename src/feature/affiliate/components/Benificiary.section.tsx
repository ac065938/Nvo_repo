import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedField from '../../../shared/components/SelectedField.tsx';
import texts from '../constants/TextAffiliateForm.ts';

export default function BeneficiarySection() {
  const [includeBeneficiary, setIncludeBeneficiary] = useState(false);
  const [kinship, setKinship] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeBeneficiary(event.target.checked);
  };

  const handleKinshipChange = (event: SelectChangeEvent<string>) => {
    setKinship(event.target.value as string);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={includeBeneficiary} onChange={handleCheckboxChange} color='primary' />}
        label={texts.optionalBeneficiary}
      />

      {includeBeneficiary && (
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>{texts.optionalBeneficiaryDetails}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <TextField label={texts.name} variant='outlined' fullWidth />
              <TextField label={texts.lastName} variant='outlined' fullWidth />
              <TextField
                label={texts.date}
                variant='outlined'
                type='date'
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

              <SelectedField
                id='kinship'
                label={texts.kinship.title}
                options={texts.kinship.options}
                value={kinship}
                onChange={handleKinshipChange}
                required
              />

              <TextField label={texts.email} type='tel' variant='outlined' fullWidth />
              <TextField label={texts.phone} type='tel' variant='outlined' fullWidth />
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
}
