import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import FlashMessage from 'react-native-flash-message';
import {AuthProvider} from './contexts/auth';
import {ThemesProvider} from './contexts/themes';

import Routes from './routes';
import {GoogleSignin} from '@react-native-community/google-signin';

const App: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '899085435916-scpt0i59vgtjoj6f9n991of7kvp41tce.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <ThemesProvider>
            <Routes />
          </ThemesProvider>
        </AuthProvider>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
