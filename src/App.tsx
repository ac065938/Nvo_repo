import { Route, Routes } from 'react-router-dom';

import SignInPage from './feature/login/pages/SignIn.tsx';
import RegisterPage from './feature/affiliate/pages/RegisterAffiliate.tsx';
import MultiSectionForm from './feature/affiliate/components/PrincipalAffiliated.form.tsx';

function app() {
  return (
    <Routes>
      <Route element={<SignInPage />} path='/login' />
      <Route element={<RegisterPage />} path='/register' />
      <Route element={<MultiSectionForm />} path='/' />
    </Routes>
  );
}

export default app;
