import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import AppBottom from './bottom.routes';

const AppDrawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <AppDrawer.Navigator
    initialRouteName="Home"
  >
    <AppDrawer.Screen name="Home" component={AppBottom} />
  </AppDrawer.Navigator>
);

export default AppRoutes;
