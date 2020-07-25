import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import AppBottom from './bottom.routes';

const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
  >
    <Drawer.Screen name="Home" component={AppBottom} />
  </Drawer.Navigator>
);

export default AppRoutes;
