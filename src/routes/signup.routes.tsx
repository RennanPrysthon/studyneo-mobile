import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import AppBottom from './bottom.routes';

const Stack = createStackNavigator();

const SignUp: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
  >
    <Stack.Screen name="Home" component={AppBottom} />
  </Stack.Navigator>
);

export default SignUp;
