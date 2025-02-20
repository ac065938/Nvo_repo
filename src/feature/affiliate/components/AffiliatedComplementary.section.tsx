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
  const [nacionality, setNacionality] = useState('');
  const [gender, setGender] = useState('');
  const [ocupation, setOcupation] = useState('');
  const [civilStatus, setCivilStatus] = useState('');

  const handleNacionalityChange = (event: SelectChangeEvent<string>) =>
    setNacionality(event.target.value as string);

  const handleGenderChange = (event: SelectChangeEvent<string>) => setGender(event.target.value as string);

  const handleOcupationChange = (event: SelectChangeEvent<string>) =>
    setOcupation(event.target.value as string);

  const handleCivilStatusChange = (event: SelectChangeEvent<string>) =>
    setCivilStatus(event.target.value as string);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeBeneficiary(event.target.checked);
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
              <TextField label={texts.name} variant='outlined' />
              <TextField label={texts.lastName} variant='outlined' fullWidth />

              <TextField
                label={texts.date}
                variant='outlined'
                type='date'
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField label={texts.curp} variant='outlined' fullWidth />

              <TextField label={texts.rfc} variant='outlined' fullWidth />

              <SelectedField
                id='civilStatus'
                label={texts.civilStatus.title}
                options={texts.civilStatus.options}
                value={civilStatus}
                onChange={handleCivilStatusChange}
                required
              />

              <SelectedField
                id='ocupation'
                label={texts.ocupation.title}
                options={texts.ocupation.options}
                value={ocupation}
                onChange={handleOcupationChange}
                required
              />

              <SelectedField
                id='gender'
                label={texts.gender.title}
                options={texts.gender.options}
                value={gender}
                onChange={handleGenderChange}
                required
              />

              <SelectedField
                id='nationality'
                label={texts.nationality.title}
                options={texts.nationality.options}
                onChange={handleNacionalityChange}
                value={nacionality}
                required
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
}
