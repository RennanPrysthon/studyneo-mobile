import React from 'react';
import { StatusBar } from 'react-native';
import Login from './pages/Login';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#00B5E2" />
    <Login />
  </>
)

export default App;