import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import FileUploadField from '../../../shared/components/FileUploadField.tsx';
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
import textsDocument from '../constants/TextDocumentForm.ts';
import { licenseSchema } from '../schemes/LicenseSchema.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type LicenseAffiliatedSectionProps = z.infer<typeof licenseSchema>;

export default function LicenseAffiliatedSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LicenseAffiliatedSectionProps>({
    resolver: zodResolver(licenseSchema),
  });

  const [license, setLicense] = useState<File | null>(null);
  const [includeLicense, setIncludeLicense] = useState(false);
  const [typeVehicle, setTypeVehicle] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeLicense(event.target.checked);
  };

  const handleTypeVehicleChange = (event: SelectChangeEvent<string>) => {
    setTypeVehicle(event.target.value as string);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={includeLicense} onChange={handleCheckboxChange} color='primary' />}
        label={textsDocument.licenseAffiliated.title}
      />
      {includeLicense && (
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>{textsDocument.licenseAffiliated.details}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FileUploadField
                label={textsDocument.licenseAffiliated.license}
                value={license}
                setValue={setLicense}
                required
              />

              <SelectedField
                id='typeVehicle'
                label={textsDocument.licenseAffiliated.typeVehicle}
                options={textsDocument.licenseAffiliated.typeVehicleOptions}
                value={typeVehicle}
                onChange={handleTypeVehicleChange}
                required
              />

              <TextField
                label={textsDocument.licenseAffiliated.mark}
                variant='outlined'
                {...register('mark')}
                error={!!errors.mark}
                helperText={errors.mark?.message}
                fullWidth
              />
              <TextField
                label={textsDocument.licenseAffiliated.typeLicense}
                variant='outlined'
                {...register('typeLicense')}
                error={!!errors.typeLicense}
                helperText={errors.typeLicense?.message}
                fullWidth
              />
              <TextField
                label={textsDocument.licenseAffiliated.numLicense}
                variant='outlined'
                {...register('numLicense')}
                error={!!errors.numLicense}
                helperText={errors.numLicense?.message}
                fullWidth
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
}
