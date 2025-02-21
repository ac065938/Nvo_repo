import { Box, Divider } from '@mui/material';
import PersonalInfoSection from '../sections/PersonalInfoSection';
import DomicileSection from '../sections/DomicileSection';

export default function AffiliateForm() {
  return (
    <Box>
      <PersonalInfoSection />
      <Divider className='my-4' />
      <DomicileSection />
    </Box>
  );
}
