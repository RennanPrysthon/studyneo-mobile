import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import Header from '~/components/Header';

import Cadastro from '~/screens/Cadastro';
import Termos from '~/screens/Termos';
import Politica from '~/screens/Politica';

const Stack = createStackNavigator();

const SignUp: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation }) => <Header navigation={navigation} />
    }}
  >
    <Stack.Screen options={{ headerShown: false }} name="cadastro" component={Cadastro} />
    <Stack.Screen name="termos" component={Termos} />
    <Stack.Screen name="politica" component={Politica} />
  </Stack.Navigator>
);

export default SignUp;
