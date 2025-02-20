import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import FileUploadField from '../../../shared/components/FileUploadField.tsx';
import texts from '../constants/TextDocumentForm.js';

export default function DocumentUploadForm() {
  const [ineFrontal, setIneFrontal] = useState<File | null>(null);
  const [ineTrasera, setIneTrasera] = useState<File | null>(null);
  const [curp, setCurp] = useState<File | null>(null);
  const [constanciaFiscal, setConstanciaFiscal] = useState<File | null>(null);
  const [comprobanteDomicilio, setComprobanteDomicilio] = useState<File | null>(null);

  const handleSubmit = () => {};

  return (
    <Box className='mx-auto max-w-full p-6 bg-white'>
      <Typography variant='h6' className='mb-4 font-bold'>
        {texts.conditions}
      </Typography>

      <Box className='flex flex-col gap-6'>
        <FileUploadField label={texts.INE} value={ineFrontal} setValue={setIneFrontal} required />

        <FileUploadField label={texts.INEBack} value={ineTrasera} setValue={setIneTrasera} required />

        <FileUploadField label={texts.CURP} value={curp} setValue={setCurp} required />

        <FileUploadField
          label={texts.taxCertificate}
          value={constanciaFiscal}
          setValue={setConstanciaFiscal}
          required
        />

        <FileUploadField
          label={texts.domicileProof}
          value={comprobanteDomicilio}
          setValue={setComprobanteDomicilio}
          required
        />
      </Box>

      <Box className='mt-6 flex justify-end'>
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          {texts.continue}
        </Button>
      </Box>
    </Box>
  );
}
