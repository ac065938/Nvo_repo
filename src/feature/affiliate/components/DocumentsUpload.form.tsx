import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FileUploadField from '../../../shared/components/FileUploadField.tsx';
import LicenseAffiliatedSection from './LicenseAffiliated.section.tsx';
import texts from '../constants/TextDocumentForm.js';

export default function DocumentUploadForm() {
  const [ineFront, setIneFront] = useState<File | null>(null);
  const [ineBack, setIneBack] = useState<File | null>(null);
  const [curp, setCurp] = useState<File | null>(null);
  const [taxCertificate, setTaxCertificate] = useState<File | null>(null);
  const [domicileProof, setDomicileProof] = useState<File | null>(null);

  return (
    <Box className='max-w-screen-lg mx-auto p-6 bg-white'>
      <Typography variant='h6' className='mb-4 font-bold'>
        {texts.conditions}
      </Typography>

      <Box className='flex flex-col gap-6'>
        <FileUploadField label={texts.INE} value={ineFront} setValue={setIneFront} required />

        <FileUploadField label={texts.INEBack} value={ineBack} setValue={setIneBack} required />

        <FileUploadField label={texts.CURP} value={curp} setValue={setCurp} required />

        <FileUploadField
          label={texts.taxCertificate}
          value={taxCertificate}
          setValue={setTaxCertificate}
          required
        />

        <FileUploadField
          label={texts.domicileProof}
          value={domicileProof}
          setValue={setDomicileProof}
          required
        />

        <LicenseAffiliatedSection />
      </Box>
    </Box>
  );
}
