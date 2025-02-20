import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrincipalAffiliateForm from './Affiliated.section.tsx';
import DomicileForm from './AffiliateDomicile.section.tsx';
import textsAffiliate from '../constants/TextAffiliateForm.ts';
import textsDomicile from '../constants/TextDomicileForm.ts';

export default function MultiSectionForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <Box className='max-w-screen-lg mx-auto p-6'>
      <Typography variant='h4' className='mb-4 font-bold'>
        Formulario de Afiliación
      </Typography>

      <form onSubmit={handleSubmit}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>{textsAffiliate.info}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PrincipalAffiliateForm />
          </AccordionDetails>
        </Accordion>

        <Divider className='my-4' />

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>{textsDomicile.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DomicileForm />
          </AccordionDetails>
        </Accordion>

        <Box className='mt-6 flex justify-end'>
          <Button type='submit' variant='contained' color='primary'>
            Continuar
          </Button>
        </Box>
      </form>
    </Box>
  );
}
