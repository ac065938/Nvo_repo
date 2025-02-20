import { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import PrincipalAffiliatedForm from '../components/PrincipalAffiliated.form.tsx';
import UploadingDocuments from '../components/DocumentsUpload.form.tsx';
import EmergencyContactForm from '../components/EmergencyContact.form.tsx';
import MultiStepAffiliateSchema from '../schemes/MainSchema.ts';

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Registrar afiliado', 'Contacto de emergencia', 'Documentos', 'Finzalizar'];

  const methods = MultiStepAffiliateSchema();

  const handleNext = async () => {
    const valid = await methods.trigger();
    if (valid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', data);
  };

  return (
    <FormProvider {...methods}>
      <Box className='w-full mx-auto p-6  rounded-md shadow-md'>
        <Stepper activeStep={activeStep} className='sticky top-0 bg-white z-50 mb-4'>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {activeStep === 0 && <PrincipalAffiliatedForm />}
          {activeStep === 1 && <EmergencyContactForm />}
          {activeStep === 2 && <UploadingDocuments />}
          {activeStep === 3 && (
            <Box>
              <Typography variant='h5' className='mb-4'>
                Revisión
              </Typography>
              <Typography variant='body1'>Todos los campos se validaron correctamente.</Typography>
            </Box>
          )}

          <Box className='flex justify-between mt-4'>
            <Button disabled={activeStep === 0} onClick={handleBack} variant='outlined'>
              Atrás
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button type='submit' variant='contained' color='primary'>
                Enviar
              </Button>
            ) : (
              <Button type='button' onClick={handleNext} variant='contained' color='primary'>
                Siguiente
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
}
