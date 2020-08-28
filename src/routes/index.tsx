import React, { useContext, useEffect, useState } from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '~/contexts/auth';
import AppRoutes from './app.routes';

import Loading from '~/components/Loading';
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'react-native';
import ThemeContext from '~/contexts/themes';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      {loading && <Loading />}
      {
        !loading && <>
          <StatusBar backgroundColor={theme.primary} />
          {signed ? <AppRoutes /> : <AuthRoutes />}
        </>
      }
    </ThemeProvider>
  );
}

export default Routes;
