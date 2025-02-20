import { Box, Typography, TextField, Button } from '@mui/material';
import texts from '../constants/TextDomicileForm.ts';

export default function DomicileForm() {
  return (
    <Box className='mx-auto w-full p-6 bg-white'>
      <Box className='mb-4'>
        <Typography variant='h5' className='mb-2 font-bold'>
          {texts.title}
        </Typography>
        <Typography variant='body2' className='mb-4'>
          {texts.details}
        </Typography>
      </Box>

      <Box component='form' noValidate autoComplete='off' className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <TextField label={texts.country} variant='outlined' />
        <TextField label={texts.state} variant='outlined' fullWidth />
        <TextField label={texts.municipality} variant='outlined' fullWidth />
        <TextField label={texts.colony} variant='outlined' fullWidth />
        <TextField label={texts.zipCode} variant='outlined' fullWidth />
        <TextField label={texts.numInside} variant='outlined' fullWidth />
        <TextField label={texts.numOutside} variant='outlined' fullWidth />
        <TextField label={texts.address} variant='outlined' fullWidth />
      </Box>

      <Box className='mt-4 flex justify-end'>
        <Button variant='contained' color='primary'>
          Continuar
        </Button>
      </Box>
    </Box>
  );
}
