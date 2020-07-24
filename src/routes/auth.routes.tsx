import React from 'react';
import Login from '../pages/Login';

import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="SignIn" component={Login} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
