import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import texts from '../constants/TextSignIn.js';
import { loginSchema } from '../schemas/loginSchemas.js';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <Box className='min-h-screen flex items-center justify-center bg-gray-50'>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-sm p-6 bg-white rounded-md shadow-md gap-6'
      >
        <Typography variant='h5' className='font-bold'>
          {texts.title}
        </Typography>

        <TextField
          label={texts.email}
          variant='outlined'
          fullWidth
          required
          placeholder={texts.emailExample}
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ mt: 2 }}
        />

        <TextField
          label={texts.password}
          type={showPassword ? 'text' : 'password'}
          variant='outlined'
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ mt: 2 }}
        />

        <FormControlLabel control={<Checkbox color='primary' />} label={texts.remember} className='mb-4' />

        <Button type='submit' variant='contained' color='primary' fullWidth className='mb-2'>
          {texts.buttonSignIn}
        </Button>

        <Box className='text-center'>
          <Link href='#' underline='hover'>
            {texts.forgotPassword}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
