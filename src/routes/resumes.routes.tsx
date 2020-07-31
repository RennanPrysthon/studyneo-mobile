import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ResumeList from '../pages/ResumeList';

const Stack = createStackNavigator();

const ResumesRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="resumeList" component={ResumeList} />
  </Stack.Navigator>
)

export default ResumesRoutes;
