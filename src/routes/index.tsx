import React, { useContext, useEffect } from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  useEffect(() => {

  }, [signed])

  if (loading) return <Loading />

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
