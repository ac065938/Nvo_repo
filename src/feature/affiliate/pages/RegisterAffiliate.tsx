import { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { multiStepForm } from '../constants/MultiStepFormText';
import EmergencyContactForm from '../components/forms/EmergencyContactForm';
import AffiliateForm from '../components/forms/AffiliateForm';
import { MultiStepSchema } from '../schemas/MultiStepSchema.ts';
import { defaultValues } from '../schemas/DefaultValues.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { stepValidationField } from '../constants/StepValidatonField.ts';

export default function RegisterAffiliateSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = multiStepForm.steps;
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(MultiStepSchema),
  });
  const handleNext = async () => {
    const valid = await methods.trigger(stepValidationField[activeStep]);
    if (valid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log('printing...');
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
          {activeStep === 0 && <AffiliateForm />}
          {activeStep === 1 && <EmergencyContactForm />}
          {activeStep === 2 && (
            <Box>
              <Typography variant='h5' className='mb-4'>
                {multiStepForm.review.title}
              </Typography>
              <Typography variant='body1'>{multiStepForm.review.description}</Typography>
            </Box>
          )}

          <Box className='flex justify-between mt-4'>
            <Button disabled={activeStep === 0} onClick={handleBack} variant='outlined'>
              {multiStepForm.button.back}
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button type='submit' variant='contained' color='primary'>
                {multiStepForm.button.submit}
              </Button>
            ) : (
              <Button type='button' onClick={handleNext} variant='contained' color='primary'>
                {multiStepForm.button.next}
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
}
