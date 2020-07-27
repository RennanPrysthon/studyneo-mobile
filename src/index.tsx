import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import { AuthProvider } from './contexts/auth';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#00B5E2" />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  )
}

export default App;
