import React, { useContext, useEffect, useState } from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '~/contexts/auth';
import AppRoutes from './app.routes';

import Loading from '~/components/Loading';
import { ThemeProvider } from 'styled-components/native';

import { Dark, Light } from '~/styles';

import { StatusBar } from 'react-native';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(Light);

  if (loading) return <Loading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.primary} />
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </ThemeProvider>
  );
}

export default Routes;
