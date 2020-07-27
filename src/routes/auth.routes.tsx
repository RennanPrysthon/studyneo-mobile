import React from 'react';
import Login from '../pages/Login';

import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './signup.routes';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="SignIn" component={Login} />
    <AuthStack.Screen name="SignOn" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
