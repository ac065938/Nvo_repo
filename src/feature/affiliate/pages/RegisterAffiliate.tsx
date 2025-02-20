import { useState } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography } from '@mui/material';
import PrincipalAffiliateForm from '../components/PrincipalAffiliated.form.tsx';
import DocumentsUploadForm from '../components/DocumentsUploadForm.tsx';
import EmergencyContactForm from '../components/EmergencyContact.form.tsx';

function getSteps() {
  return ['Afiliados', 'Contacto de emergencia', 'Documentos'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PrincipalAffiliateForm />;
    case 1:
      return <EmergencyContactForm/>;
    case 2:
      return <DocumentsUploadForm />;

    default:
      return 'Paso desconocido';
  }
}

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isFinished = activeStep === steps.length;

  return (
    <Box className='max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md'>
      <Typography variant='h4' className='mb-4 font-bold'>
        Formulario con Stepper
      </Typography>

      <Stepper activeStep={activeStep} className='mb-6'>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {!isFinished ? (
        <>
          <Box className='mb-6'>{getStepContent(activeStep)}</Box>

          <Box className='flex justify-between'>
            <Button disabled={activeStep === 0} onClick={handleBack} variant='outlined'>
              Atrás
            </Button>
            <Button onClick={handleNext} variant='contained' color='primary'>
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
            </Button>
          </Box>
        </>
      ) : (
        <Box className='text-center'>
          <Typography variant='h5' className='mb-4'>
            ¡Todos los pasos completados!
          </Typography>
          <Button variant='contained' color='primary'>
            Enviar / Confirmar
          </Button>
        </Box>
      )}
    </Box>
  );
}
