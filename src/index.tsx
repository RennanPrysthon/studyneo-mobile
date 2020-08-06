import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FlashMessage from "react-native-flash-message";
import { AuthProvider } from './contexts/auth';
import { ThemesProvider } from './contexts/themes';

import Routes from './routes';

const App: React.FC = () => {
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
  )
}

export default App;
