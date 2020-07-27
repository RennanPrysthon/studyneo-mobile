import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../pages/Cadastro';

const Stack = createStackNavigator();

const SignUp: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Cadastro"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Cadastro" component={Cadastro} />
  </Stack.Navigator>
);

export default SignUp;
