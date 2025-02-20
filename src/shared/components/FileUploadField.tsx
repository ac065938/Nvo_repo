import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { SetStateAction } from 'react';
import texts from '../../feature/affiliate/constants/TextDocumentForm.js';

interface FileUploadFieldProps {
  label: string;
  value: File | null;
  setValue: React.Dispatch<SetStateAction<File | null>>;
  required?: boolean;
}

export default function FileUploadField({ label, value, setValue, required = false }: FileUploadFieldProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setValue(event.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setValue(null);
  };

  return (
    <Box>
      <Typography className='mb-1 font-medium'>
        {label} {required && '*'}
      </Typography>

      <Button variant='outlined' component='label'>
        {texts.selectFile}
        <input hidden type='file' accept='image/*,application/pdf' onChange={handleFileChange} />
      </Button>

      {value && (
        <Box className='mt-1 flex items-center space-x-2'>
          <Typography variant='body2'>{value.name}</Typography>
          <Button variant='text' color='error' size='small' onClick={handleRemoveFile}>
            {texts.deleteFile}
          </Button>
        </Box>
      )}
    </Box>
  );
}
