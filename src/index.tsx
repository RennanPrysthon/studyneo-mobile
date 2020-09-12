import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FlashMessage from 'react-native-flash-message';
import { GoogleSignin } from '@react-native-community/google-signin';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { AuthProvider } from './contexts/auth';
import { ThemesProvider } from './contexts/themes';
import { Banner } from '~/components/Ads';
import Routes from './routes';

const App: React.FC = () => {
  useEffect(() => {
    admob().setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    });
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
            <Banner />
          </ThemesProvider>
        </AuthProvider>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
