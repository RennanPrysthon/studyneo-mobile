import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import Header from '../components/Header';
import BottomTabs from './home.routes';
import Resume from '../pages/Resume';

const Stack = createStackNavigator();

const AppBottom: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={BottomTabs} />
    <Stack.Screen name="resume" component={Resume} />
  </Stack.Navigator>
);

export default AppBottom;
