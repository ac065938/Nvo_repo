import { Box, Typography, Divider } from '@mui/material';
import PrincipalAffiliateSection from './Affiliated.section.tsx';
import DomicileSection from './AffiliateDomicile.section.tsx';
import textsAffiliate from '../constants/TextAffiliateForm.ts';
import textsDomicile from '../constants/TextDomicileForm.ts';
import BeneficiaryOptional from './Benificiary.section.tsx';
import AffiliadeComplementarySection from './AffiliatedComplementary.section.tsx';

export default function PrincipalAffiliatedForm() {
  return (
    <Box className='max-w-screen-lg mx-auto p-6'>
      <Typography variant='h4' className='mb-4 font-bold'>
        Formulario de Afiliación
      </Typography>

      <Divider className='my-4' />
      <Typography variant='h6'>{textsAffiliate.info}</Typography>
      <PrincipalAffiliateSection />
      <Divider className='my-4' />
      <Typography variant='h6'>{textsDomicile.title}</Typography>
      <DomicileSection />
      <Divider className='my-4' />

      {/*<BeneficiaryOptional />
      //<AffiliadeComplementarySection />*/}
    </Box>
  );
}
